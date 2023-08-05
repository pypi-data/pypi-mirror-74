#!/usr/bin/env python3
import numpy as np
import pandas as pd

from parlai_internal.mturk.tasks.pairwise_dialogue_eval.run import main as run_main, make_flags

#This number gets changed between runs to change the question
RUN_NUMBER = 0
QUESTIONS = [
    {
        's1_choice': '<Speaker 1> is more knowledgeable',
        's2_choice': '<Speaker 2> is more knowledgeable',
        'question': 'If you had to say that one speaker is more knowledgeable and one is more ignorant, who is more knowledgeable?'
    },
    {
        's1_choice': 'I would prefer to talk to <Speaker 1>',
        's2_choice': 'I would prefer to talk to <Speaker 2>',
        'question': 'Who would you prefer to talk to for a long conversation?'
    },

]


def set_args():
    args = make_flags()
    args['tasks_per_pair'] = 3
    args['dialogs_path'] = '/private/home/margaretli/ParlAI/data/wizard_eval_json_unseen'
    args['num_pairs'] = 44
    args['model_comparison'] = 'wizard_hierarchical,wizard_retrieval_interactive'
    args['reward'] = 0.5
    args['block_on_onboarding'] = False
    #Handpicked onboarding task GenericWizardGeneratorAgent, human
    args['onboarding_tasks'] = [('3AAPLD8UCD45MHLMX3SZ6QIIX3JHTI', '3D8YOU6S9F74P5GU1PR5EVFU7VNU6I', 'qual1')]
    args['num_conversations'] = 40  # number of hits
    args['max_hits_per_worker'] = 9
    args['s1_choice'] = QUESTIONS[RUN_NUMBER]['s1_choice']
    args['s2_choice'] = QUESTIONS[RUN_NUMBER]['s2_choice']
    args['question'] = QUESTIONS[RUN_NUMBER]['question']
    args['block_qualification'] = 'pairwise_dialogue_block_20190517_debug_run'
    args['task_description'] = {'num_subtasks': 5, 'question': args['question']}
    args['assignment_duration_in_seconds'] = 600
    args['seed'] = 42
    args['is_sandbox'] = False
    return args

if __name__ == '__main__':
    args = set_args()
    run_main(args)
