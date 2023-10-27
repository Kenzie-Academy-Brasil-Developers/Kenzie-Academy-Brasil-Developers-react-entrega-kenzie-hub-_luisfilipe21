import style from "./style.module.scss";
import  Caneta  from "../../../assets/caneta.svg";
import  Lixeira  from "../../../assets/lixeira.svg"

export const TechCard = ({techs}) => {
    
    return (
        <li className={style.card}>
            <div className={style.tech}>
                <h4 className="title-3">{techs.title}</h4>
            </div>
            <div className={style.divButtons}>
                <p className="headlineBold">{techs.status}</p>
                <button><img src={Caneta} alt="Editar" /></button>
                <button><img src={Lixeira} alt="Excluir" /></button>
            </div>
        </li>
    )
}