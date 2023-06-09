"use client"

import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import admin from '../../public/images/admin_av.png'
import secretaria from '../../public/images/secretary.png'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {

  let [email, setEmail ] = useState('')
  let [user, setUser ] = useState([])
  let [isLogged, setIsLogged ] = useState(false)

  const getToken = () => {
    if(JSON.parse(localStorage.getItem('token')) !== null){
    return JSON.parse(localStorage.getItem('token'));
    } else {
      null;
    }
  }

  const deleteToken = () => {
    setUser([]);
    setIsLogged(false)
    // localStorage.removeItem(user);
  }


  useEffect(() => {
    try {
    function existeUsuario(){
        if(JSON.parse(localStorage.getItem('token')) !== null){
          setIsLogged(true)
          setEmail(localStorage.getItem('email'))
          user = JSON.parse(localStorage.getItem('token'));
          console.log(user);

        } else {

          return;
        }
      } 
      existeUsuario();
    } catch (error) {
      console.log(error);
    }
  }, [])





  const cerrarSesion = () => {
    // e.preventDefault();
    setUser([]);
    localStorage.clear();
  }

  return (
    <html lang="en">
      <head>
        <title>Depil & Esthetic</title>
      </head>
      <body className={inter.className}>
        <header>
          <div className='grid grid-cols-2 bg-cyan-100 py-2 px-2 font-sans'>
            <nav className="flex flex-row items-center">
              <ul className="flex flex-row items-center justify-start space-x-3">
                <li>
                <img 
                    className='h-9 w-9 rounded-full -mb-[8px]' 
                    src='https://thumbs.dreamstime.com/b/icono-de-vector-depilaci%C3%B3n-trazo-editable-s%C3%ADmbolo-lineal-para-uso-en-medios-impresos-con-logotipo-aplicaciones-web-y-m%C3%B3viles-186790025.jpg' 
                    alt='logo' />
                </li>
                <li className='italic bg-cyan-200 px-2 py-1 rounded-sm mt-2 text-black'>
                  <Link href={'/'}>
                    Depil & Esthetic
                  </Link>
                  </li>
              </ul>
            </nav>  
            <nav>
              <ul className="flex flex-row items-center justify-end space-x-3 pb-0 text-black">
                <li>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-3">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                  </svg>
                </li>
                {
                  isLogged == false?
                  <>
                  <li className='py-1 px-1 my-1 cursor-pointer bg-cyan-200 rounded-sm text-blue-600 hover:bg-blue-600 hover:text-sky-200 mt-2'>
                   <Link href='/register'>Registrarse</Link>
                  </li>
                  <li className='py-1 px-1 my-1 cursor-pointer bg-cyan-200 rounded-sm text-blue-600 hover:bg-blue-600 hover:text-sky-200 mt-2'>
                    <Link href='/login'>Ingresar</Link>
                  </li>
                  <li>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  </li>
                  </>
                  :
                  <>
                  <li className='py-1 px-1 my-1 cursor-pointer bg-cyan-200 rounded-sm text-blue-600 hover:bg-blue-600 hover:text-sky-200 -mb-[8px]'>
                   <Link href='/login' onClick={deleteToken} >Cerrar sesion</Link>
                  </li>
                  <li className='py-1 px-1 my-1 cursor-pointer bg-transparent rounded-sm text-blue-600 hover:text-sky-200'>
                    {
                      email === 'admin@gmail.com'?
                      <Image 
                      className='h-9 w-9 rounded-full -mb-[8px]' 
                      src={admin} 
                      alt='logo' /> 
                      :
                      <Image 
                      className='h-9 w-9 rounded-full -mb-[8px]' 
                      src={secretaria} 
                      alt='logo' />
                    }
                  
                  </li>
                 </>
                }
              
  
              </ul>
            </nav>
          </div>
        </header>
 

        {children}  

      </body>
    </html>
  )
}
