"use client"; 

import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'



export default function Home() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUserame] = useState("")
  const [registerStatus, setRegisterStatus ] = useState('')

  const register = (e) => {
    e.preventDefault();
    axios.post('http://localhost:', {
      email: email,
      username: username,
      password: password
    }).then(response => {
      if (response.data.message) {
        setRegisterStatus(response.data.message)
      } else {
        setRegisterStatus('Cuenta creada exitosamente');
      }
    })
    console.log(email);
  }


  return (
    <div className='mt-12 text-center grid grid-cols-2 gap-4 ml-96 '>
    {/* <h1>si</h1> */}
    <div className='p-20 border rounded bg-white mb-2'>
      <form onClick={(e) => register(e)}>
        
        <p htmlFor='name' className='text-left font-serif ml-5'>Nombre: </p>
        <input type="name" id="name" name="name" value={username} onChange={(e) => setUserame(e.target.value)}  className='border rounded border-black py-2' placeholder="Nombre" /><br />
        {
          name.length > 15? 
            <p className=' text-red-600 text-xs font-serif text-left'>El nombre es demasiado largo</p> 
            :
            <br />
        }
        <p htmlFor='email1' className='text-left font-serif ml-5' >Email: </p>
        <input type="emai1" id="email1" name="email1" value={email} onChange={(e) => setEmail(e.target.value)}  className='border rounded border-black py-2' placeholder="ej. example@gmail.com" /><br /><br />
        <p for='password' className='text-left font-serif ml-5'>Password: </p>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}  className='border rounded border-black py-2' placeholder="**********" /><br /><br />
        {
          name.length > 15?
            <button className='border rounded px-20 py-2 bg-green-300 text-white focus:outline-none' disabled><strong>Registrate</strong></button>
            :
            <button className='border rounded px-20 py-2 bg-green-300 hover:bg-green-200 border-gray-400 text-white cursor-pointer'><strong>Registrate</strong></button>
        }
      </form><br />
      <p className='font-serif text-lg'>Si ya tienes cuenta <Link href="/login" className='text-center text-blue-900'>Accede</Link></p>
      </div>
      <br />
      <div className='mb-6'>
      </div>

    </div>

  )
}
