import React, { useEffect, useState } from 'react'

function User() {
    const [loading,setLoading] = useState(true);
    const [user,Setuser] = useState({});
    function cb(){
        // // logic -> data fetch -> UI update
        console.log("I an after render");
       (async function fetchuser() {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            const userData = await response.json();
            console.log('userdata', userData);
            setLoading(false);
            Setuser(userData);
        })()
    } useEffect(cb,[]);
    console.log('render');
    if (loading){
        return(
            <>
                <div>...Loading</div>
            </>
        )
    } else{
        return(
            <>
                <div>{user.username}</div>
                
                <div>{user.phone}</div>
                <div>{user.website}</div>
            </>
        )
    }
  
}

export default User