import  Input  from "../../Input";
import style from './style.module.scss';

export default () => {
    return (
        <form className={style.formBox} >
            <Input type="text" label={"Nome"}/>
            <Input type="email" label={"Email"}/>
            <Input type="password" label={"Senha"}/>
            <Input type="password" label={"Confirmar senha"}/>
            <Input type="text" label={"Bio"}/>
            <Input type="tel" label={"Contato"}/>
            {/*Select  */}
            <Input />
            <button type="submit" className="btn login">Cadastrar</button>
        </form>
    )
}