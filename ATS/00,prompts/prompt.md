# create a new cv with latex:

## Inputs

- ROLE_NAME: Full Stack Engineer

- job_description:

```txt
Job Description
GETECSA
We are a leading Mexican company in human capital management and technology services, founded in 2005 in Monterrey, Nuevo León. We have a strong presence in both national and international markets, providing added value and solutions in IT consulting, talent acquisition, testing factory, tailor-made projects, and development centers.
At Getecsa, our main goal is to deliver services with a strong sense of quality so that our business partners can achieve their objectives quickly and effectively, ensuring their complete satisfaction with our support.

Position Opening:
We are currently seeking an Senior Fullstack AI Engineer to work remotely in Mexico with one of our main clients

Daily Activities:
• Build and ship full-stack AI applications: Create frontend experiences and backend systems that power real AI capabilities, iterating based on performance and user feedback
• Own the full lifecycle: Take projects from idea through production deployment, ensuring quality, reliability, and scalability
• Build foundational infrastructure: Develop search/retrieval services, tool execution layers (MCP servers), workflows, and intelligent agents
• Establish measurement systems: Create feedback loops and performance tracking to continuously improve AI system behavior
• Solve complex problems: Debug issues across the stack, identify root causes, and implement robust solutions

Requirements:
• 5+ years shipping production code (frontend and backend)
• Strong programming fundamentals: We’ll primarily use JavaScript, Python and PHP, but value problem-solving skills over specific language expertise
• Backend development experience: Building workflows, APIs, state management, and async systems
• Database knowledge: Working with both SQL and NoSQL databases
• Frontend skills: Building responsive interfaces with modern frameworks (React, Vue, Angular, Svelte, etc.)
• Experience applying AI/ML in production: You've worked with LLMs or ML models in real applications, not just tutorials

Working Style:
• Ownership mindset: You identify problems, take initiative, and see things through
• Pragmatic and adaptable: You choose the right tool for the job and aren't afraid to learn new technologies
• Systematic problem-solver: You can debug complex systems and think through tradeoffs
Good to have
• Knowledge of AI evaluation, error analysis, and building feedback loops
• Experience with agentic frameworks (LangGraph, Google ADK) or Model Context Protocol (MCP)
• Background in information retrieval or search systems

We Offer:
• Superior benefits.
• Transparency, clarity, and honesty throughout the process.
• 100% Remote Work
The opportunity to grow is in your hands… Join GETECSA!
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
