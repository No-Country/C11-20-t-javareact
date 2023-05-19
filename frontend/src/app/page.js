"use client"; 

import React, { useState } from 'react'



export default function Home() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [email1, setEmail1] = useState("")
  const [password1, setPasswor1d] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
  return (
    <div className='mt-12 text-center grid grid-cols-3 gap-4 ml-64 '>
    {/* <h1>si</h1> */}
    <div className='p-20 border rounded bg-white mb-16'>
      <form onClick={(e) => handleSubmit(e)}>
        <p htmlFor='email' className='text-left' >email: </p>
        <input type="email" id="email" name="email" value={email} className='border rounded border-black' placeholder="ej. example@gmail.com" /><br /><br />
        <p for='password'className='text-left'>password: </p>
        <input type="password" id="password" name="password" value={password} className='border rounded border-black' placeholder="**********" /><br /><br />
        <button className='bg-blue-300 border rounded px-24'>Login</button>
      </form><br />
      <p>No tienes una cuenta todavía? <a href="/register" className='text-center text-blue-900'>Regístrate aquí</a></p>
      <br />
      <br />
      </div>
    <div className='p-20 border rounded bg-white'>

      <form onClick={(e) => handleSubmit(e)}>
        <p htmlFor='name' className='text-left'>Nombre: </p>
        <input type="name" id="name" name="name" value={name} className='border rounded border-black' placeholder="Nombre" /><br /><br />
        <p htmlFor='email1' className='text-left' >email: </p>
        <input type="emai1" id="email1" name="email1" value={email1} className='border rounded border-black' placeholder="ej. example@gmail.com" /><br /><br />
        <p for='password' className='text-left'>password: </p>
        <input type="password" id="password" name="password" value={password1} className='border rounded border-black' placeholder="**********" /><br /><br />
        <button className='bg-blue-300 border rounded px-20'>Registrate</button>
      </form><br />
      <p>Si ya tienes cuenta <a href="/login" className='text-center text-blue-900'>Accede</a></p>
      </div>

    </div>

  )
}
