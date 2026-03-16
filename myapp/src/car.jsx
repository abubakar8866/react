import React from "react";

function Car({car}){
    return(
        <div>
            <p>About me</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe atque optio debitis</p>
            <p>{car.name} is in {car.color} color.</p>
        </div>
    );
}

export default Car;