# CHARAN M. — PORTFOLIO REBUILD MASTER BLUEPRINT

> **Authoritative project handoff / continuation document**
>
> This document captures the portfolio rebuild from the original blueprint through the current locked responsive/static phase, then carries the remaining visual, motion, WebGL, interaction, and case-study plans into the dynamic implementation phase.
>
> **Status:** Static foundation locked; dynamic phase next.
>
> **Primary goal:** Build a highly interactive, award-level portfolio that still functions first as a strong recruiter-facing software portfolio.

---

# 00 — EXECUTIVE SUMMARY

The portfolio is being rebuilt from scratch rather than incrementally modifying the old recruiter portfolio.

The old portfolio remains safely preserved on the `main` branch and under the tag:

```text
old-portfolio-v1
```

The new portfolio is being developed on:

```text
dev
```

The new site is intended to become the primary visual portfolio while the old Firebase-hosted version remains untouched for recruiter continuity until the new version is ready.

The portfolio is designed as a **single continuous scrolling experience**, not a collection of disconnected pages.

The intended experience is:

> recruiter-grade information architecture + editorial design + cinematic interaction + restrained WebGL + strong technical personality.

The desired reaction is approximately:

> "damn this is so cool..."

followed later by:

> "is this even a portfolio?"

The important constraint is that the experimental design must never overpower the actual portfolio content.

---

# 01 — ORIGINAL DESIGN INTENT

## 1.1 Core aesthetic direction

The visual language combines:

- Apple
- Vercel
- Linear
- Raycast
- Awwwards
- FWA
- Nothing
- Cyberpunk
- Minimalist
- Editorial
- Industrial
- Luxury
- Architectural
- Futuristic

The final direction is deliberately **minimal, dark, editorial and architectural**, with experimental interaction reserved for places where it adds meaning.

The site should feel:

- precise
- premium
- technical
- cinematic
- quiet
- intentional
- futuristic without becoming noisy

---

# 02 — DESIGN PRINCIPLES

These are locked principles for the rest of the project.

## 2.1 No generic portfolio clichés

Avoid:

- generic card grids everywhere
- random particles
- meaningless floating 3D objects
- decorative blobs
- excessive gradients
- unnecessary glassmorphism
- fake dashboards
- excessive neon
- constant animation
- infinite scrolling gimmicks
- animation for animation's sake

## 2.2 Different sections should have different visual systems

The portfolio must not feel like one repeated component copied 8 times.

The intended systems are:

| Section | Visual language |
|---|---|
| Hero | Cinematic / identity |
| Statement | Typography / manifesto |
| Stack | Technical system |
| Work | Editorial project archive |
| Experience | Timeline |
| Education | Bento |
| Credentials | Editorial archive |
| About | Manifesto / narrative |
| Contact | Giant statement + monolith-like closing area |

## 2.3 Content first, effects second

The project is intentionally being built in two broad phases:

### Phase A — Static foundation
- structure
- typography
- content
- responsive layout
- section hierarchy
- colors
- spacing
- accessibility baseline

### Phase B — Dynamic experience
- scroll choreography
- GSAP
- Motion
- Three.js
- custom GLSL
- media transitions
- cursor interaction
- sound
- easter eggs
- cinematic section transitions

The dynamic phase must be built **on top of the locked static foundation**, not by repeatedly redesigning the foundation.

---

# 03 — FINAL SECTION ORDER

The authoritative page structure is:

```text
NAVBAR

HERO

01 / STATEMENT

02 / THE STACK

03 / SELECTED WORK

04 / EXPERIENCE

05 / EDUCATION

06 / CREDENTIALS

07 / ABOUT

08 / CONTACT

FOOTER
```

This order is locked unless a later deliberate redesign is explicitly agreed upon.

---

# 04 — USER / CAREER POSITIONING

The portfolio should communicate the following priority:

1. Full Stack Java Developer
2. Software Developer
3. AI
4. IoT / Embedded
5. Electronics / VLSI

The site should not position Charan primarily as an ECE candidate.

ECE is the engineering foundation.

The current career direction is software development, with AI/automation and systems thinking as supporting strengths.

The About section explicitly communicates this transition.

---

# 05 — CONTENT SOURCES

The portfolio content is grounded in the provided resume, portfolio content, certificate PDF and project information.

Important resume-backed facts include:

### Education

**Global Academy of Technology**
- B.E. Electronics & Communication Engineering
- CGPA 9.18
- 2022–2026

**Shree Bhagawan Mahaveer Jain College**
- PUC — PCMB
- 82.66%
- 2020–2022

**Oxford English School**
- ICSE
- 83.16%
- 2010–2020

### Main projects

