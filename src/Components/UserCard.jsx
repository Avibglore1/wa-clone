import React from 'react'
import { Link } from 'react-router-dom'
function UserCard(props) {
    const {userObj} = props
  return (
    <Link key={userObj.id} className='flex gap-2' to={`/${userObj.id}`}>
        <img src={userObj.userdata.profile_pic} className='h-8 w-8 rounded-full' alt=''></img>
        <div>{userObj.userdata.name}</div>
    </Link>   
  )
}

export default UserCard