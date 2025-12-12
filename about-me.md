<h1 align="center">
  Hi 👋, I'm Jose Carlos Huerta Garcia
</h1>

<h3 align="center">
  I'm a Fullstack Developer
</h3>

<h4>
  📫 How to reach me
</h4>

- carlosj12336@gmail.com
- [LinkedIn](https://www.linkedin.com/in/jose-carlos-huerta-garcia-773952212/)

## About me

Full-Stack Developer with 4 years and Tech Lead with 1 years of experience. Developing quality products from Front-End applications (web and
mobile) to Back-End systems, supported and powered by cloud infrastructure. Brings leadership experience as a Tech Lead, making Design
Software Architecture decisions and mentoring developers to ensure project success

- 🌱 I’m currently learning: Data Science
- ⚡ Fun fact: I like to ride on motorcycle

## Projects

### System Design

#### [Patient Health Record (PHR) System](https://github.com/jcarloshg/Patient-Health-Record--DataBaseReplication)

The Patient Health Record (PHR) system _implements_ a **Clean Architecture** pattern with a **focus** on **high availability, disaster recovery, and regulatory compliance**. The architecture separates concerns into distinct layers: domain, application, infrastructure, and presentation.

##### Key benefits

1. **Master-Slave Replication:** Implements PostgreSQL WAL-based streaming replication with one primary database (db-main) and two hot standby replicas (db-slave-01, db-slave-02)
2. **Real-Time Synchronization:** Sub-second replication lag under normal conditions with asynchronous streaming for optimal performance
3. **Read Scalability:** Write operations directed to primary (port 5432), read operations distributed across replicas via HAProxy load balancer (port 5435)
4. **Load Balancing:** HAProxy-based intelligent load balancing for read operations using least-connections algorithm with automatic health checks
5. **High Availability:** Hot standby replicas can be promoted to primary during failover scenarios, ensuring minimal downtime
6. **Data Protection:** Multiple data copies across isolated containers with automatic WAL streaming and point-in-time recovery capabilities

- 🧩 Data Replication, 🧩 Pattern Criteria, 🛑 Domain Driven Design, 🧪 Unit Testing, ⚖️ Load Balancing, 🏗️ Clean Architecture, 🔌 Connection Pooling, 🔄 Streaming Replication
- 🐳 Docker, 🐘 PostgreSQL, 🟩 FastAPI, 🟦 Python, 🛡️ Pydantic, 🧪 Pytest, 🖥️ Bash, 🔗 SQLAlchemy, 🟧 Uvicorn, 🌐 HTTPX, 🟪 HAProxy, 📦 python-dotenv

#### [Load Balancer Proofs - Nginx Load Balancing System](https://github.com/jcarloshg/load-balancers-nginx/tree/main)

A production-ready **load balancing system** using **Nginx** to distribute traffic across multiple _FastAPI_ backend services. This project demonstrates weighted load balancing, health checks, resource limits, and stress testing capabilities.

This project implements a load-balanced API system with:

1. **Nginx** as the load balancer (port 8080)
2. **3 FastAPI backend services** (back-01, back-02, back-03) running on ports 8001, 8002, 8003
3. **Weighted load distribution** to optimize resource usage
4. **Health checks** for automatic failure detection
5. **Resource limits** for controlled resource allocation
6. **Stress testing tools** for performance validation

- 🛑 Domain Driven Design, ⚖️ Load Balancing
- 🐳 Docker, 🔀 Nginx, 🟩 FastAPI, 🟦 Python 3.12, 🛡️ Pydantic

#### [App messagin with Kafka](https://github.com/jcarloshg/messaging-with-kafka)

This is a **real-time messaging application** built with Node.js and TypeScript, implementing **Domain Driven Design** principles. The project demonstrates a complete message exchange system using **Apache Kafka** for event-driven communication and **WebSocket** for real-time client interactions.

- 🛑 Domain Driven Design, 🧪 Unit Testing, 🔗 Integration Testing, ✅ Acceptance Test
- 🐳 Docker, 🐘 Postgres, ⚡ Express, 🟩 Node.js, 🟦 TypeScript, 🛡️ Zod, 🧪 Jest

#### [CQRS Products Reservation](https://github.com/jcarloshg/cqrs-products-reservation) 🚧 Under Development...

This is a **CQRS (Command Query Responsibility Segregation)** based inventory management system built with **Node.js/TypeScript** following **Clean Architecture** principles. The system is containerized using Docker and uses PostgreSQL as the database.

##### The system manages **stock reservations** for products with the following main use cases:

1. **Reserve Stock** (UC-001) - Temporarily allocate stock for customers
2. **Confirm Reservation** (UC-002) - Convert temporary reservations to permanent allocations
3. **Replenish Stock** (UC-003) - Add new stock inventory
4. **Get Stock Availability** (UC-004) - Query current stock levels
5. **Get Inventory Summary** (UC-005) - Business analytics and reporting

- 🛑 Domain Driven Design, 🧪 Unit Testing, 🔗 Integration Testing, ✅ Acceptance Test
- 🐳 Docker, 🐘 Postgres, ⚡ Express, 🟩 Node.js, 🟦 TypeScript, 🛡️ Zod, 🧪 Jest

#### [Simple Crud Python](https://github.com/jcarloshg/simple-crud-python)

A minimal CRUD API built with FastAPI. **CI/CD pipelines** are implemented via **GitHub Actions** for automated testing and deployment.

- 🏗️ Clean architecture with 🏛️ Domain Driven Design, 🔄 CI/CD with 🤖 GitHub Actions, 🧪 Acceptance Test
- FastAPI 🚀, Pydantic 2.12.4 🔒, Uvicorn ⚡, Pytest 🧪, HTTPX 🌐

#### [Crud Items Spring Boot](https://github.com/jcarloshg/crud-items-springboot)

This project is a Spring Boot-based RESTful API for managing personal information, skills, education, and experience records. It uses PostgreSQL as the database and supports full CRUD operations for each entity. The application is containerized with Docker for both development and production environments.

- **RESTful API** for Personal Info, Skills, Education, and Experience
- **Validation** using Spring Boot's validation framework
- **Database migrations** with SQL scripts
- **Integration and unit tests** with JUnit and Spring Boot Test
- **Dockerized** for easy development and deployment
- **Thymeleaf error templates** for validation errors

- 🧪 Unit & Integration Testing, 🏗️ Clean Architecture, 🔌 Connection Pooling, 🔄 Streaming Replication
- 🐳 Docker, 🐘 PostgreSQL, ☕ Java 21, 🟦 Spring Boot 4, 🧪 JUnit 5, 🛡️ Jakarta Bean Validation, 🖥️ Maven, 📄 Thymeleaf, 🗄️ Spring Data JDBC

#### [🚀 Event Register](https://github.com/jcarloshg/register-domain-events-jpa)

A Spring Boot application for registering and retrieving domain events. It provides RESTful endpoints to create and list events, storing them in a database.

- 📝 Register new domain events via REST API
- 📋 Retrieve all registered domain events (with sensitive data hidden)
- ✅ Validation and error handling
- 🗄️ Uses JPA for persistence
- 🧪 Supports H2 (dev/test) and 🐘 PostgreSQL (prod)

🛑 Domain Driven Design, 🧪 Unit Testing, 🏗️ Clean Architecture, 🗄️ JPA Persistence, ✅ Validation, 🚨 Exception Handling
🐳 Docker, 🐘 PostgreSQL, 🧪 H2 (dev/test), 🍃 Lombok, 🌱 Spring Boot, 🔄 MapStruct, 🧪 JUnit

### Software architecture

#### [🏗️ Pattern-Criteria - Product Search API](https://github.com/jcarloshg/pattern-criteria)

A robust Node.js API built with TypeScript that implements the Criteria Pattern for advanced product search with multiple filters, pagination, and cursor-based navigation. The project follows Hexagonal Architecture principles to ensure clean code separation and maintainability.

- 🧩 Pattern Criteria, 🖱️ Pattern Criteria Cursor, 🛑 Hexagonal Architecture, 🧪 Unit Testing, 🔗 Integration Testing, ✅ Acceptance Test
- 🐳 Docker, 🐘 Postgres, ⚡ Express, 🟩 Node.js, 🟦 TypeScript, 🛡️ Zod, 🧪 Jest

### Templates

#### [Clean Architecure and TypeScript](https://github.com/jcarloshg/template-nodejs-typescript)

This is a template project using Node.js and TypeScript, following a hexagonal architecture.

- 🐳 Docker, 🐘 Postgres, ⚡ Express, 🟩 Node.js, 🟦 TypeScript, 🛡️ Zod, 🧪 Jest

### Databases

### [🗃️ Test with SQL](https://github.com/jcarloshg/test-with-sql)

A repository dedicated to exploring and testing various SQL features and functionalities, with practical examples and schema designs.

- 🔍 FULLTEXT Search Implementation
  - 🐬 MySQL, 🐳 Docker

<!--
### Full Stack projects

### Mobile architecture
-->

### Languages and Tools

<p align="left"> <a href="https://aws.amazon.com/amplify/" target="_blank" rel="noreferrer"> <img src="https://docs.amplify.aws/assets/logo-dark.svg" alt="amplify" width="40" height="40"/> </a> <a href="https://developer.android.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg" alt="android" width="40" height="40"/> </a> <a href="https://angular.io" target="_blank" rel="noreferrer"> <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40"/> </a> <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://dart.dev" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg" alt="dart" width="40" height="40"/> </a> <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a> <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> <a href="https://flutter.dev" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="flutter" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.php.net" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://reactnative.dev/" target="_blank" rel="noreferrer"> <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40"/> </a> <a href="https://www.sqlite.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite" width="40" height="40"/> </a> <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> </p>

<!--
**jcarloshg/jcarloshg** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
