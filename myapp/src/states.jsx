import React,{useState,useEffect, useContext} from "react";
import img1 from "./assets/hero.png";
import img2 from "./assets/react.svg";
import { ThemeContext } from "./ThemeContext";

function State(){
    const [count,setCount] = useState(0);
    const [img,Setimg] = useState(img1);
    const {theme} = useContext(ThemeContext);

    function changeImg(){
        Setimg((i) => i==img1 ? img2 : img1);
    }

    //nothing -- then call once when page loaded + all useState var changes
    //[] -- then calling once when page loaded.
    //[arg] -- run on page load plus when arg is changes

    useEffect(()=>{
        alert("UseEffect calling");
    });    

    return(
        <div className={`${theme=="light"?"bg-white text-black":"bg-black text-white"}`}>
            <button onClick={() => setCount(count+1)}>Click</button>
            <p>{count}</p>
            <img src={img} alt="" onClick={changeImg}/>
        </div>
    );
}

export default State;