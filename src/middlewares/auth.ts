import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";

export function authMiddleware(handler: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const cookieStore = await cookies();

    console.log("token", cookieStore.get("token"));

    return handler(req, res);
  };
}
