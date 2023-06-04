package pe.no.country.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="detalle_servicio")
public class DetalleServicio {

	private static final long serialVersionUID = 3202049918082631179L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int iddetalleservicio;
	
	@ManyToOne
	@JoinColumn(name="idcita")
	private Cita cita;
	
	@ManyToOne
	@JoinColumn(name="idservicio")
	private Servicio servicio;

	
	
	public DetalleServicio(Cita cita, Servicio servicio) {
		
		this.cita = cita;
		this.servicio = servicio;
	}

	public int getIddetalleservicio() {
		return iddetalleservicio;
	}

	public void setIddetalleservicio(int iddetalleservicio) {
		this.iddetalleservicio = iddetalleservicio;
	}

	public Cita getCita() {
		return cita;
	}

	public void setCita(Cita cita) {
		this.cita = cita;
	}

	public Servicio getServicio() {
		return servicio;
	}

	public void setServicio(Servicio servicio) {
		this.servicio = servicio;
	}
	
	
	
}
