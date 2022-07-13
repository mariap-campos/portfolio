import React from "react";

import Header from "./sections/Header";
import { useScrollDirection } from "../../hooks";
import Sideline from "../../components/Sideline";
import Introduction from "./sections/Introduction";
import AboutMe from "./sections/AboutMe";
import useWindowSize from "../../hooks/useWindowSize";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

import thumb from "../../assets/img/localImage.png";

function Home() {
  const scrollDirection = useScrollDirection(true);
  const { width } = useWindowSize();
  return (
    <>
      <img
        src={thumb}
        alt="thumb"
        className="thumb"
        style={{ opacity: 0, width: 0 }}
      />
      {width! > 768 && <Sideline />}
      <Header showNav={scrollDirection} />
      <Introduction />
      <AboutMe />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
