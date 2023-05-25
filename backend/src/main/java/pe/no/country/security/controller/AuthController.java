package pe.no.country.security.controller;

import java.text.ParseException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.validation.Valid;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import pe.no.country.security.jwt.JwtProvider;
import pe.no.country.security.service.RolService;
import pe.no.country.security.service.PersonaService;
import pe.no.country.dto.Mensaje;
import pe.no.country.entity.Categoria;
import pe.no.country.security.dto.JwtDto;
import pe.no.country.security.dto.LoginPersona;
import pe.no.country.security.dto.NuevaPersona;
import pe.no.country.security.entity.Rol;
import pe.no.country.security.entity.Persona;
import pe.no.country.security.enums.RolNombre;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {

	@Autowired
	PasswordEncoder passwordEncoder;

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	PersonaService personaService;

	@Autowired
	RolService rolService;

	@Autowired
	JwtProvider jwtProvider;
	
	@GetMapping("/lista")
	public ResponseEntity<List<Persona>> list() {
		List<Persona> list = personaService.list();
		return new ResponseEntity(list, HttpStatus.OK);
	}

	@PostMapping("/nuevo")
	public ResponseEntity<?> nuevo(@Valid @RequestBody NuevaPersona nuevaPersona, BindingResult bindingResult) {
	        if(bindingResult.hasErrors())
	            return new ResponseEntity(new Mensaje("campos mal puestos o email inválido"), HttpStatus.BAD_REQUEST);

	        if(personaService.existsByDni(nuevaPersona.getDni()))
	            return new ResponseEntity(new Mensaje("El DNI ya existe"), HttpStatus.BAD_REQUEST);
	        
	        
	        if(personaService.existsByCorreo(nuevaPersona.getCorreo()))
	            return new ResponseEntity(new Mensaje("El email ya existe"), HttpStatus.BAD_REQUEST);

		Persona persona = new Persona(nuevaPersona.getDni(), nuevaPersona.getNombre(), nuevaPersona.getApellido(),
				nuevaPersona.getCorreo(), passwordEncoder.encode(nuevaPersona.getClave()), nuevaPersona.isEstado());

		Set<Rol> roles = new HashSet<>();
		roles.add(rolService.getByRolNombre(RolNombre.ROLE_USER).get());

		if (nuevaPersona.getRoles().contains("admin"))
			roles.add(rolService.getByRolNombre(RolNombre.ROLE_ADMIN).get());

		persona.setRoles(roles);
		personaService.save(persona);

		return new ResponseEntity(new Mensaje("usuario guardado"), HttpStatus.CREATED);
	}
	
	//@PreAuthorize("hasRole('ADMIN')")
	@PutMapping("/update/{id}")
	public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody Persona personaEnt) {
		if (!personaService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);


		Persona persona = personaService.getOne(id).get();
		persona.setDni(personaEnt.getDni());
		persona.setNombre(personaEnt.getNombre());
		persona.setApellido(personaEnt.getApellido());
		persona.setCorreo(personaEnt.getCorreo());
		persona.setClave(passwordEncoder.encode(personaEnt.getClave()));
		persona.setEstado(personaEnt.isEstado());
		persona.setRoles(personaEnt.getRoles());

		personaService.save(persona);
		return new ResponseEntity(new Mensaje("Usuario actualizado"), HttpStatus.OK);
	}
	
	//@PreAuthorize("hasRole('ADMIN')")
	@GetMapping("/detail/{id}")
	public ResponseEntity<Persona> getById(@PathVariable("id") int id) {
		if (!personaService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
		Persona persona = personaService.getOne(id).get();
		return new ResponseEntity(persona, HttpStatus.OK);
	}
	

    @GetMapping("/cantidad")
    public ResponseEntity totalUsuarios(){
        Long cantidad = personaService.totalU();
        return new ResponseEntity(cantidad, HttpStatus.OK);
    }
	
	//@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") int id) {
		if (!personaService.existsById(id))
			return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
		personaService.delete(id);
		return new ResponseEntity(new Mensaje("usuario eliminado"), HttpStatus.OK);
	}
	
	//@PreAuthorize("hasRole('ADMIN')")
	@GetMapping("/detailname/{correo}")
	public ResponseEntity<Categoria> getByCorreo(@PathVariable("correo") String correo){
	  if(!personaService.existsByCorreo(correo))
	      return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
	  Persona persona = personaService.getByCorreo(correo).get();
	  return new ResponseEntity(persona, HttpStatus.OK);
	}
	

	@PostMapping("/login")
    public ResponseEntity<JwtDto> login(@Valid @RequestBody LoginPersona loginUsuario, BindingResult bindingResult){
        if(bindingResult.hasErrors())
            return new ResponseEntity(new Mensaje("campos mal puestos"), HttpStatus.BAD_REQUEST);
        Authentication authentication =
                authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginUsuario.getCorreo(),
                		loginUsuario.getClave()));
        
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtProvider.generateToken(authentication);
        JwtDto jwtDto = new JwtDto(jwt);
        return new ResponseEntity(jwtDto, HttpStatus.OK);
    }
	

	@PostMapping("/refresh")
	public ResponseEntity<JwtDto> refresh(@RequestBody JwtDto jwtDto) throws ParseException {
		String token = jwtProvider.refreshToken(jwtDto);
		JwtDto jwt = new JwtDto(token);
		return new ResponseEntity(jwt, HttpStatus.OK);
	}
}
