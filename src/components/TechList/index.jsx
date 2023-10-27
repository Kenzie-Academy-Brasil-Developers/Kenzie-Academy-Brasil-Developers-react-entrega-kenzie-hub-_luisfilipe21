import { useContext } from "react";
import { TechCard } from "./TechCard";
import style from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";

export const TechList = () => {
    const { techList } = useContext(UserContext);
    
    return (
        <section className="container">
            <div className={style.box}>
                <div className={style.title}>
                    <h2 className="title-2">Tecnologias</h2>
                    <button>+</button>
                </div>
                <div className={style.listSpace}>
                    <ul>
                        {
                            techList.map((techs) => (
                                <TechCard key={techs.id} techs={techs} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}