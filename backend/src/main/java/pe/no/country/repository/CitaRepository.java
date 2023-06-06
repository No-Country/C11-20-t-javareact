package pe.no.country.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import pe.no.country.entity.Cita;

@Repository
public interface CitaRepository extends JpaRepository<Cita, Integer>{

	@Query("SELECT c FROM Cita c WHERE c.estado = :estado")
	List<Cita> citaPorEstado(@Param("estado") String estado);
}
