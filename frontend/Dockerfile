FROM madnificent/ember:2.14.0 as ember

MAINTAINER Esteban Sastre <esteban.sastre@tenforce.com>

COPY . /app
RUN npm install && \
    npm rebuild node-sass && \
    ember build --prod

FROM nginx:1
RUN ln -s /usr/share/nginx/html /app
COPY --from=ember /app/dist /app
