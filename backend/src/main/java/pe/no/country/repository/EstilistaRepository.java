package pe.no.country.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pe.no.country.entity.Estilista;

@Repository
public interface EstilistaRepository extends JpaRepository<Estilista, Integer> {
    
}
