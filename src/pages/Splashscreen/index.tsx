import React, { useEffect, useState } from "react";
import * as S from "./styled";

function Splashscreen() {
  const [showHome, setShowHome] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [animateLogo, setAnimateLogo] = useState(false);
  const [type, setType] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      setShowHome(false);
    }, 4000);
    setTimeout(() => {
      setAnimate(true);
    }, 2500);

    setTimeout(() => {
      setAnimateLogo(true);
    }, 1900);

    setTimeout(() => {
      setType("<");
    }, 1500);

    setTimeout(() => {
      setType("<m");
    }, 1600);
    setTimeout(() => {
      setType("<m/");
    }, 1700);
    setTimeout(() => {
      setType("<m/>");
    }, 1800);
  }, []);

  if (!showHome) {
    return null;
  }

  return (
    <S.Splash
      style={{
        animation: animate ? "slide-away 1s forwards ease-in-out" : "",
      }}
    >
      <div
        className="diamond"
        style={{ animation: animateLogo ? "fadeDiamond 1s forwards " : "" }}
      />
      <h1 style={{ animation: animateLogo ? "bump 1s forwards " : "" }}>
        {type}
      </h1>
    </S.Splash>
  );
}

export default Splashscreen;
