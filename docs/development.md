# 開発方法

## 環境準備

node 20.0 以上のため最新バージョンを取得できるようにリポジトリを追加してインストール

```
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## プロジェクト初期構築時

kottster のプロジェクトを追加

```
npx @kottster/cli@latest new astack
cd astack
```

## プロジェクト起動

wsl2 から直接実行

```
npm run dev
```

## ライブラリインストール

```
npm install
```

## Prisma 初期化

```
npx prisma init
```

schema.prisma の output 行を削除

```
npx prisma migrate dev --name init
npx prisma generate
npx prisma db seed
npx prisma studio
```

## ユニットテスト

```
npx vitest
or
npx vitest run
```

## github

git remote set-url origin https://ユーザ名:アクセストークン@github.com/ユーザ名/リポジトリ名.git

## docker

```
docker build -t astack-app .
docker run -d --name astack-app -p 5480:5480 -p 5481:5481 -v $(pwd):/app -v /app/node_modules astack-app
docker ps
docker logs astack-app
docker exec -it astack-app /dev.sh
docker exec -it astack-app /prod.sh
docker stop astack-app
docker rm astack-app
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)
```
