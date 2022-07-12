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

  @media screen and (max-width: 768px) {
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    transition: all 0.3s ease;
    margin-left: 10px;
    width: 120px;
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
