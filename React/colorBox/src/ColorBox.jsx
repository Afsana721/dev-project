import { useState } from "react";
import "./ColorBox.css";

function ColorBox({colors}) {
    const [color, setColor] =useState("purple");
    const changeColor = () => {
    let index = Math.floor(Math.random() * colors.length);
//gives us a random color
    const randomColor = colors[index];
        setColor(randomColor);
    }
    return (
        <div className="ColorBox" 
        style={{backgroundColor: color}}
        onClick={changeColor}>

        </div>
    )

}

export default ColorBox;