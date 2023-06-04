import Link from 'next/link';
import React from 'react';

const FormCrearServicio = ({type, servicio, setServicio, submitting, handleSubmit}) => {

  return (
  <main className="bg-blue-50 grid grid-cols-10 gap-2 min-h-screen p-2">
    <div className="bg-slate-200 rounded-sm p-2 col-span-2">

    </div>
    <div className="bg-slate-200 rounded-sm col-span-8 w-auto px-4 py-4"> 
      <div className="bg-slate-100 rounded-sm px-4 py-2">
        <h2 className="text-lg">{type} Servicio</h2>
      </div>
      <hr className="bg-blue-300"></hr>
      <div className="bg-white col-span-8 w-full px-4 py-2"> 
        <form onSubmit={(e) => handleSubmit(e)} className="p-5 mt-5 w-full flex flex-col gap-7 border border-slate-100">
          <div className="flex flex-col">
            <label className="block">
              <span className="text-sm text-satoshi font-semibold text-gray-700">
                Nombre
              </span>    
            </label> 
            <input value={servicio.nombreservicio} 
              onChange={(e)=> setServicio({ ...servicio, nombreservicio: e.target.value})}
              placeholder="Nombre del Servicio..."
              type="text"
              required
              className="invalid:border-red-500 bg-slate-50 text-sm border rounded border-slate-200 px-2 py-1"            
            >
            </input>
          </div>
          <div className="flex flex-col">
            <label>
              <span className="text-sm text-satoshi font-semibold text-gray-700">
                Descripcion
              </span>
            </label>
            <textarea value={servicio.descripcion} 
              onChange={(e)=> setServicio({ ...servicio, descripcion: e.target.value})}
              placeholder="Descripcion del Servicio..."
              required
              className="invalid:border-red-500 bg-slate-50 text-sm border rounded border-slate-200 px-2 py-1"
            >
            </textarea>
          </div>
          <div className="flex flex-col">
            <label>
              <span className="text-sm text-satoshi font-semibold text-gray-700">
                Precio $
              </span>
            </label> 
            <input value={servicio.costo} 
              onChange={(e)=> setServicio({ ...servicio, costo: e.target.value})}
              placeholder="Precio del Servicio..."
              required
              type="number"
              className="invalid:border-red-500 bg-slate-50 text-sm border rounded border-slate-200 px-2 py-1 w-1/4"
            >
            </input>
          </div>
        
          <div className='flex flex-row justify-end mx-3 mb-5 gap-4 items-center'>
            <Link href={'/components/Servicios'}>
              <button type='button' 
                className="bg-red-600 text-white text-sm px-3 py-1.5 cursor-pointer rounded  hover:bg-slate-300 hover:text-black">
                Cancelar
              </button>
            </Link>
            <button type='submit' disabled={submitting} 
              className="bg-blue-600 text-white text-sm px-3 py-1.5 cursor-pointer rounded hover:bg-slate-300 hover:text-black">
              {submitting ? `${type}...` : type}
            </button>
          </div>

        </form>
      </div>
    </div>  
  </main>
  )

}

export default FormCrearServicio;
