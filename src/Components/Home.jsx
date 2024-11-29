import React from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth, storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const handleChange=(e)=>{
  const img = e.target.files[0];
  const storageRef =  ref(storage,'/profile');
  const updatedTask = uploadBytesResumable(storageRef,img);
  updatedTask.on('state_changed',progressCB,errorCB,finishedCB);
  function progressCB(data){
    console.log(data);
  }
  function errorCB(err){
    console.log('err',err);
  }
  function finishedCB(){
    console.log('sucessfuly file uploaded');
    getDownloadURL(updatedTask.snapshot.ref).then(function(url){
      console.log('url',url)
    })
  }
}

function Home(props) {
    const setisLoggedIn = props.setisLoggedIn
    const navigate = useNavigate();
    const handleLogout = async() =>{
        await signOut(auth);
        setisLoggedIn(false)
        navigate('/login');
    }
  return (
    <>
        <div>Home</div>
        {/* <input type='file' accept='image/png image/jpeg image/webp' onChange={handleChange}></input> */}
        <button onClick={handleLogout}>Logout</button>
    </>
    
  )
}

export default Home