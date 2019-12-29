import React from "react";
import { RouteComponentProps } from "@reach/router";
import Header from "./Header";
import Footer from "./Footer";
import Login3 from "../auth/Login3";

const Home = (props: RouteComponentProps) => (
  <div>
    <Header />
    <Login3 />
    <Footer />
  </div>
);

export default Home;
