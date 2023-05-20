package pe.no.country.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "servicio")
public class Servicio implements Serializable {

    private static final long serialVersionUID = 3202049918082631179L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idservicio;

    @Column(name = "descripcion", length = 20, nullable = true)
    private String descripcion;

    @Column(name = "nombreservicio", length = 20, nullable = true)
    private String nombreservicio;

    @Column(name = "costo", nullable = true, scale = 2)
    private int costo;

    public Servicio() {
    }

    public Servicio(String descripcion, String nombreservicio, int costo) {
        this.descripcion = descripcion;
        this.nombreservicio = nombreservicio;
        this.costo = costo;
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

    public String getNombreservicio() {
        return nombreservicio;
    }

    public void setNombreservicio(String nombreservicio) {
        this.nombreservicio = nombreservicio;
    }

    public int getCosto() {
        return costo;
    }

    public void setCosto(int costo) {
        this.costo = costo;
    }

}
