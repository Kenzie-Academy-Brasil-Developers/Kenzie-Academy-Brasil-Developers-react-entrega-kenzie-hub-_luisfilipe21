import { forwardRef } from "react";
import style from "./style.module.scss"

export default forwardRef(({ label, id, ...rest }, ref) => {
    
    return (
        <>
            <label className="labled">{label}</label>
            <select
                className={style.selectBox}
                ref={ref}
                {...rest}
                id={id}
            >
                <option value="primeiro">
                    Primeiro módulo
                </option>

                <option value="segundo">
                    Segundo módulo
                </option>

                <option value="terceiro">
                    Terceiro módulo
                </option>

                <option value="quarto">
                    Quarto módulo
                </option>
            </select>
        </>
    )
})