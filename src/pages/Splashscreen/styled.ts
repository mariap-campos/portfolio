import styled from "styled-components";

export const Splash = styled.div`
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--black);
  z-index: 15;
  overflow-y: clip;
  justify-content: center;
  display: flex;
  align-items: center;
  h1 {
    min-height: 7rem;
    width: fit-content;
    font-size: 7rem;
    color: var(--green);
    border-right: 4px solid var(--green);
    white-space: nowrap;
    margin: 0 auto;
    animation: blink-caret 1s step-end infinite;
    z-index: 6;
  }

  .diamond {
    background: var(--dark-grey);
    width: 300px;
    height: 300px;
    position: absolute;
    transform: rotate(45deg);
    border-radius: 7px;
    opacity: 0;
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: var(--grey);
    }
  }

  @keyframes fadeDiamond {
    0% {
      opacity: 0;
    }
    35% {
      opacity: 1;
    }
    45% {
      font-size: 7.5rem;
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes bump {
    0% {
      font-size: 7rem;
    }
    35% {
      border-right: none;
      font-size: 8rem;
      opacity: 1;
    }
    45% {
      border-right: none;
      font-size: 8rem;
      opacity: 1;
    }
    100% {
      border-right: none;
      font-size: 7rem;
      opacity: 0;
    }
  }

  @keyframes slide-away {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(100vh);
    }
  }
`;
