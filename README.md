<h1 align="center">
  Jose Carlos Huerta Garcia
</h1>


<p align="center">
  <strong><em>Software Engineer</em></strong> with 5 years of experience and <strong><em>Tech Lead</em></strong> for 1 year.
</p>

<p align="center">
  carlosj12336@gmail.com | <a href="https://www.linkedin.com/in/jose-carlos-huerta-garcia-773952212/">LinkedIn</a>
</p>

<!-- 
- carlosj12336@gmail.com
- [LinkedIn](https://www.linkedin.com/in/jose-carlos-huerta-garcia-773952212/) -->

## 👨‍💻 About me

**_Software Engineer_** with 5 years of experience and **_Tech Lead_** for 1 year. Specialized in **_Architectural Patterns_** such as **Event-Driven Architecture, Microservices, CQRS, etc.**, applying **Scrum and DDD** approaches. Experienced with stacks like **TypeScript/Node.js, Java/Spring Boot, Python/FastAPI**. **_Leading_** the development and maintainability of scalable products, aligning development with business strategy. **_Managing communication_** with stakeholders and **_Guiding/Mentoring_** FullStack teams. Focused on designing and building **scalable, high-availability systems** based on **Software Architecture principles**, aligning development and architecture with business objectives to **ensure value delivery** to the end customer.

- 🌱 I’m currently learning: Data Science
- ⚡ Fun fact: I like to ride on motorcycle

## 🗂️ Index

- [🛠️ Skills](#️-technical-skills)
- [📂 Projects](#projects)
  - [System Design](#system-design)
  - [Software architecture](#software-architecture)
  - [Templates](#templates)
  - [Data Science](#data-science)
  - [Databases](#databases)
- [🏅 Certifications](#certifications)

## 🛠️ Skills

The following technical skills are showcased throughout the portfolio projects:

#### Programming Languages

- 🟦 **TypeScript**, 🟨 **JavaScript**, 🟩 **Python**, ☕ **Java**, 🐘 **SQL**, 💻 **C++**, 💻 **C**, 🟪 **C#**, 🖥️ **Bash/Zsh**

#### Frameworks & Libraries

- **Back-End:** ☕ Spring Boot, 🟦 NestJS, ⚡ Express.js, 🟩 FastAPI
- **Front-End:** ⚛️ React, 🅰️ Angular, ⏭️ Next.js
- **Mobile:** 📱 React Native, 🚀 Expo, 🦋 Flutter
- **Data Science:** 📓 Jupyter Notebooks, 🐼 Pandas, 🔢 NumPy, 📊 Matplotlib, 📈 Seaborn, 🤖 Scikit-learn
- **UI & Utilities:** 🌈 TailwindCSS, 🧊 Three.js, 🟧 TanStack

#### Architectural Patterns

- 🏗️ **CQRS**, 🛑 **Domain-Driven Design (DDD)**, 🏗️ **Clean Architecture**, 🛡️ **Hexagonal Architecture**, 🧩 **Microservices**, 🔄 **Event-Driven Architecture**, 🖱️ **Criteria Pattern**

#### Databases & Persistence

- **Relational:** 🐘 PostgreSQL, 🐬 MySQL, 🗄️ SQLite
- **NoSQL:** 🍃 MongoDB, ☁️ DynamoDB
- **ORMs:** 🔌 Prisma, 🛡️ JPA, 🟦 Spring Data JDBC/JPA

#### DevOps & Infrastructure

- **Containers:** 🐳 Docker, 🐳 Docker Compose, ☸️ Kubernetes
- **Cloud:** ☁️ AWS (🛠️ CDK, 🏗️ CloudFormation, 🌐 VPC, ⚖️ ELB, 🔄 ASG, 🦾 Lambda, 🌍 Route 53, 🛡️ Cognito, 🔒 Secrets Manager, 🔗 CodePipeline, 📬 SQS, 📢 SNS, 👤 IAM, 🖥️ EC2, 🐘 RDS, 🗂️ S3, 💻 CLI)
- **CI/CD:** 🤖 GitHub Actions, 🛠️ Tekton, 🔄 CI/CD pipelines

#### Messaging & Integration

- 🦄 **Apache Kafka**, 🌐 **WebSocket**, 🔗 **REST API**, 🔌 **TCP Microservices**, 📨 **Message Patterns**

#### Testing & Quality

- **Testing Types:** 🧪 Unit, 🔗 Integration, 🧪 End-to-End, ✅ Acceptance
- **Frameworks:** 🧪 Pytest, 🧪 JUnit, 🧪 Jest
- **Practices:** ❤️‍🩹 Health Checks

#### Data Science & Analytics

- **Techniques:** 🤖 Machine Learning (📉 Regression, 🌳 Decision Trees, 🌲 Random Forests, 🧩 K-Means, 🌀 PCA, 🧠 Autoencoders), 🧹 Data Cleaning, 🗃️ DataFrames, 🕒 Time Series Analysis

#### Other Tools & Ecosystem

- **Version Control:** 🐙 Git, 🐱 GitHub, 🦑 Bitbucket
- **Design & Productivity:** 🎨 Figma, 📦 NPM, 🔄 Nodemon, 🛡️ Zod, 🔄 MapStruct, 🍃 Lombok, 🔒 CORS, 💡 Lucide React

## 📂 Projects

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

### Data Science

#### [Data Science Federco Garay](https://github.com/jcarloshg/data-science-federco-garay)

This repository contains comprehensive learning materials for a complete Data Science course using Python. The course covers fundamental to advanced topics in data analysis, visualization, and machine learning.

**Key Technologies & Features:**

- 🐼 Pandas, 🔢 NumPy, 📊 Matplotlib, 📈 Seaborn, 🤖 Scikit-learn, 📓 Jupyter Notebooks
- 🗃️ DataFrames, 📑 Series, 🧹 Data Cleaning, 🔗 Merging & Joining, 🕒 Time Series, 🧮 Array Operations
- 📉 Linear Regression, 🔍 Logistic Regression, 🌳 Decision Trees, 🌲 Random Forests, 🧩 K-Means, 🌀 PCA, 🧠 Autoencoders
- 📂 CSV Import/Export, 📄 XML Handling, 🗂️ Real-world Datasets, 📝 Hands-on Projects, 🏆 Integration Exercises
- 🛠️ Technologies: Python 3.x, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, Jupyter Notebooks
- 📊 Real-world datasets and integration projects for practical experience
- 📖 Additional resources and documentation links included

### Databases

### [🗃️ Test with SQL](https://github.com/jcarloshg/test-with-sql)

A repository dedicated to exploring and testing various SQL features and functionalities, with practical examples and schema designs.

- 🔍 FULLTEXT Search Implementation
  - 🐬 MySQL, 🐳 Docker

## 🏅 Certifications

- [CQRS: Command Query Responsibility Segregation](https://www.linkedin.com/in/jose-carlos-huerta-garcia-773952212/details/certifications/) Codely, October 2025
- [Introduction to Amazon Virtual Private Cloud (VPC)](https://www.linkedin.com/in/jose-carlos-huerta-garcia-773952212/details/certifications/) Amazon Web Services (AWS), August 2025
- [Introduction to Agile Development and Scrum](https://www.coursera.org/account/accomplishments/verify/D02Q5G7CT9H5) IBM (Coursera), July 2025
- [Ultimate Docker](https://academia.holamundo.io/certificates/fifvbfywmp) HolaMundo, July 2025
- [Ultimate Linux](https://academia.holamundo.io/certificates/lsv1rybd6k) HolaMundo, July 2025
- [TanStack Query - Un poderoso gestor de estado asíncrono.](https://cursos.devtalles.com/certificates/80vdvpk0jq) DevTalles, July 2025
- [Architectura Hexagonal](https://www.linkedin.com/in/jose-carlos-huerta-garcia-773952212/details/certifications/1758852008410/single-media-viewer/?profileId=ACoAADXjsscBqtjtdk4S_qpdkHwZsFn9y9TiG0o) HolaMundo, April 2023
- Design and Analysis of Algorithms | BUAP, July 2025
- Design Patterns in Java and PHP | BUAP, July 2025

- [Continuous Integration and Continuous Delivery (CI/CD)](https://www.coursera.org/programs/knu-high-o3k80/learn/continuous-integration-and-continuous-delivery-ci-cd?source=search) IBM, Ongoing.
- [OKR Certification: Leadership and Goal Setting](https://www.coursera.org/learn/okr) Measure What Matters, Ongoing.
- [Introduction to Data Science Specialization](https://www.coursera.org/specializations/introduction-data-science) IBM, Ongoing.
- [Applied Data Science Specialization](https://www.coursera.org/specializations/applied-data-science) IBM, Ongoing.

<!--
### Full Stack projects

### Mobile architecture
-->

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
