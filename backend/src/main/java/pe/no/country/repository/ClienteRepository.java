package pe.no.country.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pe.no.country.entity.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Integer>{
    
}
