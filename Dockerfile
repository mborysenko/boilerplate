FROM ubuntu:latest

RUN sudo apt update
RUN sudo apt upgrade
RUN sudo apt install curl

RUN sudo adduser application

USER application

RUN mkdir ~/boilerplate
COPY . ~/boilerplate
WORKDIR ~/boilerplate

RUN curl -o https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash \
        && export NVM_DIR="$HOME/.nvm" \
        && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" --install
RUN sudo apt install -y yarn
RUN yarn install

CMD yarn run start
