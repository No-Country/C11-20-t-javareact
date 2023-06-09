"use client"

import axios from 'axios';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import corte from '../../../../../public/images/corte.png';
import manicure from '../../../../../public/images/manicure1.jpg'
import depila from '../../../../../public/images/depila.png'
import tratamiento from '../../../../../public/images/tratamiento.png'
import React, { useEffect } from 'react';
import { useState } from 'react';
import Image from 'next/image';



const Detail = () => {

const [detail, setDetail ] = useState({});
const [clients, setClients ] = useState([]);
const [oneClient, setOneClient] = useState(1)
const [servicio, setServicio ] = useState(0);
// const [precio, setPrecio ] = useState(0)
const pathname = usePathname();
const id = pathname.slice(18, pathname.length);
const today = new Date()


// console.log(detail);
// console.log(detail.persona);

  const addDate = (e) => {
    e.preventDefault();

    if(servicio === 0){
      const aviso = document.getElementById('aviso')
      aviso.setAttribute('class', 'text-red-500 font-serif text-xs')

    } else {
      const token = JSON.parse(localStorage.getItem('token'));
      const config = {
        headers: {
          'content-type': 'application/json',
          'Authorization': 'Bearer ' + token 
        }
      }
      const data = {
        "estado": "pendiente",
          "costototalservicios": servicio,
          "cliente": {
              "idcliente": oneClient
          },
          "estilista": {
              "idestilista": detail.idestilista
          }
      }
      axios.post('https://backendstyle.onrender.com/cita/create', data, config)
      .then(res => alert('Se agendó una nueva cita!'))
      .catch(err => alert('No se pudo agregar una nueva cita'))



    }
    
  }


  const getIdData = async () => {

    const token = JSON.parse(localStorage.getItem('token'));
    const config = {
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + token 
      }
    }
    try {
      const detail = await axios.get(`https://backendstyle.onrender.com/estilista/detail/${id}`, config)
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
      const detail = await axios.get(`https://backendstyle.onrender.com/cliente/lista`, config)
      const res = await detail.data
      setClients(res);
      console.log(clients);

      
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
      <div className='col-span-8 grid grid-cols-3 mx-auto mt-7'>
          <div>
            <input className='hidden' name='servicio1' value={servicio} />
            <input className='hidden' name='client1' value={oneClient} />
            <input className='hidden' name='client1' value={detail.idestilista} />




          </div>

          <div>
            <div className='mb-4'>
              <Image className='w-[80px] h-[80px] mt-4 mb-2 mx-auto' src={detail.idestilista == 1? corte : detail.idestilista == 2? manicure : detail.idestilista == 3? depila : tratamiento}/>
              {/* <h1 className='font-bold text-2xl text-center'>{JSON.stringify(detail.persona.nombre).slice(1, JSON.stringify(detail.persona.nombre).length - 1)} {JSON.stringify(detail.persona.apellido).slice(1, JSON.stringify(detail.persona.apellido).length - 1)}</h1> */}
              <h1 className='font-bold text-2xl text-center text-black'>{detail.persona === undefined? '' : Object.values(detail.persona.nombre)} {detail.persona=== undefined?  '' : Object.values(detail.persona.apellido)}</h1>

              <h1 className='font-bold text-3xl text-center text-black'>{detail.especialidad}</h1>
            </div>
            <div class=" relative w-64 mx-auto mt-[30px] text-black">
              <p className='font-bold'>Cliente:</p>
              <select 
                name='cliente'
                value={oneClient}
                onChange={(e) => setOneClient(e.target.value)}
                class="block appearance-none w-ful bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-14 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option disabled selected className='text-left'>Selecciona un cliente</option>
                {
                  clients.map(p => {
                    return (
                      <option value={p.idcliente} >{p.nombre} {p.apellido}</option>
                    )
                  })
                }

              </select>
              <div class="pointer-events-none right-0 flex flex-row-reverse  items-center px-2 text-gray-700 ">
                <svg class="fill-current h-4 w-4 -mt-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>

            <div class=" relative w-64 mx-auto mt-5 text-black">
              <p className='font-bold'>Serivicio:</p>
                <select 
                  name='servicio'
                  value={servicio}
                  onChange={(e) => setServicio(e.target.value)}
                  class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-1 py-2 pr-20 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option className='text-gray-300' value={0} selected>Selecciona un servicio</option>
                  {
                    detail.idestilista === 1?
                    <>
                      <option value={4}>Corte/ hombre</option>
                      <option value={5.2}>Corte / Mujer</option>
                      <option value={3}>Tinte cabello</option>
                      <option value={3.5}>Peinado y recogido</option>

                    </>
                    :
                    detail.idestilista === 2?
                    <>
                      <option value={2.8}>Manicure</option>
                      <option value={4.6}>Manicure SPA</option>
                      <option value={2.9}>Pedicure</option>
                      <option value={4.7}>Pedicure SPA</option>
                      <option value={5.4}>Manucure/Pedicure</option>
                    </>
                    :
                    detail.idestilista === 3?
                    <>
                      <option value={2}>Dep/con Cera</option>
                      <option value={2.5}>Dep/con Crema</option>
                      <option value={8.5}>Dep/con Láser</option>
                      <option value={7.8}>Dep/Termoquímica</option>
                      <option value={2.3}>Maquillaje</option>

                    </>
                    :
                    <>
                      <option value={3.6}>Alisado progresivo</option>
                      <option value={4.1}>Keratina</option>
                      <option value={6}>Bótox capilar</option>
                      <option value={4.2}>Loción capilar</option>
                      <option value={5}>Cauterización</option>

                    </>

                  }

                </select>
                <div class="pointer-events-none right-0 flex flex-row-reverse  items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4 -mt-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
                {
                  servicio === 0?
                <p id='aviso' className='hidden text-red-500 font-serif text-xs'>Selecciona un servicio</p>
                :
                <br />

                }
              <button onClick={(e) => addDate(e) } className='rounded bg-green-500 px-[92px] mt-10 py-3 border-gray-200 font-bold text-white'>Reservar</button>
              <div className='mt-3 mx-auto text-center'>
                <span className='rounded  px-[0px] mt-5 py-3 border-gray-200 mx-auto'>Lista de reservas <Link className='text-blue-400 font-bold' href={`/components/ListaCitas/${id}`}>Ver</Link> </span>
              </div>
            </div>
          </div>

          <div>

          </div>

      </div>



    </main>
  )
}

export default Detail;
