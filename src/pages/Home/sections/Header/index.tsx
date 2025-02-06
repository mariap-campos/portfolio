import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Line from "../../../../components/Line";
// import logo from "../../../../assets/img/mLogo.png";

import * as S from "./styled";
import useWindowSize from "../../../../hooks/useWindowSize";
import Resume from "../../../../assets/mariap-campos-curriculo.pdf";

interface HeaderProps {
  showNav: boolean;
}

function Header({ showNav }: HeaderProps) {
  const nav = ["home", "about", "experience", "contact"];
  const { width } = useWindowSize();

  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const logo = "<m/>";

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
      <S.LogoWrapper scrolledToTop={scrolledToTop}>
        <Line end width={width! > 768 ? "100px" : "20px"} />
        <h1>{logo}</h1>
      </S.LogoWrapper>
      {width! < 768 && (
        <button
          onClick={() => setOpenMenu(!openMenu)}
          type="button"
          className="menu"
        >
          {openMenu ? <IoMdClose size={30} /> : <FiMenu size={30} />}
        </button>
      )}
      <S.Nav className={openMenu ? "open-menu" : "close-menu"}>
        {nav.map((item, index) => (
          <S.NavLink href={`#${item}`}>
            <strong>0{index + 1}.</strong> {item}
          </S.NavLink>
        ))}
        <a className="resume" href={Resume} target="_blank" rel="noreferrer">
          Resume
        </a>
      </S.Nav>
    </S.HeaderWrapper>
  );
}

export default Header;
