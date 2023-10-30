import { createContext, useContext, useEffect, useState } from "react"
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";
import { api } from "../components/services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {

    const { setUser, techList, setTechList } = useContext(UserContext);

    const [techModal, setTechModal] = useState(false);

    const [techEdit, setTechEdit] = useState(false);
    console.log(techEdit)
    console.log(techModal)
    useEffect(() => {
        const getTechList = async () => {
            try {
                const token = localStorage.getItem("@User");
                const { data } = await api.get(`/users/${token}`);

                setTechList(data.techs);
                setUser(data);
            } catch (error) {
                toast.error(error.message);
            }
        }
        getTechList();
    }, [])

    const createTechs = async (formData) => {
        const newTech = { ...formData }
        try {
            const token = localStorage.getItem("@KenzieHub/login")
            const { data } = await api.post("/users/techs", newTech, {
                headers: { Authorization: `Bearer ${token}` },
            });

            toast.success("Post criado");
            setTechList([...techList, data]);
            setTechModal(null);
        } catch (error) {
            if (error.response.status === 401) {
                toast.error("Tecnologia já cadastrada");
            }
        }
    }

    const techUpdate = async (formData) => {
        try {
            const token = localStorage.getItem("@KenzieHub/login");

            const { data } = await api.put(`/users/techs/${techEdit.id}`, formData, {
                headers: { Authorization: `Bearer ${token}` }
            });

            const newTechEdit = techList.map(tech => {
                if (tech.id === techEdit.id) {
                    return data;
                } else {
                    return tech;
                }
            })

            toast.success("Atualizado com sucesso!")
            setTechList(newTechEdit);
            setTechEdit(null);
        } catch (error) {
            toast.error(error.message)
        }
    }

    const deleteTech = async (techId) => {
        try {
            const token = localStorage.getItem("@KenzieHub/login");

            await api.delete(`/users/techs/${techId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })

            const newTechList = techList.filter(tech => tech.id !== techId);

            setTechList(newTechList);
            toast.success("Deletado")
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <TechContext.Provider value={{ createTechs, techModal, setTechModal, techEdit, setTechEdit, techUpdate, deleteTech }}>
            {children}
        </TechContext.Provider>
    )
}