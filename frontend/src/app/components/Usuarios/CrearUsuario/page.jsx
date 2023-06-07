'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormUsuario from "./FormUsuario";

export default function CrearUsuario () {
	const router = useRouter();
	const [submitting, setSubmitting] = useState(false);
	const [usuario, setUsuario] = useState(
		{
			nombre: '',
      apellido: '',
      dni: '',
      clave:'',
			correo: '',
			estado: true,
      fechacreacion:'',
		}
	)

	const crearUsuario = async (e) => {
		e.preventDefault();
		setSubmitting(true);
    console.log(usuario,JSON.stringify(usuario));
		try {
      const token =  sessionStorage.getItem("token");
			await fetch('http://localhost:8085/auth/nuevo',
			{
				method: 'POST',
				headers: {'Content-Type': 'application/json'}, 
        Authorization: `Bearer ${token}`,
				body: JSON.stringify(usuario)
			})
      .then( response =>  {
          console.log('Status code:',response.status)
          console.log('Status Text:',response.statusText) 
          if ( response.status === 201 ){
            console.log('Usuario creado exitosamente')
            router.push('/components/Usuarios')
          } else {
            console.log('Error Usuario no creado')
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
		<FormUsuario
			type="Crear"
			usuario={usuario}
			setUsuario={setUsuario}
			submitting={submitting}
			handleSubmit={crearUsuario}

		/>
	)
}