import { Input } from "../Input";
import { Select } from "../Select";
import style from "./style.module.scss"

export const CreateTechModal = () => {
    return (
        <div className={style.formBox}>
            <div className={style.formHeader}>
                <h3 className="title-3">Cadastrar Tecnologia</h3>
                <p>X</p>
            </div>
            <form>
                <Input />
                <Select />
                <button className="btn login">Cadastrar Tecnologia</button>
            </form>
        </div>
    )
}