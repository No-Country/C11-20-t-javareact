import Link from 'next/link';
import React from 'react';

const FormCliente = ({type, cliente, setCliente, submitting, handleSubmit, displayOnly}) => {
  console.log('cliente',cliente)
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
          
          <div className="flex flex-col w-[40%]">
            <label className="block">
              <span className="text-sm text-satoshi font-semibold text-gray-700">
                Nombre
              </span>    
            </label> 
            <input value={cliente.nombre} 
              onChange={(e)=> setCliente({ ...cliente, nombre: e.target.value})}
              placeholder="Nombre..."
              type="text"
              required
              disabled={displayOnly}
              className="invalid:border-red-500 bg-slate-50 text-sm border rounded border-slate-200 px-2 py-1"            
            >
            </input>
          </div>

          <div className="flex flex-col w-[40%]">
            <label>
              <span className="text-sm text-satoshi font-semibold text-gray-700">
                Apellido
              </span>
            </label>
            <input value={cliente.apellido} 
              onChange={(e)=> setCliente({ ...cliente, apellido: e.target.value})}
              placeholder="Apellido..."
              type="text"
              required
              disabled={displayOnly}
              className="invalid:border-red-500 bg-slate-50 text-sm border rounded border-slate-200 px-2 py-1"
            >
            </input>
          </div>

          <div className="flex flex-col w-[30%]">
            <label>
              <span className="text-sm text-satoshi font-semibold text-gray-700">
                Tipo Documento
              </span>
            </label> 
            <input value={cliente.tipodocumento} 
              onChange={(e)=> setCliente({ ...cliente, tipodocumento: e.target.value})}
              placeholder="Tipo de documento..."
              type="text"
              required
              disabled={displayOnly}
              className="invalid:border-red-500 bg-slate-50 text-sm border rounded border-slate-200 px-2 py-1 w-full"
            >
            </input>
          </div>

          <div className="flex flex-col w-[30%]">
            <label>
              <span className="text-sm text-satoshi font-semibold text-gray-700">
                Documento
              </span>
            </label> 
            <input value={cliente.numerodocumento} 
              onChange={(e)=> setCliente({ ...cliente, numerodocumento: e.target.value})}
              placeholder="Numero de documento..."
              required
              disabled={displayOnly}
              type="text"
              className="invalid:border-red-500 bg-slate-50 text-sm border rounded border-slate-200 px-2 py-1 w-full"
            >
            </input>
          </div>

          <div className="flex flex-col w-[30%]">
            <label>
              <span className="text-sm text-satoshi font-semibold text-gray-700">
                Telefono
              </span>
            </label> 
            <input value={cliente.telefono} 
              onChange={(e)=> setCliente({ ...cliente, telefono: e.target.value})}
              placeholder="Numero de telefono..."
              required
              disabled={displayOnly}
              type="text"
              className="invalid:border-red-500 bg-slate-50 text-sm border rounded border-slate-200 px-2 py-1 w-full"
            >
            </input>
          </div>
        
          <div className="flex flex-col w-[40%]">
            <label>
              <span className="text-sm text-satoshi font-semibold text-gray-700">
                Correo
              </span>
            </label> 
            <input value={cliente.correo} 
              onChange={(e)=> setCliente({ ...cliente, correo: e.target.value})}
              placeholder="Correo electronico..."
              required
              disabled={displayOnly}
              type="email"
              className="invalid:border-red-500 bg-slate-50 text-sm border rounded border-slate-200 px-2 py-1 w-full"
            >
            </input>
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
            <Link href={'/components/Clientes'}>
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

export default FormCliente;
