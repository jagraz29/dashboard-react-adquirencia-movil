FROM php:7.4-apache AS base

WORKDIR /var/www/app

#ADD https://github.com/DataDog/dd-trace-php/releases/download/0.51.0/datadog-php-tracer_0.51.0_amd64.deb .
#RUN dpkg -i datadog-php-tracer_0.51.0_amd64.deb

RUN apt-get update && apt-get install -y unzip \
    && apt-get autoremove -y \
    && rm -r /var/lib/apt/lists/*

COPY --from=mlocati/php-extension-installer /usr/bin/install-php-extensions /usr/bin/
RUN install-php-extensions gd

COPY . .

ARG APP_ENV=prod
ARG APP_WARMUP=true

COPY --from=composer:1.10 /usr/bin/composer /usr/bin/composer

RUN composer install --prefer-dist --no-dev --no-progress --no-suggest --no-ansi --no-interaction \
    && composer clear-cache

FROM node:14-alpine AS builder

WORKDIR /usr/src/app

COPY --from=base /var/www/app/assets assets
COPY --from=base /var/www/app/public public
COPY --from=base /var/www/app/package.json /var/www/app/webpack.config.js /var/www/app/yarn.lock ./

RUN yarn install && yarn build

FROM base

COPY --from=builder /usr/src/app/public/build public/build

COPY docker/000-default.conf /etc/apache2/sites-enabled/
COPY docker/app.conf /etc/apache2/conf-enabled/z-app.conf
COPY docker/app.ini $PHP_INI_DIR/conf.d/app.ini

COPY docker/docker-php-entrypoint /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-php-entrypoint

RUN a2enmod headers rewrite