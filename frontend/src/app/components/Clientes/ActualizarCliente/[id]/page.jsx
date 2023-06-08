'use client'
import ActualizarCliente from "./ActualizarCliente";

const fetchServicio = (id) => {
  const token =  JSON.parse(localStorage.getItem('token'));
  return fetch('https://backendstyle.onrender.com/cliente/detail/'+id,
  {
    method: 'GET',
    headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}, 
  })
  .then( resp => resp.json())
  .catch( error => console.log(error))
}

export default async function FetchServicio ({params}) {
	const {id} = params;
	const dataCliente = await fetchServicio(id);
  console.log('dataCliente',dataCliente);

    return (
      <ActualizarCliente
        dataCliente={dataCliente}
		  />
    )
}

