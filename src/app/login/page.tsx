"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios, { Axios } from "axios";
import toast from "react-hot-toast";
import router from "next/router";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  })

  const [buttonDisabled, setButtonDisabled]= React.useState(false);
  const [loading, setLoading]= React.useState(false);

  const onLogin = async () => {
    try{
        setLoading(true);
       const response= await axios.post("/api/users/login", user);
       console.log("login success", response.data);
       toast.success("login success");
       router.push("/profile");


     }catch(error: any){
        console.log("Login failed", error.message);
        toast.error(error.message);

     }finally{
        setLoading(false);
     }


  }

  useEffect(() => {
    if(user.email.length >0 && user.password.length>0
    )
    {setButtonDisabled(false);} else{setButtonDisabled(true);}
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-black">{loading ? "Processing":"Login"}</h1>
        <hr className="mb-4" />
        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
        <input
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />

        <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
        <input
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />

        <button
          className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition duration-300 "
          onClick={onLogin}>SIGN IN</button>
          <hr className="mb-4" />
          <Link className="text-center text-xl font-bold mb-4 text-black"  href="/signup" > Visit SignUp Page </Link>
      </div>
    </div>
  );
}
