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
import Line from "../../../../components/Line";
import avatar from "../../../../assets/img/avatar.jpg";

import * as S from "./styled";

function AboutMe() {
  return (
    <S.AboutMeWrapper className="section" id="about">
      {/* <div className="floatingSquare" /> */}
      <S.Container className="container">
        <S.Title>
          <Line end width="80%" />
          <p>
            <strong>01. </strong>about me
          </p>
        </S.Title>
        <S.Info>
          <img src={avatar} alt="me" />
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
              <a href="https://seila.com"> Univeristy of Mogi das Cruzes </a>{" "}
              and have been working in the area ever since. I discovered my love
              for front-end applications and the react framework, and today i
              work for the{" "}
              <a href="https://seila.com">biggest brewery in the world!</a>,
              working in a heap of different entertainment and rewards focused
              projects.
            </p>
            <p>
              Here's a few of the technologies i work with on my day-to-day:
            </p>
            <div>
              <SiHtml5 size={25} color="var(--green)" title="html5" />
              <SiCss3 size={25} color="var(--green)" title="css3" />
              <SiJavascript size={25} color="var(--green)" title="javascript" />
              <SiTypescript size={25} color="var(--green)" title="typescript" />
              <SiReact size={25} color="var(--green)" title="react" />
              <SiNodedotjs size={25} color="var(--green)" title="node.js" />
            </div>
          </div>
        </S.Info>
        {/* <strong>Hello, there! i&apos;m</strong>
        <h1>Maria P. Campos</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p> */}
      </S.Container>
    </S.AboutMeWrapper>
  );
}

export default AboutMe;
