import Link from 'next/link';
import React from 'react';

const FormCrearServicio = ({type, servicio, setServicio, submitting, handleSubmit}) => {

  return (
    <main className="bg-cyan-200 grid grid-cols-10 gap-2 min-h-screen p-2">
    <div className="bg-sky-100 rounded-xl p-2 col-span-2  border-purple-950">

    </div>
    <div className="bg-sky-100 rounded-xl col-span-8 w-full px-4 py-2"> 
      <h2 className="text-2xl">{type} Servicio</h2>
      <hr className="bg-blue-300"></hr>
      <form onSubmit={(e) => handleSubmit(e)} className="p-5 mt-5 w-full flex flex-col gap-7 border border-purple-950">
        <div className="border flex flex-col">
          <label className="block">
            <span className="text-satoshi font-semibold text-base text-gray-700">
              Nombre
            </span>    
          </label> 
          <input value={servicio.nombre} 
            onChange={(e)=> setServicio({ ...servicio, nombre: e.target.value})}
            placeholder="Nombre del Servicio..."
            type="text"
            required
            className="form-input invalid:border-red-500"
          >
          </input>
        </div>
        <div className="border flex flex-col">
          <label>
            <span className="text-satoshi font-semibold text-base text-gray-700">
              Descripcion
            </span>
          </label>
          <textarea value={servicio.descripcion} 
            onChange={(e)=> setServicio({ ...servicio, descripcion: e.target.value})}
            placeholder="Descripcion del Servicio..."
            required
            className="form_textarea invalid:border-red-500"
          >
          </textarea>
        </div>
        <div className="border flex flex-col">
          <label>
            <span className="text-satoshi font-semibold text-base text-gray-700">
              Precio $
            </span>
          </label> 
          <input value={servicio.precio} 
            onChange={(e)=> setServicio({ ...servicio, precio: e.target.value})}
            placeholder="Escriba el Nobre del Servicio..."
            required
            type="number"
            className="form_input invalid:border-red-500 w-1/4"
          >
          </input>
        </div>
      
        <div className='flex flex-row justify-end mx-3 mb-5 gap-4 items-center'>
          <Link href={'/components/Servicios'}>
            <button type='button' className="bg-orange-600 text-white px-3 py-1.5 cursor-pointer rounded hover:bg-orange-400 hover:text-black hover:outline-black">
              Cancelar
            </button>
          </Link>
          <button type='submit' disabled={submitting} className="bg-blue-600 text-white px-3 py-1.5 cursor-pointer rounded hover:bg-blue-400 hover:text-black hover:outline-black">
            {submitting ? `${type}...` : type}
          </button>
        </div>

      </form>
    </div>
  </main>
  )

}

export default FormCrearServicio;
