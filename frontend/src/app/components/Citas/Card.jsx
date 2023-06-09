import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import pierna from '../../../../public/images/piernas1.jpg'
import peluquera from '../../../../public/images/peluquera1.jpg'
import manicurista from '../../../../public/images/manicurista.png'
import depilacion from '../../../../public/images/peluquero1.jpeg'
import capilar from '../../../../public/images/capilar.jpg'




function Card(props) {
  const { id, nombre, apellido, correo, especialidad, disponibilidad } = props
  return (
    <div className="max-w-[450px] bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          <Image 
            className="rounded-t-lg w-[250px] h-[160px]" 
            src={props.id == 1? peluquera : props.id == 2? manicurista :  props.id == 3? depilacion : capilar} 
            alt="estilista" 
          />
        <div className="h-72 bg-gradient-to-r from-purple-200 to-blue-200 rounded-b-lg ">
          <br />
          <h5 className="mb-0 text-lg font-bold tracking-tight text-gray-900 dark:text-black text-center">
            {props.nombre} {props.apellido.slice(0, 6) === 'Aragon'? props.apellido.slice(0, 6) : props.apellido }
          </h5>
          <h5 className="mb-5 text-xl font-bold tracking-tight text-gray-900 dark:text-black text-center">
            {props.especialidad} 
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-black text-left text-sm ml-2"><strong>Correo:</strong> {props.correo}</p>
          <p className="mb-3 font-normal dark:text-black text-left text-sm ml-2 text-black"><strong>Disponibilidad:</strong> {props.disponibilidad.replace('-',',')} y Sábado.</p>
          <Link href={`components/Citas/${props.id}`} className="inline-flex items-center ml-[115px] px-3 py-2 mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Agendar
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </Link>
        </div>
      </div>
  )
}

export default Card
