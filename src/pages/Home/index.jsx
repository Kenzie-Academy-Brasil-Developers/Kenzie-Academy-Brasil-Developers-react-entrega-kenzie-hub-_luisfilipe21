import style from "./style.module.scss";
import Logo from "../../assets/Logo.svg";
import { UserContext } from "../../providers/UserContext";
import { useContext } from "react";
import { TechList } from "../../components/TechList";
import { CreateTechModal } from "../../components/CreateTechModal";
import { EditTechModal } from "../../components/EditTechModal";
import { TechContext } from "../../providers/TechContext";

export const HomePage = () => {

    const { exit, user } = useContext(UserContext);
    const { techModal, techEdit} = useContext(TechContext);

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
                    <hr />
                    <div className={style.user}>
                        <h1 className="title-1">Olá, {user?.name}</h1>
                        <p className="headline"> {user?.course_module}</p>
                    </div>
                    <hr />

                    <TechList />
                    {techModal ? <CreateTechModal /> : null}
                    {techEdit? <EditTechModal /> : null}
                </div>
            </section>
        </>
    )
}