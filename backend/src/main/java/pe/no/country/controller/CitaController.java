package pe.no.country.controller;

import java.util.List;

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
import pe.no.country.entity.Cita;
import pe.no.country.service.CitaService;

@RestController
@RequestMapping("/cita")
@CrossOrigin(origins = "*")
public class CitaController {

	@Autowired
	CitaService citaService;

//	@PersistenceUnit
//	private EntityManagerFactory emf;

	// @PreAuthorize("hasRole('ADMIN')")
	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@GetMapping("/lista")
	public ResponseEntity<List<Cita>> list() {
		List<Cita> list = citaService.list();
		return new ResponseEntity(list, HttpStatus.OK);
	}

//	@GetMapping("/recepciones")
//	public List actionJoinTable() {
//
//		EntityManager em = emf.createEntityManager();
//
//		List recepciones = em.createQuery(
//		"SELECT u.idrecepcion,u.idhabitacion, u.estado ,c.nombre, c.apellido , c.numdocumento,c.correo,p.numero,p.detalle,p.precio,e.descripcion,ct.descripcion, u.fechaentrada,u.fechasalida , u.precioinicial, u.adelanto, u.preciorestante "
//		+ "FROM Recepcion u "
//		+ "INNER JOIN Habitacion p on (u.idhabitacion=p.idhabitacion) "
//		+ "INNER JOIN Piso e on (p.idpiso=e.idpiso) "
//		+ "INNER JOIN Categoria ct on (p.idcategoria=ct.idcategoria) "
//		+ "INNER JOIN Cliente c on (u.idcliente=c.idcliente)").getResultList();
//
//		return recepciones;
//	}

	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@PostMapping("/create")
	public ResponseEntity<?> create(@RequestBody Cita citaEnt) {

		Cita cita = new Cita(citaEnt.getObservacion(), citaEnt.getEstado(),citaEnt.getFechaprogramada(),
				citaEnt.getFecharegistrocita(),citaEnt.getCostototalservicios(),citaEnt.getCliente(),citaEnt.getEstilista());


		citaService.save(cita);
		return new ResponseEntity(new Mensaje("Cita creada"), HttpStatus.OK);
	}

	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@PutMapping("/update/{id}")
	public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody Cita citaEnt) {
		if (!citaService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);

		Cita cita = citaService.getOne(id).get();
		cita.setObservacion(citaEnt.getObservacion());
		cita.setEstado(citaEnt.getEstado());
		cita.setCostototalservicios(citaEnt.getCostototalservicios());
		cita.setFechaprogramada(citaEnt.getFechaprogramada());

		citaService.save(cita);
		return new ResponseEntity(new Mensaje("Cita finalizada"), HttpStatus.OK);
	}

	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") int id) {
		if (!citaService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
		citaService.delete(id);
		return new ResponseEntity(new Mensaje("Cita eliminada"), HttpStatus.OK);
	}

	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@GetMapping("/detail/{id}")
	public ResponseEntity<Cita> getById(@PathVariable("id") int id) {
		if (!citaService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
		Cita cita = citaService.getOne(id).get();
		return new ResponseEntity(cita, HttpStatus.OK);
	}
	
	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@GetMapping("/citaxidestilista/{idestilista}")
	public ResponseEntity<Cita> getCitaByIdEstilista(@PathVariable("idestilista") int idestilista) {

		List<Cita> cita = citaService.obetnerCitaPorIdCliente(idestilista);

		System.out.println("tamaño de la lista"+cita.size());
		if (cita != null) {
			if(cita.size()!=0) {
				return new ResponseEntity(cita, HttpStatus.OK);
			}else {
				return new ResponseEntity("No hay citas programadas para el estilista", HttpStatus.OK);
			}
			
		} else  {
			return new ResponseEntity(new Mensaje("No hay citas "), HttpStatus.NO_CONTENT);
		}

	}

	@PreAuthorize("hasAnyRole('ADMIN','USER')")
	@GetMapping("/citaxestado/{estado}")
	public ResponseEntity<Cita> getByHabitacionANDestadoTrue(@PathVariable("estado") String estado) {

		List<Cita> cita = citaService.obetnerCitaPorEstado(estado);

		if (cita != null) {
			return new ResponseEntity(cita, HttpStatus.OK);
		} else {
			return new ResponseEntity(new Mensaje("No hay Cita"), HttpStatus.NO_CONTENT);
		}

	}
}
