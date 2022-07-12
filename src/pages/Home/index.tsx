import React from "react";

import Header from "./sections/Header";
import { useScrollDirection } from "../../hooks";
import Sideline from "../../components/Sideline";
import Introduction from "./sections/Introduction";
import AboutMe from "./sections/AboutMe";
import useWindowSize from "../../hooks/useWindowSize";

function Home() {
  const scrollDirection = useScrollDirection(true);
  const { width } = useWindowSize();
  return (
    <>
      {width! > 768 && <Sideline />}
      <Header showNav={scrollDirection} />
      <Introduction />
      <AboutMe />
    </>
  );
}

export default Home;
