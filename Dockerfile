# Node.js + SQLite + Prisma + Vite + Vitest 用 Dockerfile
FROM node:20-slim

WORKDIR /astack-app


# プロジェクト全体を一括コピー（.dockerignoreで不要ファイル除外）
COPY . .

RUN npm install

EXPOSE 5480

CMD ["bash"]
