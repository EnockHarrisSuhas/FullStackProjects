# FullStackProjects

5.7 Setting up Eclipse, Visual Studio    
Refer the following links for setup………     
Eclipse: https://www.guru99.com/install-eclipse-java.html
Visual Studio Code: https://code.visualstudio.com/learn/get-started/basics
Postman: https://help.zscaler.com/zia/configuring-postman-rest-api-client
Pg-Admin: 
https://docs.bitnami.com/aws/apps/noalyss/administration/configue-pgadmin
Nodejs: https://phoenixnap.com/kb/install-node-js-npm-on-windows
Spring: https://youtu.be/ZJ7afDSrb3s

On Visual studio code After completion of frontend Code run following components
•	npm install –g npm@latest
•	npm update
•	npm install
•	npm audit fix--force
•	npm start

For backend procsessing...
## Configure Spring Datasource, JPA, App properties
Open `src/main/resources/application.properties`
- For PostgreSQL:
```
spring.datasource.url= jdbc:postgresql://localhost:5432/testdb
spring.datasource.username= postgres
spring.datasource.password= 123

spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation= true
spring.jpa.properties.hibernate.dialect= org.hibernate.dialect.PostgreSQLDialect

# Hibernate ddl auto (create, create-drop, validate, update)
spring.jpa.hibernate.ddl-auto= update

# App Properties
bezkoder.app.jwtSecret= bezKoderSecretKey
bezkoder.app.jwtExpirationMs= 86400000
```
- For MySQL
```
spring.datasource.url= jdbc:mysql://localhost:3306/testdb?useSSL=false
spring.datasource.username= root
spring.datasource.password= 123456

spring.jpa.properties.hibernate.dialect= org.hibernate.dialect.MySQL5InnoDBDialect
spring.jpa.hibernate.ddl-auto= update

# App Properties
bezkoder.app.jwtSecret= bezKoderSecretKey
bezkoder.app.jwtExpirationMs= 86400000
```
## Run Spring Boot application
```
mvn spring-boot:run
```

## Run following SQL insert statements
```
INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_MODERATOR');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');
```