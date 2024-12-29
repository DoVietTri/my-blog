import { Login } from "@/_pages/admin/login";
import { NextPage } from "next";
import React from "react";
import { loginAction } from "./action";

const ThePage: NextPage = () => {
  return <Login onSubmit={loginAction} />;
};

export default ThePage;
