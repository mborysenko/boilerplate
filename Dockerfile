FROM ubuntu:latest

RUN apt update
RUN apt upgrade
RUN apt install curl

RUN adduser application

USER application

RUN mkdir ~/boilerplate
COPY . ~/boilerplate
WORKDIR ~/boilerplate

RUN curl -o https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash \
        && export NVM_DIR="$HOME/.nvm" \
        && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" --install
RUN apt install -y yarn
RUN yarn install

CMD yarn run start
