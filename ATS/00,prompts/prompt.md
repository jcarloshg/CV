# create a new cv with latex:

## Inputs

- ROLE_NAME: Full-Stack ()

- job_description:

```txt
About Curotec
We are a globally leading software services company specializing in developing enterprise-level projects for clients worldwide.
Our team is a unique blend of diverse skill sets, cultures, and backgrounds—a true melting pot of talent. One of the most rewarding aspects of working at Curotec is the opportunity to learn something new every day, not just about technology but also about our amazing team members.
Visit our website to discover more about who we are and what we do.

We are looking for highly skilled remote developers with experience building complex business applications using the Laravel and React frameworks.

This is a remote position.

Job requirements
Experience

Experience with Laravel/ReactJS.

Experience with custom application development.

Must be able to speak and write fluent English.

Must be dedicated, passionate, and hard-working. Attitude is everything.

Must be able to work with a team and collaborate remotely. Hard workers and self-starters, please apply.

We are looking for a creative and efficient problem solver.

Technical Skills

Experience with PHP, Laravel, and ReactJS

Experience with OAuth and JWT Tokens is a plus.

Advanced Laravel Experience (Middleware, Collections, Policies, Request, Resources, and Service Containers).

Experience with software testing, TDD, and unit testing (PHPUnit, PHPSpec, Behat).

Experience with MySQL profiling and query optimization.

Solid working experience building RESTful APIs.

Active experience integrating custom code with 3rd party web services.

Have performed complicated data migrations.

Hands-on experience with tools such as Git and Jira.

Experience working within Agile development environments.
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
