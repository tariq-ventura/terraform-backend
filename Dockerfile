FROM node:16.7.1

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "test"]
