import prisma from "@/db/prisma";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const post = await prisma.post.findUnique({
      select: {
        dislike: true,
      },
      where: {
        id: Number(id),
      },
    });

    if (!post) {
      return Response.json({ message: "Post not found!" }, { status: 404 });
    }

    const data = await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        like: Number(post.dislike || 0) + 1,
      },
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
