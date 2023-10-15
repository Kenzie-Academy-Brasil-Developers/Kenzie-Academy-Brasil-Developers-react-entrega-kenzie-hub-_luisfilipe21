import { forwardRef } from "react";
import style from "./style.module.scss"

export default forwardRef(({ label }, ref) => {
    return (
        <>
            <label className="labled">{label}</label>
            <select 
            ref={ref}
            className={style.selectBox}
            >
                <option>
                    Primeiro módulo
                </option>
                <option>
                    Segundo módulo
                </option>
                <option>
                    Terceiro módulo
                </option>
                <option>
                    Quarto módulo
                </option>
            </select>
        </>
    )
})