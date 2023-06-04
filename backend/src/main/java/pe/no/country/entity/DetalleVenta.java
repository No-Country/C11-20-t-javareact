package pe.no.country.entity;

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

@Entity
@Table(name = "detalle_venta")
public class DetalleVenta {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int iddetalleventa;

	//@ManyToOne(optional = false, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@ManyToOne
	@JoinColumn(name = "idventa")
	private Venta venta;

	//@ManyToOne(optional = false, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@ManyToOne
	@JoinColumn(name = "idproducto")
	private Producto producto;

	@Column(name = "cantidad")
	private int cantidad;

	@Column(name = "subtotal", scale = 2)
	private double subtotal;

	public DetalleVenta() {
	}

	public DetalleVenta(Venta venta, Producto producto, int cantidad, double subtotal) {
		this.venta = venta;
		this.producto = producto;
		this.cantidad = cantidad;
		this.subtotal = subtotal;
	}

	public int getIddetalleventa() {
		return iddetalleventa;
	}

	public void setIddetalleventa(int iddetalleventa) {
		this.iddetalleventa = iddetalleventa;
	}

	public Venta getVenta() {
		return venta;
	}

	public void setVenta(Venta venta) {
		this.venta = venta;
	}

	public Producto getProducto() {
		return producto;
	}

	public void setProducto(Producto producto) {
		this.producto = producto;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

	public double getSubtotal() {
		return subtotal;
	}

	public void setSubtotal(double subtotal) {
		this.subtotal = subtotal;
	}

}
