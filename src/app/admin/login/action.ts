"use server";

import { ILogin } from "@/interfaces/auth";
import api from "@/utils/api";

export const loginAction = async (payload: ILogin) => {
  try {
    const res = await api.post("/signin", payload);
    console.log("res", res.data);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
