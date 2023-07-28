#!/bin/bash
if [ -d "/home/coder/project/workspace/springapp/" ]
then
    echo "project folder present"
    # checking for src folder
    if [ -d "/home/coder/project/workspace/springapp/src/" ]
    then
        cp -r /home/coder/project/workspace/junit/test /home/coder/project/workspace/springapp/src/;
    cd /home/coder/project/workspace/springapp/ || exit;
    mvn clean test;
    else
        echo "testGetProjectAll FAILED";
        echo "testGetProjectById FAILED";
        echo "testGetTaskAll FAILED";
        echo "testGetTaskById FAILED";
        echo "testGetTaskByProjectId FAILED";
        echo "test_case1 FAILED";
        echo "test_case2 FAILED";
        echo "test_case3 FAILED";
   
    fi
else   
   
        echo "testGetProjectAll FAILED";
        echo "testGetProjectById FAILED";
        echo "testGetTaskAll FAILED";
        echo "testGetTaskById FAILED";
        echo "testGetTaskByProjectId FAILED";
        echo "test_case1 FAILED";
        echo "test_case2 FAILED";
        echo "test_case3 FAILED";
fi