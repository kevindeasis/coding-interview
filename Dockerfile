FROM ubuntu:16.04

#update package
RUN apt-get -y update

RUN apt-get install -y nodejs npm nodejs-legacy

# Create app directory
RUN mkdir -p /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN cd /usr/src/app/ && npm install

# Bundle app source
COPY . /usr/src/app

WORKDIR /usr/src/app


EXPOSE 8080
CMD [ "npm", "start" ]