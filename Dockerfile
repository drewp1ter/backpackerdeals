ARG APP_ROOT=/app

FROM node:10
ARG APP_ROOT
ENV NODE_ENV=production
WORKDIR ${APP_ROOT}
ENV PATH ${APP_ROOT}/node_modules/.bin:$PATH
COPY *.json yarn.lock ./
RUN yarn
COPY .env* .babelrc next.config.js server.js ./
COPY static ./static
COPY pages ./pages
COPY interfaces ./interfaces
COPY src ./src
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]