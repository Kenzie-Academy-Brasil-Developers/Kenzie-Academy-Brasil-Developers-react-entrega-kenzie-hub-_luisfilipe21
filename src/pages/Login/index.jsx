import { LoginForm } from "../../components/forms/LoginForm";
import Logo from '../../assets/Logo.svg';
import style from './style.module.scss';

export default () => {
    return (
        <>
            <div className="container">
                <header>
                    <img src={Logo}/>
                </header>
                <section>
                    <div className={style.login}>
                        <h1 className="title-1">Login</h1>
                        <LoginForm />
                    </div >
                </section>
            </div >
        </>
    )
}