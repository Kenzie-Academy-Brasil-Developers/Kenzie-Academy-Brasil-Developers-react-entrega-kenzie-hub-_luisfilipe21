import Image from "../../assets/loadingImage.svg";
import style from "./style.module.scss";

export const LoadingPage = () => {
    return (
        <div className={style.loading}>
            <img src={Image} alt="Loading Icon"/>
        </div>
    )
}