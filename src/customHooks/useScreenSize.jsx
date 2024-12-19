import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    const updateScreenSize = () => {
      if (window.matchMedia("(max-width: 639px)").matches) {
        setScreenSize("xs");
      } else if (
        window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches
      ) {
        setScreenSize("md");
      } else {
        setScreenSize("");
      }
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return screenSize;
};

export default useScreenSize;
