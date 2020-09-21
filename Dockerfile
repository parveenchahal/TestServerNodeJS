FROM nginx:1.19.0-alpine
RUN apk update
RUN mkdir /app
COPY nginx.conf /etc/nginx
COPY startup.sh /app
COPY http_server.js /app
COPY server.js /app
WORKDIR /app
RUN apk add --update nodejs npm
RUN npm install express
RUN npm install thread-sleep
RUN apk add wget
RUN apk add jq
EXPOSE 80 443
RUN chmod +x startup.sh
CMD ["./startup.sh"]