import React, { useState } from "react";
import {UserContext} from "./Context";

export const UserContextProvider = ({children}) => {
    const [data1, setData1] = useState({})
    
    
    
    return(
        <UserContext.Provider value={{ data1, setData1}}>
        {children}
        </UserContext.Provider>
    )
}
