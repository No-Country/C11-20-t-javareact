package pe.no.country.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cliente")
public class Cliente {

    private static final long serialVersionUID = 3202049918082631179L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idcliente;

    @Column(name = "nombre", length = 50, nullable = true)
    private String nombre;

    @Column(name = "apellido", length = 20, nullable = true)
    private String apellido;

    @Column(name = "estado", nullable = true)
    private boolean estado;

    @Column(name = "tipodocumento", length = 20, nullable = true)
    private String tipodocumento;

    @Column(name = "numerodocumento", nullable = true)
    public int numerodocumento;

    @Column(name = "celular", nullable = true)
    public int celular;

    public Cliente() {
    }

    public Cliente(String nombre, String apellido, String tipodocumento,
            int numerodocumento, int celular) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipodocumento = tipodocumento;
        this.numerodocumento = numerodocumento;
        this.celular = celular;
    }

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

    public int getIdcliente() {
        return idcliente;
    }

    public void setIdcliente(int idcliente) {
        this.idcliente = idcliente;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public boolean isEstado() {
        return estado;
    }

    public void setEstado(boolean estado) {
        this.estado = estado;
    }

    public String getTipodocumento() {
        return tipodocumento;
    }

    public void setTipodocumento(String tipodocumento) {
        this.tipodocumento = tipodocumento;
    }

    public int getNumerodocumento() {
        return numerodocumento;
    }

    public void setNumerodocumento(int numerodocumento) {
        this.numerodocumento = numerodocumento;
    }

    public int getCelular() {
        return celular;
    }

    public void setCelular(int celular) {
        this.celular = celular;
    }

}
