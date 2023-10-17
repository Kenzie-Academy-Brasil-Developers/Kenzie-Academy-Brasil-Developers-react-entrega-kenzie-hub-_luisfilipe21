import { forwardRef } from "react";
import style from "./style.module.scss";

export const Input = forwardRef (({label, errors, ...rest}, ref) => {
    return (
        <>
            <label
            className={`labled ${style.labled}`}
            >
                {label}
            </label>
            {errors ? <span className="headlineBold" >{errors.message}</span> : null}
            <input 
            ref={ref}
            {...rest} 
            className={`inputBox ${style.inputBox}`}
            />        
        </>
    )
})