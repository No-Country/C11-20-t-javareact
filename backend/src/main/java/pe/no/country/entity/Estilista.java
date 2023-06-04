package pe.no.country.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import pe.no.country.security.entity.Persona;

@Entity
@Table(name="estilista")
public class Estilista {

	private static final long serialVersionUID = 3202049918082631179L;

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int idestilista;

	    @Column(name = "especialidad", length = 20, nullable = true)
	    private String especialidad;

	    @Column(name = "disponibilidad", length = 20, nullable = true)
	    private String disponibilidad;

	    @OneToOne
	    @JoinColumn(name = "idpersona")
	    private Persona persona;

	    public Estilista() {
	    }

	    public Estilista(String especialidad, String disponibilidad, Persona persona) {
	        this.especialidad = especialidad;
	        this.disponibilidad = disponibilidad;
	        this.persona = persona;
	    }

	    public Estilista(int idestilista, String especialidad, String disponibilidad, Persona persona) {
	        this.idestilista = idestilista;
	        this.especialidad = especialidad;
	        this.disponibilidad = disponibilidad;
	        this.persona = persona;
	    }

	    public static long getSerialversionuid() {
	        return serialVersionUID;
	    }

	    public int getIdestilista() {
	        return idestilista;
	    }

	    public void setIdestilista(int idestilista) {
	        this.idestilista = idestilista;
	    }

	    public String getEspecialidad() {
	        return especialidad;
	    }

	    public void setEspecialidad(String especialidad) {
	        this.especialidad = especialidad;
	    }

	    public String getDisponibilidad() {
	        return disponibilidad;
	    }

	    public void setDisponibilidad(String disponibilidad) {
	        this.disponibilidad = disponibilidad;
	    }

	    public Persona getPersona() {
	        return persona;
	    }

	    public void setPersona(Persona persona) {
	        this.persona = persona;
	    }
	
}
