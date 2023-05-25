package pe.no.country.entity;


import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "pago")
public class Pago {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idpago;
	
//	@ManyToOne
//    @JoinColumn(name = "idcita")
//	private Cita cita;
	
	@Column(name = "total", nullable = true,scale=2)
	private double total;
	
	@Column(name = "estado", length = 50, nullable = true)
	private String estado;
	
	@Column(name = "fechacreacion",columnDefinition ="TIMESTAMP DEFAULT CURRENT_TIMESTAMP" )
	@CreationTimestamp
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date fechacreacion;
	
	public Pago() {
	}


	public Pago( double total, String estado) {
//		this.cita = cita;
		this.total = total;
		this.estado = estado;
	}


	public int getIdpago() {
		return idpago;
	}


	public void setIdpago(int idpago) {
		this.idpago = idpago;
	}


//	public Cita getCita() {
//		return cita;
//	}
//
//
//	public void setCita(Cita cita) {
//		this.cita = cita;
//	}


	public double getTotal() {
		return total;
	}


	public void setTotal(double total) {
		this.total = total;
	}


	public String getEstado() {
		return estado;
	}


	public void setEstado(String estado) {
		this.estado = estado;
	}


	public Date getFechacreacion() {
		return fechacreacion;
	}


	public void setFechacreacion(Date fechacreacion) {
		this.fechacreacion = fechacreacion;
	}



//	public int getIdrecepcion() {
//		return idrecepcion;
//	}
//
//	public void setIdrecepcion(int idrecepcion) {
//		this.idrecepcion = idrecepcion;
//	}


	
	
	
}

