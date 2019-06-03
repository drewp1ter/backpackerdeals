ARG APP_ROOT=/app

FROM mhart/alpine-node
ARG APP_ROOT
ENV NODE_ENV=production
WORKDIR ${APP_ROOT}
ENV PATH ${APP_ROOT}/node_modules/.bin:$PATH
COPY *.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build
RUN rm -rf ./src ./pages ./interfaces

EXPOSE 3000
CMD ["yarn", "start"]