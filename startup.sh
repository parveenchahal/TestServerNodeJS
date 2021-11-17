openssl req -x509 -newkey rsa:4096 -keyout /etc/ssl/parkuma.key -out /etc/ssl/parkuma.crt -days 365 -config parkuma-cert.conf -extensions 'v3_req' -passout pass:abcxyz
openssl rsa -in /etc/ssl/parkuma.key -out /etc/ssl/parkuma.key -passin pass:abcxyz

nginx

node server.js 200 1 4000 &

node http_server.js
