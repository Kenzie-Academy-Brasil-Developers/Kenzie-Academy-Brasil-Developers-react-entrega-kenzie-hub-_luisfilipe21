import style from './style.module.scss'

export default ({type, label}) => {
    return (
        <>
            <label type={type} className={`labled ${style.labled}`} >{label}</label>
            <input type={type} className={`inputBox ${style.inputBox}`}/>        
        </>
    )
}