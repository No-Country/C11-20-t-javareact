'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import FormCrearServicio from './FormCrearServicio';

export default function CrearServicio () {
	const router = useRouter();
	const [submitting, setSubmitting] = useState(false);
	const [servicio, setServicio] = useState(
		{
			nombreservicio: '',
			descripcion: '',
			costo: 0,
		}
	)

	
	const crearServicio = async (e) => {
		e.preventDefault();
		setSubmitting(true);
		console.log(servicio,JSON.stringify(servicio))

		try {
			response = await fetch('http://localhost:8085/servicio/create',
			{
				method: 'POST',
				headers: {'Content-Type': 'application/json'}, 
				body: JSON.stringify(servicio)
			})
			console.log(response)
			if(response.mensaje) {
				console.log(response.mensaje);
				router.push('/components/Servicios');
			}
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