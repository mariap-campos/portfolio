import React from "react";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaSpotify } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import Line from "../Line";
import * as S from "./styled";

function Sideline() {
  return (
    <>
      <S.Socials>
        <S.Nav>
          <a
            href="https://www.linkedin.com/in/maria-p-campos/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://github.com/mariap-campos"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub size={24} />
          </a>
          <a
            href="mailto:mpfc.maria@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <HiOutlineMail size={24} />
          </a>
          <a
            href="https://open.spotify.com/user/mashpaula"
            target="_blank"
            rel="noreferrer"
          >
            <FaSpotify size={24} />
          </a>
        </S.Nav>
        <Line height="120px" start horizontal={false} />
      </S.Socials>
      <S.Email>
        <a href="mailto:mpfc.maria@gmail.com" target="_blank" rel="noreferrer">
          mpfc.maria@gmail.com
        </a>
        <Line height="120px" start horizontal={false} />
      </S.Email>
    </>
  );
}

export default Sideline;
