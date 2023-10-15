
import style from './style.module.scss'

export default () => {
    return (
        <header className="container">
            <div className={style.headerContainer}>
                <img src={Logo} />
                <button className='btn sair '>Voltar</button>
            </div>
        </header>
    )
}