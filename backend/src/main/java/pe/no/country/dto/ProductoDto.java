package pe.no.country.dto;


import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

public class ProductoDto {

	@NotBlank
	private String nombre;

	@Min(1)
	private Float precio;

	@NotBlank
	private String detalle;

	@NotBlank
	@Min(1)
	public int cantidad;

	private boolean estado;

	public ProductoDto() {
	}

	public ProductoDto(@NotBlank String nombre, @Min(1) Float precio, @NotBlank String detalle,
			@NotBlank @Min(1) int cantidad, boolean estado) {
		this.nombre = nombre;
		this.precio = precio;
		this.detalle = detalle;
		this.cantidad = cantidad;
		this.estado = estado;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Float getPrecio() {
		return precio;
	}

	public void setPrecio(Float precio) {
		this.precio = precio;
	}

	public String getDetalle() {
		return detalle;
	}

	public void setDetalle(String detalle) {
		this.detalle = detalle;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

	public boolean isEstado() {
		return estado;
	}

	public void setEstado(boolean estado) {
		this.estado = estado;
	}
	
	
}
