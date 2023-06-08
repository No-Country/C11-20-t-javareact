"use client"


import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import axios from 'axios';



const ContactUs = () => {
  const form = useRef();
  const pathname = usePathname();
  const id = pathname.slice(18, pathname.length);
  const [ cita, setCita ] = useState("");
  const [name, setName] = useState( "");
  const [mail, setMail] = useState( "");


  // console.log(id);


  const getDetalleCita = async () => {

    const token = JSON.parse(localStorage.getItem('token'));
    const config = {
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + token 
      }
    }
    try {
      const detail = await axios.get(`https://backendstyle.onrender.com/cita/detail/${id}`, config)
      const res = await detail.data
      setCita(res);
      return
      
    } catch (error) {
      // setLista([])
      console.log(error);

    }

  }

  useEffect(() => {
    getDetalleCita()
  })


  const sendEmail = (e) => {
    e.preventDefault();
    alert('Has enviado el mensaje!')
    emailjs.sendForm('service_f8eh7bw', 'template_y00apwv', form.current, 'lxLBzWSbLk6ZdX9bl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <main className="bg-slate-100 grid grid-cols-10 gap-2 min-h-screen p-2">
    
    {/* <Home /> */}
    <div className="bg-blue-700 rounded-sm p-4 col-span-2 border-purple-950 ">
    <nav>
      <ul>
        
        <li className='py-2 px-1 my-1 bg-blue-700 rounded text-white hover:bg-blue-900 hover:text-sky-200 flex flex-row gap-3'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <a>Usuarios</a>
        </li>

        <li className='py-2 px-1 my-1 bg-blue-700 rounded text-white hover:bg-blue-900 hover:text-sky-200 flex flex-row gap-3'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
          </svg>
          <a>Estilistas</a>
        </li>

        <li className='py-2 px-1 my-1 bg-blue-700 rounded text-white hover:bg-blue-900 hover:text-sky-200 flex flex-row gap-3'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
          <a>Clientes</a>
        </li>

        <li className='py-2 px-1 my-1 bg-blue-700 rounded text-white hover:bg-blue-900 hover:text-sky-200 flex flex-row gap-3'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
          </svg>
          <Link href={'/components/Servicios'}>Servicios</Link>
        </li> 

        <li className='py-2 px-1 my-1 bg-blue-700 rounded text-white hover:bg-blue-900 hover:text-sky-200 flex flex-row gap-3'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>
          <a>Productos</a>
        </li>

        <li className='py-2 px-1 my-1 bg-blue-700 rounded text-white hover:bg-blue-900 hover:text-sky-200 flex flex-row gap-3'>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
          </svg>
          <a>Turnos</a>
        </li>

        <li className='py-2 px-1 my-1 bg-blue-700 rounded text-white hover:bg-blue-900 hover:text-sky-200 flex flex-row gap-3'>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
          </svg>
          <Link href={'/components/Citas'}>Citas</Link>
        </li>

      </ul>
    </nav>
    </div>
    <div className='col-span-8 grid grid-cols-4 gap-5 ml-[60px] mt-10'>
    <form ref={form} onSubmit={sendEmail}>
      <h5 className='font-bold text-3xl font-serif'>Confirmar cita:</h5>
      <br />
      <br />
      <label className='font-bold font-serif'>Nombre:</label>
      <input 
        type="text" 
        className='w-[450px] border rounded  py-1' 
        name="user_name" 
        value={name === ""? cita.cliente?.nombre + ' ' + cita.cliente?.apellido : cita.cliente?.nombre !== ''? name : ''  } 
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label className='font-bold font-serif'>Correo:</label>
      <input 
        type="email" 
        className='w-[450px] border rounded  py-1' 
        name="user_email" 
        value={mail} 
        onChange={(e) => setMail(e.target.value)}

      />
      <br />
      <label className='font-bold font-serif'>Mensaje:</label>
      <textarea name="message" className='w-[450px] h-[150px] border rounded'/><br />
      <input 
        type="submit" 
        className='bg-green-500 px-[200px] text-white font-bold font-serif border rounded mt-3 py-2 cursor-pointer hover:bg-green-300' 
        value="Enviar" 
      />
    </form>

    </div>



  </main>
  
  );
};

export default ContactUs;