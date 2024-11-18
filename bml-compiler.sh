#!/bin/bash

usage(){
    echo "Usage: $0 <input_file>"
    exit 1
}

if [ $# -ne 1 ]
then
    usage
fi

INPUT_FILE="$1"

BML_CAP=$(cat << EOS
javascript:(function(){
EOS
)

BML_TAIL=$(cat << EOS
})();
EOS
)

NO_NEWLINE_STR=$(tr -d '\n' < "${INPUT_FILE}")
NO_INDENT_STR=$(echo $NO_NEWLINE_STR | sed -e 's/    [ ]*//g')

echo "${BML_CAP}${NO_INDENT_STR}${BML_TAIL}"
