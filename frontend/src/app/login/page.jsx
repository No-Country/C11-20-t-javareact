"use client"; 

import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'



export default function Home() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginStatus, setLoginStatus ] = useState('')


  const login = (e) => {
    e.preventDefault();
    axios.post('http://localhost:', {
      email: email,
      // username: username,
      password: password
    }).then(response => {
      if (response.data.message) {
        setLoginStatus(response.data.message)
      } else {
        setLoginStatus(response.data[0].email);
      }
    })
    console.log(email);
  }


  return (
    <div className='mt-6 text-center grid grid-cols-2 gap-4 ml-96 '>
    {/* <h1>si</h1> */}
    <div className='p-20 border rounded bg-white mb-2'>
      <h1 className='font-serif text-2xl mb-2'>Welcome to</h1>
      <div className='w-20 h-20 align-middle ml-20'>
        <img 
          src='https://thumbs.dreamstime.com/b/icono-de-vector-depilaci%C3%B3n-trazo-editable-s%C3%ADmbolo-lineal-para-uso-en-medios-impresos-con-logotipo-aplicaciones-web-y-m%C3%B3viles-186790025.jpg' 
          alt='logo'
          />
      </div>
      <form onClick={(e) => login(e)}>
        <p htmlFor='email' className='text-left font-serif ml-4' >Email: </p>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className='border rounded border-black py-2' 
          placeholder="ej. example@gmail.com" /><br />
          {
            email == 'repetido@gmail.com'? <p className=' text-red-600 text-xs font-serif text-left'>Ya existe otro usuario con esta cuenta</p> :
            <br />
          }
        <p for='password'className='text-left font-serif ml-4'>Password: </p>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}  
          className='border rounded border-black py-2' 
          placeholder="**********" 
        /><br /><br />

      <input
        classNmae="ml-5 mb-4"
        type="checkbox"
        value=""
        id="checkboxDefault" />
      <label
        className="inline-block pl-[0.15rem] hover:cursor-pointer mr-5"
        for="checkboxDefault">
        Remember me
      </label>
      {
        email == 'repetido@gmail.com'?
        <button className='border rounded px-24 py-2 bg-green-300 border-gray-40 text-white focus:outline-none' disabled><strong>Login</strong></button>

        :
        <button className='border rounded px-24 py-2 bg-green-300 border-gray-400 hover:bg-green-200 text-white cursor-pointer'><strong>Login</strong></button>

      }
      </form><br />
      <p className='font-serif text-lg mt-3'>No tienes una cuenta todavía? <Link href="/register" className='text-center text-blue-900'>Regístrate aquí</Link></p>

      </div>

      </div>
    )

}