**FindMyCrib**
- AI-powered real-estate platform
- React / HTML / CSS / JavaScript / n8n
- AI property insights
- investment-risk information
- EMI / financial estimates
- personalized recommendations
- live demo

**Mine-Bot**
- Underground mine monitoring / hazard detection
- ESP32 / ESP32-CAM
- Embedded C
- sensors
- Wi-Fi video
- Bluetooth control
- Telegram alerts

**Orbit Store**
- Full-stack e-commerce project
- Frontend: HTML / CSS / JavaScript / React
- Backend: Java / JDBC
- MySQL
- Maven
- Apache Tomcat
- current development project

### Experience

**Learner's Byte Global Info Vision**
- AI Intern
- Jan 2026 – May 2026

**Tap Academy**
- Fullstack Web Development
- Jul 2026 – Present

### Credentials

Includes:
- Samsung RISC-V Workshop
- NPTEL System Design Through Verilog
- Coursera Canva
- Coursera WordPress
- Infosys IoT Foundation
- Infosys Python Foundation

---

# 06 — TECHNICAL FOUNDATION

Current project stack:

```text
Next.js
React
TypeScript
Tailwind CSS
Three.js
@react-three/fiber
@react-three/drei
GSAP
Motion
Lenis
Lucide React
```

The project uses:

- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- one WebGL engine: Three.js

The WebGL architecture must remain consolidated around Three.js rather than introducing multiple competing 3D engines.

---

# 07 — PROJECT STRUCTURE

Current high-level structure:

```text
portfolio/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── about/
│   ├── contact/
│   ├── credentials/
│   ├── education/
│   ├── experience/
│   ├── hero/
│   ├── layout/
│   ├── loader/
│   ├── projects/
│   ├── statement/
│   ├── tech/
│   └── ui/
│
├── data/
├── hooks/
├── lib/
├── projects/
├── public/
│   ├── fonts/
│   ├── images/
│   │   ├── certificates/
│   │   ├── og/
│   │   ├── profile/
│   │   └── projects/
│   │       ├── findmycrib/
│   │       ├── mine-bot/
│   │       ├── orbit-store/
│   │       ├── risc-v/
│   │       ├── ros2/
│   │       └── smart-lock/
│   ├── models/
│   ├── textures/
│   └── videos/
│       ├── hero/
│       └── projects/
│
├── three/
│   ├── materials/
│   ├── scenes/
│   ├── shaders/
│   │   ├── ambient/
│   │   ├── distortion/
│   │   ├── faceReveal/
│   │   └── spotlight/
│   └── utils/
│
├── types/
├── AGENTS.md
└── CLAUDE.md
```

This structure anticipates the dynamic phase and should not be flattened unnecessarily.

---

# 08 — GIT / DEPLOYMENT SAFETY

Current branch strategy:

```text
main
└── old recruiter portfolio

old-portfolio-v1
└── tagged snapshot of old portfolio

dev
└── new portfolio rebuild
```

Important rule:

**Do not destroy the old recruiter portfolio while the new one is still being developed.**

The final deployment target for the new portfolio is Vercel.

The old Firebase deployment is intentionally kept separate.

---

# 09 — GLOBAL VISUAL SYSTEM

## 9.1 Background

The background direction is near-black.

Current tonal section palette:

```text
Hero          #0A0A0A
Statement     #0D0D0F
Stack         #0B0C10
Work          #0A0D12
Experience    #0E0E10
Education     #0C0D11
Credentials   #0E0E12
About         #0A0B0F
Contact       #0A0A0A
```

These are intentionally extremely subtle differences.

The page should feel like one continuous dark environment rather than a sequence of obviously colored panels.

## 9.2 Typography

Typography should remain:

- large
- restrained
- editorial
- high contrast
- tight tracking
- minimal secondary copy

Section headings use the shared `work-title` system.

Do not introduce completely different heading styles per section without a strong reason.

---

# 10 — SECTION COLOR TRANSITIONS

## Current problem that was solved

The initial implementation had section-specific tonal backgrounds.

The first transition implementation used pseudo-elements at the beginning of sections.

The About → Contact boundary remained sharp because the Contact component contains its own full-screen visible child with:

```text
bg-[#0a0a0a]
```

which covered the section-level background transition.

The final solution keeps the tonal system and explicitly applies the transition to the **actual visible Contact layer**.

The current architecture is therefore:

```text
Previous section tone
        ↓
soft tonal fade
        ↓
next section tone
```

with the Contact sticky child also receiving the appropriate About → Contact gradient.

## Locked rule

Do not redesign the transition system casually.

The currently working transition system has been verified in:

