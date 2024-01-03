/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ThemContext = createContext({});

export const ThemContextProvider = ({ children }) => {
  const [darkModeEnable, setDarkModeEnable] = useState(false);
  return (
    <ThemContext.Provider value={{ darkModeEnable, setDarkModeEnable }}>
      {children}
    </ThemContext.Provider>
  );
};
