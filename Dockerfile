FROM node:22-alpine

WORKDIR /app

COPY . .

RUN apk add --no-cache git tini sqlite

RUN npm install
RUN npx prisma generate
RUN npm rebuild better-sqlite3

EXPOSE 5480 5481

ENV VITE_DOCKER_MODE=true
ENV PORT=5480
ENV DEV_API_SERVER_PORT=5481

COPY scripts/dev.sh /dev.sh
COPY scripts/prod.sh /prod.sh
RUN chmod +x /dev.sh /prod.sh

ENTRYPOINT ["/sbin/tini", "--"]

CMD ["/dev.sh"]