- desktop
- laptop
- 430 × 932 mobile
- 768 × 1024 portrait tablet

---

# 11 — RESPONSIVE BASELINE

Primary test sizes:

```text
Mobile:
430 × 932

Portrait tablet:
768 × 1024

Laptop:
1366 × 768

Desktop:
1920 × 1080
```

Chrome DevTools Device Mode is considered valid for responsive layout testing.

The visual scaling of the emulator inside DevTools is not the same thing as the CSS viewport.

The actual important values are the emulated CSS dimensions.

---

# 12 — RESPONSIVE RULES

## Mobile

Breakpoint:

```css
max-width: 639px
```

Mobile is intentionally compact and content-driven.

No desktop cinematic sticky Contact behavior is used.

Contact becomes normal document flow.

## Tablet portrait

Breakpoint:

```css
min-width: 640px
max-width: 1023px
```

Portrait tablet follows the compact/content-driven philosophy rather than trying to squeeze desktop cinematic behavior into a tablet.

## Desktop / laptop

Breakpoint:

```css
min-width: 1024px
```

Desktop/laptop retain the cinematic Contact behavior and original larger spacing.

---

# 13 — NAVBAR — LOCKED

The Navbar is considered finished.

Do not change:

- height
- spacing
- typography
- positioning
- colors
- desktop layout
- mobile structure
- active-state behavior

Current behavior includes:

- Work
- Experience
- About
- Contact
- Resume

Section navigation uses Lenis.

Active section detection uses the established activation point.

Clicking a section immediately updates the active state.

The current Navbar should be treated as a **locked component**.

---

# 14 — LENIS — LOCKED FOUNDATION

Current smooth-scroll architecture:

```text
Lenis instance
    ↓
global getter
    ↓
Navbar navigation
    ↓
scroll-to-section
```

The current Lenis setup uses:

- smooth wheel
- lerp
- automatic RAF
- anchors disabled

Do not replace the current Lenis architecture simply to add animation.

Dynamic animations should listen to scroll progress / Lenis-compatible state rather than replacing the scroll engine.

---

# 15 — LOADER

## Existing concept

The site already has a startup experience.

The intended flow is:

```text
/
↓
ORBIT STARTUP EXPERIENCE
↓
ENTER ORBIT
↓
/home
```

The startup experience uses the Orbit visual identity and thinking-orb style.

A localStorage key controls the one-time startup experience:

```text
orbit_store_startup_experience_completed
```

## Dynamic phase plan

The loader should eventually become a polished cinematic entrance rather than a generic loading spinner.

Possible sequence:

```text
black screen
↓
subtle system initialization
↓
orb / typography reveal
↓
identity lock
↓
ENTER ORBIT
↓
main portfolio
```

Important:

- startup must remain separate from the homepage
- homepage should not feel like the loader
- replay should remain possible manually
- do not turn the loader into a long blocking animation

---

# 16 — HERO

## Static state

Hero currently uses the supplied profile image:

```text
/public/images/profile/charan-profile.webp
```

The visual box remains:

```text
aspect-[9/7]
w-full
max-w-[760px]
```

The image uses:

```text
object-contain
object-center
```

The hero layout is locked.

Do not change:

- image box ratio
- grid structure
- spacing
- margins
- overall composition

unless explicitly requested.

## Dynamic plan

The Hero is the primary place for controlled Three.js/WebGL identity work.

Potential system:

```text
profile image
+
subtle WebGL treatment
+
cursor / pointer interaction
+
scroll-linked displacement
```

Possible GLSL use:

- face reveal
- subtle distortion
- spotlight
- controlled displacement
- very restrained depth illusion

Do NOT use:

- particle cloud
- random floating geometry
- giant 3D object
- noisy animated background

The person's image should remain recognizable and professional.

---

# 17 — STATEMENT

## Static state

Current statement:

```text
01 / Statement

DESIGNING FOR
PURPOSE & SCALE
```

This is intentionally typography-led.

## Dynamic plan

Use the statement as a transition from personal identity into professional philosophy.

Potential motion:

```text
scroll enters section
↓
headline begins compressed
↓
words separate slightly
↓
subtle horizontal / vertical reveal
↓
settles into final editorial composition
```

GSAP is appropriate here.

Keep it restrained.

The text itself is the visual.

---

# 18 — THE STACK

## Static content

Categories currently include:

### Languages
- Java
- Python
- C
- C++
- Embedded C

### Frontend
- React
- JavaScript
- HTML
- CSS
- Next.js

### Backend
- Java
- JDBC
- REST APIs
- Node.js

### Database
- MySQL
- PostgreSQL
- SQL
- SQLite

### AI / Automation
- n8n
- Gemini API
- OpenCV
- TensorFlow Lite

