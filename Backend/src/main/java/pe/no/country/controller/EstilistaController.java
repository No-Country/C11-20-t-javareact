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
import pe.no.country.entity.Estilista;
import pe.no.country.service.EstilistaService;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/estilista")
@CrossOrigin(origins = "*")
public class EstilistaController {
    
    @Autowired
    EstilistaService estilistaService;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/lista")
    public ResponseEntity<List<Estilista>> list() {
        List<Estilista> list = estilistaService.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    // @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody Estilista estilistaEnt) {

        if (StringUtils.isBlank(estilistaEnt.getEspecialidad()))
            return new ResponseEntity(new Mensaje("La especialidad es obligatorio"), HttpStatus.BAD_REQUEST);

        Estilista estilista = new Estilista(estilistaEnt.getEspecialidad(), estilistaEnt.getDisponibilidad(), estilistaEnt.getPersona());
        estilistaService.save(estilista);
        return new ResponseEntity(new Mensaje("estilista creado"), HttpStatus.OK);
    }

    // @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody Estilista estilistaEnt) {
        if (!estilistaService.existsById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);

        if (StringUtils.isBlank(estilistaEnt.getEspecialidad()))
            return new ResponseEntity(new Mensaje("La especialidad es obligatorio"), HttpStatus.BAD_REQUEST);

        Estilista estilista = estilistaService.getOne(id).get();
        estilista.setEspecialidad(estilistaEnt.getEspecialidad());
        estilista.setDisponibilidad(estilistaEnt.getDisponibilidad());
        estilista.setPersona(estilistaEnt.getPersona());
        estilistaService.save(estilista);
        return new ResponseEntity(new Mensaje("estilista actualizado"), HttpStatus.OK);
    }

    // @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        if (!estilistaService.existsById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        estilistaService.delete(id);
        return new ResponseEntity(new Mensaje("estilista eliminado"), HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Estilista> getById(@PathVariable("id") int id) {
        if (!estilistaService.existsById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        Estilista estilista = estilistaService.getOne(id).get();
        return new ResponseEntity(estilista, HttpStatus.OK);
    }
    
    @GetMapping("/nombres")
    public ResponseEntity<String> getNombresEstilistas(){
    	List<String> nombresEstilistas=estilistaService.estilistasNombres();
    	return new ResponseEntity(nombresEstilistas, HttpStatus.OK);
    }
}
