# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HINT is a corporate website for HINT Language, a language services company based in São Paulo. The site includes an About page, a Course landing page (promoting Larissa Rovaron's English teaching method), a Services page, and a Contact page. The target audience is Brazilian adults and businesses seeking professional English language services.

## Repository Structure

- `frontend/` — Next.js 15 application (Tailwind CSS, Phosphor Icons, Radix UI)
- `docs/hint-design-system.md` — Visual identity: colors, typography, principles
- `docs/hint-orientacoes-layout.md` — Layout strategy per section (design directives)
- `docs/landing-page-copy.md` — Complete landing page text content (7 sections)
- `docs/issues/` — Issue specifications and deployment plans
- `assets/Lara Bio.md` — Teacher biography (source material)
- `assets/Logos, Profile Pics, Watermarks/` — Brand imagery (logos, photos, watermarks)
- `amplify.yml` — AWS Amplify build configuration for deployment
- `Dockerfile` / `docker-compose.yml` — Docker development environment

## Design System Reference

### Core Values (shared across all docs)
Clareza, Confiança, Autoridade, Estrutura, Acolhimento, Progresso

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| Roxo Profundo | `#5503af` | Primary — knowledge, authority |
| Verde Progresso | `#00C853` | CTA buttons, progress indicators |
| Fundo claro | `#F7F7FA` | Alternating section backgrounds |
| Texto principal | `#1A1A1A` | Body text |
| Cinza auxiliar | `#8A8A95` | Secondary text |

### Typography
- Headers: **Source Sans 3 Bold 700**
- Body: **Roboto**

## Landing Page Sections (in order)
1. Hero
2. Quem é Larissa Rovaron (Bio)
3. Reenquadramento
4. O Método Larissa Rovaron
5. Prova & Autoridade
6. Depoimentos
7. Oferta (includes Garantia as visual sub-block)

## Working with These Documents

The three docs in `docs/` were aligned to be consistent. When editing any of them:
- **Values/principles** must stay identical between `hint-design-system.md` and `hint-orientacoes-layout.md`
- **Every section in the copy** must have a corresponding layout orientation
- **Layout orientations** must reference design system color codes, not generic descriptions
- **Depoimentos** in the copy include `[Foto]` placeholders matching the layout's photo requirement

## Language

All documentation is in Brazilian Portuguese (pt-BR). Maintain this language when editing docs or writing copy.
