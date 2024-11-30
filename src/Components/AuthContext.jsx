import React,{ useContext, useState } from "react"


const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

function AuthWrapper({children}){
    const [userData, setUserData] = useState(null);
    return <AuthContext.Provider value={{setUserData,userData}}>
        {children}
    </AuthContext.Provider>
}

export default AuthWrapper