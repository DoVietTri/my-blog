import { createCommentSchema } from "@/utils/validationSchema";
import prisma from "@/db/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await createCommentSchema.validate(body);

    const { content, postId } = body;

    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) {
      return Response.json({ message: "Post not found!" }, { status: 404 });
    }

    const ip = req.headers.get("x-forwarded-for");

    const payload = {
      content,
      postId,
      username: `Anonymous+${ip}`,
    };

    const data = await prisma.comment.create({
      data: payload,
    });

    return Response.json(data, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return Response.json({ [error.path]: error.message }, { status: 400 });
    }
    return Response.json({ message: "Something went wrong!" }, { status: 500 });
  }
}
