# GST-8: Criar Landing Page de Venda do Curso (rota /course)

Se você está trabalhando nesta funcionalidade, certifique-se de atualizar este arquivo plan.md conforme progride.

## FASE 1 — Infraestrutura [Completada ✅]

Setup do branch, dependência, refatoração da page e componente base.

### Criar feature branch [Completada ✅]

- Branch: `feature/gst-8-landing-page-course`

### Instalar embla-carousel-react [Completada ✅]

- `embla-carousel-react@8.6.0` instalado

### Refatorar page.tsx para Server Component [Completada ✅]

- Removido `"use client"` e hooks
- `export const metadata` com title, description, og:image
- Composição de ThemeSetter + 7 seções

### Criar ThemeSetter [Completada ✅]

- `src/app/course/components/theme-setter.tsx` — seta header theme para `"light"`

### Criar diretório de componentes [Completada ✅]

- Stubs criados para: hero, bio, reframing, method, proof, testimonials, offer

### Verificação [Completada ✅]

- `npm run build` passa sem erros
- Commit: `d7feab9`

### Comentários:
- Ícones Phosphor SSR: importar de `@phosphor-icons/react/dist/ssr` nos Server Components
- Testimonials já tem `"use client"` preparado para o carrossel Embla

---

## FASE 2 — Hero + Bio [Completada ✅]

### Hero Section [Completada ✅]

- Fundo roxo com gradients radiais sutis (indigo shadow top-left + violet bloom center-bottom)
- Dot-grid texture a 3% opacity para micro-textura
- Eyebrow pill badge "Método Larissa Rovaron"
- H1 com underline verde em "de uma vez" (link visual ao CTA)
- Thin rule separando H1 de H2
- Opacidades decrescentes: H2 (85%), parágrafo (60%)
- CTA verde com glow shadow e hover/active states
- Micro-copy de confiança abaixo do CTA

### Bio Section [Completada ✅]

- Layout editorial: foto + barra vertical roxa (desktop), empilhado (mobile)
- Badge flutuante "13 anos / English Teacher" sobre a foto
- Gradient wash sutil na base da foto
- 3 CredentialCards com ícones Phosphor duotone (GraduationCap, GlobeHemisphereWest, Briefcase)
- Left accent rule roxa dentro de cada card
- Eyebrow label "Conheça a professora"
- Duas renderizações de Image (desktop/mobile) para layouts diferentes

### Verificação [Completada ✅]

- Build passa sem erros
- Commit: `7349596`

### Comentários:
- Skill `frontend-design` usada para ambos os componentes
- Padrão visual estabelecido: hint-purple como cor de autoridade, hint-green reservado para CTAs
- CredentialCard é um sub-componente reutilizável dentro de bio.tsx
- Ícones SSR importados de `@phosphor-icons/react/dist/ssr`

---

## FASE 3 — Reenquadramento + Método [Completada ✅]

### Reframing Section [Completada ✅]

- Coluna prose centralizada (max-w-2xl) para foco e intimidade
- 3 PainPoint cards com left-rail motif (consistente com Bio CredentialCards)
- Ícones SSR: MicrophoneSlash, ChatSlash, ShieldWarning (duotone)
- "Respire." em font-heading italic com espaçamento generoso
- Frase pivô "Foi excesso de método errado." em text-2xl/3xl hint-purple com rule abaixo
- NeedLine trio com borda esquerda progressiva (light → medium → bold)

### Method Section [Completada ✅]

- Grid 3 colunas (desktop), empilhado (mobile)
- Cards 1-2: padrão Bio (branco, border, shadow-sm, left accent rule, hover:shadow-md)
- Card 3 (Grupo VIP): fundo hint-purple com radial blooms (eco do Hero), badge "Diferencial" verde, bullets com CaretRight verde, elevação via ring-2 + shadow purple glow + md:-mt-3/-mb-3
- Emphasis callouts em ambos os estilos (purple tint para cards claros, white/10 para card escuro)
- Ícones SSR: PlayCircle, ClipboardText, WhatsappLogo, CaretRight

