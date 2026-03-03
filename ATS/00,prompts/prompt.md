# create a new cv with latex:

## Inputs

job_description:
```txt
The Role
We are seeking a Senior Full Stack Developer to join our growing team. This is a high-impact, high-ownership role where you’ll work across the full stack, from backend APIs and infrastructure to frontend interfaces and dashboards. You’ll collaborate closely with the founder and engineers on architecture, scaling, performance, and product delivery.

Key Responsibilities:

Design and build APIs using Python (FastAPI), including database schema management (PostgreSQL) and task queue optimization with Celery
Architect multi-tenant SaaS features: authentication, data isolation, billing integration
Develop and maintain complex frontend components using React 19, TypeScript, Tailwind CSS, Zustand
Integrate AI/LLM providers (e.g., DeepSeek, Claude, OpenAI) into backend pipelines
Build data dashboards and interactive UIs for ad analysis, scoring, and geographic mapping
Manage DevOps processes via Docker, GitHub Actions, and AWS infrastructure
Optimize Celery-based pipelines for high-parallelism and sequencing of LLM calls
Participate in code reviews, documentation, and technical decisions with the founding team
Required Skills:

5+ years of professional software development experience
3+ years working with Python (FastAPI or Django preferred)
3+ years working with React and TypeScript
Strong SQL skills (especially PostgreSQL)
Experience building RESTful APIs and multi-tenant SaaS applications
Familiarity with Git and CI/CD workflows
Comfortable communicating in English (written and verbal)
Available to overlap 4+ hours with US Eastern time (9am-1pm ET or 2pm-6pm ET)
Strongly Preferred Skills:

Experience integrating LLMs or AI APIs
Experience with async Python (asyncio, Celery)
Experience building multi-tenant SaaS applications
Redis for caching or background tasks
Docker and cloud platform experience (AWS or GCP)
Prior experience in startups or small teams
Nice-to-have skills:
Stripe/payment integration
Data visualization (Recharts, D3, etc.)
Geographic data (Mapbox, mbtiles, etc.)
Background in SaaS, AdTech, or political/analytics tooling
```

1. read the [job_description]
2. read the /ATS/output/JoseCarlosHuertaGarciaENGMARCH2026.html
3. README.md
4. Crate a new CV latex file
   4.1 Take as reference /ATS/output/JoseCarlosHuertaGarcia.tex
   4.2 Take as referece the prompt /ATS/00,prompts/claude.md
   4.3 Don't add -> TECHNICAL SKILLS and PROJECTS
5. crete the folder ATS/input/{{role_name}}-{{current_date_iso}}/
   5.1 you must to save here the: cv latex
   5.2 you must to save here the: pdf of cv latex
   5.3 you must to save here the: jod_cescription.md
