import { NextPage } from "next";
import React from "react";
import { Home } from "@/_pages/home";

const ThePage: NextPage = async () => {
  // const data = await fetch(`${process.env.ROOT_URL}/users`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // const res = await data.json();
  // console.log("res", res);
  return <Home />;
};

export default ThePage;
