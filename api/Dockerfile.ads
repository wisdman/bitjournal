FROM node:carbon-alpine
MAINTAINER Wisdman <wisdman@ajaw.it>

COPY ./dist/ads.js /app/ads.js
RUN chmod +x /app/ads.js

EXPOSE 80
WORKDIR /app

CMD ["/app/ads.js"]
