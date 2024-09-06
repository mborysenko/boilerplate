FROM node:20.17.0-alpine as base

RUN apk update
RUN apk add --no-cache bash

SHELL ["/bin/bash", "-l", "-c"]

RUN addgroup -S application
RUN adduser --disabled-password -h /home/application application -G application

FROM base as build

ARG DHAMPIR_REGISTRY_SERVER
ARG DHAMPIR_PUBLISH_REGISTRY
ARG DHAMPIR_PUBLISH_TOKEN

ENV DHAMPIR_REGISTRY_SERVER=$DHAMPIR_REGISTRY_SERVER
ENV DHAMPIR_PUBLISH_REGISTRY=$DHAMPIR_PUBLISH_REGISTRY
ENV DHAMPIR_PUBLISH_TOKEN=$DHAMPIR_PUBLISH_TOKEN

RUN mkdir boilerplate

COPY . /boilerplate
WORKDIR /boilerplate

RUN npm install -g corepack
RUN yarn set version berry
RUN yarn install
RUN yarn cache clean


FROM build AS runtime
USER application
WORKDIR /home/application

COPY --chown=application:application --from=build /boilerplate/ ./
CMD yarn run start
