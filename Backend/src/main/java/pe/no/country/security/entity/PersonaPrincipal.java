package pe.no.country.security.entity;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class PersonaPrincipal implements UserDetails {


	private static final long serialVersionUID = 2230986947551153765L;
	
	private String dni;
	private String nombre;
	private String apellido;
	private String correo;
	private String clave;
	private boolean estado;
	private Collection<? extends GrantedAuthority> authorities;

	public PersonaPrincipal(String dni, String nombre, String apellido, String correo, String clave, boolean estado,
			Collection<? extends GrantedAuthority> authorities) {
		this.dni = dni;
		this.nombre = nombre;
		this.apellido = apellido;
		this.correo = correo;
		this.clave = clave;
		this.estado = estado;
		this.authorities = authorities;
	}

	public static PersonaPrincipal build(Persona persona) {
		List<GrantedAuthority> authorities = persona.getRoles().stream()
				.map(rol -> new SimpleGrantedAuthority(rol.getRolNombre().name())).collect(Collectors.toList());

		return new PersonaPrincipal(persona.getDni(), persona.getNombre(), persona.getApellido(), persona.getCorreo(),
				persona.getClave(), persona.isEstado(), authorities);
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public String getPassword() {
		return clave;
	}

	@Override
	public String getUsername() {
		return correo;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	public String getNombre() {
		return nombre;
	}

	public String getCorreo() {
		return correo;
	}
}
