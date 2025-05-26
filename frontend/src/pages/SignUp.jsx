import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
// import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [name , setName] = useState()
    const [email , setEmail] = useState()
    const [password , setPassword] = useState()
    // const navigate = useNavigate()
    
    const getData =()=>{
        const storData ={
        userName:name,
        userEmail:email,
        userPassword:password
        }
        axios.post('http://localhost:3001/register',storData)
        .then(res=>console.log("outPut",res))
        //  navigate('/login')
        .catch(err=>console.log("err",err))
    }
  return (
    <aside
      className="min-h-screen flex items-center justify-center font-mono
       bg-gradient-to-r from-cyan-500 from-10% via-indigo-500 via-50% to-sky-500 to-100%"
    >
      <div className="flex shadow-2xl">
        <div
          className="flex flex-col items-center justify-center
               text-center p-8  gap-4 bg-white rounded-2xl"
        >
          <h1 className="text-5xl font-bold">SignUp</h1>
          <div className=" flex flex-col text-2xl gap-1 text-left">
            <span>Name</span>
            <input
              type="text"
              onChange={(e)=>setName(e.target.value)}
              placeholder="Enter Your Full Name"
              className=" border-2 rounded-md p-1 outline-none
                        focus:border-blue-600 focus:bg-slate-100 "
            />
          </div>
          <div className=" flex flex-col text-2xl gap-1 text-left">
            <span>Email</span>
            <input
              type="email"
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter Your email"
              className="border-2 rounded-md p-1 outline-none
                        focus:border-blue-600 focus:bg-slate-100 "
            />
          </div>
          <div className=" flex flex-col text-2xl gap-1 text-left">
            <span>Password</span>
            <input
              type="password"
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Enter Your Password"
              className="border-2 rounded-md p-1 outline-none
                        focus:border-blue-600 focus:bg-slate-100 "
            />
            <div className="flex items-center gap-1 text-base ">
              <input type="checkbox" />
              <span>Remmber Password</span>
            </div>
          </div>
          <Link to="/">
            <button
            onClick={getData}
              className="px-10 py-2 text-2xl rounded-md cursor-pointer
                   bg-gradient-to-r to-blue-500 from-green-500
                   hover:to-yellow-500 hover:from-red-600 transition-transform duration-300 hover:scale-90"
            >
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default SignUp;
