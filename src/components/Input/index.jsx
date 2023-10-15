import { forwardRef } from 'react'
import style from './style.module.scss'

export default forwardRef (({label, errors, ...rest}, ref) => {
    return (
        <>
            <label
            className={`labled ${style.labled}`}
            >
                {label}
            </label>

            <input 
            ref={ref}
            {...rest} 
            className={`inputBox ${style.inputBox}`}
            />        
        </>
    )
})