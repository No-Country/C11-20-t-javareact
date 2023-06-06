package pe.no.country.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import pe.no.country.entity.Estilista;
import pe.no.country.repository.EstilistaRepository;

@Service
@Transactional
public class EstilistaService {

    @Autowired
    EstilistaRepository estilistaRepository;

    public List<Estilista> list() {
        return estilistaRepository.findAll();
    }

    public Optional<Estilista> getOne(int id) {
        return estilistaRepository.findById(id);
    }

    public void save(Estilista estilista) {
        estilistaRepository.save(estilista);
    }

    public void delete(int id) {
        estilistaRepository.deleteById(id);
    }

    public boolean existsById(int id) {
        return estilistaRepository.existsById(id);
    }
    public List<String> estilistasNombres(){
    	return estilistaRepository.obtenerNombresEstilistas();
    }
}
