import Link from 'next/link';
import React from 'react';

const FormUsuario = ({type, usuario, setUsuario, submitting, handleSubmit, roles, displayOnly}) => {

  const removeRol = (name, e) => {
    e.preventDefault()
    setUsuario(prevState => ({
      ...prevState,
      roles: usuario.roles.filter(rol => rol.rolNombre !== name)
    }))
  };

  const handleRoles = (e) => { 
    e.preventDefault()
    let rolList = usuario.roles.filter(rol => rol.rolNombre === e.target.value)
    let idRol = roles.find(rol => rol.rolNombre === e.target.value).id
    if (rolList.length === 0) {
      let newState = {...usuario, roles: [...usuario.roles, { id: idRol, rolNombre: e.target.value }]}
      setUsuario(newState);
    }
  };

  return (
  <main className="bg-blue-50 grid grid-cols-10 gap-2 min-h-screen p-2">
    <div className="bg-slate-200 rounded-sm p-2 col-span-2">

    </div>
    <div className="bg-slate-200 rounded-sm col-span-8 w-auto px-4 py-4"> 
      <div className="bg-slate-100 rounded-sm px-4 py-2">
        <h2 className="text-lg">{type} Usuario</h2>
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
            <input value={usuario.nombre} 
              onChange={(e)=> setUsuario({ ...usuario, nombre: e.target.value})}
              placeholder="Nombre..."
              type="text"
              required
              disabled={displayOnly}
              className="invalid:border-red-500 bg-slate-50 text-sm border rounded border-slate-200 px-2 py-1"            
            >
            </input>
          </div>

          <div className="flex flex-col w-[40%]">
            <label className="block">
              <span className="text-sm text-satoshi font-semibold text-gray-700">
                Apellido
              </span>    
            </label> 
            <input value={usuario.apellido} 
              onChange={(e)=> setUsuario({ ...usuario, apellido: e.target.value})}
              placeholder="Apellido..."
              type="text"
              required
              disabled={displayOnly}
              className="invalid:border-red-500 bg-slate-50 text-sm border rounded border-slate-200 px-2 py-1"            
            >
            </input>
          </div>

          <div className="flex flex-col w-[30%]">
            <label className="block">
              <span className="text-sm text-satoshi font-semibold text-gray-700">
                Documento No
              </span>    
            </label> 
            <input value={usuario.dni} 
              onChange={(e)=> setUsuario({ ...usuario, dni: e.target.value})}
              placeholder="Numero documento..."
              type="text"
              required
              disabled={displayOnly}
              className="invalid:border-red-500 bg-slate-50 text-sm border rounded border-slate-200 px-2 py-1"            
            >
            </input>
          </div>

          { type === 'Crear' &&
          <div className="flex flex-col w-[30%]">
            <label>
              <span className="text-sm text-satoshi font-semibold text-gray-700">
                Clave
              </span>
            </label>
            <input value={usuario.clave} 
              onChange={(e)=> setUsuario({ ...usuario, clave: e.target.value})}
              placeholder="Clave o password..."
              required
              disabled={displayOnly}
              className="invalid:border-red-500 bg-slate-50 text-sm border rounded border-slate-200 px-2 py-1"
            >
            </input>
          </div>
          }

          <div className="flex flex-col w-[40%]">
            <label>
              <span className="text-sm text-satoshi font-semibold text-gray-700">
                Correo electronico
              </span>
            </label>
            <input value={usuario.correo} 
              onChange={(e)=> setUsuario({ ...usuario, correo: e.target.value})}
              placeholder="Correo electronico..."
              type='email'
              required
              disabled={displayOnly}
              className="invalid:border-red-500 bg-slate-50 text-sm border rounded border-slate-200 px-2 py-1"
            >
            </input>
          </div>

          <div className="flex flex-col w-[20%]">
            <label className="block">
              <span className="text-sm text-satoshi font-semibold text-gray-700">
                Estado
              </span>    
            </label> 
            <select value={usuario.estado}
              onChange={(e)=> setUsuario({ ...usuario, estado: e.target.value})}
              required
              disabled={displayOnly}
              className="invalid:border-red-500 bg-slate-50 text-sm border rounded border-slate-200 px-2 py-1"            
            >
              <option value={true}>Activo</option>
              <option value={false}>Inactivo</option>
            </select>
          </div>

          { (type === 'Crear' || type === 'Borrar') &&
          <div className="flex flex-col w-[30%]">
            <label>
              <span className="text-sm text-satoshi font-semibold text-gray-700">
                Fecha creacion
              </span>
            </label> 
            <input value={usuario.fechacreacion} 
              onChange={(e)=> setUsuario({ ...usuario, fechacreacion: e.target.value})}
              required
              disabled={displayOnly}
              type="date"
              className="invalid:border-red-500 bg-slate-50 text-sm border rounded border-slate-200 px-2 py-1 w-1/2"
            >
            </input>
          </div>
          }

          { type === 'Modificar' &&
            <div className="flex flex-col w-[60%]">
              <label >
                <span className="text-sm text-satoshi font-semibold text-gray-700">
                  Roles:
                </span> 
              </label>
              <div className="grid grid-cols-2 gap-2  bg-slate-50 text-sm border rounded border-slate-200 px-2 py-1">
                <div>
                  <select name="roles" onChange={e => handleRoles(e)} defaultValue="Seleccionar">
                    <option value="Seleccionar" disabled>Seleccionar...</option>
                    {roles?.map((rol, index) => <option key={index}>{rol.rolNombre}</option>)}
                  </select>
                </div>
                <div>
                  <ul>
                    {
                      usuario.roles?.map((rol, index) => (
                        <li className="flex flex-row justify-between" key={index}>
                          {rol.rolNombre}
                          <button onClick={(e) => removeRol(rol.rolNombre, e)}>X</button>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          }

          { type === 'Borrar' &&
            <div className="flex flex-col w-[30%]">
              <label >
                <span className="text-sm text-satoshi font-semibold text-gray-700">
                  Roles:
                </span> 
              </label>
              <div className="grid grid-cols-2 gap-2  bg-slate-50 text-sm border rounded border-slate-200 px-2 py-1">
                <div>
                  <ul>
                    {
                      usuario.roles?.map((rol, index) => (
                        <li className="flex flex-row justify-between" key={index}>
                          {rol.rolNombre}
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
        
          }

          <hr className='bg-slate-500'/>
          <div className='flex flex-row justify-end mx-3 mb-5 gap-4 items-center w-full flex-nowrap'>
            <Link href={'/components/Usuarios'}>
              <button type='button'
                className="justify-self-start bg-red-600 text-white text-sm px-3 py-1.5 cursor-pointer rounded  hover:bg-slate-300 hover:text-black">
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

export default FormUsuario;
