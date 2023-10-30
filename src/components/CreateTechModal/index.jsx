import { useForm } from "react-hook-form";
import { Input } from "../Input";
import style from "./style.module.scss"
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { Select } from "../Select";

export const CreateTechModal = () => {

    const { createTechs, setTechModal } = useContext(TechContext);
    const { register, handleSubmit } = useForm();

    const submit = (formData) => {
        createTechs(formData)
    }

    return (
        <div className={style.formSection}>

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

                    <Select
                        label="Selecionar status"
                        {...register("status")}
                        id="status"
                    >
                        <option>
                            Selecione um módulo
                        </option>
                        <option value="Iniciante">
                            Iniciante
                        </option>

                        <option value="Intermediário">
                            Intermediário
                        </option>

                        <option value="Avançado">
                            Avançado
                        </option>
                    </Select>

                    <button type="submit" className="btn login">Cadastrar Tecnologia</button>
                </form>
            </div>
        </div>
    )
}