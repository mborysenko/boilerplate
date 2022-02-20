FROM debian:stable
SHELL ["/bin/bash", "-l", "-c"]

ARG PASSWORD=de12miurg

USER root
RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install -y curl
RUN apt-get install -y yarn

RUN useradd application -p $PASSWORD -d /home/application
RUN chown application:application /home/application

USER application
WORKDIR /home/application

RUN ls -la
RUN mkdir boilerplate

COPY . ./boilerplate
WORKDIR ./boilerplate

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash \
        && export NVM_DIR="$HOME/.nvm" \
        && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" --install

RUN which yarn
RUN yarn install

CMD yarn run start
