#!/usr/bin/env python3
import numpy as np
import pandas as pd

from parlai_internal.mturk.tasks.pairwise_dialogue_eval.run import main as run_main, make_flags

ORIGINAL_CSV = '/private/home/margaretli/Batch_3462988_batch_results.csv'

df = pd.read_csv(ORIGINAL_CSV)

repl_data_dict = {}
repl_data = []

#This number gets changed between runs to change the question
RUN_NUMBER = 9
QUESTIONS = [
    {
        's1_choice': '<Speaker 1> is more interesting',
        's2_choice': '<Speaker 2> is more interesting',
        'question': 'If you had to say one of these speakers is interesting and one is boring, who would you say is more interesting?'
    },
    {
        's1_choice': '<Speaker 1> is more interesting',
        's2_choice': '<Speaker 2> is more interesting',
        'question': 'Which speaker is more interesting to talk to?'
    },
    {
        's1_choice': '<Speaker 1> is more boring',
        's2_choice': '<Speaker 2> is more boring',
        'question': 'Which speaker is more boring to talk to?'
    },
    {
        's1_choice': '<Speaker 1> is more fun',
        's2_choice': '<Speaker 2> is more fun',
        'question': 'Who would you rather talk to for fun?'
    },
    {
        's1_choice': '<Speaker 1> is more engaging',
        's2_choice': '<Speaker 2> is more engaging',
        'question': 'Which speaker is more engaging to talk to?'
    },
    {
        's1_choice': 'I would prefer to talk to <Speaker 1>',
        's2_choice': 'I would prefer to talk to <Speaker 2>',
        'question': 'Who would you prefer to talk to for a long conversation?'
    },
    {
        's1_choice': '<Speaker 1> is more captivating than Speaker 2',
        's2_choice': '<Speaker 2> is more captivating than Speaker 1',
        'question': 'Which speaker do you think is more captivating?'
    },
    {
        's1_choice': '<Speaker 1> sounds more human',
        's2_choice': '<Speaker 2> sounds more human',
        'question': 'Which speaker sounds more human?'
    },
    {
        's1_choice': '<Speaker 1> sounds human',
        's2_choice': '<Speaker 2> sounds human',
        'question': 'If you had to guess that one speaker is human and one is a bot, which do you think is human?'
    },
    {
        's1_choice': '<Speaker 1> sounds more like a real person',
        's2_choice': '<Speaker 2> sounds more like a real person',
        'question': 'Which speaker sounds more like a real person?'
    },
]


def set_args():
    for n, row in df.iterrows():
        id1, id2, hitid, matchup = row['Input.id1'], row['Input.id2'], row['HITId'], row['Input.matchup']
        if matchup in ['intbfw4'] and not hitid in repl_data_dict:
            repl_data_dict[hitid] = (id1, id2, matchup)

    for hitid in repl_data_dict:
        (id1, id2, matchup) = repl_data_dict[hitid]
        repl_data.append((id1, id2, hitid, matchup))

    args = make_flags()
    args['repl_data'] = repl_data[:50]
    args['tasks_per_pair'] = 3
    args['dialogs_path'] = '/private/home/margaretli/ParlAI/data/controllable_dialog'
    args['reward'] = 0.5
    args['block_on_onboarding'] = False
    #Handpicked onboarding task
    args['onboarding_tasks'] = [('3O6CYIULEEO2JKV0S749CPE7OXXWUV', '3GS6S824SRKPOUBRV6SNYUMDED4WNP', 'qual1')]
    args['num_conversations'] = 40
    args['max_hits_per_worker'] = 30
    args['s1_choice'] = QUESTIONS[RUN_NUMBER]['s1_choice']
    args['s2_choice'] = QUESTIONS[RUN_NUMBER]['s2_choice']
    args['question'] = QUESTIONS[RUN_NUMBER]['question']
    args['block_qualification'] = 'pairwise_dialogue_block_20190517_debug_run'
    args['task_description'] = {'num_subtasks': 5, 'question': args['question']}
    args['assignment_duration_in_seconds'] = 600
    args['is_sandbox'] = False
    return args

if __name__ == '__main__':
    args = set_args()
    run_main(args)
