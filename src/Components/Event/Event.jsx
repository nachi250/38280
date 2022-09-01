import React from "react";
import { useState } from "react";

const Event = ()=>{
    const vocales = ['a','e','i','o','u']
    const [value, setValue] = useState('')

        const onInput = (evt) => {
            setValue(evt.target.value)
    
            if (value === 'a' || value === 'e' ||value === 'i' ||value === 'o' ||value === 'u'){
                console.log('ingresaste vocal: ', value)
                setValue('')
                evt.target.value = ''
            }
        }

    return(
        <div>
            <input type="text" onChange={onInput} value={value}/>
        </div>
    )
}

export default Event 