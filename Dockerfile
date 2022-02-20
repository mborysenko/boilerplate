FROM ubuntu:latest

USER application

RUN mkdir ~/boilerplate

COPY . ~/boilerplate
WORKDIR ~/boilerplate

RUN wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash \
        && export NVM_DIR="$HOME/.nvm" \
        && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" --install
RUN apt-get install -y yarn
RUN yarn install

CMD yarn run start
