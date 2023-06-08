'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormCrearServicio from './FormCrearServicio';

export default function CrearServicio () {
	const router = useRouter();
	const [submitting, setSubmitting] = useState(false);
	const [servicio, setServicio] = useState(
		{
			nombre: '',
			descripcion: '',
			precio: 0,
			estado: true,
		}
	)

	const crearServicio = async (e) => {
		e.preventDefault();
		// setServicio( prevState =>  ({...prevState, fechacreacion: formatDate(new Date(prevState.fechacreacion))}))
		setSubmitting(true);
		console.log(servicio,JSON.stringify(servicio))

		try {
			const token = JSON.parse(localStorage.getItem('token'))
			console.log(token)
			await fetch('https://backendstyle.onrender.com/servicio/create',
			{
				method: 'POST',
				headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}, 
				body: JSON.stringify(servicio)
			})
			.then( response =>  {
				console.log('Status code:',response.status)
				console.log('Status Text:',response.statusText) 
				if ( response.status === 200 ){
				  console.log('Servicio creado exitosamente')
				  router.push('/components/Servicios')
				} else {
				  console.log('Error Servicio no creado')
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
			type="Crear"
			servicio={servicio}
			setServicio={setServicio}
			submitting={submitting}
			handleSubmit={crearServicio}

		/>
	)
}