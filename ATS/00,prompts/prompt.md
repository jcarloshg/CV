# create a new cv with latex:

## Inputs

- ROLE_NAME: Full-Stack

- job_description:

```txt
Developer with these technical skills:

## 🛠️ Skills

The following technical skills are showcased throughout the portfolio projects:

#### Programming Languages

- 🟦 **TypeScript**, 🟨 **JavaScript**, 🟩 **Python**, ☕ **Java**, 🐘 **SQL**, 💻 **C++**, 💻 **C**, 🟪 **C#**, 🖥️ **Bash/Zsh**

#### Frameworks & Libraries

- **Back-End:** ☕ Spring Boot, ☕ Quarkus, 🟦 NestJS, ⚡ Express.js, 🟩 FastAPI
- **Front-End:** ⚛️ React, 🅰️ Angular, ⏭️ Next.js
- **Mobile:** 📱 React Native, 🚀 Expo, 🦋 Flutter
- **Data Science:** 📓 Jupyter Notebooks, 🐼 Pandas, 🔢 NumPy, 📊 Matplotlib, 📈 Seaborn, 🤖 Scikit-learn, 🔗 LangChain
- **UI & Utilities:** 🌈 TailwindCSS, 🧊 Three.js, 🟧 TanStack

#### Architectural Patterns

- 🏗️ **CQRS**, 🛑 **Domain-Driven Design (DDD)**, 🏗️ **Clean Architecture**, 🛡️ **Hexagonal Architecture**, 🧩 **Microservices**, 🔄 **Event-Driven Architecture**, 🖱️ **Criteria Pattern**

#### Databases & Persistence

- **Relational:** 🐘 PostgreSQL, 🐬 MySQL, 🗄️ SQLite
- **NoSQL:** 🍃 MongoDB, ☁️ DynamoDB
- **ORMs:** 🔌 Prisma, 🛡️ JPA, 🟦 Spring Data JDBC/JPA

#### DevOps & Infrastructure

- **Containers:** 🐳 Docker, 🐳 Docker Compose, ☸️ Kubernetes
- **Cloud:** ☁️ AWS (🛠️ CDK, 🏗️ CloudFormation, 🌐 VPC, ⚖️ ELB, 🔄 ASG, 🦾 Lambda, 🌍 Route 53, 🛡️ Cognito, 🔒 Secrets Manager, 🔗 CodePipeline, 📬 SQS, 📢 SNS, 👤 IAM, 🖥️ EC2, 🐘 RDS, 🗂️ S3, 💻 CLI, 🪨 Bedrock)
- **CI/CD:** 🤖 GitHub Actions, 🛠️ Tekton, 🔄 CI/CD pipelines

#### Messaging & Integration

- 🦄 **Apache Kafka**, 🌐 **WebSocket**, 🔗 **REST API**, 🔌 **TCP Microservices**, 📨 **Message Patterns**

#### Testing & Quality

- **Testing Types:** 🧪 Unit, 🔗 Integration, 🧪 End-to-End, ✅ Acceptance
- **Frameworks:** 🧪 Pytest, 🧪 JUnit, 🧪 k, 🧪 Jest
- **Practices:** ❤️‍🩹 Health Checks

#### Other Tools & Ecosystem

- **Version Control:** 🐙 Git, 🐱 GitHub, 🦑 Bitbucket
- **Design & Productivity:** 🎨 Figma, 📦 NPM, 🔄 Nodemon, 🛡️ Zod, 🔄 MapStruct, 🍃 Lombok, 🔒 CORS, 💡 Lucide React

#### AI Engineering

- 🔗 **LangChain Ecosystem:** 🦜🔗 LangChain, 🌍 LangChain Community, 🧠 LangChain Core, 🦙 LangChain Ollama
- 📚 **RAG (Retrieval-Augmented Generation):** Vector Databases, Embeddings, Chunking Strategies
- 🪨 **AWS Bedrock:** Claude, Llama
- ⚙️ **LLMOps:** Prompt Engineering, Model Fine-tuning, Evaluation Metrics
- 📈 **MLOps & Experiment Tracking:** MLflow, Model Registry, Experiment Tracking
- 🦙 **Ollama:** Local LLM Deployment, Model Management

#### Data Science & Analytics

- **Techniques:** 🤖 Machine Learning (📉 Regression, 🌳 Decision Trees, 🌲 Random Forests, 🧩 K-Means, 🌀 PCA, 🧠 Autoencoders)
- 🧹 Data Cleaning, 🗃️ DataFrames, 🕒 Time Series Analysis

```

## Run the follow steps

1. read the [job_description]
2. read the /ATS/output/JoseCarlosHuertaGarciaENGMARCH2026.html
3. README.md
4. Crate a new CV latex file
   4.1 Take as reference /ATS/output/JoseCarlosHuertaGarcia.tex
   4.2 Take as referece the prompt /ATS/00,prompts/claude-v3.md
   4.3 Don't add -> TECHNICAL SKILLS and PROJECTS
5. crete the folder ATS/input/{{current_date_iso}}{{current time iso 8601-> hh:mm:ss}}-{{ROLE_NAME}}/
   5.1 you must use ENGLISH to write the CV files
   5.2 add always the role like: {{ROLE_NAME}} | Tech Lead
   5.3 add always the role like on PROFESSIONAL SUMMARY: \kw{{{ROLE_NAME}}} with 5+ and \kw{{Tech Lead }} with 1 years
   5.4 at section \section\*{CERTIFICATIONS}, just put certifications according the {{ROLE_NAME}}
   5.5 you must to save here the: cv latex called JoseCarlosHuerta-{{ROLE_NAME}}-{{current_date_iso}}.tex
   5.6 you must to save here the: pdf of cv latex called JoseCarlosHuerta-{{ROLE_NAME}}-{{current_date_iso}}.pdf
   5.7 you must to save here the: job-{{ROLE_NAME}}.md
