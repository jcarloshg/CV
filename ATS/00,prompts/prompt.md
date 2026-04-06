# create a new cv with latex:

## Inputs

- ROLE_NAME: Full Stack Engineer

- job_description:

```txt
Full Stack Engineer -
Develop software systems supporting Supply Chain services and warehouse management systems.
Participate in design, architecture and implementation of software systems solving complex problems. Includes defining, scoping, and estimating stories and work artifacts.Ensure delivery of high quality, scalable, maintainable, and well tested code.
Document designs.Provide on-call support for systems the team owns.
5+ years professional hands-on experience delivering quality software
Experience with Java and Spring boot frameworkProficient in UI development using ReactJS/ NodeJS and CSSUnderstanding of modern UX/UI design principles, ideally informed by experience with a design system such as Material Design preferred
Experience with messaging technologies and streaming platforms (Kafka)Experience with RESTful architecture and micro servicesProficiency with Cloud technologies (AWS, Kubernetes) GCP is a plusMust know modern infrastructure tools and pipelines (GitLab, CI/CD, Terraform)Test automation experience at all levels (Unit, Integration, Regression and Performance/Load)Familiar with logging and metrics tools (New Relic, Splunk)Should be able to articulate and architect a well-designed system.Familiarity with relation databases is a plusSupply Chain experience is a plusUnderstanding of modern warehouse management systems is a bonus
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
