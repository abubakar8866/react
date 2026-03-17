import React from "react";
import { FaClock } from "react-icons/fa";

function Home({n}){
    let arr = [11,25,38,44,59,60,47,88];
    let arr2 = arr.filter((val) => val>50);
    return(
        <div>
            <h1 className="text-3xl font-bold text-blue-500">Home</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minus dolorum quia?</p>
            <h3>My name is {n}</h3>
            {
                arr2.map((item,index) => {
                    return <p key={index}>{item}</p>
                })
            }
            <FaClock />
        </div>
    );
}

export default Home;