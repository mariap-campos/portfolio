import styled from "styled-components";

export const WorkWrapper = styled.section`
  .floatingSquare {
    background: var(--black);
    position: absolute;
    width: 345px;
    height: 345px;
    border-radius: 5px;
    left: 20%;

    transform: rotate(45deg);
    animation: float 20s ease infinite;
  }

  @keyframes float {
    0% {
      transform: rotate(45deg);
    }
    30% {
      transform: rotate(35deg);
    }
    40% {
      transform: rotate(40deg);
    }
    70% {
      transform: rotate(55deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 5;

  strong {
    font-size: 18px;
    color: var(--green);
  }

  > p {
    font-size: 18px;
    color: var(--grey);
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  > p {
    font-weight: bold;
    font-size: 18px;
    color: var(--light);
  }
  .line {
    margin-top: 5px;
    align-self: center;
  }

  @media screen and (max-width: 768px) {
  }
`;

export const Work = styled.div`
  display: flex;
  margin-top: 40px;
  height: 50vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 20px;
    .line {
      display: none;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;

    @media screen and (max-width: 768px) {
      flex-direction: row;
    }

    button {
      z-index: 5;
      background: transparent;
      border: none;
      padding: 15px;
      font-size: 18px;
      width: 180px;
      transition: all 0.25s ease-out;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 0;
        height: 2px;
        background-color: var(--green);
        transition: width 0.25s ease-out;
      }

      &.selected::before {
        width: 100%;
        transition: width 0.25s ease-out;
      }

      &.selected {
        /* border-left: 2px solid var(--green); */
        background: var(--black);
        color: var(--green);
        transition: all 0.25s ease-out;
      }

      &:hover {
        background: var(--black);
        color: var(--green);
        transition: all 0.25s ease-out;
        opacity: 0.8;
      }
    }
  }
`;

export const Experience = styled.div`
  margin-top: 20px;
  margin-left: 40px;

  @keyframes slide {
    0% {
      transform: translateX(-50px);
      opacity: 0;
    }
    50% {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  &.animate {
    animation: slide 1s ease forwards;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }

  #title {
    font-size: 20px;
    font-weight: bold;
    color: var(--light);
    margin-bottom: 4px;

    a {
      font-size: 18px;
      cursor: pointer;
      color: var(--green) !important;
    }
  }

  #location {
    margin-bottom: 10px;
  }
  > p {
    text-align: justify;
    font-size: 16px;
    color: var(--grey);
    line-height: 25px;
    margin-bottom: 10px;

    svg {
      margin-right: 10px;
    }
  }

  .vtex {
    width: 25px;
  }

  .icons {
    > svg {
      margin-right: 10px;
      fill: var(--green);
      cursor: pointer;
      transition: all 0.25s ease-out;

      &:hover {
        transition: all 0.25s ease-out;
        transform: translateY(-3px);
      }

      @media screen and (max-width: 768px) {
        width: 25px;
        height: 25px;
      }
    }
  }
`;
