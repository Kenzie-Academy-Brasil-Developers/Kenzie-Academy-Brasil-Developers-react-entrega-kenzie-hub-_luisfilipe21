import { useForm } from "react-hook-form";
import { Input } from "../Input";
import style from "./style.module.scss";
import { TechContext } from "../../providers/TechContext";
import { useContext } from "react";
import { Select } from "../Select";

export const EditTechModal = () => {
    const { setTechEdit, techEdit, techUpdate } = useContext(TechContext);

    const { register, handleSubmit } = useForm({
        values: {
            status: techEdit.status,
            title: techEdit.title
        }
    });

    const submit = (formData) => {
        techUpdate(formData);
    }

    return (
        <div className={style.formSection}>
            <div className={style.formBox}>
                <div className={style.formHeader}>
                    <h3 className="title-3">Tecnologia Detalhada</h3>
                    <p onClick={() => setTechEdit(false)}>X</p>
                </div>

                <form onSubmit={handleSubmit(submit)}>
                    <Input
                        type="text"
                        {...register("title")}
                        placeholder="Tecnologia"
                        label="Nome"
                        disabled
                    />
                    <Select
                        label="Selecionar status"
                        {...register("status")}
                        id="status"
                    >
                        <option disabled>
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
                    <button type="submit" className="btn login">Salvar Alterações</button>

                </form>
            </div>
        </div>
    )
}