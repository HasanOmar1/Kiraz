import { useState } from "react";

const useFilterByColorAndSize = () => {
  const [isColorChecked, setIsColorChecked] = useState({
    green: false,
    black: false,
    blue: false,
  });

  const [isSizeChecked, setIsSizeChecked] = useState({
    L: false,
    M: false,
    S: false,
  });

  const checkIfColorOrSizeIsChecked = () => {
    let filterByColorAndSize = "";
    for (const color in isColorChecked) {
      if (isColorChecked[color as keyof typeof isColorChecked]) {
        filterByColorAndSize += `&color=${color}`;
      }
    }

    for (const size in isSizeChecked) {
      if (isSizeChecked[size as keyof typeof isSizeChecked]) {
        filterByColorAndSize += `&size=${size}`;
      }
    }
    return filterByColorAndSize;
  };

  return {
    checkIfColorOrSizeIsChecked,
    isColorChecked,
    setIsColorChecked,
    isSizeChecked,
    setIsSizeChecked,
  };
};

export default useFilterByColorAndSize;
