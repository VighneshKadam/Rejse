FROM openjdk:8
EXPOSE 8080
ADD target/rejse-application.jar rejse-application.jar
ENTRYPOINT ["java","-jar","/rejse-application.jar"]