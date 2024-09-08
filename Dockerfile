FROM node:20.17.0-alpine AS base

RUN apk update && apk upgrade
RUN apk add --no-cache bash

SHELL ["/bin/bash", "-l", "-c"]

RUN addgroup -S application
RUN adduser --disabled-password -h /home/application application -G application

RUN corepack enable

FROM base AS build

ARG DHAMPIR_NPM_REGISTRY
ENV DHAMPIR_NPM_REGISTRY=$DHAMPIR_NPM_REGISTRY

RUN mkdir boilerplate
COPY . /boilerplate
WORKDIR /boilerplate

RUN --mount=type=secret,id=DHAMPIR_NPM_ACCESS_TOKEN \
    export DHAMPIR_NPM_ACCESS_TOKEN=$(cat /run/secrets/DHAMPIR_NPM_ACCESS_TOKEN) && yarn install && yarn build

FROM build AS runtime
USER application
WORKDIR /home/application

COPY --chown=application:application --from=build /boilerplate/ ./

EXPOSE 9090

CMD yarn run start
