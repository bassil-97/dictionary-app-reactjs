import React, { useContext } from "react";
import Provider from "../shared/Provider/Provider";
import useThemeToggle from "../hooks/useThemeToggle";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const { theme, toggleTheme } = useThemeToggle();

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <Provider themeColor={theme}>{children}</Provider>
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
