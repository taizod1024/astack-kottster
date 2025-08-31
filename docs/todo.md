# タスク

## 優先度高

- [x] sqlite 対応
- [x] prisma 対応
- [x] ユニットテスト対応
- [ ] docker 化
- [ ] docker-compose.yml 化
- [ ] .env 化
- [ ] github copilot 指示
- [ ] コミット時は基本的に chore
- [ ] astack-adminjs のタスクの再取り込み
- [ ] デバッグ方法
- [ ] コミット戦略
- [ ] postgres 対応

---

# astack-adminjs

# タスク

## 今後の TODO

### 基盤構築

#### 優先度高

- [x] Docker 環境構築
- [x] postgresql セットアップ
- [x] 設定値の.env 化
- [x] Node.js/TypeScript 初期化
- [x] Prisma セットアップ
- [x] docker-compose.yml を dev と prod に分ける
- [x] デバッグ実行対応
- [x] Express 実装
- [x] Express 実装テスト
- [x] テストコード作成
- [x] Prisma 設定追加
- [x] Prisma スキーマ設計
- [x] AdminJS ログイン画面実装
- [x] User テーブル追加
- [x] RestAPI 実装
- [x] 開発コンテナ拡張機能インストール
- [x] 開発中は docker-compose.yml を使用
- [ ] コンテナ階層化によるカスタマイズ
  - [x] システム構成案
- [x] DB カラム追加時の挙動確認・対処方法確認
  - Prisma のスキーマが AdminJS に反映されない場合で対応済み
- [x] ルートパス変更
- [x] 文言変更
- [ ] ログ管理
- [ ] 運用管理
- [ ] UI
  - [ ] サイドバー表示
  - [ ] タブ表示
  - [ ] ダッシュボード表示

#### 優先度中

- [x] 開発コンテナを立ち上げても http://localhost:3000/adminjs にアクセスできない場合
  - `.devcontainer/docker-compose.yml`の command が sleep infinity になっていることが原因
- [x] Prisma のスキーマが AdminJS に反映されない場合
  - AdminJS は node_modules/@prisma/client を参照している模様。そのため schema.prisma の output を指定してはスキーマの変更を反映できない。
  - 正しい手順は ①schema.prisma を修正、②npx prisma migration dev を実行、③npx prisma generate を実行、④ コンテナを再起動
- [x] AdminJS が起動しない場合
  - 開発コンテナを立ち上げても http://localhost:3000/adminjs にアクセスできない場合と同じ
- [x] 操作していると root:root に代わってしまう。
  - 修正方法は`sudo chown -R taizo:taizo *`
  - 開発コンテナ起動時に root で npm install されている可能性あり
  - `devcontainer.json`の remoteUser を修正して`node`で編集するように修正
- [x] AdminJS のプロファイルが表示されない場合
  - rootpath を/astrack に変更するとプロファイルボタンが表示されない。/admin にすると表示されるので
  - [x] /astrack にしてもプロファイルボタンを表示するようにする
- [x] ubuntu 上で code で vscode を起動できない
  - https://x.com/taizod1024/status/1956516299796025695

#### 優先度低

- [ ] RestAPI 自動生成
- [ ] AdminJS メニュー画面実装
- [x] AdminJS 文言カスタマイズ
- [ ] Prisma マイグレーション確認
- [ ] Prisma 暗号化
- [ ] Prisma レプリケーション
- [ ] Prisma シード生成
- [ ] Prisma 論理削除

#### 参考

- https://zenn.dev/sonicmoov/articles/86b62b88206e27

### 業務アプリ作成

- [ ] 業務ロジック設計・実装
- [ ] UI/ロジックの継承・参照設計
- [ ] 業務アプリのサンプル作成

### カスタマイズ・SaaS 展開

- [ ] 参照型カスタマイズ機能実装
- [ ] 継承型カスタマイズ機能実装
- [ ] SaaS 提供機能設計・実装

### 業務アプリ作成

- [ ] 業務ロジック設計・実装
- [ ] UI/ロジックの継承・参照設計
- [ ] 業務アプリのサンプル作成

### カスタマイズ・SaaS 展開

- [ ] 参照型カスタマイズ機能実装
- [ ] 継承型カスタマイズ機能実装
- [ ] SaaS 提供機能設計・実装
