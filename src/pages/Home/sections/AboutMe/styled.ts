import styled from "styled-components";

export const AboutMeWrapper = styled.section`
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
  width: 80%;

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

  .avatar {
    width: 300px;
    height: 300px;
    position: relative;

    @media screen and (max-width: 768px) {
      width: 250px;
      height: 250px;
    }
  }

  .avatar::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 325px;
    height: 325px;
    border-radius: 50%;
    border: 1px solid var(--light);

    @media screen and (max-width: 768px) {
      width: 270px;
      height: 270px;
    }
  }

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    position: relative;

    @media screen and (max-width: 768px) {
      width: 250px;
      height: 250px;
      margin-bottom: 20px;
    }
  }

  > div {
    text-align: justify;
    margin-left: 40px;
    font-size: 16px;
    color: var(--grey);
    line-height: 25px;

    @media screen and (max-width: 768px) {
      margin-left: 0px;
      margin-top: 25px;
    }

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
        cursor: pointer;
        transition: all 0.25s ease-out;
        margin-right: 10px;

        &:hover {
          transition: all 0.25s ease-out;
          transform: translateY(-3px);
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
  }
`;
