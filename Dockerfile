FROM debian:stable
SHELL ["/bin/bash", "-l", "-c"]

ARG PASSWORD=de12miurg

USER root
RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install -y curl
RUN apt-get install -y gnupg2
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" >> /etc/apt/sources.list.d/yarn.list
RUN apt-get install -y yarn

RUN useradd application -p $PASSWORD -d /home/application -m

USER application
WORKDIR /home/application

RUN ls -la
RUN mkdir boilerplate

COPY . ./boilerplate
WORKDIR ./boilerplate

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash \
        && export NVM_DIR="$HOME/.nvm" \
        && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" --install

RUN yarn --version
RUN yarn install

CMD yarn run start
