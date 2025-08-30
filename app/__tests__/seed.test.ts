import { describe, it, expect, beforeAll } from "vitest";
import { PrismaClient, User, Post, Comment } from "@prisma/client";

const prisma = new PrismaClient();

let user1: User | null;
let user2: User | null;
let post1: Post | null;
let post2: Post | null;
let comments: Comment[];

beforeAll(async () => {
  user1 = await prisma.user.findUnique({ where: { email: "alice@example.com" } });
  user2 = await prisma.user.findUnique({ where: { email: "bob@example.com" } });
  post1 = user1 ? await prisma.post.findFirst({ where: { authorId: user1.id } }) : null;
  post2 = user2 ? await prisma.post.findFirst({ where: { authorId: user2.id } }) : null;
  comments = await prisma.comment.findMany();
});

describe("Seedデータの検証", () => {
  it("ユーザーが2件登録されている", async () => {
    const users = await prisma.user.findMany();
    expect(users.length).toBe(2);
  });

  it("投稿が2件登録されている", async () => {
    const posts = await prisma.post.findMany();
    expect(posts.length).toBe(2);
  });

  it("コメントが2件登録されている", async () => {
    expect(comments.length).toBe(2);
  });

  it("ユーザー情報が正しい", () => {
    expect(user1?.name).toBe("Alice");
    expect(user2?.name).toBe("Bob");
  });

  it("投稿内容が正しい", () => {
    expect(post1?.content).toBe("本投稿は検証用です。");
    expect(post2?.content).toBe("本投稿は業務連絡です。");
  });
});
