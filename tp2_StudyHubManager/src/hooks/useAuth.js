import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";

export function useAuth() {
  const navigate = useNavigate();
  const { setAutentifiedUser } = useContext(userContext);

  const login = (user) => {
    setAutentifiedUser(user);
  };

  const logout = () => {
    setAutentifiedUser(null);
    navigate('/login')
  };

  return {
    login,
    logout,
  };
}
