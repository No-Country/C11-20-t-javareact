'use client'
import { useState } from "react";
import FormCrearServicio from '../../CrearServicio/FormCrearServicio';

export default function ActualizarServicio ({dataServicio}) {
  const [submitting, setSubmitting] = useState(false);
  const [servicio, setServicio] = useState(
    {
      nombreservicio: dataServicio.title,
      descripcion: dataServicio.description,
      costo: dataServicio.price,
      id: dataServicio.id,
    }
  );

  const actualizaServicio = async (e) => {
    e.preventDefault();
    setSubmitting(true);
  
    try {
      let response = await fetch('http://localhost:8085/servicio/update/'+servicio.id,
      {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(servicio)
      })
      if(response.ok) {
        router.push('/components/Servicios');
      }
    } catch (error) {
      console.error('Error:',error);
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