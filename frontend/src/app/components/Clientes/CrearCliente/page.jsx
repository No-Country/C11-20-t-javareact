'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormCliente from './FormCliente';

export default function CrearServicio () {
	const router = useRouter();
	const [submitting, setSubmitting] = useState(false);
	const [cliente, setCliente] = useState(
		{
			nombre: '',
			apellido: '',
			tipodocumento: '',
			numerodocumento: '',
            telefono: '',
            correo: '',
		}
	)

	const crearCliente = async (e) => {
		e.preventDefault();
		setSubmitting(true);
		console.log(cliente,JSON.stringify(cliente))

		try {
			const token = JSON.parse(localStorage.getItem('token'))
			console.log(token)
			await fetch('http://localhost:8085/cliente/create',
			{
				method: 'POST',
				headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}, 
				body: JSON.stringify(cliente)
			})
			.then( response =>  {
				console.log('Status code:',response.status)
				console.log('Status Text:',response.statusText) 
				if ( response.status === 200 ){
				  console.log('Cliente creado exitosamente')
				  router.push('/components/Clientes')
				} else {
				  console.log('Error Cliente no creado')
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
			type="Crear"
			cliente={cliente}
			setCliente={setCliente}
			submitting={submitting}
			handleSubmit={crearCliente}

		/>
	)
}