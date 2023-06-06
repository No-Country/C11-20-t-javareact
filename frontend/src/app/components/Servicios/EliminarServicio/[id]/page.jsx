'use client'
import EliminarServicio from "./EliminarServicio";

const fetchServicio = (id) => {
  const token =  sessionStorage.getItem("token");
  return fetch('http://localhost:8085/servicio/detail/'+id,
  {
    method: 'GET',
    headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}, 
  })
  .then( resp => resp.json())
  .catch( error => console.log(error))
}

export default async function FetchServicio ({params}) {
	const {id} = params;
	const dataServicio = await fetchServicio(id);
  console.log(dataServicio);

    return (
      <EliminarServicio
        dataServicio={dataServicio}
		  />
    )
}