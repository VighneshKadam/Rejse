FROM openjdk:8
EXPOSE 8080
ADD backend/target/rejse-application-backend.jar rejse-application-backend.jar
ENTRYPOINT ["java","-jar","/rejse-application-backend.jar"]

FROM openjdk:8
EXPOSE 8080
ADD frontend/target/rejse-application-frontend.jar rejse-application-frontend.jar
ENTRYPOINT ["java","-jar","/rejse-application-frontend.jar"]