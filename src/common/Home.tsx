import React from "react";
import { RouteComponentProps } from "@reach/router";
import Header from "./Header";
import Login2 from "../auth/Login2";

const Home = (props: RouteComponentProps) => (
  <div>
    <Header />
    <Login2 />
  </div>
);

export default Home;
