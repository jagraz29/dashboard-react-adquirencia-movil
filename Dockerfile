FROM node:14-alpine AS builder

WORKDIR /usr/src/app

#ADD https://github.com/DataDog/dd-trace-php/releases/download/0.51.0/datadog-php-tracer_0.51.0_amd64.deb .
#RUN dpkg -i datadog-php-tracer_0.51.0_amd64.deb

COPY assets assets
COPY package.json webpack.config.js yarn.lock ./

ARG APP_ENV=prod
ARG APP_WARMUP=true
ARG APP_DEBUG=1
ARG URL_S3_IMAGES=https://multimedia.epayco.co
ARG REACT_APP_AMAZON_URL=https://multimedia.epayco.co

RUN mkdir public && yarn install && yarn build

FROM php:7.4-apache

RUN apt-get update && apt-get install -y unzip \
    && apt-get autoremove -y \
    && rm -r /var/lib/apt/lists/*

COPY --from=mlocati/php-extension-installer /usr/bin/install-php-extensions /usr/bin/
RUN install-php-extensions gd zip

WORKDIR /var/www/app

COPY . .

COPY --from=composer:1.10 /usr/bin/composer /usr/bin/composer

#RUN touch .env

RUN composer install --prefer-dist --no-dev --no-progress --no-suggest --no-ansi --no-interaction \
    && composer clear-cache

COPY --from=builder /usr/src/app/public/build public/build
COPY docker/000-default.conf /etc/apache2/sites-enabled/000-default.conf
COPY docker/app.conf /etc/apache2/conf-enabled/z-app.conf
COPY docker/app.ini $PHP_INI_DIR/conf.d/app.ini

COPY docker/docker-php-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-php-entrypoint.sh

RUN a2enmod headers rewrite