package pe.no.country.security.jwt;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Collections;

@Component
public class JwtEntryPoint implements AuthenticationEntryPoint {

	private final static Logger logger = LoggerFactory.getLogger(JwtEntryPoint.class);

	@Override
	public void commence(HttpServletRequest req, HttpServletResponse res, AuthenticationException e)
			throws IOException, ServletException {
		
		logger.error("fail en el método commence");
		
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
		
		res.setContentType("application/json");
		res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
		res.getOutputStream().println("{ \"timestamp\": \"" + dtf.format(LocalDateTime.now()) + "\","
				+ "\"status\":"+ res.getStatus() +","
						+ "\"error\":\""+"Unauthorized"+"\" ,\"message\":\""+"Usuario no encontrado"+"\" }");

		// res.sendError(HttpServletResponse.SC_UNAUTHORIZED, "no autorizado");

	}
}