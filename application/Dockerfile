# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:alpine AS base
WORKDIR /app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS dev-installer
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

from base as prod-installer
# install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json bun.lock /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS builder
COPY --from=dev-installer /temp/dev/node_modules node_modules
COPY . .

# build
ENV NODE_ENV=production
RUN bun --bun run build

# copy production dependencies and source code into final image
FROM nginx:stable-alpine AS release

# copy next.js files
COPY --from=builder /app/out /var/www/out
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000/tcp
CMD ["nginx", "-g", "daemon off;"]