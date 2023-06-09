'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormCliente from '../../CrearCliente/FormCliente';

export default function EliminarCliente ({dataCliente}) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [cliente, setCliente] = useState(
    {
      nombre: dataCliente.nombre,
      apellido: dataCliente.apellido,
      tipodocumento: dataCliente.tipodocumento,
      numerodocumento: dataCliente.numerodocumento,
      telefono: dataCliente.telefono,
      correo: dataCliente.correo,
    }
  );

  const eliminarCliente = async (e) => {
		e.preventDefault();
		setSubmitting(true);
    console.log(cliente,JSON.stringify(cliente));
		try {
      const token =  JSON.parse(localStorage.getItem('token'));
			await fetch('https://backendstyle.onrender.com/cliente/delete/'+dataCliente.idcliente,
			{
				method: 'DELETE',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}, 
			})
      .then( response =>  {
          console.log('Status code:',response.status)
          console.log('Status Text:',response.statusText) 
          if ( response.status === 200 ){
            console.log('Cliente borrado exitosamente')
            router.push('/components/Clientes')
          } else {
            console.log('Error Cliente no borrado')
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

    <FormCliente
    type="Borrar"
    cliente={cliente}
    setCliente={setCliente}
    submitting={submitting}
    handleSubmit={eliminarCliente}
    displayOnly={true}
  />
  )
}