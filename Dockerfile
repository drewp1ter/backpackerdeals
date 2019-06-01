ARG APP_ROOT=/app

FROM node:10
ARG APP_ROOT
ENV NODE_ENV=production
WORKDIR ${APP_ROOT}
ENV PATH ${APP_ROOT}/node_modules/.bin:$PATH
COPY *.json yarn.lock .babelrc next.config.js server.js ./
RUN yarn
COPY static ./static
COPY pages ./pages
COPY interfaces ./interfaces
COPY src ./src
COPY .env* ./
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]