import { useForm } from "react-hook-form";
import { Input } from "../Input";
import style from "./style.module.scss";
import { SelectTech } from "../forms/SelectTech";
import { TechContext } from "../../providers/TechContext";
import { useContext } from "react";

export const EditTechModal = () => {
    const {createTechs} = useContext(TechContext)    
    const {register, handleSubmit} = useForm();


    const submit = (formData) => {
        createTechs(formData)
    }

    return (
        <div className={style.formBox}>
            <div className={style.formHeader}>
                <h3 className="title-3">Tecnologia Detalhada</h3>
                <p>X</p>
            </div>
            <form onClick={handleSubmit(submit)}>
                <Input 
                type="text"
                {...register("title")}
                placeholder="Tecnologia"
                label="Nome" 
                />
                <SelectTech 
                label="Selecionar status"
                {...register("status")}
                />
                <button type="submit" className="btn login">Salvar Alterações</button>
            </form>
        </div>
    )
}