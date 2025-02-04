import styled, { css } from "styled-components";

interface HeaderWrapperProps {
  scrolledToTop: boolean;
  showNav: boolean;
}

export const HeaderWrapper = styled.header<HeaderWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  transition: all 0.3s ease;
  padding: 30px 30px 30px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  backdrop-filter: blur(10px);
  background: rgba(26, 26, 28, 0.8);
  padding: 10px 30px 10px 0;

  &::before {
    width: 100% !important;
    transition: width 0.25s ease-out;
  }

  ${(props) =>
    props.scrolledToTop &&
    css`
      backdrop-filter: none;
      background: transparent !important;
      padding: 30px 30px 30px 0;

      img {
        width: 220px !important;
      }

      &::before {
        width: 0% !important;
        transition: width 0.25s ease-out;
      }

      .menu {
        transition: all 0.25s ease-out;
        top: 30px !important;
        right: 30px !important;
      }
    `};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: var(--light);
    transition: width 0.25s ease-out;
  }

  .menu {
    transition: all 0.25s ease-out;
    background: none;
    border: none;
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 10;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 4rem;
    margin-left: 1rem;
    color: var(--green);
  }

  img {
    transition: all 0.3s ease;
    margin-left: 10px;
    width: 120px;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 80px !important;
    }
  }
`;

export const Nav = styled.nav`
  .resume {
    transition: all 0.3s ease;
    border: 2px solid var(--green);
    background: none;
    margin-left: 30px;
    font-weight: 800;
    color: var(--green);
    font-size: 18px;
    padding: 8px 12px;
    border-radius: 5px;
    letter-spacing: 2px;

    &:hover {
      transition: all 0.3s ease;
      background: var(--green);
      color: var(--dark-grey);
      cursor: pointer;
    }
  }

  @media screen and (max-width: 768px) {
    background: var(--black);
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    width: 70%;
    display: flex;
    padding: 20% 30px;
    flex-direction: column;
    justify-content: space-evenly;

    &.open-menu {
      transition: all 0.3s ease;
      transform: translateX(0px) !important;
    }

    &.close-menu {
      transition: all 0.3s ease;
      transform: translateX(110%) !important;
    }

    .resume {
      margin-left: 0px;
    }
  }
`;

export const NavLink = styled.a`
  background: none;
  border: none;
  font-weight: 800;
  color: var(--light);
  font-size: 16px;
  line-height: 20px;
  transition: all 0.3s ease;
  margin-left: 30px;
  padding-bottom: 5px;
  position: relative;
  letter-spacing: 2px;

  &:hover {
    transition: all 0.3s ease;
    color: var(--green);
    cursor: pointer;
  }

  strong {
    color: var(--green);
  }
`;
