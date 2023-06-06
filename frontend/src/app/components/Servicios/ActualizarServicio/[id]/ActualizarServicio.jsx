'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormCrearServicio from '../../CrearServicio/FormCrearServicio';

export default function ActualizarServicio ({dataServicio}) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [servicio, setServicio] = useState(
    {
      nombre: dataServicio.nombre,
      descripcion: dataServicio.descripcion,
      precio: dataServicio.precio,
      estado: dataServicio.estado,
    }
  );

  const actualizaServicio = async (e) => {
		e.preventDefault();
		setSubmitting(true);
    console.log(servicio,JSON.stringify(servicio));
		try {
      const token =  sessionStorage.getItem("token");
			await fetch('http://localhost:8085/servicio/update/'+dataServicio.idservicio,
			{
				method: 'PUT',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}, 
				body: JSON.stringify(servicio)
			})
      .then( response =>  {
          console.log('Status code:',response.status)
          console.log('Status Text:',response.statusText) 
          if ( response.status === 200 ){
            console.log('Servicio modificado exitosamente')
            router.push('/components/Servicios')
          } else {
            console.log('Error Servicio no modificado')
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
    type="Modificar"
    servicio={servicio}
    setServicio={setServicio}
    submitting={submitting}
    handleSubmit={actualizaServicio}

  />
  )
}