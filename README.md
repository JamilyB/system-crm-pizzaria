# CRM Pizzaria
[![Java](https://img.shields.io/badge/Java-17-blue?logo=java)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-2.7.5-brightgreen?logo=springboot)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)


Sistema de gerenciamento de relacionamento com o cliente (CRM) voltado para pizzarias, desenvolvido com Spring Boot no backend e React JS no frontend. A aplicação tem como foco facilitar a gestão de motoboys, campanhas promocionais e avaliações de desempenho.

## Funcionalidades

- Cadastro de usuários  
- Cadastro de motoboys  
- Histórico de avaliações 360° (clientes e entregadores)  
- Visão administrativa da pizzaria com banco de avaliações  
- Criação e gerenciamento de campanhas promocionais    

## Tecnologias Utilizadas

### Backend

- Java 17  
- Spring Boot  
- Spring Data JPA  
- H2 DataBase 

### Frontend

- React JS  
- Bootstrap 5.3.3  
- React Router DOM  
- Axios  

## Endpoints da API

Este projeto utiliza o **Springdoc OpenAPI** para gerar documentação interativa via **Swagger UI**.

Após iniciar o backend, acesse:

[`http://localhost:8080/swagger-ui/index.html`](http://localhost:8080/swagger-ui/index.html)

## Como Executar

1. Clone o repositório:

```
git clone https://github.com/seu-usuario/crm-pizzaria.git
```

2. Configure as credenciais do banco de dados PostgreSQL no arquivo `application.properties` do backend.

3. Inicie o backend:

```
cd backend
mvn spring-boot:run
```

4. No diretório do frontend, instale as dependências:

```
cd frontend
npm install
```

5. Inicie o frontend:

```
npm start
```

<div style="display: flex; gap: 10px; justify-content: center;">
  <img src="assets/img1.PNG" alt="Tela de Avaliações" width="45%">
  <img src="assets/img2.PNG" alt="Tela de Campanhas" width="45%">
</div>
