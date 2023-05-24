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
			})
	
	

	const CrearServicio = async (e) => {
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
			console.error(error);
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
			handleSubmit={CrearServicio}

		/>
	)
}