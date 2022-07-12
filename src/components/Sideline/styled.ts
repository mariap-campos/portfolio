import styled from "styled-components";

export const SidelineWrapper = styled.div``;

export const Socials = styled.div`
  position: fixed;
  bottom: 0;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Email = styled.div`
  position: fixed;
  bottom: 0;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px;

  button {
    background: none;
    border: none;
    font-size: 14px;
    letter-spacing: 2px;
    transform: rotate(90deg);
    margin-bottom: 100px;
    transition: all 0.25s ease-out;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -6px;
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
      transition: all 0.25s ease-out;
      color: var(--green);
    }
  }
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  margin-bottom: 10px;

  button {
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    margin-bottom: 10px;
    transition: all 0.25s ease-out;

    &:hover {
      transition: all 0.25s ease-out;
      transform: translateY(-3px);
      color: var(--green);
    }
  }

  /* .round {
    background: var(--light);
    border-radius: 60px;
  } */
`;
