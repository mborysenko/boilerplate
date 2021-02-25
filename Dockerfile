FROM node:8

RUN mkdir /usr/boilerplate

COPY . /usr/boilerplate

WORKDIR /usr/boilerplate
RUN npm install gulp-cli -g
RUN npm install

CMD npm run-script start
