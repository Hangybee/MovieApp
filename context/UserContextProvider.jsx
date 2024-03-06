import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) =>{
    const [name, setName] = useState('')

    return(
        <UserContext.Provider value = {{name, setName}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider