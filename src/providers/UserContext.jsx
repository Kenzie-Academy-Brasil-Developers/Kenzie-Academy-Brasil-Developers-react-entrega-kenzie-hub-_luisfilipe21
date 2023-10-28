import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../components/services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    
    const [techList, setTechList] = useState([]);

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const pathName = window.location.pathname;

    const exit = () => {
        setUser(null);
        navigate("/");
        localStorage.removeItem("@KenzieHub/login");
        localStorage.removeItem("@User");
    }

    useEffect(() => {
        const token = localStorage.getItem("@KenzieHub/login");
        const userId = localStorage.getItem("@User");

        const getUser = async () => {
            try {
                setLoading(true);
                const { data } = await api.get(`/profile`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUser(data);
                setTechList(data.techs)
                navigate(pathName);
                // navigate(state?.lastRoute ? state.lastRoute : pathName);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }
        getUser();
    }, [])

    return (
        <UserContext.Provider value={{ exit, user, setUser, loading, techList, setTechList}}>
            {children}
        </UserContext.Provider>
    )
} 