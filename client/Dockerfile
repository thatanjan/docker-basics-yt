FROM node:18-alpine

# Working directory
WORKDIR /client

COPY package*.json .

RUN npm install

COPY . .

# EXPOSE 3000

# CMD [ "node" , "src/index.js" ]
CMD ["yarn", "dev"]
