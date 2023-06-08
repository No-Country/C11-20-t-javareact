FROM amazoncorretto:11-alpine-jdk 
MAINTAINER backend
COPY target/backend-0.0.1-SNAPSHOT.jar backstyle.jar
ENTRYPOINT ["java", "-jar", "/backstyle.jar"]
