import React from 'react'
import { Fingerprint, LogIn } from 'lucide-react'
import { Navigate, useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useAuth } from './AuthContext';

async function createUser(authData){
    const userObject = authData.user;
    const uid=userObject.uid;
    const photoURL = userObject.photoURL;
    const name = userObject.displayName;
    const email = userObject.email;
    await setDoc(doc(db,'users',uid),{
        name,
        email,
        profile_pic: photoURL,
    })
    console.log('user added');
}

function Login() {
    const {setUserData,userData} = useAuth();
    const navigate = useNavigate();
    if (userData != null){
        navigate('/');
    }
    const handleLogin = async() =>{
        const userData = await signInWithPopup(auth,new GoogleAuthProvider);
        await createUser(userData);
        const userObject = userData.user;
        const {uid,photoURL,displayName,email} = userObject;
        setUserData({
            id: uid,
            profile_pic:photoURL,
            name:displayName,
            email
        })

        navigate('/');
    }
  return (
    <>
    <div className='h-[220px] bg-[#04a784]'>
        <div className='flex items-center ml-40 pt-[40px] gap-4'>
            <img src="https://whatsapp-clone-826a9.web.app/whatsapp.svg" alt="" className='h-8'/>
            <div className='text-white uppercase font-medium'>WhatsApp</div>
        </div>
    </div>
    
    <div className='bg-[#eff2f5] h-[calc(100vh-220px) relative]'>
        <div className='bg-white h-[80%] w-[60%] absolute top-[103px] left-[326px] shadow-2xl
        flex flex-col justify-center items-center gap-4 rounded-r-2xl rounded-l-2xl'>
            <Fingerprint strokeWidth={1} className='h-20 w-20 text-[#04a784] mb-12'></Fingerprint>
            <div className='font-bold'>Sign In</div>
            <div className='font-bold'>SignIn with your Google Account</div>
            <button className='flex gap-2 bg-[#04a784] p-3 rounded-lg mt-2' onClick={handleLogin}>
                <div className='font-bold'>Sign In with Google</div>
                <LogIn></LogIn>
            </button >
        </div>
    </div>
 </>
  )
 
}

export default Login