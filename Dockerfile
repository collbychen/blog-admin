FROM node:15.5.0-alpine3.10

RUN mkdir -p /server
COPY . /server
WORKDIR /server

ENV HOST 0.0.0.0
ENV PORT 3100
EXPOSE 3100

RUN mkdir -p /usr/src/app/node-sass
COPY ./binding.node /usr/src/app/node-sass
ENV SASS_BINARY_PATH /usr/src/app/node-sass/binding.node

RUN npm install
ENTRYPOINT ["npm", "run"]
CMD ["serve"]
