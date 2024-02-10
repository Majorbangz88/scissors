import style from "./ghostButton.module.css";

const GhostButton = ({text, color}) => {
   
    return (
        <div>
            <button className={style.btn} style={{background: color}}>
                <span>{text}</span>
            </button>
        </div>
    );
}
export default GhostButton;