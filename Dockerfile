#FROM oven/bun:1 as build-stage
#WORKDIR /usr/src/app

#COPY . . 
#RUN bun install 
#RUN bun run build


FROM nginx
COPY storybook-static /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
# run the app
EXPOSE 3000