### Embedded / IoT
- ESP32
- ESP32-CAM
- Arduino
- MQTT
- ROS2

## Dynamic plan

The Stack should behave more like a **technical system** than a card grid.

Potential interaction:

```text
category enters viewport
↓
skills reveal sequentially
↓
cursor hover highlights individual technology
↓
related technologies subtly connect
```

Possible visual treatment:

- horizontal or vertical data-like movement
- restrained line connections
- typography changes
- small system indicators
- subtle Motion micro-interactions

Do not turn it into a skill-rating chart.

There should be no fake percentages such as "Java 95%".

---

# 19 — SELECTED WORK

## Static system

Work uses an editorial project-row layout rather than repeated cards.

The current projects include:

1. FindMyCrib
2. Orbit Store
3. Mine-Bot
4. Smart Lock
5. Samsung RISC-V
6. ROS2 Workshop

The Work section should communicate depth rather than simply displaying thumbnails.

## Important decision

The project media / fullscreen case-study viewer is **not missing from the static phase**.

It was intentionally postponed to the dynamic phase.

This is important for future continuation.

## Dynamic case-study system

Clicking a project should eventually open a fullscreen takeover / viewer.

Potential flow:

```text
project row
↓
hover / pointer interaction
↓
project row gains focus
↓
click
↓
fullscreen takeover
↓
media sequence
↓
project information
↓
technology
↓
problem / approach / outcome
↓
external links
↓
close
↓
return to exact scroll position
```

Media can include:

- project screenshots
- videos
- diagrams
- photos
- certificates where relevant
- technical visuals

This should be a **case-study viewer**, not a separate generic page unless later required.

## FindMyCrib

Use the live demo:

```text
https://find-my-crib-tau.vercel.app
```

and repository:

```text
https://github.com/charanmahendaran/FindMyCrib
```

## Mine-Bot

Repository:

```text
https://github.com/charanmahendaran/Major-Project-MineBot
```

## Smart Lock

Repository:

```text
https://github.com/charanmahendaran/Mini-Project-Locking-System
```

## RISC-V

Repository:

```text
https://github.com/charanmahendaran/Samsung-RISC-V-Workshop
```

## ROS2

Repository:

```text
https://github.com/charanmahendaran/ROS2_Workshop_GAT
```

## Orbit Store

Treat as the major full-stack project and develop its case study as the project evolves.

---

# 20 — WORK DYNAMIC MEDIA SYSTEM

This should be one of the strongest dynamic features.

## Desired experience

The media viewer should feel like an art-directed technical case study.

Possible interaction model:

```text
ROW
↓
media preview / visual response
↓
click
↓
fullscreen black takeover
↓
large media
↓
metadata / project information
↓
navigation
↓
close
```

Potential technologies:

- React state
- Motion
- GSAP
- native video
- Three.js only where a genuine visual treatment benefits from it

Do not use Three.js for every image.

---

# 21 — EXPERIENCE

## Current static system

Experience is a continuous vertical timeline.

Current entries:

### Tap Academy
```text
Fullstack Web Development
JUL 2026 — PRESENT
```

### Learner's Byte Global Info Vision
```text
AI Intern
JAN 2026 — MAY 2026
```

The chosen order is latest/current first.

Tap Academy is intentionally presented as the current experience.

## Dynamic plan

Experience should feel like a timeline being traversed.

Possible interaction:

```text
section enters
↓
timeline activates
↓
current role highlights
↓
responsibilities reveal
↓
previous role follows
```

Potential effects:

- vertical progress line
- scroll-linked marker
- subtle content reveal
- role/date alignment
- active node emphasis

Avoid excessive parallax.

---

# 22 — EDUCATION

## Current visual system

Education intentionally uses a **bento layout**.

Three qualifications:

### Large left
Global Academy of Technology

### Right
Shree Bhagawan Mahaveer Jain College

### Full-width lower card
Oxford English School

The school card was specifically adjusted after responsive testing.

## Locked school alignment

The intended result layout is:

```text
Oxford English School

ICSE                              RESULT 83.16%
```

The result is aligned to the right.

The result font is intentionally consistent with the other education results.

The school alignment has now been confirmed as fixed.

**Do not alter the Education layout while working on unrelated dynamic features.**

## Dynamic plan

Education should remain comparatively calm.

Possible motion:

- card reveal
- subtle stagger
- result number fade
- slight spatial shift
- year metadata reveal

Avoid turning Education into an elaborate 3D experience.

The content itself should remain dominant.

---

# 23 — CREDENTIALS

## Static system

Credentials use an editorial archive rather than a rigid table.

Current heading:

