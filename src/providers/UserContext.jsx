import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../components/services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const pathName = window.location.pathname;

    const { state } = useLocation();

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
                const { data } = await api.get(`/users/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUser(data);
                navigate(pathName);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }
        getUser();
    }, [])

    return (
        <UserContext.Provider value={{ exit, user, setUser, loading }}>
            {children}
        </UserContext.Provider>
    )
} 