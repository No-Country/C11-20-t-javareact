package pe.no.country.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="cita")
public class Cita {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idcita;
	
	@Column(name = "observacion", nullable = true)
	private String observacion;
	
	@Column(name = "estado", nullable = true)
	private String estado;
	
	@Column(name = "fechaprogramada")
	@Temporal(TemporalType.TIMESTAMP)
	private Date fechaprogramada;
	
	@Column(name = "fecharegistro",columnDefinition ="TIMESTAMP DEFAULT CURRENT_TIMESTAMP" )
	@CreationTimestamp
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date fecharegistro;
	
	@Column(name = "costototalservicios", scale = 2, nullable = true)
	private double costototalservicios;
	
	@ManyToOne
	@JoinColumn(name = "idcliente")
	private Cliente cliente;
	
	@ManyToOne
	@JoinColumn(name = "idestilista")
	private Estilista estilista;


	

	public Cita(int idcita, String observacion, String estado, Date fecharegistro, double costototalservicios,
			Cliente cliente, Estilista estilista) {
		
		this.idcita = idcita;
		this.observacion = observacion;
		this.estado = estado;
		this.fecharegistro = fecharegistro;
		this.costototalservicios = costototalservicios;
		this.cliente = cliente;
		this.estilista = estilista;
	}

	public int getIdcita() {
		return idcita;
	}

	public void setIdcita(int idcita) {
		this.idcita = idcita;
	}

	public String getObservacion() {
		return observacion;
	}

	public void setObservacion(String observacion) {
		this.observacion = observacion;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public Date getFechaprogramada() {
		return fechaprogramada;
	}

	public void setFechaprogramada(Date fechaprogramada) {
		this.fechaprogramada = fechaprogramada;
	}

	public Date getFecharegistro() {
		return fecharegistro;
	}

	public void setFecharegistro(Date fecharegistro) {
		this.fecharegistro = fecharegistro;
	}

	public double getCostototalservicios() {
		return costototalservicios;
	}

	public void setCostototalservicios(double costototalservicios) {
		this.costototalservicios = costototalservicios;
	}
	
	
	 
	 
	    
	
}
