import { Input } from "../Input";
import { Select } from "../Select";
import style from "./style.module.scss";

export const EditTechModal = () => {
    return (
        <div className={style.formBox}>
            <div className={style.formHeader}>
                <h3 className="title-3">Tecnologia Detalhada</h3>
                <p>X</p>
            </div>
            <form>
                <Input />
                <Select />
                <button className="btn login">Salvar Alterações</button>
            </form>
        </div>
    )
}