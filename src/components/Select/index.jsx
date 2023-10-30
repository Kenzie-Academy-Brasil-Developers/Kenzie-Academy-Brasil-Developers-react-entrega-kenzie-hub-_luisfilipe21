import { forwardRef } from "react";
import style from "./style.module.scss";

export const Select = forwardRef(({ children, label, ...rest }, ref) => {

    return (
        <>
            <label className="labled">{label}</label>
            <select
                className={style.selectBox}
                ref={ref}
                {...rest}
            >
                {children}
            </select>
        </>
    )
})