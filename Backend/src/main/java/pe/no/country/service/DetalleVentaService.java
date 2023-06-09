package pe.no.country.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import pe.no.country.entity.DetalleVenta;
import pe.no.country.repository.DetalleVentaRepository;

@Service
@Transactional
public class DetalleVentaService {

	@Autowired
	DetalleVentaRepository detalleVentaRepository;

	public List<DetalleVenta> list() {
		return detalleVentaRepository.findAll();
	}
	
	public List<DetalleVenta> listDetallesByIDventa(int idventa) {
		return detalleVentaRepository.listaDeDetallerXIdVenta(idventa);
	}

	public Optional<DetalleVenta> getOne(int id) {
		return detalleVentaRepository.findById(id);
	}

	public void save(DetalleVenta detalleVenta) {
		detalleVentaRepository.save(detalleVenta);
	}

	public void delete(int id) {
		detalleVentaRepository.deleteById(id);
	}

	public boolean existsById(int id) {
		return detalleVentaRepository.existsById(id);
	}
}

