import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContexts = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
    const navigate = useNavigate()

    const login = (info) => {
        setUser(info);
        navigate("/home")
    }

  return (
    <AuthContexts.Provider value={{ user, login }}>{children}</AuthContexts.Provider>
  );
};

export default AuthProvider;
