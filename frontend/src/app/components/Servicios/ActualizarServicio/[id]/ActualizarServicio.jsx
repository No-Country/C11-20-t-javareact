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
    }
  );

  const actualizaServicio = async (e) => {
    e.preventDefault();
    setSubmitting(true);
  
    try {
      response = await fetch('/api/servicio/new',
      {
        method: 'POST',
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