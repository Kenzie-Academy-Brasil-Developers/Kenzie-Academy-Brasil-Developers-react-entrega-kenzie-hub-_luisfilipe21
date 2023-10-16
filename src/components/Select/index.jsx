import { forwardRef } from "react";
import style from "./style.module.scss"

export default forwardRef(({ label, ...rest }, ref) => {

    return (
        <>
            <label className="labled">{label}</label>
            <select
                className={style.selectBox}
                ref={ref}
                {...rest}
            >
                <option>
                    Selecione um módulo
                </option>
                <option value="Primeiro módulo (Introdução ao Frontend)">
                    Primeiro módulo (Introdução ao Frontend)
                </option>

                <option value="Segundo Módulo (Frontend avançado)">
                    Segundo Módulo (Frontend avançado)
                </option>

                <option value="Terceiro módulo (Introdução ao Backend)">
                    Terceiro módulo (Introdução ao Backend)
                </option>

                <option value="Quarto módulo (Backend Avançado)">
                    Quarto módulo (Backend Avançado)
                </option>
            </select>
        </>
    )
})