import React from "react";
import style from "./filledButton.module.css"

const FilledButton = ({text, color, padding}) => {
    return (
        <button className={style.btn} style={{background: color, padding: padding}}>
            <span>{text}</span>
        </button>
    )
}

export default FilledButton