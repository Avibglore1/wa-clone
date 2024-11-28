import React from 'react'

function Login() {
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
            <div>Sign In</div>
            <div>SignIn with your Google Account</div>
            <button>Sign In with Google</button >
        </div>
    </div>
 </>
  )
 
}

export default Login