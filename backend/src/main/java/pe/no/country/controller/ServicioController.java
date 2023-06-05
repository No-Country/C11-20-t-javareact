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
import pe.no.country.entity.Servicio;
import pe.no.country.service.ServicioService;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/servicio")
@CrossOrigin(origins = "*")
public class ServicioController {

    @Autowired
    ServicioService servicioService;

    // @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/lista")
    public ResponseEntity<List<Servicio>> list() {
        List<Servicio> list = servicioService.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    // @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody Servicio servicioEnt) {

        if (StringUtils.isBlank(servicioEnt.getDescripcion()))
            return new ResponseEntity(new Mensaje("La descripción es obligatorio"), HttpStatus.BAD_REQUEST);

        Servicio servicio = new Servicio( servicioEnt.getDescripcion(),servicioEnt.getNombre(), servicioEnt.getPrecio(),servicioEnt.isEstado(),servicioEnt.getFechacreacion());
        servicioService.save(servicio);
        return new ResponseEntity(new Mensaje("servicio creado"), HttpStatus.OK);
    }

    // @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody Servicio servicioEnt) {
        if (!servicioService.existsById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);

        if (StringUtils.isBlank(servicioEnt.getDescripcion()))
            return new ResponseEntity(new Mensaje("el nombre es obligatorio"), HttpStatus.BAD_REQUEST);

        Servicio servicio = servicioService.getOne(id).get();
        servicio.setNombre(servicioEnt.getNombre());
        servicio.setDescripcion(servicioEnt.getDescripcion());
        servicio.setPrecio(servicioEnt.getPrecio());
        servicio.setEstado(servicioEnt.isEstado());
        servicioService.save(servicio);
        return new ResponseEntity(new Mensaje("servicio actualizado"), HttpStatus.OK);
    }

    // @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        if (!servicioService.existsById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        servicioService.delete(id);
        return new ResponseEntity(new Mensaje("servicio eliminado"), HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Servicio> getById(@PathVariable("id") int id) {
        if (!servicioService.existsById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        Servicio servicio = servicioService.getOne(id).get();
        return new ResponseEntity(servicio, HttpStatus.OK);
    }
}
