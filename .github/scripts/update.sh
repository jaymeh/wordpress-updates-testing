#!/bin/bash

# Update Items $1 = TOTAL_ROWS, $2 = COMMAND, $3 = TYPE (plugin, theme, language, core), $4 = DIRECTORY.
update_extensions() {
    for (( c=0; c<=$1 - 1; c++ ))
    do
        VERSION=$(echo $2 | jq -r ".[${c}].old_version")
        UPDATED_VERSION=$(echo $2 | jq -r ".[$c].new_version")
        NAME=$(echo $2 | jq -r ".[$c].name")
        STATUS=$(echo $2 | jq -r ".[$c].status")
        PLUGIN_PATH="$4/$NAME"

        if [ $STATUS == 'Updated' ]; then
            git add $PLUGIN_PATH/*
            git commit -m "Updated $3 ${NAME^} from $VERSION to $UPDATED_VERSION."
        fi
    done
}

# Update Plugins.
UPDATE_COMMAND=$(php wp-cli.phar plugin update --all --format=json)
TYPE='plugin'
DIRECTORY=wp-content/plugins
TOTAL_ROWS=$(echo $UPDATE_COMMAND | jq length)

update_extensions "$TOTAL_ROWS" "$UPDATE_COMMAND" "$TYPE" "$DIRECTORY"

# Update Themes.
UPDATE_COMMAND=$(php wp-cli.phar theme update --all --format=json)
TYPE='theme'
DIRECTORY=wp-content/themes
TOTAL_ROWS=$(echo $UPDATE_COMMAND | jq length)

update_extensions "$TOTAL_ROWS" "$UPDATE_COMMAND" "$TYPE" "$DIRECTORY"

# TODO: Update Core

# TODO: Update Languages/Translations for all types.