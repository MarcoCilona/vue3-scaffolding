# Starting frontend serve #

FROM node:15.12-alpine

WORKDIR /usr/src/app/frontend

COPY package*.json ./

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "serve"]