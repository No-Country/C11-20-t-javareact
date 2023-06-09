package pe.no.country.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pe.no.country.entity.Servicio;

@Repository
public interface ServicioRepository extends JpaRepository<Servicio, Integer>{

}
