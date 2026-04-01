# create a new cv with latex:

## Inputs

- ROLE_NAME: Software Engineer

- job_description:

```txt
Requisitos

Doctorado en Matemáticas, Física o área afín (INDISPENSABLE)
Experiencia en el uso de Python
Nivel de inglés intermedio-avanzado
Experiencia en desarrollo de algoritmos, modelado matemático o simulaciones
Capacidad de trabajo autónomo en entorno remoto
Pensamiento lógico y habilidades para resolución de problemas complejos
Responsabilidades

Desarrollo y optimización de código en Python
Implementación de modelos matemáticos o físicos
Generación de soluciones computacionales
Colaboración con equipos multidisciplinarios
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
