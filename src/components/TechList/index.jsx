import { TechCard } from "./TechCard";
import style from "./style.module.scss";

export const TechList = () => {
    return (
        <section className="container">
            <div className={style.box}>
                <div className={style.title}>
                    <h2 className="title-2">Tecnologias</h2>
                    <button>+</button>
                </div>
                <div className={style.listSpace}>
                    <ul>
                        <TechCard />
                        <TechCard />
                        <TechCard />
                    </ul>
                </div>
            </div>
        </section>
    )
}