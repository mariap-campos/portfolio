import React, { Dispatch, SetStateAction } from "react";
import { BsFillDiamondFill } from "react-icons/bs";
import { experienceProps } from "..";

import * as S from "../styled";

interface experienceCompProps {
  current: experienceProps;
  animate: boolean;
  setAnimate: Dispatch<SetStateAction<boolean>>;
  icons: any;
}

function Experience({
  current,
  animate,
  setAnimate,
  icons: Icons,
}: experienceCompProps) {
  return (
    <S.Experience
      onAnimationEnd={() => setAnimate(false)}
      className={animate ? "animate" : ""}
    >
      <p id="title">
        {current.position} <a href={current.site}>@{current.name}</a>
      </p>
      <p id="location">{current.timeframe}</p>
      {current.topics.map((item) => (
        <p>
          <BsFillDiamondFill size={6} color="var(--green)" />
          {item}
        </p>
      ))}
      {Icons && <Icons />}
    </S.Experience>
  );
}

export default Experience;
