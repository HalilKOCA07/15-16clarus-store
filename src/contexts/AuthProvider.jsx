import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContexts = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")) || null);
    const navigate = useNavigate()
    console.log(user)

    const login = (info) => {
        setUser(info)
        navigate("/dashboard")
    }

    useEffect(() => {
      sessionStorage.setItem("user", JSON.stringify(user))
    }, [user])

  return (
    <AuthContexts.Provider value={{ user, login }}>{children}</AuthContexts.Provider>
  );
};

export default AuthProvider;
