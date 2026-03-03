# create a new cv with latex:

## Inputs

job_description:

```txt
Role Overview
We are hiring experienced Software Engineers (Python-focused) to support high-impact research collaborations with leading AI labs.

In this project-based engagement, you will contribute to building training datasets that improve AI model reasoning and problem-solving across real-world coding tasks.

This is a unique opportunity to apply your software engineering expertise toward shaping the next generation of intelligent systems.

About the Project
You will work on SWE-bench–style tasks derived from real open-source repositories.

Since frontier AI models do not expose their internal reasoning traces, your role will involve:

Reconstructing model reasoning

Annotating solution trajectories

Inferring thought processes behind debugging and implementation steps

You will use your own developer problem-solving approach to reconstruct and annotate realistic reasoning flows.

Key Responsibilities
Review model-generated code trajectories on realistic software engineering tasks

Reconstruct step-by-step chain-of-thought reasoning

Annotate debugging logic, decision points, and problem-solving strategies

Use full context (codebase, issues, test cases) to infer plausible reasoning

Ensure technical accuracy and alignment with real-world developer workflows

Required Qualifications
2+ years of hands-on software engineering experience

Strong debugging experience in real codebases

Proficiency in Python (primary)

Familiarity with JavaScript / TypeScript or other open-source languages (preferred)

Experience with Git workflows (PRs, issue tracking)

Ability to articulate technical reasoning clearly in writing

Bachelor’s degree in CS, Software Engineering, or related field

Ideal Candidate
Strong analytical thinker

Comfortable explaining technical reasoning

Detail-oriented and methodical

Familiar with open-source contribution workflows

Interested in AI and LLM research

Application Process
1 Upload your resume
2 Complete a short 15-minute AI interview
3 Selected candidates receive onboarding details within a few days
```

## Run the follow steps

1. read the [job_description]
2. read the /ATS/output/JoseCarlosHuertaGarciaENGMARCH2026.html
3. README.md
4. Crate a new CV latex file
   4.1 Take as reference /ATS/output/JoseCarlosHuertaGarcia.tex
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
