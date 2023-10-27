import {Input} from "../../Input";
import style from "./style.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import {Select} from "../../Select";
import { useState } from "react";

export const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerFormSchema)
    })

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const submit = async (formData) => {
        try {
            await api.post("/users", formData);
            navigate("/");
            toast.success("Cadastro realziado com sucesso!");
            setLoading(true);
        } catch (error) {
            toast.error("Algo deu errado...")
        }finally{
            setLoading(false)
        }
    }


    return (
        <form className={style.formBox} onSubmit={handleSubmit(submit)}>
            <Input
                type="text"
                label="Nome"
                {...register("name")}
                errors={errors.name}
                placeholder="Digite aqui o seu nome"
            />

            <Input
                type="email"
                {...register("email")}
                label="Email"
                errors={errors.email}
                placeholder="Digite aqui o seu email"
            />

            <Input
                type="password"
                {...register("password")}
                label="Senha"
                errors={errors.password}
                placeholder="Digite aqui sua senha "
            />

            <Input
                type="password"
                {...register("confirmPassword")}
                label="Confirmar senha"
                errors={errors.confirmPassword}
                placeholder="Digite novamente sua senha"
            />

            <Input
                type="text"
                label="Bio"
                {...register("bio")}
                errors={errors.bio}
                placeholder="Fale sobre você"
            />

            <Input
                type="tel"
                label="Contato"
                {...register("contact")}
                errors={errors.contact}
                placeholder="Opção de contato"
            />


            <Select
                errors={errors.course_module}
                label="Selecionar módulo"
                {...register("course_module")}
                
            />
            <button type="submit" className="btn login" disabled={loading}>Cadastrar</button>
        </form>
    )
}