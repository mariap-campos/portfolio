import styled from "styled-components";

export const ContactWrapper = styled.section`
  .floatingSquare {
    background: var(--black);
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 5px;
    left: 40%;
    opacity: 0.8;

    transform: rotate(45deg);
    animation: float 20s ease infinite;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  @keyframes float {
    0% {
      transform: rotate(45deg);
    }
    30% {
      transform: rotate(35deg) translate(-10px, -10px);
    }
    40% {
      transform: rotate(40deg) translate(0px, 0px);
    }
    70% {
      transform: rotate(55deg) translate(15px, 15px);
    }
    100% {
      transform: rotate(45deg) translate(0px, 0px);
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

export const Info = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  > div {
    width: 80%;
    margin: 0 auto;
    text-align: justify;
    font-size: 16px;
    color: var(--grey);
    text-align-last: center;
    @media screen and (max-width: 768px) {
      margin: 0 25px 0 0;
    }

    h1 {
      text-align: center;
      margin: 10px 0 50px;
    }

    p {
      line-height: 25px;

      a {
        color: var(--green);
      }
    }

    .button {
      transition: all 0.3s ease;
      border: 2px solid var(--green);
      margin: 50px auto;
      background: none;
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
  }
  @media screen and (max-width: 768px) {
  }
`;
