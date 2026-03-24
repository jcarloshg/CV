# create a new cv with latex:

## Inputs

- ROLE_NAME: Software Engineer

- job_description:

```txt
En Skala trabajamos con una empresa de tecnología de pagos del sector Fintech en la búsqueda de un/a Software Engineer especializado en Visa Card Issuing

El rol tiene como obietivo liderar el desarrollo e implementación de la solución de emisión de tarietas Visa dentro de una plataforma de pagos en crecimiento.

 Lo que buscamos:
-> Experiencia experta en Visa Card Issuing

-> Dominio de C# y C++

-> Trabajo en equipos ágiles bajo metodología Scrum

--> Inglés intermedio o superior
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
