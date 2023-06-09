import EliminarUsuario from "./EliminarUsuario";

const fetchUsuario = (id) => {
  return fetch('https://backendstyle.onrender.com/auth/detail/'+id, {cache: "no-store"})
  .then( resp => resp.json())
  .catch( error => console.log(error))
}

export default async function FetchUsuario ({params}) {
	const {id} = params;
	const dataUsuario = await fetchUsuario(id);
  console.log(dataUsuario);

    return (
      <EliminarUsuario
        dataUsuario={dataUsuario}
		  />
    )
}