ARG APP_ROOT=/app

FROM node:12
ARG APP_ROOT
ENV NODE_ENV=production

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
RUN rm -rf ./src ./pages ./interfaces ./.next/static

EXPOSE 3000
CMD ["yarn", "start"]