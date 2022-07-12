import styled from "styled-components";

interface LineWrapperProps {
  width?: string;
  height?: string;
}

export const LineWrapper = styled.div<LineWrapperProps>`
  background-color: var(--light);
  position: relative;
  animation-duration: 1s;
  /* animation-delay: 1s; */

  .start {
    position: absolute;
    left: 0;
    top: -3.5px;
  }

  .end {
    position: absolute;
    right: 0;
    top: -3.5px;
  }

  @keyframes growWidth {
    0% {
      width: 0;
      opacity: 0;
    }
    70% {
      width: ${(props) => props.width};
      opacity: 1;
    }
  }

  @keyframes growHeight {
    0% {
      height: 0;
      opacity: 0;
    }
    70% {
      height: ${(props) => props.height};
      opacity: 1;
    }
  }
`;
