import RegisterForm from "../../components/forms/RegisterForm";
import  Header  from "../../components/Header";
import style from './style.module.scss'

export default () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className={style.register}>
                    <h1 className="title-1">Crie sua conta</h1>
                    <p className="headline">Rápido e grátis, vamos nessa</p>
                    <RegisterForm />
                </div>
            </div>
        </>
    )
}