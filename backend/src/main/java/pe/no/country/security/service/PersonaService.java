package pe.no.country.security.service;

import pe.no.country.security.entity.Persona;
import pe.no.country.security.repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PersonaService {

	@Autowired
	PersonaRepository personaRepository;
	
	public Optional<Persona> getByCorreo(String correo) {
		return personaRepository.findByCorreo(correo);
	}
	
	public boolean existsByCorreo(String correo) {
		return personaRepository.existsByCorreo(correo);
	}

	public List<Persona> list() {
		return personaRepository.findAll();
	}

	public Optional<Persona> getOne(int id) {
		return personaRepository.findById(id);
	}
	

	
	public Long totalU() {
		return personaRepository.count();
	}

	public void delete(int id) {
		personaRepository.deleteById(id);
	}

	
	public boolean existsByDni(String dni) {
		return personaRepository.existsByDni(dni);
	}

	public boolean existsById(int id) {
		return personaRepository.existsById(id);
	}

	public void save(Persona usuario) {
		personaRepository.save(usuario);
	}
}
