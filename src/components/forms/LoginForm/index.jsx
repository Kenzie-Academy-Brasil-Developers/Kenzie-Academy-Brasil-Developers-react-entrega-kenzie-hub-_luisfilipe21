import { useForm } from "react-hook-form";
import Input from "../../Input";
import style from './style.module.scss';
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginForm.schema";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginFormSchema), 
    })

    const navigate = useNavigate()

    const submit = async (payload) => {
        try {
            const {data} = await api.post("/sessions", payload);
            localStorage.setItem("@KenzieHub/login", data.access);
            navigate("/");
            toast.success("Vamos entrando.");
        } catch (error) {
            
            toast.error("Algo deu errado.");
        }
    }


    return (
        <div>
            <form className={style.displayForm} onSubmit={handleSubmit(submit)}>
                <Input
                    type="email"
                    {...register("email")}
                    label="Email"
                    errors={errors.email}
                    placeholder="Digite seu email"
                />

                <Input
                    type="password"
                    {...register("password")}
                    label="Senha"
                    errors={errors.password}
                    placeholder="Digite sua senha "
                />

                <button className="btn login">Entrar</button>
                <p className="headlineBold">Ainda não possui conta?</p>
                <Link to="/register" className={`btn cadastrar ${style.btnLink}`}>Cadastre-se</Link>
            </form>
        </div>
    )
}