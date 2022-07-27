# Start with fully-featured Node.js base image
FROM node AS build

USER node
WORKDIR /home/node/app

# Copy dependency information and install all dependencies
COPY --chown=node:node package.json yarn.lock ./

RUN yarn install --frozen-lockfile

# Copy source code (and all other relevant files)
COPY --chown=node:node src ./src
COPY --chown=node:node tsoa.json ./tsoa.json
COPY --chown=node:node tsconfig.json ./tsconfig.json

# Build code
RUN yarn build

# Run-time stage
FROM node:alpine

# Set non-root user and expose port 8080
USER node
EXPOSE 8080

WORKDIR /home/node/app

# Copy dependency information and install production-only dependencies
COPY --chown=node:node package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production

# Copy results from previous stage
COPY --chown=node:node --from=build /home/node/app/build ./build

RUN mkdir temp

CMD ["yarn", "start"]