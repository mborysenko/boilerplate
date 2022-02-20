FROM node:16.14.0

RUN mkdir /usr/boilerplate

COPY . /usr/boilerplate

WORKDIR /usr/boilerplate
RUN npm install gulp-cli -g
RUN npm install

CMD npm run-script start