### Verificação [Completada ✅]

- Build passa sem erros
- Commit: `124013e`

### Comentários:
- Padrão de design visual consistente: left-rail motif aparece em Bio, Reframing e Method
- Card 3 usa mesma linguagem visual do Hero (gradient + dot-grid) criando eco subliminal
- "E isso muda tudo." em hint-green é a única instância de texto verde na seção — link visual ao CTA

---

## FASE 4 — Prova & Autoridade + Depoimentos [Completada ✅]

### Proof Section [Completada ✅]

- Fundo hint-purple com crosshatch texture (distinto do Hero dot-grid)
- Layout assimétrico 2 colunas (foto esquerda, copy+números direita)
- 3 stat numbers monumento (text-5xl–7xl) com green rule + ícones duotone (Clock, GlobeHemisphereWest, Chalkboard)
- Foto com ghost-frame (ring-1 ring-white/10) e green accent corner block com glow
- Mobile: números primeiro (order-1), foto depois (order-2) — persuasão para skimmers
- Bloco de ênfase "É resultado." em frosted panel (bg-white/8) com hint-green left-rule
- Semântica: `<dl>/<dt>/<dd>` para stat numbers

### Testimonials Section [Completada ✅]

- bg-secondary (#F7F7FA) para contraste com Proof escuro
- Desktop: grid estático 3+2 (grid-cols-3, row 2 com 2 cards + col vazia)
- Mobile: Embla carousel com loop, align start, slides 85% width, dot navigation (pill expandindo w-2→w-6)
- Cards consistentes: rounded-xl, border, shadow-sm, hover:shadow-md, left-accent rule roxa
- Avatares: iniciais coloridas (purple, blue, pink, emerald, amber)
- 5 Star fill amber-400 com aria-label="5 estrelas"
- Closing line: NeedLine bold callback do Reframing
- Cleanup: emblaApi.off() no useEffect return

### Verificação [Completada ✅]

- Build passa sem erros (local e Docker)
- Commit: `494489f`

### Comentários:
- **Docker rebuild necessário** ao adicionar novas dependências npm — usar `docker compose down -v && docker compose up --build -d` para limpar o volume anônimo de node_modules
- Abordagem desktop/mobile separada (hidden/md:hidden + md:grid) em vez de breakpoint do Embla — mais previsível
- Testimonials é o único Client Component entre as seções (11.1 kB JS)

---

## FASE 5 — Oferta + Garantia + Revisão Final [Completada ✅]

### Offer + Guarantee Section [Completada ✅]

- Fundo hint-purple com diagonal-stripe texture (3a textura distinta: Hero=dot-grid, Proof=crosshatch, Offer=diagonal)
- 6 blocos narrativos: decisão → benefícios (frosted panel bg-white/8) → comparação preços (line-through) → preço monumento R$39,90 (text-6xl–8xl com text-shadow) → garantia (frosted panel bg-white/12 ring-2, ShieldCheck com glow) → CTA final verde (escalado do Hero)
- Ícones SSR: CheckCircle (benefícios), ShieldCheck (garantia), Coins (comparação)
- Green accent rule abaixo do preço com glow shadow
- CTA final maior que o Hero (md:px-12 md:py-6 md:text-xl, glow 0.65)

### Revisão [Completada ✅]

- Docker dev server compilando sem erros
- 7 seções + footer renderizando corretamente
- Alternância de fundos: purple → white → #F7F7FA → white → purple → #F7F7FA → purple
- Commit: `2852024`

### Comentários:
- Três texturas distintas nas seções roxas evitam monotonia visual
- Garantia com ring-2 (vs ring-1 nos benefícios) cria hierarquia entre painéis frosted
- "O risco é zero." espelha "É resultado." do Proof em escala tipográfica
