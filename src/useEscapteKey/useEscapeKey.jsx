import React from "react";

export const useEscapeKey = (callback) => {
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
};
