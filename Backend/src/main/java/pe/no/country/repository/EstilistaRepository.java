package pe.no.country.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import pe.no.country.entity.Estilista;

@Repository
public interface EstilistaRepository extends JpaRepository<Estilista, Integer> {
	@Query("SELECT p.nombre FROM Persona p INNER JOIN Estilista e ON e.persona = p.idpersona")
    List<String> obtenerNombresEstilistas();
}