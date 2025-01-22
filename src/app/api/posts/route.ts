import _ from "lodash";
import prisma from "@/db/prisma";
import { createPostSchema } from "@/utils/validationSchema";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await createPostSchema.validate(body);

    const { title, content } = body;

    const payload = {
      title,
      slug: _.kebabCase(title),
      content,
      userId: 3, // TODO
    };

    const data = await prisma.post.create({
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

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page") || 1);
    const size = Number(searchParams.get("size") || 10);
    const query = searchParams.get("q") || "";

    const posts = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        slug: true,
        createdAt: true,
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
            role: true,
            createdAt: true,
          },
        },
      },
      where: {
        title: {
          contains: query,
        },
      },
      skip: (page - 1) * size,
      take: size,
      orderBy: {
        createdAt: "desc",
      },
    });

    const totalCount = await prisma.post.count({
      where: {
        title: {
          contains: query,
        },
      },
    });

    return Response.json(
      {
        posts: posts,
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
