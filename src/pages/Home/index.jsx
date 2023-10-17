import style from "./style.module.scss";
import Logo from "../../assets/Logo.svg";

export const HomePage = ({user, exit}) => {

    return (
        <>
            <header className="container">
                <div className={style.headerContainer}>
                    <img src={Logo} />
                    <button className="btn sair" onClick={() => exit()} >Sair</button>
                </div>
            </header>
            <section>
                <div className="container">
                    <hr/>
                    <div className={style.user}>
                        <h1 className="title-1">Olá, {user?.name}</h1>
                        <p className="headline"> {user?.course_module}</p>
                    </div>
                    <hr/>
                    <div className={style.info}>
                        <h2 className="title-1">Que pena! Estamos em desenvolvimento :(</h2>
                        <p className="headline">Nossa aplicação está em desenvolvimento, em rbeve teremos novidades</p>
                    </div>
                </div>
            </section>
        </>
    )
}