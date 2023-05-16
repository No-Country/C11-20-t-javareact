package C1120tjavareact.C1120tjavareact;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

// @SpringBootApplication <-- tenemos problemas para ejecutar el server
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class C1120TJavareactApplication {

	public static void main(String[] args) {
		SpringApplication.run(C1120TJavareactApplication.class, args);
	}

}
