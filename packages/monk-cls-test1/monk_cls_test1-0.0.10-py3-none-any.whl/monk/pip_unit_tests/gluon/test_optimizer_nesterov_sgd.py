import os
import sys

import psutil

from monk.gluon_prototype import prototype
from monk.compare_prototype import compare
from common import print_start
from common import print_status


def test_optimizer_nesterov_sgd(system_dict):
    forward = True;

    test = "test_optimizer_nesterov_sgd";
    system_dict["total_tests"] += 1;
    print_start(test, system_dict["total_tests"])
    if(forward):
        try:
            gtf = prototype(verbose=0);
            gtf.Prototype("sample-project-1", "sample-experiment-1");
            gtf.Default(dataset_path="../../system_check_tests/datasets/dataset_cats_dogs_train", 
                model_name="resnet18_v1", freeze_base_network=True, num_epochs=2);
            gtf.optimizer_nesterov_sgd(0.01, momentum=0.9, weight_decay=0.0001, momentum_dampening_rate=0, 
            	clipnorm=1.0, clipvalue=0.5);
            gtf.Train();
            system_dict["successful_tests"] += 1;
            print_status("Pass");
        except Exception as e:
            system_dict["failed_tests_exceptions"].append(e);
            system_dict["failed_tests_lists"].append(test);
            forward = False;
            print_status("Fail");
    else:
        system_dict["skipped_tests_lists"].append(test);
        print_status("Skipped");

    return system_dict
