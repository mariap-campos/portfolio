import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  transition: all 0.3s ease;
  padding: 30px 30px 30px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

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

  &.active::before {
    width: 120%;
    transition: width 0.25s ease-out;
  }

  &.active {
    background: var(--black);
    padding: 10px 30px 10px 0;

    img {
      width: 140px;
    }
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
    width: 220px;
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

export const NavLink = styled.button`
  background: none;
  border: none;
  font-weight: 800;
  font-size: 18px;
  line-height: 20px;
  transition: all 0.3s ease;
  margin-left: 30px;
  padding-bottom: 5px;
  position: relative;
  letter-spacing: 2px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: var(--green);
    transition: width 0.25s ease-out;
  }

  &:hover::before {
    width: 100%;
    transition: width 0.25s ease-out;
  }

  &:hover {
    transition: all 0.3s ease;
    color: var(--green);
    cursor: pointer;
  }

  strong {
    color: var(--green);
  }
`;
