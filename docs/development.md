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
```

## ユニットテスト

```
npx vitest
or
npx vitest run
```
