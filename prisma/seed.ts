import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 既存データを全削除
  await prisma.comment.deleteMany();
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();

  // ユーザー作成
  const users: { id: number; name: string; email: string }[] = [];
  for (let i = 1; i <= 10; i++) {
    const user = await prisma.user.create({
      data: {
        name: `user${String(i).padStart(2, "0")}`,
        email: `user${String(i).padStart(2, "0")}@example.com`,
      },
    });
    users.push(user);
  }

  // 投稿作成
  const posts: Array<{ post: { id: number; title: string; content: string; authorId: number }; user: { id: number; name: string; email: string } }> = [];
  for (let i = 0; i < users.length; i++) {
    for (let j = 1; j <= 2; j++) {
      const post = await prisma.post.create({
        data: {
          title: `${users[i].name}/post${j}`,
          content: `${users[i].name} - post${j}`,
          authorId: users[i].id,
        },
      });
      posts.push({ post, user: users[i] });
    }
  }

  // コメント作成
  for (const { post, user } of posts) {
    for (let k = 1; k <= 5; k++) {
      // コメント投稿者はランダムな他ユーザー
      let commenterIdx = Math.floor(Math.random() * users.length);
      // 投稿者と同じ場合は次のユーザー
      if (users[commenterIdx].id === user.id) {
        commenterIdx = (commenterIdx + 1) % users.length;
      }
      await prisma.comment.create({
        data: {
          content: `${post.content} - comment${k}`,
          postId: post.id,
          authorId: users[commenterIdx].id,
        },
      });
    }
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
