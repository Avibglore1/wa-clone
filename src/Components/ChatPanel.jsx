import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import { ArrowLeft, CircleFadingPlusIcon, MessageSquare, UserRoundIcon } from 'lucide-react';
import Profile from './Profile';
import UserCard from './UserCard';

function ChatPanel() {
  const [users,setuser] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [showProfile,setShowProfile] = useState(false);
  useEffect(()=>{
    const getUsers = async () => {
        const data= await getDocs(collection(db,'users'));
        // console.log(data.docs.length);
        const arrayOfUser = data.docs.map((docs) => {return{userdata: docs.data(), id: docs.id}});
        console.log(arrayOfUser);
        setuser(arrayOfUser);
        setLoading(false);   
    };
    getUsers();
  },[]);

    const onBack = () =>{
        setShowProfile(false);
    }
  
    if(showProfile==true){
    return <>
        <Profile onBack={onBack}></Profile>
    </>
    }
  
  return(
    <div className='bg-white w-[30vw]'>
    <div className='bg-gray-400 py-2 px-4 border-r  flex justify-between items-center gap-2'>
        <button onClick={() => {setShowProfile(true)}}>
            <img src={users.photoURL || 'default-user.jpg'} alt='profile-picture'
            className='w-10 h-10 rounded-full object-cover'></img>
        </button>
        <div className='flex items-end justify-center gap-6 max-4'>
            {/* <DarkModeToggle/> */}
            <CircleFadingPlusIcon className='w-6 h-6'/>
            <MessageSquare className='w-6 h-6'/>
            <UserRoundIcon className='w-6 h-6'/>
        </div>
    </div>
        {
            isLoading? <div>..Loading</div>: <div className='flex flex-col gap-3'>
            {
                users.map(userObj =>(
                     <UserCard userObj={userObj} key={userObj.id}></UserCard>
                ))
            }
        </div>
        }
    
    </div>
    
  )
}

export default ChatPanel