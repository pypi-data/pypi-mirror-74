#! /usr/bin/env python
# -*- coding: utf-8 -*-

from flask import request
from flask_login import current_user
from flask_restx import Namespace, Resource, fields, reqparse, abort
from flask_restx.inputs import date_from_iso8601
from datetime import date
from dateutil.relativedelta import relativedelta

import statsservice.lib.processors
from statsservice.bootstrap import db
from statsservice.models import Stats, Client
from statsservice.api.v1.common import auth_func, uuid_type


stats_ns = Namespace("stats", description="stats related operations")


# Argument Parsing
parser = reqparse.RequestParser()
parser.add_argument("anr", type=uuid_type, help="The ANR UUID related to this stats.")
parser.add_argument(
    "type",
    type=str,
    help="The type of the stats.",
    required=True,
    choices=("risk", "vulnerability", "threat", "cartography", "compliance"),
)
parser.add_argument(
    "aggregation_period",
    type=str,
    help="The period of the stats aggregation.",
    required=False,
    choices=("day", "week", "month", "quarter", "year"),
)
parser.add_argument(
    "group_by_anr",
    type=int,
    help="If the result should be grouped by anr or not.",
    required=False,
    default=1,
    choices=(0, 1),
)
parser.add_argument(
    "date_from",
    type=date_from_iso8601,
    required=False,
    help="The date of the stats must be bigger or equal than this value.",
)
parser.add_argument(
    "date_to",
    type=date_from_iso8601,
    required=False,
    help="The date of the stats must be smaller or equal than this value.",
)
parser.add_argument(
    "offset", type=int, required=False, default=0, help="Start position"
)
parser.add_argument(
    "limit", type=int, required=False, default=0, help="Limit of records"
)


# Response marshalling
stats = stats_ns.model(
    "Stats",
    {
        "uuid": fields.String(readonly=True, description="The stats unique identifier"),
        "anr": fields.String(description="The ANR UUID related to this stats."),
        "type": fields.String(
            description="The type of this stats (risk, vulnerability, threat, cartography or compliance)."
        ),
        "date": fields.Date(description="The stats date in format 'Y-m-d'"),
        "data": fields.Raw(description="The stats as a dynamic JSON object."),
    },
)

metadata = stats_ns.model(
    "metadata",
    {
        "count": fields.String(
            readonly=True, description="Total number of the items of the data."
        ),
        "offset": fields.String(
            readonly=True,
            description="Position of the first element of the data from the total data amount.",
        ),
        "limit": fields.String(readonly=True, description="Requested limit data."),
    },
)

stats_list_fields = stats_ns.model(
    "StatsList",
    {
        "metadata": fields.Nested(
            metadata, description="Metada related to the result."
        ),
        "data": fields.List(fields.Nested(stats), description="List of stats objects."),
    },
)


@stats_ns.route("/")
class StatsList(Resource):
    """Shows a list of all the stats, and lets you POST to add new stats"""

    @stats_ns.doc("list_stats")
    @stats_ns.expect(parser)
    @stats_ns.marshal_list_with(stats_list_fields)
    @stats_ns.response(401, "Authorization needed")
    @auth_func
    def get(self):
        """List all stats"""
        args = parser.parse_args(strict=True)
        limit = args.get("limit", 0)
        offset = args.get("offset", 0)
        type = args.get("type")
        aggregation_period = args.get("aggregation_period")
        group_by_anr = args.get("group_by_anr")
        date_from = args.get("date_from")
        date_to = args.get("date_to")
        if date_from is None:
            date_from = (date.today() + relativedelta(months=-3)).strftime("%Y-%m-%d")
        if date_to is None:
            date_to = date.today().strftime("%Y-%m-%d")

        result = {
            "data": [],
            "metadata": {"count": 0, "offset": offset, "limit": limit},
        }

        try:
            query = Stats.query

            if not current_user.is_admin():
                query = query.filter(Stats.client_id == current_user.id)

            query = Stats.query.filter(
                Stats.type == type, Stats.date >= date_from, Stats.date <= date_to,
            )

            if aggregation_period is None and limit > 0:
                query = query.limit(limit)
                results = query.offset(offset)
            else:
                results = query.all()

                if aggregation_period is not None:
                    try:
                        results = getattr(
                            statsservice.lib.processors, "process_" + type
                        )(results, aggregation_period, group_by_anr)
                        if limit > 0:
                            results = results[offset, limit]
                    except AttributeError:
                        abort(
                            500,
                            Error="There is no processor defined for the type '"
                            + type
                            + "'.",
                        )

        except Exception as e:
            abort(500, Error=e)

        result["data"] = results
        result["metadata"]["count"] = len(results)

        return result, 200

    @stats_ns.doc("create_stats")
    @stats_ns.expect([stats])
    @stats_ns.marshal_with(stats, code=201)
    @stats_ns.response(401, "Authorization needed")
    @auth_func
    def post(self):
        """Create a new stats"""
        news_stats = []
        for stats in stats_ns.payload:
            news_stats.append(Stats(**stats, client_id=current_user.id))
        db.session.bulk_save_objects(news_stats)
        db.session.commit()
        return {}, 204


@stats_ns.route("/<string:anr>")
@stats_ns.response(404, "Stats not found")
@stats_ns.param("uuid", "The stats identifier")
class StatsItem(Resource):
    """Show the stats items by anr resource and lets you delete it"""

    @stats_ns.doc("get_stats")
    @stats_ns.marshal_with(stats)
    @auth_func
    def get(self, anr):
        """Fetch a given resource by anr"""

        return Stats.query.filter(Stats.anr == anr).all(), 200

    @stats_ns.doc("delete_stats")
    @stats_ns.response(204, "Stats deleted")
    @auth_func
    def delete(self, anr):
        """Delete stats by provided anr"""

        try:
            Stats.objects(anr__exact=anr).delete()
            return "", 204
        except:
            abort(500, Error="Impossible to delete the stats.")
