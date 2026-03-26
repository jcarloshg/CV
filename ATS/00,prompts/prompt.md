# create a new cv with latex:

## Inputs

- ROLE_NAME: Software Engineer

- job_description:

```txt
Requisitos del puesto



Estudios universitarios completos en el área de sistemas o afín.
Experiencia comprobada en desarrollo de software con enfoque en Java y Quarkus.
Conocimientos sólidos en programación y diseño de aplicaciones.




Responsabilidades del puesto



Desarrollar aplicaciones y plataformas utilizando Java y Quarkus.
Colaborar en la definición de arquitectura de software y diseño de soluciones.
Realizar pruebas unitarias y de integración.
Participar en reuniones de seguimiento de proyectos y presentar avances.
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
