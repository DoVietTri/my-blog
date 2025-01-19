import prisma from "@/db/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const size = searchParams.get("size") || 5;

    const data = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        image: true,
        createdAt: true,
        author: {
          select: {
            id: true,
            name: true,
            avatar: true,
            email: true,
            role: true,
          },
        },
      },
      skip: 0,
      take: Number(size),
      orderBy: {
        createdAt: "desc",
      },
    });

    return Response.json(data, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return Response.json({ [error.path]: error.message }, { status: 400 });
    }
    return Response.json({ error: "Something went wrong!" }, { status: 500 });
  }
}
