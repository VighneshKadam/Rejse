FROM openjdk:8
EXPOSE 8080
ADD target/backend/rejse-application-backend.jar rejse-application-backend.jar
ENTRYPOINT ["java","-jar","/backend/rejse-application-backend.jar"]