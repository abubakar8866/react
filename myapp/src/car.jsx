import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Car({car}){
    const {theme} = useContext(ThemeContext); 
    return(
        <div className={`${theme=="light"?"bg-white text-black":"bg-black text-white"}`}>
            <p>About me</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe atque optio debitis</p>
            <p>{car.name} is in {car.color} color.</p>
        </div>
    );
}

export default Car;