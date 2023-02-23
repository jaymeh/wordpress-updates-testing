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

# Update Languages $1 = TYPE (plugin or theme.)
update_languages() {
    php wp-cli.phar language $1 update --all
}

# Update Plugins.
UPDATE_COMMAND=$(php wp-cli.phar plugin update --all --format=json)
TYPE='plugin'
DIRECTORY=$PLUGIN_DIRECTORY
TOTAL_ROWS=$(echo $UPDATE_COMMAND | jq length)

update_extensions "$TOTAL_ROWS" "$UPDATE_COMMAND" "$TYPE" "$DIRECTORY"

# Update ACF Pro.
if [ $UPDATE_ACF_PRO == true ]; then
    # Download Zip File
    acf_zip_file="$(php wp-cli.phar plugin path)/acf-pro.zip"
    $(wget -O ${acf_zip_file} "https://connect.advancedcustomfields.com/v2/plugins/download?p=pro&k=${ACF_PRO_KEY}")

    # Extract Zip file.
    current_folder="$(pwd)"
    cd $(php wp-cli.phar plugin path)
    unzip -o ${acf_zip_file}
    rm ${acf_zip_file}
    cd ${current_folder}

    # Add all changes to git.
    git add $(php wp-cli.phar plugin path)
    git commit -m "Updated ACF Pro."
fi

# Update Themes.
UPDATE_COMMAND=$(php wp-cli.phar theme update --all --format=json)
TYPE='theme'
DIRECTORY=$THEME_DIRECTORY
TOTAL_ROWS=$(echo $UPDATE_COMMAND | jq length)

update_extensions "$TOTAL_ROWS" "$UPDATE_COMMAND" "$TYPE" "$DIRECTORY"

# Update Core
CURRENT_VERSION=$(php wp-cli.phar core version)
NEW_VERSION=$(php wp-cli.phar core check-update --format=json | jq -r ".[0].version")
php wp-cli.phar core update
rm wp-cli.phar
git add .
git commit -m "Update WordPress Core from $CURRENT_VERSION to $NEW_VERSION."

# Update Languages/Translations for all types.
php wp-cli.phar language core update
if [ $UPDATE_LANGUAGES == true ]; then
    update_languages "plugin"
    update_languages "theme"
fi