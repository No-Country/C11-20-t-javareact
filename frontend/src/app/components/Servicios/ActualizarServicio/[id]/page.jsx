
import ActualizarServicio from "./ActualizarServicio";

const fetchServicio = (id) => {
  return fetch('https://dummyjson.com/products/'+id)
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

