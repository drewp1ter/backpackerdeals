ARG APP_ROOT=/app

FROM mhart/alpine-node:12
ARG APP_ROOT
ENV NODE_ENV=production
WORKDIR ${APP_ROOT}
RUN apk add --no-cache \
        g++ \
        gcc \
        make \
        imagemagick-dev \
        jpeg-dev \
        zlib-dev \
        libc-dev \
        libevent-dev \
        libffi-dev \
        libpng-dev \
        libtool \
        libwebp-dev \
        libxml2-dev \
        libxslt-dev
ENV PATH ${APP_ROOT}/node_modules/.bin:$PATH
COPY *.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build
RUN rm -rf ./src ./pages ./interfaces ./.next/static

EXPOSE 3000
CMD ["yarn", "start"]