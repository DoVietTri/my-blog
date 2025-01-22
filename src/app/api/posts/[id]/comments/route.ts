import prisma from "@/db/prisma";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page") || 1);
    const size = Number(searchParams.get("size") || 10);
    const query = searchParams.get("q") || "";

    const post = await prisma.comment.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!post) {
      return Response.json({ message: "Post not found!" }, { status: 404 });
    }

    const comments = await prisma.comment.findMany({
      where: {
        postId: Number(id),
        content: {
          contains: query,
        },
      },
      skip: (page - 1) * size,
      take: size,
      orderBy: {
        createdAt: "desc",
      },
    });

    const totalCount = await prisma.comment.count({
      where: {
        postId: Number(id),
        content: {
          contains: query,
        },
      },
    });

    return Response.json(
      {
        comments: comments,
        currentPage: page,
        totalCount: totalCount,
        totalPage: Math.ceil(totalCount / size),
      },
      { status: 200 }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return Response.json({ [error.path]: error.message }, { status: 400 });
    }
    return Response.json({ message: "Something went wrong!" }, { status: 500 });
  }
}
