import { Link } from "react-router-dom";
import RegisterForm from "../../components/forms/RegisterForm";
import Logo from "../../assets/Logo.svg";
import style from "./style.module.scss"

export default () => {

    return (
        <div className="container">
            <div className={style.header}>
                <img src={Logo} />
                <Link to="/" className={style.btn}>Voltar</Link>
            </div>
            <div>
                <div className={style.register}>
                    <h1 className="title-1">Crie sua conta</h1>
                    <p className="headline">Rápido e grátis, vamos nessa</p>
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}