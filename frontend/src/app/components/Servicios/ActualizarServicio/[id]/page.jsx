'use client'
import ActualizarServicio from "./ActualizarServicio";

const fetchServicio = (id) => {
  const token =  JSON.parse(localStorage.getItem('token'));
  return fetch('https://backendstyle.onrender.com/servicio/detail/'+id,
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
      <ActualizarServicio
        dataServicio={dataServicio}
		  />
    )
}

