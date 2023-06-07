import Link from 'next/link';
import React from 'react';

const FormCrearServicio = ({type, servicio, setServicio, submitting, handleSubmit, displayOnly}) => {

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
        <form onSubmit={(e) => handleSubmit(e)} className="p-5 mt-5 w-full flex flex-wrap gap-4 border border-slate-100">
          <div className="flex flex-col w-full">
            <label className="block">
              <span className="text-sm text-satoshi font-semibold text-gray-700">
                Nombre
              </span>    
            </label> 
            <input value={servicio.nombre} 
              onChange={(e)=> setServicio({ ...servicio, nombre: e.target.value})}
              placeholder="Nombre del Servicio..."
              type="text"
              required
              disabled={displayOnly}
              className="invalid:border-red-500 bg-slate-50 text-sm border rounded border-slate-200 px-2 py-1"            
            >
            </input>
          </div>
          <div className="flex flex-col w-full">
            <label>
              <span className="text-sm text-satoshi font-semibold text-gray-700">
                Descripcion
              </span>
            </label>
            <textarea value={servicio.descripcion} 
              onChange={(e)=> setServicio({ ...servicio, descripcion: e.target.value})}
              placeholder="Descripcion del Servicio..."
              required
              disabled={displayOnly}
              className="invalid:border-red-500 bg-slate-50 text-sm border rounded border-slate-200 px-2 py-1"
            >
            </textarea>
          </div>
          <div className="flex flex-col w-[20%]">
            <label>
              <span className="text-sm text-satoshi font-semibold text-gray-700">
                Precio $
              </span>
            </label> 
            <input value={servicio.precio} 
              onChange={(e)=> setServicio({ ...servicio, precio: parseInt(e.target.value)})}
              placeholder="Precio del Servicio..."
              required
              disabled={displayOnly}
              type="number"
              className="invalid:border-red-500 bg-slate-50 text-sm border rounded border-slate-200 px-2 py-1 w-full"
            >
            </input>
          </div>

          <div className="flex flex-col w-[20%]">
            <label className="block">
              <span className="text-sm text-satoshi font-semibold text-gray-700">
                Estado
              </span>    
            </label> 
            <select value={servicio.estado}
              onChange={(e)=> setServicio({ ...servicio, estado: e.target.value})}
              required
              disabled={displayOnly}
              className="invalid:border-red-500 bg-slate-50 text-sm border rounded border-slate-200 px-2 py-1"            
            >
              <option value={true}>Activo</option>
              <option value={false}>Inactivo</option>
            </select>
          </div>
        
          {/* { (type === 'Borrar') &&
          <div className="flex flex-col w-[30%]">
            <label>
              <span className="text-sm text-satoshi font-semibold text-gray-700">
                Fecha creacion
              </span>
            </label> 
            <input value={servicio.fechacreacion} 
              onChange={(e)=> setServicio({ ...servicio, fechacreacion: e.target.value})}
              required
              disabled={displayOnly}
              type="date"
              className="invalid:border-red-500 bg-slate-50 text-sm border rounded border-slate-200 px-2 py-1 w-1/2"
            >
            </input>
          </div>
          } */}

          <div className='flex flex-row justify-end mx-3 mb-5 gap-4 items-center w-full flex-nowrap'>
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
