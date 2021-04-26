
FROM node:15.12-alpine

WORKDIR /usr/src/app/api

RUN npm install -g npm@latest

RUN npm install faker

RUN npm install -g json-server

EXPOSE 3000

CMD ["json-server", "--watch", "-H", "0.0.0.0", "mock/index.js"]