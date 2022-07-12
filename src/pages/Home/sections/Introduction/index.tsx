import React from "react";
import Line from "../../../../components/Line";

import * as S from "./styled";

function Introduction() {
  return (
    <S.IntroductionWrapper className="section">
      <div className="floatingSquare" />
      <S.Container className="container">
        <strong>Hello, there! i&apos;m</strong>
        <h1>Maria P. Campos</h1>
        <p>
          I&apos;m a software developer in constant development myself. Very
          passionate about programming, design, music and nerdy things.
          Currently i&apos;m working rewards projects for{" "}
          <a href="https://ambevtech.com.br">@ambevtech</a>
        </p>
        <Line start width="80%" />
      </S.Container>
    </S.IntroductionWrapper>
  );
}

export default Introduction;
