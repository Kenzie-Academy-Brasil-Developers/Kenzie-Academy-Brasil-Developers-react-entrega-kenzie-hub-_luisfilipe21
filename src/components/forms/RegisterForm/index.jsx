import Input from "../../Input";
import style from './style.module.scss';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import Select from "../../Select";

export default () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerFormSchema)
    })

    const navigate = useNavigate();

    const submit = async (payload) => {
        console.log(payload)
        try {
            await api.post("/users", payload);
            navigate("/dashboard");
            toast.success("Cadastro realziado com sucesso!")
        } catch (error) {
            console.log(error.message)
            toast.error("Algo deu errado...")
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
                id="course_module"
            />
            <button type="submit" className="btn login">Cadastrar</button>
        </form>
    )
}