'use client'
import Swal from 'sweetalert2'

export default function CambiaEstado ({id}) {

  // const muestraMensaje = () => {
  //   response ? 
  //   Swal.fire({
  //     title: "Email sent!",
  //     icon: "success",
  //     confirmButtonText: "Continue",
  //   })
  //   :
  //   Swal.fire({
  //     title: "Estado no Actualizado",
  //     icon: "error",
  //     confirmButtonText: "Continue",
  //   })
  // }

  const cambiaEstado = async (e,id) => {
    e.preventDefault();
    try {
      let respuesta = await fetch('https://backendstyle.onrender.com/servicio/estado/'+ id,
      {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'}, 
        // body: JSON.stringify(servicio)
      })
      if(respuesta.ok) {
        router.push('/components/Servicios');
      }
    } catch (error) {
      console.error('Error:',error);
    }
  }

  return (
  // <Link href='/components/Servicios/CambiarEstado/[id]' as={`/components/Servicios/CambiarEstado/${servicio.id}`}>
    <button 
      onClick={(e)=> cambiaEstado(e, id)}
      className="bg-green-400 text-white text-sm px-1 py-1 cursor-pointer rounded hover:bg-slate-300 hover:text-black">
      Activo
    </button>
  // </Link>
  )
}