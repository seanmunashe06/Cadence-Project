FROM nginx:stable-alpine

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY charts/prod /usr/share/nginx/html

EXPOSE 80
