import { ThemeToggle } from "../context/ThemeContext";
import { useContext } from "react";
import { userContext } from "../App";
import { useAuth } from "../hooks/useAuth";


function Header() {
  const { autentifiedUser } = useContext(userContext);
  const { logout } = useAuth();


  return (
    <header className="header">
        <div className="header-content">
            <h1 className="header-title">StudyHub Manager</h1>
            <div className="header-actions">
              {autentifiedUser && (<button onClick={logout} className="btn btn-danger">log out</button>)}
              <ThemeToggle></ThemeToggle>
            </div>
        </div>
    </header>
  );
}

export default Header;
