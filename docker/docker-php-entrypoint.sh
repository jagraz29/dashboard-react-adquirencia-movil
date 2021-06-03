#!/bin/sh
set -e

# first arg is `-f` or `--some-option`
if [ "${1#-}" != "$1" ]; then
	set -- apache2-foreground "$@"
fi

PHP_INI_RECOMMENDED="$PHP_INI_DIR/php.ini-production"

if [ "$APP_ENV" != 'prod' ]; then
    PHP_INI_RECOMMENDED="$PHP_INI_DIR/php.ini-development"
fi

ln -sf "$PHP_INI_RECOMMENDED" "$PHP_INI_DIR/php.ini"

if [ "$APP_ENV" != 'prod' ]; then
    composer install --prefer-dist --no-progress --no-suggest --no-ansi --no-interaction
else
    # composer install run on docker build time
    composer run-script --no-dev post-install-cmd
fi

setfacl -dR -m u:www-data:rwX -m u:root:rwX var
setfacl -R -m u:www-data:rwX -m u:root:rwX var

exec "$@"
