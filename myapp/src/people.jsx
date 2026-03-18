import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function People({p}){
    const {theme} = useContext(ThemeContext);
    return(
        <div className={`${theme=="light"?"bg-white text-black":"bg-black text-white"}`}>
            <p>My name is {p.name}</p>
            <p>My rollno is {p.rollno}</p>
            <p>Currently living inside {p.city}</p>
            <p>I have completed {p.course} inside {p.university}</p>
        </div>
    );

}

export default People;