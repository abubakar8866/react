import React from "react";

function Home({n}){
    return(
        <div>
            <h1 className="demo">Home</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minus dolorum quia?</p>
            <h3>My name is {n}</h3>
        </div>
    );
}

export default Home;