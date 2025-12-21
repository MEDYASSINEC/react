import { ThemeToggle } from "../context/ThemeContext";


function Header() {

  return (
    <header className="header">
        <div className="header-content">
            <h1 className="header-title">StudyHub Manager</h1>
            <ThemeToggle></ThemeToggle>
        </div>
    </header>
  );
}

export default Header;
