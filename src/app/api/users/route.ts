import prisma from "@/db/prisma";

export async function GET() {
  const data = await prisma.user.findMany({});
  return Response.json(data);
}
