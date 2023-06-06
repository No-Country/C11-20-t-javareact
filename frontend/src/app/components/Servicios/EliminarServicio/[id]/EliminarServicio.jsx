'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormCrearServicio from '../../CrearServicio/FormCrearServicio';

export default function EliminarServicio ({dataServicio}) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [servicio, setServicio] = useState(
    {
      nombre: dataServicio.nombre,
      descripcion: dataServicio.descripcion,
      precio: dataServicio.precio,
      estado: dataServicio.estado,
      fechacreacion: dataServicio.fechacreacion,
    }
  );

  const eliminarServicio = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    console.log(servicio,JSON.stringify(servicio));
    try {
      const token =  sessionStorage.getItem("token");
      await fetch('http://localhost:8085/servicio/delete/'+dataServicio.idservicio,
      {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}, 
      })
      .then( response =>  {
          console.log('Status code:',response.status)
          console.log('Status Text:',response.statusText) 
          if ( response.status === 200 ){
            console.log('Servicio borrado exitosamente')
            router.push('/components/Servicios')
          } else {
            console.log('Error Servicio no borrado')
          }
          return response.json();
      })
      .then( json =>  {
        console.log(json)
      })
      .catch( error => console.log('Error:',error))
    } catch (error) {
      console.error('error:', error);
    } finally {
      setSubmitting(false);
    }
  }

  return (

    <FormCrearServicio
    type="Borrar"
    servicio={servicio}
    setServicio={setServicio}
    submitting={submitting}
    handleSubmit={eliminarServicio}
    displayOnly={true}
  />
  )
}