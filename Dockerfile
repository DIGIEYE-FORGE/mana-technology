FROM node:20-alpine3.18 as builder

WORKDIR /build

RUN npm install pnpm -g

COPY package*json pnpm*.yaml ./

RUN pnpm install 

COPY . .

RUN pnpm build

FROM node:20-alpine3.18 as production

WORKDIR /app

RUN npm install serve -g

COPY --from=builder --chown=node:node /build/dist ./dist

EXPOSE 8080

USER node

CMD ["serve", "-s", "dist" , "-l", "tcp://0.0.0.0:8080"]