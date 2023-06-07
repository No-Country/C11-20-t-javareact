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
import pe.no.country.entity.Cliente;
import pe.no.country.service.ClienteService;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/cliente")
@CrossOrigin(origins = "*")
public class ClienteController {

    @Autowired
    ClienteService clienteService;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/lista")
    public ResponseEntity<List<Cliente>> list() {
        List<Cliente> list = clienteService.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    // @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody Cliente clienteEnt) {

        if (StringUtils.isBlank(clienteEnt.getNombre()))
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);

        Cliente cliente = new Cliente(clienteEnt.getNombre(), clienteEnt.getApellido(),clienteEnt.getCorreo(), clienteEnt.getTipodocumento(),
                clienteEnt.getNumerodocumento(), clienteEnt.getTelefono());
        clienteService.save(cliente);
        return new ResponseEntity(new Mensaje("cliente creado"), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody Cliente clienteEnt) {
        if (!clienteService.existsById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);

        if (StringUtils.isBlank(clienteEnt.getNombre()))
            return new ResponseEntity(new Mensaje("el nombre es obligatorio"), HttpStatus.BAD_REQUEST);

        Cliente cliente = clienteService.getOne(id).get();
        cliente.setNombre(clienteEnt.getNombre());
        cliente.setApellido(clienteEnt.getApellido());
        cliente.setCorreo(clienteEnt.getCorreo());
        cliente.setTipodocumento(clienteEnt.getTipodocumento());
        cliente.setNumerodocumento(clienteEnt.getNumerodocumento());
        cliente.setTelefono(clienteEnt.getTelefono());
        clienteService.save(cliente);
        return new ResponseEntity(new Mensaje("cliente actualizado"), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        if (!clienteService.existsById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        clienteService.delete(id);
        return new ResponseEntity(new Mensaje("cliente eliminado"), HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Cliente> getById(@PathVariable("id") int id) {
        if (!clienteService.existsById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        Cliente cliente = clienteService.getOne(id).get();
        return new ResponseEntity(cliente, HttpStatus.OK);
    }
}
