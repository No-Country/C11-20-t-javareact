"use client"; 

import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
// import { admin } from '../utils/admin';
// import loading from '../../../public/images/loading1.gif'
import Image from 'next/image';



// function ButtonContent() {
//   return (
//     <div className='grid grid-cols-2 gap-1'>
//       <span id='text_button'>Login</span>
//       <Image id='img_button' src={loading} className='hidden' alt='load' />
//     </div>
//   )
// }






export default function Home() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [enviar, setEnviar] = useState('Login')
  const [loginStatus, setLoginStatus ] = useState('')
  // const [textButton, setTextButton] = useState('Login');



//   function GFG_Fun() {
//     let img = document.createElement('img');
//     img.src ={loading};
//     document.getElementById('body').appendChild(img);
//     down.innerHTML = "Image Element Added.";
// }

 
  // useEffect(() => {
  //   localStorage.clear()
  // }, [])



  const login = (e, email, password) => {
    e.preventDefault();
    // let image = document.createElement('img');
    
    const textButton = document.getElementById('text_button')
    const imgButton = document.getElementById('img_button')

    setEnviar(imgButton)

    // let n = document.createElement('img')
    // n.src = loading
    // n.setAttribute('class', 'h-10, w-10')
    // let b = id_img.appendChild([n])

    // setTextButton(b)
    // let obtain = GFG_Fun();
    // setTextButton(image)
    // setTimeout(() => {
    //   console.log('delayed for three seconds');
    // }, 3000)

    // setTextButton(loading)

    // console.log(email);
    // console.log(password);
    let info = {
      "correo":email,
      "clave": password
    };

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
          // window.open("/");
        location.replace('/')

        } 
        else {
          console.log('si');
          let denegado = document.getElementById('accesod');
          denegado.setAttribute('class', 'font-serif text-sm text-red-500');
          // denegado.innerText = 'Usuario no encontrado.'
        
        // setLoginStatus(console.log() )
      }

    }).catch((err) => {
      console.log(err);
      // let denegado = document.getElementById('accesod')
      // denegado.setAttribute('class', 'font-serif text-sm text-red-500')
      // denegado.innerText = 'Usuario no autorizado.'
    })

  }


  return (
    <div className='mx-auto ml-[450px] mr-[450px] mt-[40px] '>
    {/* <h1>si</h1> */}
    <div className='px-20 py-10 border rounded-md bg-white mb-2'>
      <h1 className='font-serif text-2xl mb-2 mx-auto ml-[60px]'>Welcome to</h1>
      <div className='mx-auto w-[80px] h-[80px]'>
        <img 
          src='https://thumbs.dreamstime.com/b/icono-de-vector-depilaci%C3%B3n-trazo-editable-s%C3%ADmbolo-lineal-para-uso-en-medios-impresos-con-logotipo-aplicaciones-web-y-m%C3%B3viles-186790025.jpg' 
          alt='logo'
          />
      </div>
      <form onClick={(e) => login(e, email, password)}>
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
        <p htmlFor='password'className='text-left font-serif font-bold'>Password: </p>
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
      <input 
        id='button2'
        type='submit'
        className='border rounded px-[105px] py-2 mt-8 bg-green-300 border-gray-400 hover:bg-green-200 text-white cursor-pointer font-bold'
        value="Login"
        />



    
      {/* <p id="accesop" className='font-serif'></p>
      <p id="accesod" className='font-serif text-sm text-red-500 hidden'>Usuario no encontrado</p> */}

      </form><br />
      <span className='font-serif text-xs ml-3'>No tienes una cuenta todavía? <Link href="/register" className='text-left text-blue-900'>Regístrate aquí</Link></span>

      </div>

      </div>
    )

}