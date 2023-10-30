import { forwardRef } from "react";
import style from "./style.module.scss";

export const SelectTech = forwardRef(({ label, ...rest }, ref) => {

    return (
        <>
            <label className="labled">{label}</label>
            <select
                className={style.selectBox}
                ref={ref}
                {...rest}
            >
                
            </select>
        </>
    )
})