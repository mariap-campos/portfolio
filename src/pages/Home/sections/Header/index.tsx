import React from "react";
import Line from "../../../../components/Line";
import logo from "../../../../assets/img/mLogo.png";

import * as S from "./styled";

interface HeaderProps {
  showNav: boolean;
}

function Header({ showNav }: HeaderProps) {
  const nav = ["about", "work", "skills", "contact"];

  return (
    <S.HeaderWrapper className={showNav ? "active" : ""}>
      <S.LogoWrapper>
        <Line end width={100} />
        <img src={logo} alt="<m/>" />
      </S.LogoWrapper>
      <S.Nav>
        {nav.map((item, index) => (
          <S.NavLink>
            <strong>0{index + 1}.</strong> {item}
          </S.NavLink>
        ))}
        <button
          type="button"
          className="resume"
          onClick={() => console.log("open resume")}
        >
          Resume
        </button>
      </S.Nav>
    </S.HeaderWrapper>
  );
}

export default Header;
