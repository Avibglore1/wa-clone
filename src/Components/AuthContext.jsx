import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React,{ useContext, useEffect, useState } from "react"
import { auth, db } from "../../firebase";


const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

function AuthWrapper({children}){
    const [userData, setUserData] = useState(null);
    useEffect(()=>{
        onAuthStateChanged(auth, async (currentUser)=>{
            if (currentUser){
                const docRef = doc(db, 'users', currentUser?.uid);
                const docSnap = await getDoc(docRef);
                if(docSnap.exists()){
                    const {uid,photoURL,displayName,email} = docSnap.data();
                    setUserData({
                     id: uid,
                     profile_pic:photoURL,
                     name:displayName,
                     email
                    })

                }
            }
    })
        },[])
    
    return <AuthContext.Provider value={{setUserData,userData}}>
        {children}
    </AuthContext.Provider>
}

export default AuthWrapper