```text
06 / Credentials

Learning in public.
```

Supporting text:

```text
Certifications and workshops that have shaped the way I approach
software, systems and engineering.
```

Rows contain:

- year
- certificate
- issuer
- skills/tags
- arrow

Main archive intentionally avoids long descriptions and scores.

## Dynamic plan

Every credential row should eventually be clickable.

Click:

```text
credential row
↓
fullscreen certificate viewer
```

Viewer requirements:

- large certificate
- zoom / fit
- close control
- keyboard escape
- mobile-safe layout
- no inner page scrolling if avoidable

Certificates are already available under:

```text
public/images/certificates/
```

Potential enhancement:

- row hover preview
- subtle certificate image reveal
- archive index animation

---

# 24 — ABOUT

## Current static content

The section is intentionally narrative rather than a repeated portfolio card.

Current concept:

```text
07 / About

Built to engineer

Curious
by default.
```

The narrative explicitly describes the transition:

```text
hardware-level systems
→
software development
→
full-stack Java
→
AI-driven automation
```

It also preserves the Electronics and Communication Engineering foundation.

## Dynamic plan

About should feel like a manifesto.

Possible motion:

```text
large heading
↓
slow text reveal
↓
narrative paragraphs enter
↓
important words become emphasized
```

Potential effects:

- word/line reveal
- subtle typography shift
- restrained scroll-linked movement

No duplicated profile image.

No generic "I solve problems" statement.

---

# 25 — CONTACT

## Current static system

Contact is the closing visual statement.

Current heading:

```text
08 / Contact

LET'S BUILD
SOMETHING
WORTH
REMEMBERING.
```

Supporting text:

```text
Have an idea, a problem worth solving, or something
interesting you want to build?
```

Direct inquiry:

```text
charanmahendaran@gmail.com
```

Availability:

```text
Available for full-time roles
```

Links:

- GitHub
- LinkedIn
- View Resume
- Download

## Desktop / laptop

Desktop retains the cinematic Contact architecture.

The sticky / curtain behavior is intentional.

Do not replace it with the mobile layout.

## Mobile / portrait tablet

Mobile and portrait tablet deliberately abandon the complex sticky curtain.

They use normal single-column document flow.

This was an explicit responsive design decision.

The current mobile arrangement is:

```text
08 / CONTACT

LET'S BUILD
SOMETHING
WORTH
REMEMBERING.

description

DIRECT INQUIRIES

email
availability

CONNECT & RESUME

GITHUB
LINKEDIN

VIEW RESUME
DOWNLOAD

footer
```

The mobile version was specifically tuned for:

```text
430 × 932
```

and checked against:

```text
360–390px
```

as a narrow-screen concern.

## Mobile UX rules

The email must not wrap awkwardly.

Social links should have comfortable touch areas.

Resume actions should be vertically stacked.

Footer should remain readable.

The Next.js development indicator is not considered part of the production footer.

---

# 26 — FOOTER

Current footer content:

```text
© 2026 Charan M.
Software / AI / Connected Systems
Bengaluru, IN (GMT +5:30)
```

The footer is owned by Contact.

## Mobile

Mobile footer is deliberately compact and uses a cleaner two-row arrangement.

Do not let the footer become a large independent section.

---

# 27 — SCROLL-TO-TOP CONTROL

A global `ScrollProgressTop` component has been created.

Requirements:

- hidden in Hero
- appears after approximately 50% viewport height
- fixed bottom-right
- approximately 28px diameter
- no hover expansion
- only arrow reacts on hover
- circular progress stroke represents page scroll percentage
- subtle base ring
- minimal arrow
- hover arrow shifts upward slightly
- mild magnetic pull
- maximum pull around 7–8px
- clicking scrolls to top through Lenis
- no glow
- no decorative shadow

This is considered a global interaction component.

Do not rework it unless a concrete bug is found.

---

# 28 — CUSTOM CURSOR

## Planned

Custom cursor is part of the original experimental target.

It should not be a generic giant circle.

Potential states:

```text
default
↓
project hover
↓
VIEW
```

or:

```text
default
↓
interactive element
↓
expanded / contextual
```

The cursor should be:

- subtle
- responsive
- smooth
- desktop-only

Disable or simplify it on touch devices.

Potential implementation:

- Motion
- pointer events
- spring interpolation

Do not use expensive WebGL for the cursor.

---

# 29 — SOUND

Sound toggle is part of the original interaction plan.

The sound design must be optional.

Possible sounds:

- loader activation
- navigation transition
- project opening
- close
- subtle interaction confirmation

Rules:

- sound OFF by default unless browser policy permits otherwise
- never autoplay disruptive audio
- provide visible toggle
- respect reduced-motion / user preference where appropriate

