"use client"


import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


function ListaUsuarios() {


  const [ listaUsuarios, setListaUsuarios ] = useState([]);

  const getListaUsuarios = async () => {

    const token = JSON.parse(localStorage.getItem('token'));
    const config = {
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + token 
      }
    }
    try {
      const detail = await axios.get(`https://backendstyle.onrender.com/auth/lista`, config)
      const res = await detail.data
      setListaUsuarios(res);
      
    } catch (error) {
      setListaUsuarios([])
    }

  }

  const borrarUsuario = (e, id) => {
    e.preventDefault;
    const token = JSON.parse(localStorage.getItem('token'));
    const config = {
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + token 
      }
    }
    axios.delete('https://backendstyle.onrender.com/cita/delete/' + id, config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getListaUsuarios()
  })

  
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
          <Link className='cursor-pointer' href={'/components/UsuariosLista'}>Usuarios</Link>
        </li>

        <li className='py-2 px-1 my-1 bg-blue-700 rounded text-white hover:bg-blue-900 hover:text-sky-200 flex flex-row gap-3'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
          </svg>
          <Link className='cursor-pointer' href={'/components/ListaEstilista'}>Estilistas</Link>
        </li>

        <li className='py-2 px-1 my-1 bg-blue-700 rounded text-white hover:bg-blue-900 hover:text-sky-200 flex flex-row gap-3'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
          <Link className='cursor-pointer' href={'/components/ListaClientes'}>Clientes</Link>
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
    <div className='col-span-8  mx-auto mt-7'>  
      <h1 className='mx-auto text-3xl font-bold font-serif text-black'>Tabla de Usuarios:</h1>
      <br />
      <table class=" inline-block rounded-lg border shadow-2xl bg-white text-black">
        <thead className='bg-gray-200 rounded-t-xl '>
          <tr className='border'>
            <td className='border font-serif text-center font-bold'>N°.</td>
            <td className='border px-2 font-serif font-bold'>Número documento</td>
            <td className='border font-serif text-center font-bold'>Nombre</td>
            <td className='border font-serif text-center font-bold'>Apellido</td>
            <td className='border font-serif text-center font-bold text-sm'>Correo</td>
            <td className='border font-serif text-center font-bold'>Borrar</td>

          </tr>
        </thead>
        <tbody className='bg-white'>
            {
              listaUsuarios.length === 0?
          <tr className='border bg-white'>
              
              <th className=' text-right font-serif'></th>
              <th className='font-serif text-right'>No hay</th>
              <th className='font-serif'>usuarios</th>
              <th className='font-serif'>registrados </th>
              <th className='font-serif mr-1'> por ahora</th>
              <th ></th>
              </tr>

              :
              
              listaUsuarios?.map(c => {
                return (
                  <tr className='bg-white border-b-gray-300 border-b shadow-2xl'>
                  
                    <td className='border-r-gray-300 text-xs text-center px-4'>{c.idpersona}</td>
                    <td className='border-r-gray-300 text-xs text-center px-4'>{c.dni}</td>
                    <td className='border-r-gray-300 text-xs text-center px-4'>{c.nombre}</td>
                    <td className='border-r-gray-300 text-xs text-center px-4'>{c.apellido}</td>
                    <td className='border-r-gray-300 text-xs text-center px-4'>{c.correo}</td>
                    <td className='text-xs text-center px-4'>
                      <button 
                      onClick={(e) => borrarUsuario(e, c.idpersona)}
                        className="bg-red-600 text-white text-sm cursor-pointer rounded  hover:bg-slate-300 hover:text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </button>
                    </td>

                    </tr>

                )
              })
              // <></>
              
            }


        </tbody>
      </table>
    </div>
    </main>
  )
}

export default ListaUsuarios