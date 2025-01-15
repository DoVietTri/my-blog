"use server";

import { ILoginPayload } from "@/interfaces/auth";
import api from "@/utils/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import * as jose from "jose";

export const loginAction = async (payload: ILoginPayload) => {
  const res = await api.post("/signin", payload);

  if (res.data) {
    const cookieStore = await cookies();
    const claims = jose.decodeJwt(res.data.token);
    cookieStore.set("token", res.data?.token, {
      expires: new Date(Number(claims.exp) * 1000),
    });

    return redirect("/admin");
  }
};
