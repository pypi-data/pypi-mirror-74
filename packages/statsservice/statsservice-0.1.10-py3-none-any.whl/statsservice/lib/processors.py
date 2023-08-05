#! /usr/bin/env python
# -*- coding: utf-8 -*-

#
# Utilities to process data for the different kind of stats (threat, risk, etc.).
#

from collections import defaultdict

import pandas as pd
from statsservice.lib.utils import groups_threats


def process_threat(threats_stats, aggregation_period, group_by_anr):
    """Launch the process for stats of type threat."""
    grouped_threats = groups_threats(threats_stats)
    frames = defaultdict(list)

    for anr_uuid in grouped_threats:
        print("Averages for ANR (for threats): {}".format(anr_uuid))
        for threat_uuid, stats in grouped_threats[anr_uuid].items():
            frames[threat_uuid].append(stats)
            df = pd.DataFrame(stats)
            result = dict(df.mean())
            if True:  # threat_uuid == 'b402d4e0-4576-11e9-9173-0800277f0571':
                print("{} : {}".format(threat_uuid, result))
        print()


def process_risk(risks_stats, aggregation_period, group_by_anr):
    if group_by_anr == 0:
        # TODO: group the results for all the anrs and calculate the average.
        aggregated_data = defaultdict(list)

        return aggregated_data
    # TODO: we will see later with the evolution graph requests,
    # if we need to perform aggregation per week, month etc.

    return risks_stats
