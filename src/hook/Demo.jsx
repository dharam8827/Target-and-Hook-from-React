import { useState } from "react";


// const Demo=()=>{
//     const [name,setName]=useState("dharam singh rawat ");
//  const myName=()=>{
//     setName("yogesh rawat :");
    
//  }

//     return(
//         <>
//         <h1>my name :{name}</h1>
//         <button onClick={myName}>setName</button>
       
        
        
//         </>
//     )
// }

/*
const Demo=()=>{
    const [city,setCity]=useState("");
    const myCity=()=>{
        setCity("pune");
    }
    
    return(
        <>
        <h1>my city :{city}</h1>
        <button onClick={myCity}>click</button>
        <button onClick={()=>{setCity("bhopal")}}>change city </button>
        
        </>
    )
}*/

const Demo=()=>{
    const [color,setColor]=useState("");
    return(
        <>
        <h1 style={{color:color}}>my color :{color}</h1>
        <button onClick={()=>{setColor("Green")}}>Green</button>
        <button onClick={()=>{setColor("Yellow")}}>Yellow</button>
        <button onClick={()=>{setColor("Red")}}>Red</button>
        <button onClick={()=>{setColor("Pink")}}>Pink</button>
        <button onClick={()=>{setColor("Orange")}}>Orange</button>
        </>
    )
}

export default Demo;
