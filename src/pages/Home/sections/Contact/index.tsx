/* eslint-disable react/no-unescaped-entities */
import React from "react";

import Line from "../../../../components/Line";

import * as S from "./styled";
import useWindowSize from "../../../../hooks/useWindowSize";

function Contact() {
  const { width } = useWindowSize();
  return (
    <S.ContactWrapper className="section" id="contact">
      <div className="floatingSquare" />
      <S.Container className="container">
        <S.Title>
          <Line end width={width! > 768 ? "85%" : "60%"} />
          <p>
            <strong>03. </strong>contact
          </p>
        </S.Title>
        <S.Info>
          <div>
            <h1>Let's Chat!</h1>
            <p>
              I'm not currently looking for new work opportunities, however, i
              am always open for a nice chat! Feel free to send me a{" "}
              <a
                href="mailto:mpfc.maria@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                email
              </a>
              , follow me on {"  "}
              <a
                href="https://www.instagram.com/mashpaula/"
                target="_blank"
                rel="noreferrer"
              >
                instagram
              </a>{" "}
              or connect on{" "}
              <a
                href="https://github.com/mariap-campos"
                target="_blank"
                rel="noreferrer"
              >
                linkedin
              </a>
              ! I'm also currently working on improving my{" "}
              <a
                href="https://www.linkedin.com/in/maria-p-campos/"
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>{" "}
              so if you wanna trade advice or talk about code i'm all ears.
            </p>
            <a
              className="button"
              href="mailto:mpfc.maria@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Say Hi!
            </a>
          </div>
        </S.Info>
      </S.Container>
    </S.ContactWrapper>
  );
}

export default Contact;
