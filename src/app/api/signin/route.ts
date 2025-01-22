import prisma from "@/db/prisma";
import { signinSchema } from "@/utils/validationSchema";
import bcrypt from "bcrypt";
import * as jose from "jose";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await signinSchema.validate(body);

    const { email, password } = body;

    // Look user
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      return Response.json({ message: "User not found!" }, { status: 404 });
    }

    // Compare password
    const isCorrectPassword = bcrypt.compareSync(password, user.password);

    if (!isCorrectPassword) {
      return Response.json({ message: "Incorrect password!" }, { status: 400 });
    }

    // Create JWT
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const jwt = await new jose.SignJWT({})
      .setProtectedHeader({ alg: `${process.env.JWT_ALG}` })
      .setExpirationTime(`${process.env.JWT_EXPIRED}`)
      .setSubject(user.id.toString())
      .sign(secret);

    return Response.json({ token: jwt }, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return Response.json({ [error.path]: error.message }, { status: 400 });
    }
    return Response.json({ message: "Something went wrong!" }, { status: 500 });
  }
}
