FROM node:10-alpine

# Create app directory
WORKDIR /usr/src/app/

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN npm install -g sequelize-cli
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# ENV NODE_ENV=staging
ENV NODE_ENV=production
#ENV NODE_ENV=development

EXPOSE 9120

CMD [ "node", "server.js" ]
