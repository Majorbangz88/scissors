import React from "react";
import style from "./filledButton.module.css"

const FilledButton = ({text, color}) => {
    return (
        <button className={style.btn} style={{background: color}}>
            <span>{text}</span>
        </button>
    )
}

export default FilledButton