FROM node:alpine
MAINTAINER Wisdman <wisdman@ajaw.it>

COPY ./dist/back /app
RUN chmod +x /app/main.js

EXPOSE 80

WORKDIR /app
CMD ["/app/main.js"]
