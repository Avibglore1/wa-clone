import { ArrowLeft } from 'lucide-react'
import React, { useState } from 'react'
import { useAuth } from './AuthContext'

function Profile(props) {
   const {userData} = useAuth();
  return (
    <div className='bg-white w-[30vw]'>
        <div className='bg-green-400 text-white py-4 text-lg px-4 flex items-center gap-6'>
            <button onClick={props.onBack}>
                <ArrowLeft></ArrowLeft>
            </button>
            <div>Profile</div>
        </div>
        <div className='bg-gray-100'>
            <img src={userData.profile_pic} alt='' className='h-8 w-8 rounded-full'></img>
            <h2>{userData.name}</h2>
        </div>
    </div>
  )
}

export default Profile