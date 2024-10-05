const Demo=()=>{
 
    const textVal=(e)=>{
        let nm=e.target.name;
        let val=e.target.value;
        alert("value : " +val+ "  name :"+nm);
    }

    return(
        <>
        <h1>cybrom</h1>
        Enter name:<input type="text" value="city" name="Indore :" onClick={textVal}/>
       
        </>
    ) 
}
export default Demo;