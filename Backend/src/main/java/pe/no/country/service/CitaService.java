package pe.no.country.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import pe.no.country.entity.Cita;
import pe.no.country.repository.CitaRepository;

@Service
@Transactional
public class CitaService {

	@Autowired
	CitaRepository citaRepository;

	public List<Cita> list() {
		return citaRepository.findAll();
	}

	public Optional<Cita> getOne(int id) {
		return citaRepository.findById(id);
	}

	public void save(Cita cita) {
		citaRepository.save(cita);
	}

	public void delete(int id) {
		citaRepository.deleteById(id);
	}

	public boolean existsById(int id) {
		return citaRepository.existsById(id);
	}

	public List<Cita> obetnerCitaPorEstado(String estado) {
		return citaRepository.citaPorEstado(estado);
	}
	public List<Cita> obetnerCitaPorIdCliente(int idEstilista) {
		return citaRepository.citaPorIdEstilista(idEstilista);
	}
	
}

