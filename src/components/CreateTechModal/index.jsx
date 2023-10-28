import { useForm } from "react-hook-form";
import { Input } from "../Input";
import style from "./style.module.scss"
import { SelectTech } from "../forms/SelectTech";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

export const CreateTechModal = () => {

    const {createTechs, setTechModal} = useContext(TechContext);
    const {register, handleSubmit} = useForm();

    const submit = (formData) => {
        createTechs(formData)
    }
    
    return (
        <div className={style.formBox}>
            <div className={style.formHeader}>
                <h3 className="title-3">Cadastrar Tecnologia</h3>
                <p onClick={() => setTechModal(false)}>X</p>
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <Input 
                type="text"
                {...register("title")}
                placeholder="Tecnologia"
                label="Nome" 
                id="title"
                 />

                <SelectTech
                label="Selecionar status"
                {...register("status")}
                id="status"
                />

                <button type="submit" className="btn login">Cadastrar Tecnologia</button>
            </form>
        </div>
    )
}