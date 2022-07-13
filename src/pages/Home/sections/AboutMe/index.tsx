/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { BsFillDiamondFill } from "react-icons/bs";
import { FaMobile } from "react-icons/fa";
import Line from "../../../../components/Line";
import avatar from "../../../../assets/img/avatar.jpg";

import * as S from "./styled";
import useWindowSize from "../../../../hooks/useWindowSize";

function AboutMe() {
  const { width } = useWindowSize();
  return (
    <S.AboutMeWrapper className="section" id="about">
      <div className="floatingSquare" />
      <S.Container className="container">
        <S.Title>
          <Line end width={width! > 768 ? "80%" : "60%"} />
          <p>
            <strong>01. </strong>about me
          </p>
        </S.Title>
        <S.Info>
          <div className="avatar">
            <img src={avatar} alt="me" />
          </div>
          <div>
            <p className="header">
              Maria Paula <BsFillDiamondFill size={6} color="var(--green)" /> 22
              years old
              <BsFillDiamondFill size={6} color="var(--green)" />
              she/her
            </p>
            <p>
              Hey, you! I've been programming for some time now. I actually
              discovered my interest for programming when i was 19, in a Civil
              Engineering class, which was my major at the time. Safe to say, i
              ended up in a whole different major after that.
            </p>
            <p>
              I enrolled and graduated in System Development and Analysis at{" "}
              <a href="https://www.umc.br"> Univeristy of Mogi das Cruzes </a>{" "}
              and have been working in the area ever since. I discovered my love
              for front-end applications and the react framework, and today i
              work for the{" "}
              <a href="https://www.ambev.com.br">
                biggest brewery in the world!
              </a>
              , working in a heap of different entertainment and rewards focused
              projects.
            </p>
            <p>
              Here's a few of the technologies i work with on my day-to-day:
            </p>
            <div>
              <SiJavascript size={25} color="var(--green)" title="javascript" />
              <SiTypescript size={25} color="var(--green)" title="typescript" />
              <SiReact size={25} color="var(--green)" title="react" />
              <FaMobile size={25} color="var(--green)" title="react native" />
              <SiHtml5 size={25} color="var(--green)" title="html5" />
              <SiCss3 size={25} color="var(--green)" title="css3" />
              <SiNodedotjs size={25} color="var(--green)" title="node.js" />
            </div>
          </div>
        </S.Info>
      </S.Container>
    </S.AboutMeWrapper>
  );
}

export default AboutMe;
