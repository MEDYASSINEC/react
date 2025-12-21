import { useContext } from "react";
import { userContext } from "../App";

export function useAuth() {
  const { setAutentifiedUser } = useContext(userContext);

  const login = (user) => {
    setAutentifiedUser(user);
  };

  const logout = () => {
    setAutentifiedUser(null);
  };

  return {
    login,
    logout,
  };
}
