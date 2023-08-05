# Before optimized
# Base level(OS)
# FROM node:18-alpine
#
# # Working directory
# WORKDIR /server
#
# COPY . .
#
# RUN npm install
#
# # EXPOSE 3000
#
# # CMD [ "node" , "src/index.js" ]
# CMD ["yarn", "dev"]


# after optimized
# Base level(OS)
FROM node:18-alpine


# Working directory
WORKDIR /server

COPY package*.json .

RUN npm install

COPY . .

# EXPOSE 3000

# CMD [ "node" , "src/index.js" ]
CMD ["yarn", "dev"]
