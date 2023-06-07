'use client'
import EliminarCliente from "./EliminarCliente";

const fetchServicio = (id) => {
  const token =  JSON.parse(localStorage.getItem('token'));
  return fetch('http://localhost:8085/cliente/detail/'+id,
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
      <EliminarCliente
        dataCliente={dataCliente}
		  />
    )
}
