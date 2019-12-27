import React from "react";
import { RouteComponentProps } from "@reach/router";
import Header from "./Header";
import Login3 from "../auth/Login3";

const Home = (props: RouteComponentProps) => (
  <div>
    <Header />
    <Login3 />
  </div>
);

export default Home;
