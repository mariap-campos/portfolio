import styled from "styled-components";

export const IntroductionWrapper = styled.section`
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
  @media screen and (max-width: 768px) {
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

  p {
    font-size: 16px;
    /* font-weight: bold; */
    line-height: 25px;
    color: var(--grey);
    max-width: 90%;
  }

  .line {
    margin-top: 40px;
    align-self: flex-end;
  }
  @media screen and (max-width: 768px) {
  }
`;
