import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Line from "../../../../components/Line";
import logo from "../../../../assets/img/mLogo.png";

import * as S from "./styled";
import useWindowSize from "../../../../hooks/useWindowSize";

interface HeaderProps {
  showNav: boolean;
}

function Header({ showNav }: HeaderProps) {
  const nav = ["about", "work", "skills", "contact"];
  const { width } = useWindowSize();

  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

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
        <Line end width={width! > 768 ? "100px" : "20px"} />
        <img src={logo} alt="<m/>" />
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
