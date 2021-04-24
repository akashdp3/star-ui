#!/bin/bash

# Ask for Module name
MODULE_NAME=$1

FOLDER_NAME=`echo $MODULE_NAME        \
     | sed 's/\(.\)\([A-Z]\)/\1-\2/g' \
     | tr '[:upper:]' '[:lower:]'`

echo "Creating Module and its sub-folders"

mkdir -p packages/docs/src/js/modules/$FOLDER_NAME/{components,constants,context,services,utilities}

echo "Module and it's sub-folders are created"
echo "Creating Module context"

./shellscripts/createContext.sh ${MODULE_NAME} ${FOLDER_NAME}

echo "Module context created"
