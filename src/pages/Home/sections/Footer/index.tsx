import React from "react";

import { FaLinkedinIn, FaSpotify } from "react-icons/fa";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import useWindowSize from "../../../../hooks/useWindowSize";
import * as S from "./styled";

function Footer() {
  const { width } = useWindowSize();
  return (
    <S.FooterWrapper>
      {width! < 768 && (
        <S.Nav>
          <a
            href="https://www.linkedin.com/in/maria-p-campos/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn size={30} />
          </a>
          <a
            href="https://github.com/mariap-campos"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub size={30} />
          </a>
          <a
            href="mailto:mpfc.maria@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <HiOutlineMail size={30} />
          </a>
          <a
            href="https://www.instagram.com/mashpaula/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram size={30} />
          </a>
          <a
            href="https://open.spotify.com/user/mashpaula"
            target="_blank"
            rel="noreferrer"
          >
            <FaSpotify size={30} />
          </a>
        </S.Nav>
      )}
      &lt;/&gt; by mashpaula
    </S.FooterWrapper>
  );
}

export default Footer;
