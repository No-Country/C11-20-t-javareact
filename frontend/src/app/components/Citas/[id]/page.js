"use client"

import axios from 'axios';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import corte from '../../../../../public/images/corte.png';
import manicure from '../../../../../public/images/manicure1.jpg'
import React, { useEffect } from 'react';
import { useState } from 'react';
import Image from 'next/image';



const Detail = () => {

const [detail, setDetail ] = useState({});
const [clients, setClients ] = useState([]);

const pathname = usePathname();
const id = pathname.slice(18, pathname.length);
const today = new Date()
const lunes = (today.getDate() + 6).toString() + '/' + (today.getMonth() + 1).toString() + '/' + today.getFullYear().toString();
const martes = (today.getDate() + 7).toString() + '/' + (today.getMonth() + 1).toString() + '/' + today.getFullYear().toString();
const miercoles = (today.getDate() + 8).toString() + '/' + (today.getMonth() + 1).toString() + '/' + today.getFullYear().toString();
const jueves = (today.getDate() + 9).toString() + '/' + (today.getMonth() + 1).toString() + '/' + today.getFullYear().toString();
const viernes = (today.getDate() + 10).toString() + '/' + (today.getMonth() + 1).toString() + '/' + today.getFullYear().toString();
const sabado = (today.getDate() + 11).toString() + '/' + (today.getMonth() + 1).toString() + '/' + today.getFullYear().toString();

// console.log(today.getFullYear());
// console.log(today.getMonth() + 1);
// console.log(today.getDate());
// console.log(today.toLocaleDateString());
console.log(detail);
console.log(detail.persona);
// console.log(detail.persona.nombre);


  const getIdData = async () => {

    const token = JSON.parse(localStorage.getItem('token'));
    const config = {
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + token 
      }
    }
    try {
      const detail = await axios.get(`http://localhost:8085/estilista/detail/${id}`, config)
      const res = await detail.data
      setDetail(res);
      
    } catch (error) {
      console.log(error);
    }

  }

  const getClientList = async () => {

    const token = JSON.parse(localStorage.getItem('token'));
    const config = {
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + token 
      }
    }
    try {
      const detail = await axios.get(`http://localhost:8085/cliente/lista`, config)
      const res = await detail.data
      setClients(res);
      
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getIdData();
    getClientList();
  }, [])


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
    <div className='col-span-8 grid grid-rows-4 mx-auto mt-7'>
      <div className='mb-4'>
        <Image className='w-[80px] h-[80px] mt-4 mb-2 mx-auto' src={detail.idestilista == 1? corte : manicure}/>
        {/* <h1 className='font-bold text-2xl text-center'>{JSON.stringify(detail.persona.nombre).slice(1, JSON.stringify(detail.persona.nombre).length - 1)} {JSON.stringify(detail.persona.apellido).slice(1, JSON.stringify(detail.persona.apellido).length - 1)}</h1> */}
        <h1 className='font-bold text-2xl text-center'>{detail.persona === undefined? '' : Object.values(detail.persona.nombre)} {detail.persona=== undefined?  '' : Object.values(detail.persona.apellido)}</h1>

        <h1 className='font-bold text-3xl text-center'>{detail.especialidad}</h1>
      </div>
      <div class=" relative w-64 mx-auto">
        <p className='font-bold'>Cliente:</p>
        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option disabled selected>Selecciona un cliente</option>
          {
            clients.map(p => {
              return (
                <option>{p.nombre} {p.apellido}</option>
              )
            })
          }

        </select>
        <div class="pointer-events-none right-0 flex flex-row-reverse  items-center px-2 text-gray-700 ">
          <svg class="fill-current h-4 w-4 -mt-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
      <div class=" relative w-64 -mt-[100px] mx-auto">
      <p className='font-bold'>Día:</p>
        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option disabled selected>Selecciona una día</option>
          <option>Lunes, {lunes}</option>
          <option>Martes, {martes}</option>
          <option>Miércoles, {miercoles}</option>
          <option>Jueves, {jueves}</option>
          <option>Viernes, {viernes}</option>
          <option>Sábado, {sabado}</option>

        </select>
        <div class="pointer-events-none right-0 flex flex-row-reverse  items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4 -mt-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
      <div class=" relative w-64 -mt-[200px]  mx-auto">
      <p className='font-bold'>Hora:</p>
        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option disabled selected>Selecciona una hora</option>
          <option value="8">8:00 am</option>
          <option value="8">8:30 am</option>
          <option value="9">9:00 am</option>
          <option value="9">9:30 am</option>
          <option value="10">10:00 am</option>
          <option value="10">10:30 am</option>
          <option value="11">11:00 am</option>
          <option value="11">11:30 am</option>
          <option value="12">12:00 pm</option>
          <option value="13">1:00 pm</option>
          <option value="13">1:30 pm</option>
          <option value="14">2:00 pm</option>
          <option value="14">2:30 pm</option>
          <option value="15">3:00 pm</option>
          <option value="15">3:30 pm</option>
          <option value="16">4:00 pm</option>
          <option value="16">4:30 pm</option>
          <option value="17">5:00 pm</option>
          <option value="17">5:30 pm</option>
          <option value="18">6:00 pm</option>

        </select>
        <div class="pointer-events-none right-0 flex flex-row-reverse  items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4 -mt-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      <button className='rounded bg-green-500 px-[92px] mt-5 py-3 border-gray-200 font-bold text-white'>Reservar</button>
      <div className='mt-3 mx-auto text-center'>
      <span className='rounded  px-[0px] mt-5 py-3 border-gray-200 mx-auto'>Lista de reservas <Link className='text-blue-400 font-bold' href={`/components/ListaCitas/${id}`}   >Ver</Link> </span>
      
      </div>

      </div>
  

    </div>



  </main>
  )
}

export default Detail;
