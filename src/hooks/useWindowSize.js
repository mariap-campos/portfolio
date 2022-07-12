import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isPortrait:
          window.screen &&
          window.screen.orientation &&
          window.screen.orientation.angle
            ? !window.screen.orientation.angle
            : true,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
