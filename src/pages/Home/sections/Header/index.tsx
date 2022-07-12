import React, { useEffect, useState } from "react";
import Line from "../../../../components/Line";
import logo from "../../../../assets/img/mLogo.png";

import * as S from "./styled";

interface HeaderProps {
  showNav: boolean;
}

function Header({ showNav }: HeaderProps) {
  const nav = ["about", "work", "skills", "contact"];

  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.HeaderWrapper scrolledToTop={scrolledToTop} showNav={showNav}>
      <S.LogoWrapper>
        <Line end width="100px" />
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
