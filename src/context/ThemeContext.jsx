
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {

  const [theme, setTheme] = useState(() => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme;
    }

    return "light";

  });

  useEffect(() => {

    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);

  }, [theme]);

  const toggleTheme = () => {

    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }

  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );

}

export default ThemeProvider;
