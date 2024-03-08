import React, { useState } from "react";
import UserContext from "./UserContext";
import { useColorScheme } from "react-native";

const UserContextProvider = ({children}) =>{
    const [name, setName] = useState('')
    const [dark, setDark] = useState(useColorScheme() === 'dark'?true:false)
    console.log('sssssssss32333', dark)
    return(
        <UserContext.Provider value = {{name, setName, dark, setDark}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider