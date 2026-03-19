# create a new cv with latex:

## Inputs

- ROLE_NAME: Full-Stack ()

- job_description:

```txt
Sobre la posición ✨

Te encargaras de Diseñar, construir y mantener sistemas backend robustos, escalables y de alta disponibilidad que soporten la operación de más de 3,000 restaurantes en México y LATAM, garantizando calidad, rendimiento y confiabilidad del software que es el corazón del negocio de nuestros clientes.

Buscamos a alguien ubicado en CDMX o Monterrey. 



Cada persona que forma parte de Parrot es el ingrediente preciso para aportar, diseñar y desarrollar soluciones nuevas y diferentes; eso sí, lo que nos hace a todos iguales, sin excepción, es que nos enfocamos en dar un servicio increíble. Somos el #Parrotflock 🦜✨



Responsabilidades 💪🏼

 Desarrollar y mantener APIs REST escalables para manejar grandes volúmenes de tráfico con eficiencia y seguridad.
Diseñar y evolucionar componentes de arquitectura backend, documentando decisiones técnicas y promoviendo buenas prácticas.
Mantener sistemas en tiempo real con alta disponibilidad, asegurando monitoreo proactivo y respuesta ágil ante incidentes.
Implementar pruebas unitarias, de integración y de carga para garantizar estabilidad en producción.
Optimizar acceso a datos con ORMs y consultas SQL avanzadas, aplicando performance tuning y patrones de diseño.
Colaborar con otros squads (frontend, infra, producto) para entregar soluciones end-to-end.
Participar en code reviews aportando feedback constructivo y elevando el estándar técnico del equipo.


Habilidades ⚒️

Python 3.x con Django 3.x+ (mínimo 3 años). TypeScript (mínimo 2 años). go es un plus.
APIs REST: diseño, seguridad, versionado y eficiencia.
Bases de datos relacionales: PostgreSQL/MySQL — modelado, normalización, query optimization.
ORMs (Django ORM, SQLAlchemy) y patrones de acceso a datos eficientes.
NoSQL básico (Redis, MongoDB): criterio para saber cuándo aplicar.
Microservicios y sistemas distribuidos: colas de mensajería (Celery, RabbitMQ, Kafka).
Git, CI/CD, Docker.
Testing: unitario, integración y carga.


Nice to have... 👀 🔎

Experiencia con sistemas de pagos o fintech (Kushki, Stripe, Conekta).
Herramientas de observabilidad: Datadog, Sentry, Grafana.
Entornos de alta concurrencia o tiempo real.
Cloud (AWS/GCP) y arquitecturas serverless.
Integraciones con delivery apps (UberEats, Rappi, DiDi Food).
```

## Run the follow steps

1. read the [job_description]
2. read the /ATS/output/JoseCarlosHuertaGarciaENGMARCH2026.html
3. README.md
4. Crate a new CV latex file
   4.1 Take as reference /ATS/output/JoseCarlosHuerta-Full-Stack-2026-03-04.tex
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