Sound should support the experience, not become a gimmick.

---

# 30 — EASTER EGGS

Original plan:

```text
1–2 easter eggs
```

These should be subtle.

Potential concepts:

- keyboard interaction
- hidden visual state
- special cursor behavior
- Orbit-related interaction
- developer-style console hint

Do not reveal them prominently.

Do not make them necessary for understanding the portfolio.

---

# 31 — WEBGL / THREE.JS ARCHITECTURE

One WebGL engine only:

```text
Three.js
```

with:

```text
@react-three/fiber
@react-three/drei
```

Potential directories:

```text
three/
├── materials/
├── scenes/
├── shaders/
│   ├── ambient/
│   ├── distortion/
│   ├── faceReveal/
│   └── spotlight/
└── utils/
```

## Principle

Three.js should be used only where it creates an experience that normal DOM/CSS cannot provide elegantly.

Good candidates:

- Hero identity
- project media treatment
- one major visual transition
- controlled spotlight / distortion

Bad candidates:

- random background geometry
- particles everywhere
- decorative floating objects behind text
- 3D versions of every section

---

# 32 — GLSL PLAN

Custom GLSL is part of the experimental level 8–10 goal.

Potential shader systems:

## Face reveal

Used around the Hero image.

Possible behavior:

```text
initial subtle concealment
↓
pointer / load interaction
↓
face becomes clear
↓
normal portrait
```

## Distortion

Used only for controlled media interactions.

Possible behavior:

```text
hover
↓
small displacement
↓
settle
```

## Spotlight

Could follow pointer position across a specific visual.

## Ambient

Only if required for a contained visual scene.

Do not introduce global shader noise just because the shader folder exists.

---

# 33 — GSAP PLAN

GSAP should own **cinematic, scroll-linked choreography**.

Good candidates:

- Hero reveal
- Statement typography
- project takeover
- Experience timeline
- large section transitions
- certificate viewer transitions

GSAP should not be used for tiny button hover effects that Motion/CSS can handle.

---

# 34 — MOTION PLAN

Motion should own:

- micro-interactions
- hover transitions
- buttons
- nav state
- cursor spring
- small UI reveals
- modal open/close where appropriate

Use the smallest appropriate tool.

---

# 35 — LENIS + GSAP + MOTION + THREE RESPONSIBILITY

The dynamic architecture should roughly be:

```text
Lenis
│
├── global smooth scroll
│
├── Navbar navigation
│
└── scroll progress
        │
        ├── GSAP
        │     └── cinematic section choreography
        │
        ├── Motion
        │     └── UI / micro interactions
        │
        └── Three.js
              └── WebGL-specific visuals
```

Avoid having multiple systems fight over the same transform.

A single element should not casually be controlled by:

```text
CSS transform
+
GSAP transform
+
Motion transform
```

unless there is a deliberate architecture for it.

---

# 36 — ORIGINAL BLUEPRINT VS CURRENT STATE

## Original blueprint

The original goal was:

```text
Single-page portfolio
+
large typography
+
near-black visual language
+
different visual system per section
+
Three.js
+
GLSL
+
GSAP
+
Motion
+
Lenis
+
custom cursor
+
sound
+
easter eggs
+
fullscreen project media
+
cinematic Contact
```

## What changed

### Changed and retained

#### Backgrounds

Original:

- multiple near-black tones

Current:

- same near-black tonal system

Status:

**LOCKED**

---

#### Section transitions

Original:

- smooth tonal transitions

Current:

- smooth tonal transitions
- implementation refined after desktop/mobile testing
- Contact visible layer explicitly receives the About → Contact transition

Status:

**LOCKED / VERIFIED**

---

#### Education

Original:

- bento system

Current:

- bento system
- school result specifically aligned right
- ICSE kept left
- responsive alignment corrected

Status:

**LOCKED / VERIFIED**

---

#### Contact

Original:

- giant statement
- cinematic curtain

Current:

- desktop/laptop retain cinematic behavior
- mobile/portrait tablet use normal vertical flow
- mobile spacing and touch areas specifically tuned

Status:

**LOCKED / VERIFIED**

---

#### Work

Original:

- editorial rows

Current:

- editorial rows
- fullscreen media/case-study viewer intentionally postponed

Status:

**STATIC LOCKED / DYNAMIC PLANNED**

---

#### About

Original:

- manifesto/narrative

Current:

- manifesto/narrative
- explicit software-development positioning

Status:

**STATIC LOCKED / DYNAMIC PLANNED**

---

# 37 — WHAT IS ALREADY FINISHED

## Infrastructure

