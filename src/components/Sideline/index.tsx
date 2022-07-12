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
          <button type="button">
            <FaLinkedinIn size={24} />
          </button>
          <button type="button">
            <AiOutlineGithub size={24} />
          </button>
          <button type="button">
            <HiOutlineMail size={24} />
          </button>
          <button type="button">
            <AiOutlineInstagram size={24} />
          </button>
          <button type="button">
            <FaSpotify size={24} />
          </button>
        </S.Nav>
        <Line height="120px" start horizontal={false} />
      </S.Socials>
      <S.Email>
        <button type="button">mpfc.maria@gmail.com</button>
        <Line height="120px" start horizontal={false} />
      </S.Email>
    </>
  );
}

export default Sideline;
