import Link from "next/link";

const fetchServicios = () => {
  return fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(data => data.products)
}

export default async function Servicios () {
    const servicios = await fetchServicios();

    return (
      <main className="bg-cyan-200 grid grid-cols-10 gap-2 min-h-screen p-2">
        <div className="bg-sky-100 rounded-xl p-2 col-span-2  border-purple-950">

        </div>
        <div className="bg-sky-100 rounded-xl col-span-8 border-purple-950 w-auto px-4 py-2"> 
          <h2 className="text-2xl">Administrar Servicios</h2>
          <hr className="bg-blue-300"></hr>
          <Link href={'/components/Servicios/CrearServicio'}>
            <button className="bg-blue-600 text-white px-3 py-2 cursor-pointer my-1.5 rounded hover:bg-blue-400 hover:text-black hover:outline-black">
              Crear Servicio
            </button>
          </Link>
          <div className="w-auto  border-purple-950 border">
            <table className="w-full border border-separate border-spacing-2 border-slate-600">
              <thead>
                <tr className="grid grid-cols-12 gap-2">
                  <th className="border border-slate-300 col-span-3">Nombre</th>
                  <th className="border border-slate-300 col-span-5">Descripcion</th>
                  <th className="border border-slate-300 col-span-2">Costo</th>
                  <th className="border border-slate-300 col-span-1">Estado</th>
                  <th className="border border-slate-300 col-span-1 flex flex-row justify-center gap-1.5">
                    <p>
                      Acciones
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  servicios?.map(servicio => (
                    <tr key={servicio.id} className="grid grid-cols-12 gap-2">
                      <td className="border border-slate-300 col-span-3 text-sm">{servicio.title}</td>
                      <td className="border border-slate-300 col-span-5 text-sm">{servicio.description}</td>
                      <td className="border border-slate-300 col-span-2 text-sm">${servicio.price}</td>
                      <td className="border border-slate-300 col-span-1 text-sm">Activo</td>
                      <td className="border border-slate-300 col-span-1 flex flex-row justify-center gap-1.5">
                        <button className="bg-yellow-300 text-white cursor-pointer rounded hover:bg-blue-400 hover:text-black hover:outline-black">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                          </svg>
                        </button>
                        <button className="bg-red-500 text-white cursor-pointer rounded hover:bg-blue-400 hover:text-black hover:outline-black">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>
                        </button>
                    </td>
                  </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>

      </main>
    )
}