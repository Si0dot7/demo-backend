FROM node:20-alpine

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start:prod", "--host=0.0.0.0"] 