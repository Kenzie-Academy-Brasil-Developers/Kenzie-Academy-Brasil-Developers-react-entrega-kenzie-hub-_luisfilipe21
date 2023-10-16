import { useState } from "react";
import { api } from "../../components/services/api";
import style from "./style.module.scss";
import Logo from '../../assets/Logo.svg'

export default () => {

    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     const getToken = localStorage.getItem("@KenzieHub/login");

    //     const getList = async () => {
    //         const { data } = await api.get("/users", {
    //             headers: {
    //                 Authorization: `Bearer ${getToken}`
    //             },
    //         })
    //         setProducts(data);
    //     }
    //     getList();
    // }, [])

    return (
        <>
            <header className="container">
                <div className={style.headerContainer}>
                    <img src={Logo} />
                    <button className='btn sair '>Sair</button>
                </div>
            </header>
            <section>
                <div className="container">
                    <div>
                        <h1 className="title-1">Olá Pessoa!</h1>
                        <p className="headline"> Módulo escolhido</p>
                    </div>
                    <div>
                        <h2 className="title-1">Que pena! Estamos em desenvolvimento :(</h2>
                        <p>Nossa aplicação está em desenvolvimento, em rbeve teremos novidades</p>
                    </div>
                </div>
            </section>
        </>
    )
}