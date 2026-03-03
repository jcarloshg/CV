# create a new cv with latex:

## Inputs

job_description:

```txt
Responsabilidades

Desarrollo Full Stack: Creación de páginas web, software tipo SaaS, aplicaciones web y aplicaciones móviles.
Optimización con IA: Creación y mejora de herramientas basadas en IA para la optimización de procesos y flujos de trabajo.
Desarrollo eficiente: Uso habitual de herramientas de IA como apoyo en el ciclo de desarrollo.
Autonomía: Colaboración con el equipo y ejecución de proyectos de forma autónoma.
Proactividad: Propuesta de soluciones técnicas y mejoras constantes.
Requisitos

Perfil Full Stack: Base sólida en JavaScript / TypeScript (Next.js y NestJS).
Experiencia con IA: Uso de IA aplicada al desarrollo (más allá de copiar código).
Inglés: Buen nivel para mantener reuniones y comunicación fluida.
Mentalidad: Perfil proactivo, colaborativo y con aprendizaje continuo.
Por qué RSUNION

Construirás productos reales, con libertad técnica, usando IA de verdad, con impacto directo en proyectos que se lanzan y se usan, y con oportunidades reales de crecimiento.

¿Cómo aplicar?

Escríbenos a maicol@rsunion.com adjuntando:

Tu currículum.
Ejemplos de proyectos desarrollados.
Una breve explicación de hacia dónde quieres llevar tu carrera profesional.
Tipo de puesto: Tiempo completo

Sueldo: $10,000.00 - $30,000.00 al mes

Beneficios:

Apoyo para estudios
Descuento de empleados
Descuentos y precios preferenciales
Horarios flexibles
Trabajo desde casa
Idioma:

Inglés (Deseable)
Lugar de trabajo: Empleo remoto
```

1. read the [job_description]
2. read the /ATS/output/JoseCarlosHuertaGarciaENGMARCH2026.html
3. README.md
4. Crate a new CV latex file
   4.1 Take as reference /ATS/output/JoseCarlosHuertaGarcia.tex
   4.2 Take as referece the prompt /ATS/00,prompts/claude-v3.md
   4.3 Don't add -> TECHNICAL SKILLS and PROJECTS
5. crete the folder ATS/input/{{current_date_iso}}{{current time iso 8601-> hh:mm:ss}}-{{role_name}}/
   5.1 you must use ENGLISH to write the CV files
   5.2 add always the role like: {{Role name}} | Tech Lead
   5.3 you must to save here the: cv latex called JoseCarlosHuerta-{{role_name}}-{{current_date_iso}}.tex
   5.4 you must to save here the: pdf of cv latex called JoseCarlosHuerta-{{role_name}}-{{current_date_iso}}.pdf
   5.5 you must to save here the: job-{{role_name}}.md
