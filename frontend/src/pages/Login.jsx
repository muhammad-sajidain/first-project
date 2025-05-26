import React from 'react'
import logo1 from '../assets/logo1.webp'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <aside className='min-h-screen flex items-center justify-center font-mono
    bg-gradient-to-r from-cyan-500 from-10% via-indigo-500 via-50% to-sky-500 to-100%'>
        <div className='flex shadow-2xl'>
            <div className='flex flex-col items-center justify-center
            text-center p-8 gap-4 bg-white rounded-2xl
            xl:rounded-tr-none xl:rounded-br-none'>
                <h1 className='text-5xl font-bold'>SignIn</h1>
                <div className=' flex flex-col text-2xl gap-1 text-left'>
                    <span>Username</span>
                    <input type="text"
                    placeholder='Enter Your ID'
                     className='border-2 rounded-md p-1 outline-none
                     focus:border-blue-600 focus:bg-slate-100 '/>
                </div>
                <div className=' flex flex-col text-2xl gap-1 text-left'>
                    <span>Password</span>
                    <input type="password"
                    placeholder='Enter Your Password'
                     className='border-2 rounded-md p-1 outline-none
                     focus:border-blue-600 focus:bg-slate-100 '/>
                     <div className='flex items-center gap-1 text-base '>
                        <input type="checkbox"/>
                        <span>Remmber Password</span>
                     </div>
                </div>
                <Link to="/home">
                <button className='px-10 py-2 text-2xl rounded-md cursor-pointer
                bg-gradient-to-r to-blue-500 from-green-500
                hover:to-yellow-500 hover:from-red-600'>Login</button></Link>
                <p>If You've No Account! Contact <span className='text-blue-600 hover:underline cursor-pointer'>
                    <Link to="/signup">Administration</Link>
                    </span></p>
            </div>
            <div>
                <img src={logo1} alt=""
                className='object-cover w-[450px] rounded-tr-2xl rounded-br-2xl
                xl:block hidden'/>
            </div>
        </div>
      
    </aside>
  )
}

export default Login
