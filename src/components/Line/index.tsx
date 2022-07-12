import React from "react";
import { BsFillDiamondFill } from "react-icons/bs";
import * as S from "./styled";

interface LineProps {
  start?: boolean;
  horizontal?: boolean;
  end?: boolean;
  width?: number;
  height?: number;
}

function Line({ start, end, width, height, horizontal }: LineProps) {
  return (
    <S.LineWrapper
      // width={width}
      // height={height}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        animationName: horizontal ? "growWidth" : "growHeight",
      }}
      className="line"
    >
      {start && (
        <BsFillDiamondFill
          size={8}
          className="start"
          style={{ left: height! > 1 ? "-3.5px" : "unset" }}
        />
      )}
      {end && (
        <BsFillDiamondFill
          size={8}
          className="end"
          style={{ left: height! > 1 ? "-3.5px" : "unset" }}
        />
      )}
    </S.LineWrapper>
  );
}

Line.defaultProps = {
  start: false,
  end: false,
  horizontal: true,
  width: 1,
  height: 1,
};

export default Line;
