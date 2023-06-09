package pe.no.country.security.dto;

import javax.validation.constraints.NotBlank;

public class LoginPersona {

	 	@NotBlank
	    private String correo;
	 	
	    @NotBlank
	    private String clave;
	    
		public String getCorreo() {
			return correo;
		}
		public void setCorreo(String correo) {
			this.correo = correo;
		}
		public String getClave() {
			return clave;
		}
		public void setClave(String clave) {
			this.clave = clave;
		}

	   
}
