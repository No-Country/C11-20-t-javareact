package pe.no.country.controller;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pe.no.country.dto.Mensaje;
import pe.no.country.entity.Categoria;
import pe.no.country.service.CategoriaService;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/categoria")
@CrossOrigin(origins = "*")
public class CategoriaController {

	@Autowired
	CategoriaService categoriaService;

	@PreAuthorize("hasRole('ADMIN')")
	@GetMapping("/lista")
	public ResponseEntity<List<Categoria>> list() {
		List<Categoria> list = categoriaService.list();
		return new ResponseEntity(list, HttpStatus.OK);
	}

	//@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@PreAuthorize("hasRole('ADMIN')")
	@PostMapping("/create")
	public ResponseEntity<?> create(@RequestBody Categoria categoriaEnt) {

		if (StringUtils.isBlank(categoriaEnt.getDescripcion()))
			return new ResponseEntity(new Mensaje("La descripción es obligatorio"), HttpStatus.BAD_REQUEST);

		Categoria categoria = new Categoria(categoriaEnt.getDescripcion(), categoriaEnt.isEstado());
		categoriaService.save(categoria);
		return new ResponseEntity(new Mensaje("producto creado"), HttpStatus.OK);
	}

	@PreAuthorize("hasRole('ADMIN')")
	@PutMapping("/update/{id}")
	public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody Categoria categoriaEnt) {
		if (!categoriaService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);

		if (StringUtils.isBlank(categoriaEnt.getDescripcion()))
			return new ResponseEntity(new Mensaje("el nombre es obligatorio"), HttpStatus.BAD_REQUEST);

		Categoria categoria = categoriaService.getOne(id).get();
		categoria.setDescripcion(categoriaEnt.getDescripcion());
		categoria.setEstado(categoriaEnt.isEstado());
		categoriaService.save(categoria);
		return new ResponseEntity(new Mensaje("catgoria actualizado"), HttpStatus.OK);
	}

	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") int id) {
		if (!categoriaService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
		categoriaService.delete(id);
		return new ResponseEntity(new Mensaje("categoria eliminado"), HttpStatus.OK);
	}

	@GetMapping("/detail/{id}")
	public ResponseEntity<Categoria> getById(@PathVariable("id") int id) {
		if (!categoriaService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
		Categoria categoria = categoriaService.getOne(id).get();
		return new ResponseEntity(categoria, HttpStatus.OK);
	}
}

//
//@GetMapping("/detailname/{nombre}")
//public ResponseEntity<Categoria> getByNombre(@PathVariable("nombre") String nombre){
//  if(!categoriaService.existsById(nombre))
//      return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
//  Categoria producto = categoriaService.getByNombre(nombre).get();
//  return new ResponseEntity(producto, HttpStatus.OK);
//}
