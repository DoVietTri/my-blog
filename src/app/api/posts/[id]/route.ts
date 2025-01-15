import prisma from "@/db/prisma";
import { updatePostSchema } from "@/utils/validationSchema";
import _ from "lodash";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    console.log("id", id);

    const post = await prisma.post.findFirst({
      select: {
        id: true,
        title: true,
        slug: true,
        image: true,
        content: true,
        createdAt: true,
        author: {
          select: {
            id: true,
            name: true,
            avatar: true,
            email: true,
            createdAt: true,
            role: true,
          },
        },
      },
      where: {
        slug: id,
      },
    });

    return Response.json({ data: post }, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return Response.json({ [error.path]: error.message }, { status: 400 });
    }
    return Response.json({ error: "Something went wrong!" }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    await updatePostSchema.validate(body);

    const res = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!res) {
      return Response.json({ error: "Not found!" }, { status: 404 });
    }

    const updatePost = await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        ...body,
        ...(body.title && { slug: _.kebabCase(body.title) }),
      },
    });

    return Response.json({ data: updatePost }, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return Response.json({ [error.path]: error.message }, { status: 400 });
    }
    return Response.json({ error: "Something went wrong!" }, { status: 500 });
  }
}
