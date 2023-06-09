package pe.no.country.entity;

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
@Table(name="salon_estetica")
public class Salon_estetica {
	private static final long serialVersionUID = 1420704927112920430L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idsalonestetica;

	@Column(name = "nombre_comercial", length = 250, nullable = true)
	private String nombre_comercial;

	@Column(name = "direccion", length = 255, nullable = true)
	private String direccion;

	@Column(name = "distrito", length = 255, nullable = true)
	private String distrito;

	@Column(name = "telefono", length = 20, nullable = true)
	private String telefono;

	@Column(name = "ruc_hotel", length = 20, nullable = true)
	private String ruc_hotel;

	@Column(name = "descripcion", nullable = true,columnDefinition = "TEXT")
	private String descripcion;
	
	@Column(name = "fechacreacion",columnDefinition ="TIMESTAMP DEFAULT CURRENT_TIMESTAMP" )
	@CreationTimestamp
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date fechacreacion;

	public Salon_estetica() {
	}

	public Salon_estetica(int idsalonestetica, String nombre_comercial, String direccion, String distrito, String telefono,
			String ruc_hotel, String descripcion) {
		this.idsalonestetica = idsalonestetica;
		this.nombre_comercial = nombre_comercial;
		this.direccion = direccion;
		this.distrito = distrito;
		this.telefono = telefono;
		this.ruc_hotel = ruc_hotel;
		this.descripcion = descripcion;
	}

	public Salon_estetica(String nombre_comercial, String direccion, String distrito, String telefono, String ruc_hotel,
			String descripcion) {
		this.nombre_comercial = nombre_comercial;
		this.direccion = direccion;
		this.distrito = distrito;
		this.telefono = telefono;
		this.ruc_hotel = ruc_hotel;
		this.descripcion = descripcion;
	}

	

	public int getIdsalonestetica() {
		return idsalonestetica;
	}

	public void setIdsalonestetica(int idsalonestetica) {
		this.idsalonestetica = idsalonestetica;
	}

	public String getNombre_comercial() {
		return nombre_comercial;
	}

	public void setNombre_comercial(String nombre_comercial) {
		this.nombre_comercial = nombre_comercial;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getDistrito() {
		return distrito;
	}

	public void setDistrito(String distrito) {
		this.distrito = distrito;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getRuc_hotel() {
		return ruc_hotel;
	}

	public void setRuc_hotel(String ruc_hotel) {
		this.ruc_hotel = ruc_hotel;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

}
