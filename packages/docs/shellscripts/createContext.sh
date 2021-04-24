#!/bin/sh

#define parameters which are passed in.
CONTEXT_NAME=$1
FOLDER_NAME=$2

CONTEXT_TEMPLATE="./shellscripts/templates/context-template.jsx"
REDUCER_TEMPLATE="./shellscripts/templates/reducer-template.js"

REDUCER_NAME=`echo ${CONTEXT_NAME:0:1} | tr '[A-Z]' '[a-z]'`${CONTEXT_NAME:1}

cat $CONTEXT_TEMPLATE | sed -e s/REDUCER_NAME/$REDUCER_NAME/g -e s/CONTEXT_NAME/$CONTEXT_NAME/g >> ./src/js/modules/$FOLDER_NAME/context/$REDUCER_NAME.context.jsx

cat $REDUCER_TEMPLATE | sed -e s/REDUCER_NAME/$REDUCER_NAME/g -e s/CONTEXT_NAME/$CONTEXT_NAME/g >> ./src/js/modules/$FOLDER_NAME/context/$REDUCER_NAME.reducer.js

touch ./src/js/modules/$FOLDER_NAME/context/$REDUCER_NAME.actions.js
