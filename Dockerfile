ARG APP_ROOT=/app

FROM node:latest AS builder
ARG APP_ROOT

WORKDIR /usr/local/webp
RUN wget https://storage.googleapis.com/downloads.webmproject.org/releases/webp/libwebp-0.6.1-linux-x86-64.tar.gz \
 && tar xfvz libwebp-0.6.1-linux-x86-64.tar.gz
ENV PATH $PATH:/usr/local/webp/libwebp-0.6.1-linux-x86-64/bin
RUN cwebp -h

WORKDIR ${APP_ROOT}
ENV PATH ${APP_ROOT}/node_modules/.bin:$PATH
COPY *.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build
RUN yarn webpconv
RUN yarn purgecss

FROM mhart/alpine-node:base
ARG APP_ROOT
WORKDIR ${APP_ROOT}
COPY --from=builder ${APP_ROOT} .
EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "server.js"]