FROM node:current-alpine

LABEL org.opencontainers.image.title = "Home Stays" \
        org.opencontainers.image.description = "Home Stays  web application to select rooms" \
        org.opencontainers.image.authors = "Shashank" \

 RUN mkdir -p /usr/src/app 
 
 COPY . /usr/src/app

 WORKDIR /usr/src/app

 RUN npm install

 EXPOSE 3000

 CMD ["npm", "start"]


