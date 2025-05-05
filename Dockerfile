FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY index.html /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/

EXPOSE 9090
EXPOSE 80

RUN chmod 755 /usr/share/nginx/html/index.html
RUN chmod 755 /usr/share/nginx/html/app.js
RUN chmod 755 /usr/share/nginx/html/style.css