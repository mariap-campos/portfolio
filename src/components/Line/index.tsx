import React from "react";
import { BsFillDiamondFill } from "react-icons/bs";
import * as S from "./styled";

interface LineProps {
  start?: boolean;
  horizontal?: boolean;
  end?: boolean;
  width?: string;
  height?: string;
}

function Line({ start, end, width, height, horizontal }: LineProps) {
  return (
    <S.LineWrapper
      // width={width}
      // height={height}
      style={{
        width,
        height,
        animationName: horizontal ? "growWidth" : "growHeight",
      }}
      className="line"
    >
      {start && (
        <BsFillDiamondFill
          size={8}
          className="start"
          style={{ left: height! === "1px" ? "unset" : "-3.5px" }}
        />
      )}
      {end && (
        <BsFillDiamondFill
          size={8}
          className="end"
          style={{ left: height! === "1px" ? "unset" : "-3.5px" }}
        />
      )}
    </S.LineWrapper>
  );
}

Line.defaultProps = {
  start: false,
  end: false,
  horizontal: true,
  width: "1px",
  height: "1px",
};

export default Line;
