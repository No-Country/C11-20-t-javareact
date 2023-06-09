'use-client'
import Link from "next/link";
// import CambiaEstado from "./CambiarEstado/CambiarEstado";

const fetchUsuarios = () => {
  return fetch('https://backendstyle.onrender.com/auth/lista',{cache: "no-cache"})
  .then(res => res.json())
}

export default async function Usuarios (id) {
    const usuarios = await fetchUsuarios();

    return (
      <main className="bg-blue-50 grid grid-cols-10 gap-2 min-h-screen p-2">
        <div className="bg-slate-200 rounded-sm p-2 col-span-2  border-purple-950">

        </div>
        <div className="bg-slate-200 rounded-sm col-span-8 border-purple-950 w-auto px-4 py-4"> 
          <div className="bg-slate-100 rounded-sm px-4 py-2">
            <h2 className="text-lg">Administrar Usuarios</h2>
          </div>
          <hr className="bg-blue-300"></hr>
          <div className="w-auto bg-white border py-3">
            <div className="w-auto bg-white px-4 pb-2">
              <Link href={'/components/Usuarios/CrearUsuario'}>
              <button className="bg-blue-600 text-white text-sm px-2 py-2 cursor-pointer my-1.5 rounded hover:bg-slate-300 hover:text-black">
                Crear Usuario
              </button>
              </Link>
            </div>
            <div className="w-auto bg-white px-4">
              <table className="w-full px-4 border">
                <thead>
                  <tr className="grid grid-cols-12">
                    <th className="border border-slate-200 col-span-3 px-2 py-1.5 text-left text-sm">Nombre</th>
                    <th className="border border-slate-200 col-span-3 px-2 py-1.5 text-left text-sm">Apellido</th>
                    <th className="border border-slate-200 col-span-2 px-2 py-1.5 text-left text-sm">Documento</th>
                    <th className="border border-slate-200 col-span-2 px-2 py-1.5 text-left text-sm">Correo Electronico</th>
                    <th className="border border-slate-200 col-span-1 px-2 py-1.5 text-left text-sm">Estado</th>
                    <th className="border border-slate-200 col-span-1 px-2 py-1.5 text-left text-sm flex flex-row justify-center gap-1.5">
                      <p>
                        Acciones
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    usuarios?.map(usuario => (
                      <tr key={usuario.idpersona} className="grid grid-cols-12">
                        <td className="border border-slate-200 col-span-3 px-2 py-1.5 text-left text-sm">{usuario.nombre}</td>
                        <td className="border border-slate-200 col-span-3 px-2 py-1.5 text-left text-sm">{usuario.apellido}</td>
                        <td className="border border-slate-200 col-span-2 px-2 py-1.5 text-left text-sm">{usuario.dni}</td>
                        <td className="border border-slate-200 col-span-2 px-2 py-1.5 text-left text-sm">{usuario.correo}</td>
                        <td className="border border-slate-200 col-span-1 px-2 py-1.5 text-left text-sm flex justify-center items-center">
                          {usuario.estado ? "Activo" : "Inactivo"
                          /* <CambiaEstado id={servicio.id}/> */}
                        </td>
                        <td className="border border-slate-200 col-span-1 px-2 py-1.5 text-left text-sm flex flex-row justify-center gap-1.5">
                          <Link href='/components/Usuarios/ActualizarUsuario/[id]' as={`/components/Usuarios/ActualizarUsuario/${usuario.idpersona}`}>
                          <button className="bg-blue-600 text-white text-sm px-1 py-1 cursor-pointer rounded hover:bg-slate-300 hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                          </button>
                          </Link>
                          <Link href="/components/Usuarios/EliminarUsuario/[id]" as={`/components/Usuarios/EliminarUsuario/${usuario.idpersona}`}>
                            <button className="bg-red-600 text-white text-sm px-1 py-1 cursor-pointer rounded  hover:bg-slate-300 hover:text-black">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                              </svg>
                            </button>
                          </Link>

                      </td>
                    </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </main>
    )
}