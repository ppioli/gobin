FROM node:latest as BUILD_CLIENT

ENV NODE_ENV=production

WORKDIR /app
# copy configs to /app folder
COPY package.json ./
# copy source code to /app/src folder
RUN yarn
#TODO skip copying android/ios stuff
RUN ls -a
COPY . .
#build the project
RUN yarn run build

FROM node:latest
RUN yarn global add serve --host 0.0.0.0
ENV PATH="$(yarn global bin):${PATH}"
COPY --from=BUILD_CLIENT /app/build .
EXPOSE 5000
ENTRYPOINT serve .
