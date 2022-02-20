FROM ubuntu:latest

RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install -y curl

RUN adduser application

USER application

RUN mkdir ~/boilerplate
COPY . ~/boilerplate
WORKDIR ~/boilerplate

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash \
        && export NVM_DIR="$HOME/.nvm" \
        && echo 'export NVM_DIR="$HOME/.nvm"' >> $BASH_ENV \
        && echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" --install' >> $BASH_ENV \
        && source $BASH_ENV \

RUN sudo apt-get install -y yarn
RUN yarn install

CMD yarn run start
