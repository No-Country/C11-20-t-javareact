package pe.no.country.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import pe.no.country.repository.ServicioRepository;
import pe.no.country.entity.Servicio;

@Service
@Transactional
public class ServicioService {

    @Autowired
    ServicioRepository servicioRepository;

    public List<Servicio> list() {
        return servicioRepository.findAll();
    }

    public Optional<Servicio> getOne(int id) {
        return servicioRepository.findById(id);
    }

    public void save(Servicio servicio) {
        servicioRepository.save(servicio);
    }

    public void delete(int id) {
        servicioRepository.deleteById(id);
    }

    public boolean existsById(int id) {
        return servicioRepository.existsById(id);
    }
}
