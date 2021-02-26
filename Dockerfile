FROM node:12

WORKDIR /usr/app

COPY package*.json ./

RUN npm install
# RUN npm ci --only=production
COPY . .

EXPOSE 3333
CMD ["npm", "start"]