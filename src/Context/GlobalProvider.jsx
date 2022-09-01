import React, {createContext} from "react";
import { useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
    let superHeroe = 'Superman'
    const [numeros, setNumeros] = useState(['1', '2', '3', '4', '5'])


    return (
        <GlobalContext.Provider>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider 