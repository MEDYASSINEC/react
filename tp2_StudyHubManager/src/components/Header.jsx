import { useContext } from "react";
import ThemeContext, { ThemeToggle } from "../context/ThemeContext";


function Header() {
//   const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header >
      <ThemeToggle></ThemeToggle>
    </header>
  );
}

export default Header;
