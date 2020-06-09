FROM node:lts-alpine

ADD package.json /app/
WORKDIR /app
RUN yarn install

ADD . /app

ENV HOST 0.0.0.0