- [x] New Next.js project
- [x] TypeScript
- [x] App Router
- [x] Tailwind
- [x] React
- [x] Three.js packages
- [x] GSAP
- [x] Motion
- [x] Lenis
- [x] Lucide
- [x] project directory architecture
- [x] Git branch safety

## Content

- [x] Resume content established
- [x] Education content
- [x] Experience content
- [x] Credentials content
- [x] About narrative
- [x] Contact content
- [x] project inventory

## Layout

- [x] Navbar
- [x] Hero foundation
- [x] Statement
- [x] Stack
- [x] Work
- [x] Experience
- [x] Education
- [x] Credentials
- [x] About
- [x] Contact
- [x] Footer
- [x] Scroll-to-top

## Responsive

- [x] desktop
- [x] laptop
- [x] 430 × 932 mobile
- [x] 768 × 1024 portrait tablet
- [x] mobile Contact flow
- [x] mobile Contact touch spacing
- [x] mobile footer arrangement
- [x] Education school alignment
- [x] tonal section transitions

---

# 38 — WHAT MUST NOT BE CHANGED

These are effectively frozen unless a concrete bug or explicit redesign request occurs.

## Navbar

Do not modify:

- dimensions
- spacing
- typography
- active-state logic
- mobile menu
- Resume placement

## Hero layout

Do not modify:

- 9:7 image box
- grid
- spacing
- image containment

## Lenis architecture

Do not replace.

## Education

Do not change the currently working result alignment.

## Section color palette

Do not introduce a new color system.

## Section order

Do not rearrange.

## Contact responsive strategy

Do not reintroduce the desktop curtain on mobile.

## Footer ownership

Footer stays inside Contact.

---

# 39 — DYNAMIC PHASE IMPLEMENTATION ORDER

This order is important.

Do not start by animating everything simultaneously.

## Stage 1 — Global motion infrastructure

Build:

1. scroll progress utilities
2. viewport helpers
3. reduced-motion detection
4. animation cleanup conventions
5. shared transition utilities
6. pointer utilities
7. media viewer state architecture

Verify:

- no hydration errors
- no layout shift
- no scroll locking bugs

---

## Stage 2 — Loader

Implement the polished startup sequence.

Verify:

- first visit
- returning visit
- replay
- mobile
- reduced motion
- slow devices

---

## Stage 3 — Hero

Implement the first Three.js/GLSL visual.

Recommended order:

```text
static portrait
↓
WebGL scene
↓
shader
↓
pointer interaction
↓
scroll interaction
↓
performance tuning
```

Do not build the entire WebGL system at once.

---

## Stage 4 — Statement

Add:

- typography reveal
- scroll choreography
- subtle exit transition

Verify against mobile.

---

## Stage 5 — Stack

Add:

- category reveal
- skill micro interactions
- subtle technical visual behavior

No fake skill percentages.

---

## Stage 6 — Work

This is a major milestone.

Build:

1. project row hover
2. pointer interaction
3. project open transition
4. fullscreen viewer
5. image/video media system
6. project metadata
7. external links
8. close transition
9. restore previous scroll position

This should become one of the portfolio's signature interactions.

---

## Stage 7 — Experience

Add:

- timeline activation
- marker progression
- content reveal
- current role emphasis

Keep it readable.

---

## Stage 8 — Education

Add only subtle motion.

Do not redesign the cards.

---

## Stage 9 — Credentials

Build:

- row hover
- certificate preview
- fullscreen certificate viewer
- mobile viewer
- close / Escape

---

## Stage 10 — About

Add:

- manifesto text reveal
- subtle scroll movement
- word emphasis

Keep the narrative dominant.

---

## Stage 11 — Contact

Only after all other sections are stable.

Desktop:

- cinematic sticky behavior
- curtain reveal
- final visual payoff

Mobile/tablet:

- preserve normal flow
- no complex curtain

---

## Stage 12 — Global interaction polish

Implement:

- custom cursor
- hover states
- sound toggle
- easter eggs
- final navigation transitions

---

# 40 — PERFORMANCE STRATEGY

Because this is an experimental portfolio, performance must be treated as part of the design.

## Desktop

Can use:

- WebGL
- shader effects
- cinematic motion
- media previews

## Mobile

Reduce:

- WebGL resolution
- shader complexity
- animation frequency
- hover-only effects
- large video autoplay

Prefer:

- CSS
- Motion
- lightweight DOM animation

## Media

Videos should:

- use appropriate compression
- avoid unnecessarily huge files
- use poster frames
- avoid loading every project video immediately

Images should:

- use WebP/AVIF where practical
- use responsive dimensions
- lazy-load noncritical media

---

# 41 — ACCESSIBILITY

