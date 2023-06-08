'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormUsuario from "../../CrearUsuario/FormUsuario";

export default function EliminarUsuario ({dataUsuario}) {
	const router = useRouter();
	const [submitting, setSubmitting] = useState(false);
	const [usuario, setUsuario] = useState(
		{
			idpersona: dataUsuario.idpersona,
      nombre: dataUsuario.nombre,
      apellido: dataUsuario.apellido,
      dni: dataUsuario.dni,
      clave:dataUsuario.clave,
			correo: dataUsuario.correo,
			estado: dataUsuario.estado,
      roles: dataUsuario.roles,
		}
	)
  const roles = [
    {
      id: 2,
      rolNombre: "ROLE_USER"
    },
    {
      id: 1,
      rolNombre: "ROLE_ADMIN"
    }
  ]
	
	const EliminarUsuario = async (e) => {
		e.preventDefault();
		setSubmitting(true);
    console.log(usuario,JSON.stringify(usuario));
		try {
      const token =  sessionStorage.getItem("token");
			await fetch('https://backendstyle.onrender.com/auth/delete/'+usuario.idpersona,
			{
				method: 'DELETE',
				headers: {'Content-Type': 'application/json'}, 
        Authorization: `Bearer ${token}`,
				body: JSON.stringify(usuario)
			})
      .then( response =>  {
          console.log('Status code:',response.status)
          console.log('Status Text:',response.statusText) 
          if ( response.status === 200 ){
            console.log('Usuario borrado exitosamente')
            router.push('/components/Usuarios')
          } else {
            console.log('Error Usuario no borrado')
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
			type="Borrar"
			usuario={usuario}
			setUsuario={setUsuario}
			submitting={submitting}
			handleSubmit={EliminarUsuario}
      roles={roles}
      displayOnly={true}
		/>
	)
}