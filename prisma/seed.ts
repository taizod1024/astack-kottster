import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 既存データを全削除
  await prisma.comment.deleteMany();
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();
  // ユーザー作成
  const user1 = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@example.com",
    },
  });
  const user2 = await prisma.user.create({
    data: {
      name: "Bob",
      email: "bob@example.com",
    },
  });

  // 投稿作成
  const post1 = await prisma.post.create({
    data: {
      title: "初回投稿",
      content: "本投稿は検証用です。",
      authorId: user1.id,
    },
  });
  const post2 = await prisma.post.create({
    data: {
      title: "第二回投稿",
      content: "本投稿は業務連絡です。",
      authorId: user2.id,
    },
  });

  // コメント作成
  await prisma.comment.create({
    data: {
      content: "いい投稿ですね！",
      postId: post1.id,
      authorId: user2.id,
    },
  });
  await prisma.comment.create({
    data: {
      content: "ありがとうございます！",
      postId: post1.id,
      authorId: user1.id,
    },
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
