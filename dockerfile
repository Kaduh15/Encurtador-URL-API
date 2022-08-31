FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN cp src/files/DB.json.exemplo src/files/DB.json

EXPOSE 3000

ENTRYPOINT [ "npm" ]
CMD [ "start" ]