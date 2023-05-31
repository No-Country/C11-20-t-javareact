"use client"; 

import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'



export default function Home() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUserame] = useState("")
  const [lastName, setLastName] = useState("")

  const [dni, setDni] = useState("")
  const [rol, setRol] = useState("USUARIO")
  const [registerStatus, setRegisterStatus ] = useState('')


  


  
  const register = (e) => {
    
    e.preventDefault();
    console.log(username);
    console.log(lastName);
    console.log(dni);
    console.log(email);
    console.log(password);
    console.log(rol);
    console.log(registerStatus);


    const formData = new FormData();
    
    formData.append('username', username)
    formData.append('lastname', lastName)
    formData.append('dni', dni)
    formData.append('email', email)
    formData.append('password', password);
    formData.append('rol', rol);
    formData.append('estado', registerStatus);
    const requestOptions = {
      method: 'POST',
      body: formData
    }
    axios.post('http://localhost:8085/auth/lista', requestOptions).then(response => {
      if (response.data.message) {
        setRegisterStatus(response.data.message)
      } else {
        setRegisterStatus('Cuenta creada exitosamente');
      }
    })
    console.log(email);
  }

  // HASTA AQUI

  return (
    <div className='mt-12 text-center grid grid-cols-2 gap-4 ml-96 '>
    {/* <h1>si</h1> */}

    <div className='p-20 border rounded bg-white mb-2'>
      <form onClick={(e) => register(e)}>
        <div>
        <p htmlFor='name' className='text-left font-serif ml-5'>Nombre: </p>
        <input type="name" id="name" name="username" value={username} onChange={(e) => setUserame(e.target.value)}  className='border rounded border-black py-2' placeholder="Nombre" /><br />
        {
          username.length > 15? 
            <p className=' text-red-600 text-xs font-serif text-left'>El nombre es demasiado largo</p> 
            :
            <br />
        }
        <p htmlFor='name' className='text-left font-serif ml-5'>Apellido: </p>
        <input type="name" id="name" name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)}  className='border rounded border-black py-2' placeholder="Apellido" /><br />
        {
          username.length > 15? 
            <p className=' text-red-600 text-xs font-serif text-left'>El apellido es demasiado largo</p> 
            :
            <br />
        }
         <p htmlFor='name' className='text-left font-serif ml-5'>DNI: </p>
        <input type="name" id="name" name="dni" value={dni} onChange={(e) => setDni(e.target.value)}  className='border rounded border-black py-2' placeholder="DNI" /><br />
        {
          username.length > 15? 
            <p className=' text-red-600 text-xs font-serif text-left'>El apellido es demasiado largo</p> 
            :
            <br />
        }
        <p htmlFor='email1' className='text-left font-serif ml-5' >Email: </p>
        <input type="emai1" id="email1" name="email" value={email} onChange={(e) => setEmail(e.target.value)}  className='border rounded border-black py-2' placeholder="ej. example@gmail.com" /><br /><br />
        <p for='password' className='text-left font-serif ml-5'>Password: </p>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}  className='border rounded border-black py-2' placeholder="**********" /><br /><br />
        </div>
        <div>
        <p htmlFor='email1' className='text-left font-serif ml-5' >Rol :</p>
        {/* <input type="emai1" id="email1" name="rol" value={rol} onChange={(e) => setRol(e.target.value)}  className='border rounded border-black py-2' placeholder="ej. example@gmail.com" /><br /><br /> */}
        <select className='bg-white border rounded border-black px-12 text-left py-3' name='rol' value={rol} onChange={(e) => setRol(e.target.value)}>
          <option value="USUARIO">USUARIO</option>
          <option value="ADMINISTRADOR">ADMINISTRADOR</option>

        </select>
        <p for='password' className='text-left font-serif ml-5'>Estado: </p>
        <input type="name" id="password" name="estado" value={registerStatus} onChange={(e) => setRegisterStatus(e.target.value)}  className='border rounded border-black py-2' placeholder="Estado" /><br /><br />
        {
          username.length > 15?
            <input type='submit' className='border rounded px-20 py-2 bg-green-300 text-white focus:outline-none' disabled><strong>Registrate</strong></input>
            :
            <button type='submit' className='border rounded px-20 py-2 bg-green-300 hover:bg-green-200 border-gray-400 text-white cursor-pointer'><strong>Registrate</strong></button>
        }
      <p className='font-serif text-lg'>Si ya tienes cuenta <Link href="/login" className='text-center text-blue-900'>Accede</Link></p>
      </div>
      </form><br />

      </div>
      
      <br />


    </div>

  )
}
