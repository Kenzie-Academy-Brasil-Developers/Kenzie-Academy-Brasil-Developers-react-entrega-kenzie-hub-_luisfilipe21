import { useState } from "react";
import Header from "../../components/Header";
import { api } from "../../components/services/api";

export default () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getToken = localStorage.getItem("@KenzieHub/login");

        const getList = async () => {
            const { data } = await api.get("/users", {
                headers: {
                    Authorization: `Bearer ${getToken}`
                },
            })
            setProducts(data);
        }
        getList();
    }, [])

    return (
        <>
            <Header />
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