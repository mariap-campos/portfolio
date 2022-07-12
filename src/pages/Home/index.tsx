import React from "react";

import Header from "./sections/Header";
import { useScrollDirection } from "../../hooks";
import Sideline from "../../components/Sideline";
import Introduction from "./sections/Introduction";
import AboutMe from "./sections/AboutMe";

function Home() {
  const scrollDirection = useScrollDirection(true);
  return (
    <>
      <Sideline />
      <Header showNav={scrollDirection} />
      <Introduction />
      <AboutMe />
    </>
  );
}

export default Home;
