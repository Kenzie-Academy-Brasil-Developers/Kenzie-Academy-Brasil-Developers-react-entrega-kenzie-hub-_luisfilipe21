import  Input  from "../../Input";
import style from './style.module.scss';

export const LoginForm = () => {
    return (
        <div>
            <form className={style.displayForm}>
                <Input type="email" label="Email" />
                <Input type="password" label="Senha"/>
                <button className="btn login">Entrar</button>
                <p className="headlineBold">Ainda não possui conta?</p>
                <button className="btn cadastrar">Cadastre-se</button>
            </form>
        </div>
    )
}