package pe.no.country.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "servicio")
public class Servicio implements Serializable {

	private static final long serialVersionUID = 3202049918082631179L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idservicio;

	@Column(name = "descripcion", length = 20, nullable = true)
	private String descripcion;

	@Column(name = "nombre", length = 20, nullable = true)
	private String nombre;

	@Column(name = "precio", nullable = true, scale = 2)
	private double precio;

	@Column(name = "estado", nullable = true)
	private boolean estado;

	@Column(name = "fechacreacion", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	@CreationTimestamp
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private Date fechacreacion;

	public Servicio() {
	}

	public Servicio(String descripcion, String nombre, double precio, boolean estado,Date fechacreacion) {

		
		this.descripcion = descripcion;
		this.nombre = nombre;
		this.precio = precio;
		this.estado = estado;
		this.fechacreacion=fechacreacion;
	}

	public Servicio(String descripcion, String nombre, double precio, boolean estado) {

		this.descripcion = descripcion;
		this.nombre = nombre;
		this.precio = precio;
		this.estado = estado;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
		this.precio = precio;
	}

	public Date getFechacreacion() {
		return fechacreacion;
	}

	public void setFechacreacion(Date fechacreacion) {
		this.fechacreacion = fechacreacion;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public int getIdservicio() {
		return idservicio;
	}

	public void setIdservicio(int idservicio) {
		this.idservicio = idservicio;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public boolean isEstado() {
		return estado;
	}

	public void setEstado(boolean estado) {
		this.estado = estado;
	}
}
