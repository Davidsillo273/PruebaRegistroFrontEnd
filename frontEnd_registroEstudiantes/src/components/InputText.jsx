import React from "react";

const InputText=({type, value, onChange, placeHolder})=>{
    return(
        <input type={type} value={value} onChange={onChange} placeholder = {placeHolder}/>
    )
}

export default InputText