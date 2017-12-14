FROM nginx:stable-alpine
MAINTAINER Wisdman <wisdman@ajaw.it>

RUN rm -Rf /etc/nginx \
 && mkdir -p /etc/nginx \
 && mkdir -p /www \
 && mkdir -p /www-cache \
 && apk add --no-cache --virtual .build-deps openssl \
 && openssl dhparam -out /etc/nginx/dhparam.pem 2048 \
 && apk del .build-deps

COPY nginx.conf /etc/nginx/nginx.conf
COPY fullchain.pem /etc/nginx/fullchain.pem
COPY privkey.pem /etc/nginx/privkey.pem

VOLUME /www
EXPOSE 80 443
STOPSIGNAL SIGTERM

CMD ["nginx"]
