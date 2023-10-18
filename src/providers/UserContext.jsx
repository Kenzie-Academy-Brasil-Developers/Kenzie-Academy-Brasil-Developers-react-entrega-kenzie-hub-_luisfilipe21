import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

    const [ user, setUser ] = useState(null);

    const navigate = useNavigate();

    const exit = () => {
        setUser(null);
        navigate("/");
        localStorage.removeItem("@KenzieHub/login");
    }
    

    return (
        <UserContext.Provider value={{exit, user, setUser}}>
            {children}
        </UserContext.Provider>
    )
} 