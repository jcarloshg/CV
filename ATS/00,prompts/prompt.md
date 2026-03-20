# create a new cv with latex:

## Inputs

- ROLE_NAME: Full-Stack ()

- job_description:

```txt
About the Role

We’re hiring a full stack developer to own our owned-and-operated web properties end to end: React multi-step funnels, serverless backend APIs, ad platform tracking integrations, and lead buyer delivery. You’ll build the sites that turn paid traffic into revenue.

This is a great position for someone with solid experience who wants to level up their game in a fast-moving, AI-native environment. You’ll work alongside our AI systems daily, and we expect you to use AI coding tools to multiply your output. If you’re already using AI to write better code faster, you’ll fit right in.

The Stack:

Frontend

• React 19 + Vite 7 + TypeScript — our production funnel framework
• Tailwind CSS v4 for styling, Zustand 5 for state management
• Multi-step form wizards with dynamic conditional logic, client-side + server-side validation
• A/B testing and form analytics tooling, TCPA compliance widgets (Jornaya, TrustedForm)
• Planned migration to a headless CMS (Webflow or similar) for faster site builds and content management

Backend & Infrastructure

• AWS Lambda + API Gateway for stateless lead routing (Terraform-managed)
• S3 + CloudFront for static hosting and CDN
• Node.js 20 (Lambda functions), Python 3.12 (AI agents, ETL)
• Stateless architecture — no traditional database layer
• AWS Secrets Manager for credential storage, API key-based auth

Tracking & Ad Platforms

• Meta: Marketing API, Pixel client-side, Conversions API server-side
• Google: Ads Enhanced Conversions (offline upload from Lambda), GA4, GTM
• TikTok: Ads API, Pixel client-side, Events API

Lead Delivery

• Ping/post integrations with lead distribution platforms via LeadProsper
• Direct POST and redirect-based integrations with multiple lead buyers
• CRM sync APIs for downstream nurturing

DevOps & Testing

• GitHub (private org), GitHub Actions CI/CD (expanding coverage is a priority)
• Playwright E2E testing across 26 device/browser configs via BrowserStack
• Claude Code as primary dev environment, AGENTS.md conventions across repos

What You’ll Own:

Build & Manage O&O Funnels

• Build conversion-optimized React multi-step funnels for new campaigns (with the help of our marketing team), templated from our existing production funnels
• Implement form logic with validation, conditional branching, disposable email blocking, and error handling
• Integrate TCPA compliance (Jornaya lead certificates, TrustedForm consent verification)
• Implement A/B tests and track form analytics to optimize conversion rate & revenue per user
• Lead the migration of our O&O properties to a headless CMS like Webflow — enabling faster site builds, easier content updates, and rapid vertical launches without full dev cycles for every new funnel

Tracking & Conversion Infrastructure

• Implement and maintain tracking pixels across Meta, Google, and TikTok — both client-side and server-side
• Own the server-side conversion integrations (Meta CAPI, Google Enhanced Conversions) in Lambda — resolve discrepancies between client-side and server-side event data
• Ensure accurate attribution across all funnels so media buyers can optimize with confidence
• Configure server-side Google Tag Manager to implement GA4 tracking

Lead Routing & Buyer APIs

• Build and maintain ping/post integrations with lead distribution platforms and direct buyer APIs
• Implement lead validation, routing logic, and delivery confirmation in Lambda functions
• Onboard new lead buyers by integrating their API specs into our routing layer

Infrastructure & Reliability

• Manage AWS infrastructure via Terraform (Lambda, API Gateway, S3, CloudFront)
• Set up centralized error monitoring (Sentry or equivalent) — we currently have a blind spot here
• Expand CI/CD coverage to repos that currently deploy manually
• Maintain and extend Playwright + BrowserStack E2E test suites
• Manage Fly.io & GCloud infrastructure for our agentic workflows

What You Won’t Touch

To be clear about scope: you won’t be responsible for ad creative production, media buying decisions, bid strategy, agent prompt engineering, or campaign structure. Those are handled by the creative team, media buyers, and agency principals. You’re building and maintaining the technical infrastructure that makes that work.

Your First 30 Days

• Build a new O&O funnel for a new vertical using our React/Vite/Tailwind stack, templated from an existing production funnel
• Diagnose and fix server-side conversion tracking (Meta CAPI, Google Enhanced Conversions) to resolve discrepancies with client-side events
• Deploy centralized error monitoring across our Lambda functions and frontend
• Add CI/CD pipelines (GitHub Actions) to repos that currently deploy manually

What We’re Looking For

Must-Haves
• 3+ years of full stack development with a portfolio of shipped production work
• Strong React experience — you’ll be building multi-step form funnels in React 19 with Vite, Zustand, and Tailwind
• Solid JavaScript/TypeScript skills across the stack — frontend logic, Node.js Lambda functions, API integrations
• Experience building and consuming RESTful APIs, especially third-party integrations (ad platforms, CRM, lead delivery)
• Hands-on AWS experience — Lambda, API Gateway, S3, CloudFront. Terraform experience is a strong plus.
• Deep understanding of web tracking: pixels, conversion APIs, GTM, server-side events. You should be able to debug why CAPI events aren’t matching client-side pixel fires.
• Playwright or similar E2E testing experience — we test across 26 device/browser configs
• Active user of AI coding tools (Claude Code, Cursor, Copilot, etc.) with genuine enthusiasm for AI-augmented development
• Self-directed and reliable — small remote team, you own your deliverables end to end
• Fluency in English (written and spoken).
• Must be able to work US Business Hours
• Located in Latin America, Eastern Europe, or Asia.

Nice-to-Haves

• Experience in performance marketing, lead generation, or affiliate marketing
• Familiarity with ping/post lead distribution platforms
• Background in TCPA compliance (Jornaya, TrustedForm) or compliance-sensitive verticals
• Experience with CI/CD pipeline design (GitHub Actions)
• Python proficiency — helpful for collaborating on ETL and AI agent integration points
• Familiarity with the Claude API or Gemini API
• Experience with Webflow or other headless CMS platforms

If you don’t meet every requirement but have a strong foundation and a genuine desire to learn, apply anyway. We are always willing to invest in people who want to grow.


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
