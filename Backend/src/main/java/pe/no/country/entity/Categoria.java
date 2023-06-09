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
@Table(name="categoria")
public class Categoria implements Serializable{

	private static final long serialVersionUID = 3202049918082631179L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idcategoria;
	
	@Column(name = "descripcion", length = 50, nullable = true)
	private String descripcion;
    
	@Column(name = "estado", nullable = true)
	private boolean estado;
	
	@Column(name = "fechacreacion",columnDefinition ="TIMESTAMP DEFAULT CURRENT_TIMESTAMP" )
	@CreationTimestamp
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date fechacreacion;
	
	public Categoria() {
	}

	public Categoria(int idcategoria,String descripcion, boolean estado) {
		this.idcategoria = idcategoria;
		this.descripcion = descripcion;
		this.estado = estado;
	}
	
	public Categoria(String descripcion, boolean estado) {
		this.descripcion = descripcion;
		this.estado = estado;
	}

	public int getIdcategoria() {
		return idcategoria;
	}

	public void setIdcategoria(int idcategoria) {
		this.idcategoria = idcategoria;
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
