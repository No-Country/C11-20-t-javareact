package pe.no.country.security.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pe.no.country.security.entity.Rol;
import pe.no.country.security.enums.RolNombre;

@Repository
public interface RolRepository extends JpaRepository<Rol, Integer> {
	 Optional<Rol> findByRolNombre(RolNombre rolNombre);
}
