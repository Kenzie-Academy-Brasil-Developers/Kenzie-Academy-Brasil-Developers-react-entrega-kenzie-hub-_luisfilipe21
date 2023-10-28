import style from "./style.module.scss";
import  Caneta  from "../../../assets/caneta.svg";
import  Lixeira  from "../../../assets/lixeira.svg"
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export const TechCard = ({techs}) => {
    const {setTechEdit, deleteTech} = useContext(TechContext)
    
    return (
        <li className={style.card}>
            <div className={style.tech}>
                <h4 className="title-3">{techs.title}</h4>
            </div>
            <div className={style.divButtons}>
                <p className="headlineBold">{techs.status}</p>
                <button onClick={() => setTechEdit(techs)}><img src={Caneta} alt="Editar" /></button>
                <button onClick={() => deleteTech(techs.id)}><img src={Lixeira} alt="Excluir" /></button>
            </div>
        </li>
    )
}