Dynamic features must not remove basic accessibility.

Requirements:

- keyboard navigation
- visible focus states
- `aria-label` where necessary
- Escape closes fullscreen viewers
- buttons remain actual buttons
- links remain actual links
- no interaction depends solely on hover
- respect `prefers-reduced-motion`

Reduced motion should disable or drastically simplify:

- WebGL animation
- large scroll transforms
- cursor animation
- cinematic transitions
- excessive stagger

Content must remain completely usable without animation.

---

# 42 — MOBILE TESTING CHECKLIST

Every dynamic section should be checked at:

```text
360 × 800
390 × 844
430 × 932
```

Especially verify:

- no horizontal overflow
- no text clipping
- email fits
- buttons are tappable
- no sticky element traps scroll
- footer is readable
- modal/viewer fits viewport
- video controls don't overflow
- no excessive blank space

---

# 43 — TABLET TESTING CHECKLIST

Check:

```text
768 × 1024
```

and landscape tablet where relevant.

Verify:

- desktop elements don't become cramped
- mobile layout does not feel unnecessarily sparse
- Contact remains normal-flow
- Education remains stable
- section transitions remain smooth

---

# 44 — DESKTOP TESTING CHECKLIST

Check at least:

```text
1366 × 768
1440 × 900
1920 × 1080
```

Verify:

- hero composition
- Navbar
- typography
- project rows
- Contact cinematic behavior
- scroll-to-top control
- WebGL performance
- no horizontal overflow
- no excessive blank areas

---

# 45 — DYNAMIC QUALITY BAR

Every dynamic effect must answer at least one question:

> Does this improve understanding, navigation, identity, or emotional impact?

If the answer is no, remove it.

The goal is not:

```text
more animation
```

The goal is:

```text
more intentional interaction
```

---

# 46 — FINAL EXPERIENCE TARGET

The completed portfolio should feel like a continuous sequence:

```text
LOADER
   ↓
IDENTITY
   ↓
STATEMENT
   ↓
SYSTEMS / STACK
   ↓
WORK
   ↓
EXPERIENCE
   ↓
EDUCATION
   ↓
CREDENTIALS
   ↓
ABOUT
   ↓
CONTACT
```

The visitor should progressively learn:

```text
Who is this?
      ↓
How does he think?
      ↓
What can he build?
      ↓
Where has he worked?
      ↓
What is his foundation?
      ↓
What has he learned?
      ↓
What is his direction?
      ↓
How do I contact him?
```

That information architecture should remain intact even after the dynamic layer is added.

---

# 47 — CURRENT PROJECT CONCLUSION

The portfolio is currently at the end of its **static foundation phase**.

The foundation is now strong enough to begin the dynamic phase.

The most important decisions already made are:

- single continuous page
- near-black tonal visual system
- editorial typography
- section-specific visual identities
- recruiter-first content hierarchy
- software-development positioning
- desktop cinematic Contact
- mobile/tablet content-driven Contact
- Education bento
- editorial Work
- editorial Credentials
- narrative About
- Lenis for smooth scrolling
- GSAP for cinematic choreography
- Motion for micro-interactions
- Three.js + custom GLSL for selective WebGL
- fullscreen project/certificate viewers
- custom cursor
- optional sound
- 1–2 easter eggs
- no generic particle background
- no unnecessary 3D
- no excessive gradients
- no repetitive cards
- no fake skill percentages

The next major objective is **not another CSS redesign**.

The next objective is:

> **Begin the dynamic experience systematically, one section at a time, while protecting the now-locked responsive foundation.**

---

# 48 — AUTHORITATIVE NEXT STEP

Before adding complex effects, establish the dynamic architecture.

Recommended immediate sequence:

```text
1. Audit current components
2. Establish animation utilities
3. Establish reduced-motion handling
4. Establish shared pointer utilities
5. Finish Loader
6. Build Hero WebGL
7. Build Statement motion
8. Build Stack interaction
9. Build Work fullscreen case-study viewer
10. Build Experience motion
11. Add subtle Education motion
12. Build Credentials viewer
13. Build About motion
14. Finish Contact cinematic behavior
15. Add cursor
16. Add sound
17. Add easter eggs
18. Performance pass
19. Accessibility pass
20. Responsive pass
21. Production build
22. Vercel deployment
```

**Do not skip directly to "make everything animated."**

The portfolio should evolve in controlled layers:

```text
STATIC FOUNDATION
        ↓
MOTION
        ↓
INTERACTION
        ↓
WEBGL
        ↓
CINEMATIC POLISH
        ↓
PERFORMANCE
        ↓
PRODUCTION
```

That is the direction the project is now locked into.
