
import { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";

import { ThemeContext } from "../../context/ThemeContext";
import "./ThemeToggle.css";

function ThemeToggle() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (

    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={
        theme === "light"
          ? "Switch to dark theme"
          : "Switch to light theme"
      }
      title={theme === "light" ? "Dark Theme" : "Light Theme"}
      type="button"
    >

      <span className="theme-toggle-icon">

        {theme === "light" ? <FaMoon /> : <FaSun />}

      </span>

    </button>

  );

}

export default ThemeToggle;
