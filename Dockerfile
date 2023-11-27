FROM node:18.17.0-alpine3.18

RUN mkdir /app
WORKDIR /app

COPY . .

RUN npm ci --omit=dev

CMD [ "node", "server.js" ]