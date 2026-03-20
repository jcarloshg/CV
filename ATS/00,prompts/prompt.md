# create a new cv with latex:

## Inputs

- ROLE_NAME: Desarrollador Angular Sr

- job_description:

```txt
Descripción

¡En Lumina Software tenemos una oportunidad laboral para ti!

Si cumples con los requisitos, no dudes en postularte y adjuntar tu CV actualizado.



Perfil: Desarrollador Angular Sr - Especialista en Design Systems



Requerido:

Profesionista en Ingeniería de Software, TI o similar.

5+ años de experiencia en desarrollo con Angular y 2+ años en construcción de componentes de Design Systems.

Experiencia en:

Construcción de librerías de componentes escalables alineadas a sistemas de diseño (Design Systems).
Transformación de especificaciones de Figma a código.
Implementación de estándares de accesibilidad (WCAG).
Pruebas unitarias y Testing de componentes.
Manejo de patrones de diseño frontend y optimización de performance.
Metodologías ágiles.
Conocimientos:

Angular (avanzado).
TypeScript, HTML5 y CSS3 (Sass/Less).
Manejo de?Figma?(como herramienta de diseño y handoff).
Git (control de versiones).
Habilidades:

Liderazgo técnico y Comunicación transversal.
Pensamiento sistémico.
Trabajo en equipo y colaboración.


Deseable:

Experiencia en la evolución de catálogos oficiales de componentes institucionales.
Experiencia en documentación técnica estructurada para desarrolladores.

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
