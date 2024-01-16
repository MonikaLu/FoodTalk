# Specify the base image. Tag behind colon
FROM node:21
WORKDIR /usr/app
COPY ./package.json ./
RUN npm install
COPY ./ ./
CMD ["npm", "start"]