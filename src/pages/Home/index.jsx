import  Header  from "../../components/Header";

export default () => {
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