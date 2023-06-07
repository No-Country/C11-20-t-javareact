"use client"; 

import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
// import Image from 'next/image';


export default function Home() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [enviar, setEnviar] = useState('Login')
  const [loginStatus, setLoginStatus ] = useState('')


  useEffect(() => {
    localStorage.clear()
  }, [])


  const login = (e, email, password) => {
    e.preventDefault();
    // let image = document.createElement('img');
    const invalidEmail = document.getElementById('no_valid_email')
    const rememberText = document.getElementById('remember')
    const rememberCheck = document.getElementById('checkboxDefault')


    
    // // const imgButton = document.getElementById('img_button')
    // if((email ==='' || email !== '') && (password === '' || password !== '')){
    //   invalidEmail.setAttribute('class', 'text-sm text-red-600 text-left font-serif')
      
    // } 

  // if(email == 'admin@gmail.com' && password == 123456){
    axios.post('http://localhost:8085/auth/login', 
    {
      "correo":email,
      "clave": password
    }).then(res => {
      // if (response.data.message) {
      //   setLoginStatus(response.data.message)
      // } else {
      //   setLoginStatus(response.data[0].email);
      // }
     
      if (res.data.token) {
        localStorage.setItem('token', JSON.stringify(res.data.token));
        localStorage.setItem('email', email);
        location.replace('/')

        } 
        else {
          return
          console.log('si');

          // denegado.innerText = 'Usuario no encontrado.'
        
        // setLoginStatus(console.log() )
      }

    }).catch((err) => {
      // console.log(err);
      rememberCheck.setAttribute('class', 'mb-0 mt-0')
      rememberText.setAttribute('class', 'inline-block pl-[0.15rem] hover:cursor-pointer mr-5 mb-0')
      invalidEmail.setAttribute('class', 'text-sm text-red-600 text-left font-serif')
      invalidEmail.innerText = 'Correo o contraseña no válidos.'
      // let denegado = document.getElementById('accesod')
      // denegado.setAttribute('class', 'font-serif text-sm text-red-500')
      // denegado.innerText = 'Usuario no autorizado.'
    })


  // }
 
    

  }


  return (
    <div className='mx-auto ml-[450px] mr-[450px] mt-[40px] '>
    {/* <h1>si</h1> */}
    <div className='px-20 py-10 border rounded-lg bg-white mb-2'>
      <h1 className='font-serif text-2xl mb-2 mx-auto ml-[60px]'>Bienvenidos a</h1>
      <div className='mx-auto w-[80px] h-[80px]'>
        <img 
          src='https://thumbs.dreamstime.com/b/icono-de-vector-depilaci%C3%B3n-trazo-editable-s%C3%ADmbolo-lineal-para-uso-en-medios-impresos-con-logotipo-aplicaciones-web-y-m%C3%B3viles-186790025.jpg' 
          alt='logo'
          />
      </div>
      {/* onClick={(e) => login(e, email, password)} */}
      <form >
        <p htmlFor='email' className='text-left font-serif font-bold' >Email: </p>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={email} 
          // onClick={(e)=> e.preventDefault()}
          onChange={(e) => setEmail(e.target.value)} 
          className='border rounded border-black py-2' 
          placeholder="ej. example@gmail.com" /><br />
          {/* {
            email == 'repetido@gmail.com'? <p className=' text-red-600 text-xs font-serif text-left'>Ya existe otro usuario con esta cuenta</p> :
            <br />
          } */}
        <p htmlFor='password'className='text-left font-serif font-bold mt-3'>Contraseña: </p>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}  
          className='border rounded border-black py-2' 
          placeholder="**********" 
        />
       <p id='no_valid_email' className='text-sm text-red-600 text-left font-serif hidden'></p>
      <br />
      <input
        classNmae="ml-5 mb-4 mt-11"
        type="checkbox"
        value=""
        id="checkboxDefault" />
      <label
        id='remember'
        className="inline-block pl-[0.15rem] hover:cursor-pointer mr-5 mt-11"
        for="checkboxDefault">
        Remember me
      </label>
      <button 
        id='button2'
        type='submit'
        className='border rounded px-[94px] py-2 mt-8 bg-green-300 border-gray-400 hover:bg-green-200 text-white cursor-pointer font-bold'
          onClick={(e) => login(e, email, password)}
        >Acceder</button>
    
      {/* <p id="accesop" className='font-serif'></p>
      <p id="accesod" className='font-serif text-sm text-red-500 hidden'>Usuario no encontrado</p> */}

      </form><br />
      <span className='font-serif text-xs ml-3'>No tienes una cuenta todavía? <Link href="/register" className='text-left text-blue-900'>Regístrate aquí</Link></span>

      </div>

      </div>
    )

}