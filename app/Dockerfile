FROM node:18-alpine

RUN mkdir -p

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . /app/

COPY  . /app/.env

COPY ./db /app/db

ADD default.sql /docker-entrypoint-initdb.d/default.sql

CMD ["node", "index.js", "mysqld_safe"]

