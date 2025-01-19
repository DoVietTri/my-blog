import { UploadFolderEnum } from "@/constants";
import { upload } from "@/utils/cloudinary";
import prisma from "@/db/prisma";

export const config = { runtime: "experimental-edge" };

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;

    if (!file) {
      return Response.json({ error: "File not found!" }, { status: 400 });
    }

    const result = await upload(file, UploadFolderEnum.POST);

    const data = await prisma.media.create({
      data: {
        url: result.secure_url,
        type: result.resource_type,
        folder: result.folder,
        format: result.format,
        width: result.width,
        height: result.height,
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
