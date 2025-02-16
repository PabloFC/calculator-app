// useCalculator.js
import { useState } from "react";

export const useCalculator = (maxInputNumbers) => {
  const [inputValue, setInputValue] = useState("");

  const handleButtonsClick = (value) => {
    if (value === "=") {
      try {
        if (inputValue.includes("/0")) {
          setInputValue("Can't divide by 0");
          return;
        }
        const calculatedResult = eval(inputValue);
        setInputValue(calculatedResult.toString());
      } catch {
        setInputValue("Error");
      }
    } else if (value === "DEL") {
      setInputValue((prevValue) => prevValue.slice(0, -1));
    } else if (value === "RESET") {
      setInputValue("");
    } else {
      setInputValue((prevValue) => {
        const numberCount = prevValue.replace(/[^0-9]/g, "").length;

        if (value.match(/[0-9]/) && numberCount >= maxInputNumbers) {
          return prevValue;
        }

        const lastChar = prevValue.slice(-1);
        if (value.match(/[+\-*/]/) && lastChar.match(/[+\-*/]/)) {
          return prevValue;
        }
        return prevValue + value;
      });
    }
  };

  return { inputValue, handleButtonsClick };
};
