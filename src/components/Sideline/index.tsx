import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn, FaSpotify } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Line from "../Line";
import * as S from "./styled";

function Sideline() {
  return (
    <>
      <S.Socials>
        <S.Nav>
          <button type="button" className="round">
            <FaLinkedinIn size={20} color="var(--dark-grey)" />
          </button>
          <button type="button" style={{ width: "38px", height: "38px" }}>
            <AiOutlineGithub size={38} />
          </button>
          <button type="button" className="round">
            <HiOutlineMail size={20} color="var(--dark-grey)" />
          </button>
          <button type="button">
            <FaSpotify size={35} />
          </button>
        </S.Nav>
        <Line height={200} start horizontal={false} />
      </S.Socials>
      <S.Email>
        <button type="button">mpfc.maria@gmail.com</button>
        <Line height={200} start horizontal={false} />
      </S.Email>
    </>
  );
}

export default Sideline;
