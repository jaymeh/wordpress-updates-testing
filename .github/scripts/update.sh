#!/bin/bash

# Create update file.
file=update-report.md
touch ${file}

echo '' >> .gitignore
echo '# Ignore Updates Versions file.' >> .gitignore
echo $file >> .gitignore
git add .gitignore
git commit -m 'Prevent version output from being added to repository.'

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
            echo - Updated $3 ${NAME^} from $VERSION to $UPDATED_VERSION.$'\n' >> ${file}
            git add $PLUGIN_PATH/*
            git commit -m "Updated $3 ${NAME^} from $VERSION to $UPDATED_VERSION."
        fi
    done
}

# Update Languages $1 = TYPE (plugin or theme.)
update_languages() {
    php wp-cli.phar language $1 update --all
}

# Prevent committing the WP CLI File.
echo '' >> .gitignore
echo '# Ignore WP CLI file.' >> .gitignore
echo 'wp-cli.phar' >> .gitignore
git add .gitignore
git commit -m 'Prevent wp-cli.phar script from being added to repository.'

# Update Plugins.
UPDATE_COMMAND=$(php wp-cli.phar plugin update --all --format=json)
TYPE='plugin'
DIRECTORY=$PLUGIN_DIRECTORY
TOTAL_ROWS=$(echo $UPDATE_COMMAND | jq length)

if [ $TOTAL_ROWS -gt 0 ]; then
    echo "## Plugins"$'\n' >> ${file}
    update_extensions "$TOTAL_ROWS" "$UPDATE_COMMAND" "$TYPE" "$DIRECTORY"
    echo "" >> ${file}
fi

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
    git add $(php wp-cli.phar plugin path) || true
    git commit -m "Updated ACF Pro." || true

    echo "- ACF Pro"$'\n' >> ${file}

    echo "" >> ${file}
fi

# Update Themes.
UPDATE_COMMAND=$(php wp-cli.phar theme update --all --format=json)
TYPE='theme'
DIRECTORY=$THEME_DIRECTORY
TOTAL_ROWS=$(echo $UPDATE_COMMAND | jq length)

if [ $TOTAL_ROWS -gt 0 ]; then
    echo "## Themes" >> ${file}
    update_extensions "$TOTAL_ROWS" "$UPDATE_COMMAND" "$TYPE" "$DIRECTORY"
    echo "$'\n'"$'\n' >> ${file}
fi

# Update Core
CURRENT_VERSION=$(php wp-cli.phar core version)
NEW_VERSION=$(php wp-cli.phar core check-update --format=json | jq -r ".[0].version")
if [$CURRENT_VERSION -ne $NEW_VERSION]; then
    echo "## Core"$'\n' >> ${file}
    php wp-cli.phar core update
    git add . || true
    git commit -m "Updates WordPress Core from $CURRENT_VERSION to $NEW_VERSION." || true

    echo "- Updated WordPress Core from $CURRENT_VERSION to $NEW_VERSION."$'\n' >> ${file}
    echo "" >> ${file}
fi

# Update Languages/Translations for all types.
php wp-cli.phar language core update
if [ $UPDATE_LANGUAGES == true ]; then
    echo "## Translations" >> ${file}
    update_languages "plugin"
    update_languages "theme"
    git add $LANGUAGE_DIRECTORY || true
    git commit -m "Updates Translations and Languages for plugins, themes and core." || true
fi