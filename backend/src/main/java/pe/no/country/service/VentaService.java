package pe.no.country.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import pe.no.country.entity.Venta;
import pe.no.country.repository.VentaRepository;

@Service
@Transactional
public class VentaService {
	@Autowired
	VentaRepository ventaRepository;

	public List<Venta> list() {
		return ventaRepository.findAll();
	}
	
	public List<Venta> listaVentasIdCita(int idcita) {
		return ventaRepository.ventasByIdCita(idcita);
	}

	public Optional<Venta> getOne(int id) {
		return ventaRepository.findById(id);
	}

	public void save(Venta venta) {
		ventaRepository.save(venta);
	}

	public void delete(int id) {
		ventaRepository.deleteById(id);
	}

	public boolean existsById(int id) {
		return ventaRepository.existsById(id);
	}
}

