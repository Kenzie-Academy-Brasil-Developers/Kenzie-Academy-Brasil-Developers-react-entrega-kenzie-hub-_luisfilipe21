import { createContext, useContext, useEffect, useState } from "react"
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";
import { api } from "../components/services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {

    const { user, techList, setTechList } = useContext(UserContext);

    
    useEffect(() => {
        const getTechList = async () => {
            try {
                const token = localStorage.getItem("@User");
                const { data } = await api.get(`/users/${token}`);
                setTechList(data);
            } catch (error) {
                toast.error(error.message);
            }
        }
        getTechList();
    }, [])

    const createTechs = async (formData) => {
        try {
            const token = localStorage.getItem("@User")
            const { data } = await api.post("/users/techs", formData, {
                headers: {Authorization: `Bearer ${token}`},
            });
            console.log(data);
            setTechList([...techList, data])
            toast.success("Post criado")
        } catch (error) {
            if(error.response.status === 401){
                toast.error("Tecnologia já cadastrada");
            }
        }
    }

    return (
        <TechContext.Provider value={{ createTechs }}>
            {children}
        </TechContext.Provider>
    )
}