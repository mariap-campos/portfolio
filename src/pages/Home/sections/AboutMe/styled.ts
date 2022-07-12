import styled from "styled-components";

export const AboutMeWrapper = styled.section`
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

  > p {
    font-size: 18px;
    color: var(--grey);
  }

  @media screen and (max-width: 768px) {
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;

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

export const Info = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }

  > div {
    text-align: justify;
    margin-left: 40px;
    font-size: 16px;
    /* font-weight: bold; */
    color: var(--grey);
    line-height: 25px;

    .header {
      font-weight: bold;

      svg {
        margin: 0 5px;
      }
    }

    p {
      margin-bottom: 20px;

      a {
        color: var(--green);
      }
    }

    div {
      svg {
        margin-right: 10px;
      }
    }
  }
  @media screen and (max-width: 768px) {
  }
`;
