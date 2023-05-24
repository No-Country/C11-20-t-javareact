import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-cyan-200 grid grid-cols-10 gap-2 min-h-screen p-2">
      <div className="bg-sky-100 rounded-xl p-2 col-span-2  border-purple-950">
        <nav>
          <ul>
            <li className='py-2 px-1 my-1 bg-sky-200 rounded-lg text-blue-600 hover:bg-blue-600 hover:text-sky-200'>
              <a>Usuarios</a>
            </li>
            <hr></hr>
            <li className='py-2 px-1 my-1 bg-sky-200 rounded-lg text-blue-600 hover:bg-blue-600 hover:text-sky-200'>
              <a>Estilistas</a>
            </li>
            <hr></hr>
            <li className='py-2 px-1 my-1 bg-sky-200 rounded-lg text-blue-600 hover:bg-blue-600 hover:text-sky-200'>
              <a>Clientes</a>
            </li>
            <hr></hr>
            <li className='py-2 px-1 my-1 bg-sky-200 rounded-lg text-blue-600 hover:bg-blue-600 hover:text-sky-200'>
              <Link href={'/components/Servicios'}>Servicios</Link>
            </li> 
            <hr></hr>
            <li className='py-2 px-1 my-1 bg-sky-200 rounded-lg text-blue-600 hover:bg-blue-600 hover:text-sky-200'>
              <a>Turnos</a>
            </li>
            <hr></hr>
          </ul>
        </nav>

      </div>

      <div className="bg-sky-100 rounded-xl col-span-8 border-purple-950 w-auto">
        <div className='bg-black box-border h-full bg-cover bg-[url(../../public/images/piernas1.jpg)]'>
          <div className='h-full bg-cover bg-black/[.15]'>
            <div className='w-1/2 text-white p-14'>
              <h2 className='text-5xl'>Depilacion Laser de Ultima Tecnologia</h2>
              <p>La depilación láser de diodo de última generación que tenemos en Depil & Esthetic es 
                la tecnología avalada a nivel mundial por los estudios clínicos para depilación 
                permanente, se hace uso de una luz unidireccional y monocromática lo que 
                garantiza que va directa y únicamente a la melanina del vello atrofiando así el 
                folículo piloso.
              </p>
            </div>
          </div>
        </div>

      </div>

    </main>
  )
}
