// useTheme.js
import { useState, useEffect } from "react";

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState("theme1");
  const [translateX, setTranslateX] = useState("0px");

  const themes = ["theme1", "theme2", "theme3"];
  const translateXValues = ["0px", "22px", "44px"];

  useEffect(() => {
    document.body.classList.add(currentTheme);
  }, [currentTheme]);

  const handleThemeChange = () => {
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nexTheme = themes[nextIndex];

    document.body.className = nexTheme;
    setCurrentTheme(nexTheme);
    setTranslateX(translateXValues[nextIndex]);
  };

  return { currentTheme, translateX, handleThemeChange };
};
