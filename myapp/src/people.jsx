import React from "react";

function People({p}){

    return(
        <div>
            <p>My name is {p.name}</p>
            <p>My rollno is {p.rollno}</p>
            <p>Currently living inside {p.city}</p>
            <p>I have completed {p.course} inside {p.university}</p>
        </div>
    );

}

export default People;