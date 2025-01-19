import prisma from "@/db/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page") || 1);
    const size = Number(searchParams.get("size") || 10);

    const medias = await prisma.media.findMany({
      select: {
        id: true,
        url: true,
        type: true,
        format: true,
        width: true,
        height: true,
        createdAt: true,
      },
      skip: (page - 1) * size,
      take: size,
      orderBy: {
        createdAt: "desc",
      },
    });

    const totalCount = await prisma.media.count({});

    return Response.json(
      {
        medias: medias,
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
    return Response.json({ error: "Something went wrong!" }, { status: 500 });
  }
}
