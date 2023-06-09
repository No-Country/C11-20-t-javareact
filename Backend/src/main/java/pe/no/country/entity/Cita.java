package pe.no.country.entity;

import java.util.Date;

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
	
	@Column(name = "fechaprogramada",columnDefinition ="TIMESTAMP DEFAULT CURRENT_TIMESTAMP" )
	@CreationTimestamp
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date fechaprogramada;
	
	@Column(name = "fecharegistro",columnDefinition ="TIMESTAMP DEFAULT CURRENT_TIMESTAMP" )
	@CreationTimestamp
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date fecharegistrocita;
	
	@Column(name = "costototalservicios", scale = 2, nullable = true)
	private double costototalservicios;
	
	@ManyToOne
	@JoinColumn(name = "idcliente")
	private Cliente cliente;
	
	@ManyToOne
	@JoinColumn(name = "idestilista")
	private Estilista estilista;


	public Cita() {};

	public Cita( String observacion, String estado, Date fechaprogramada,Date fecharegistrocita, double costototalservicios,
			Cliente cliente, Estilista estilista) {
		
		this.fecharegistrocita=fecharegistrocita;
		this.observacion = observacion;
		this.estado = estado;
		this.fechaprogramada = fechaprogramada;
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

	public Date getFecharegistrocita() {
		return fecharegistrocita;
	}

	public void setFecharegistrocita(Date fecharegistrocita) {
		this.fecharegistrocita = fecharegistrocita;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public Estilista getEstilista() {
		return estilista;
	}

	public void setEstilista(Estilista estilista) {
		this.estilista = estilista;
	}


	public double getCostototalservicios() {
		return costototalservicios;
	}

	public void setCostototalservicios(double costototalservicios) {
		this.costototalservicios = costototalservicios;
	}
	
	
	 
	 
	    
	
}
