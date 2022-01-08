# image base
FROM node:alpine

WORKDIR /usr/app
# dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# commands
CMD ["npm","start"]