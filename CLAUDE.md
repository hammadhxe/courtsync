# CourtSync website — instructions for Claude

## Who you are working with
Hammad is a law student, not a coder. Explain in short plain words, give complete working files (not scaffolds), and tell him exactly what to click or paste. He decides fast; propose one or two options, then build. Never ask him to paste passwords or keys into the chat.

## What this repo is
The public marketing website for **CourtSync**, at **court-sync.xyz** (and www). Only the website lives here. The product itself is a separate app at https://app.court-sync.xyz (repo `hammadhxe/lawchamber`) — do not touch or move it.

## What CourtSync is (for the copy)
A case management system for litigation firms in India: each case's next court date and history, daily and weekly hearing lists, the court's cause lists, tasks for the team, phone notifications, and adding cases by advocate name. A web app that installs on a phone like an app (PWA). Each firm gets its own address, name, colours and logo. Login is by an email with a 6-digit code, no passwords. A firm registers itself on the app's login screen, Hammad approves it, and it gets a free trial that he starts. No limit on the number of lawyers. Built first for his own chambers (Malik & Muazzam Law Chambers, Srinagar), now offered to other firms.
Never invent facts: no made-up prices, statistics, customer names, testimonials or logos. Use clearly marked placeholders like {{price}} when a fact is missing. Demo screenshots must use made-up data only, never real cases or clients.

## What the site needs
One page, or very few: what CourtSync is, the main features in plain words, a "Contact us" button (mailto:hello@court-sync.xyz, NOT a link to register in the app: firms are set up by Hammad after they write), a contact line (hello@court-sync.xyz), a LinkedIn link to Hammad in the footer, a proper footer. Phone first; also good on tablets and laptops. Hammad must be able to change the text later without a developer.

## Design: use the landing-page-design skill (`.claude/skills/landing-page-design/SKILL.md`)
Use it for the structure, intake, copywriting, states, motion, spacing, SEO and ship checklist. Its intake questions replace any other questions: ask them in ONE batch, and keep it short.
**Brand overrides (Hammad's choice, not a hard rule):** use CourtSync's own colours and font instead of the skill's font list and colour rules — navy `#1f2a44`, gold `#c9a869`, **Libre Baskerville** for text and headings (formal, trustworthy; the audience is lawyers). Everything else the skill decides (layout, spacing, radius, hover and focus states, motion, tagline reveal, 404, meta tags, 390px check) stays as the skill says.
**Easy switch:** if Hammad says he does not like it, or says "pick your own look", drop the brand overrides and let the skill's own modern visual system decide fonts and colours. Offer that as a second version rather than arguing.

## Hosting and DNS (do not break anything)
Domain court-sync.xyz is at Namecheap on BasicDNS. These records MUST be kept untouched: the Namecheap verification TXT, the `app` CNAME to Northflank, the Resend email records (DKIM TXT, `rsend` and `send` CNAMEs), and the email forwarding for admin@court-sync.xyz. Only the root domain and `www` should point at the website host. Suggest the simplest free host (Cloudflare Pages, Netlify or GitHub Pages), give the exact DNS records to add, and say where HTTPS comes from.
After going live, give Hammad a checklist to confirm that https://app.court-sync.xyz and admin@ email still work.
