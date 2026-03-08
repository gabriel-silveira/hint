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

## FASE 5 — Oferta + Garantia + Revisão Final [Em Progresso ⏰]

Última seção + polimento geral da página.

### Offer + Guarantee Section [Não Iniciada ⏳]

**Arquivo**: `src/app/course/components/offer.tsx` (Server Component)

**Elementos**:
- Fundo `bg-hint-purple text-white`
- H2: "Agora a decisão está nas suas mãos."
- Texto introdutório sobre escolha
- H2: "O que você recebe ao entrar hoje:"
- 5 benefícios com `CheckCircle` (Phosphor SSR) — cada um com ✔️ + texto
- Bloco comparação de preços:
  - Curso presencial: R$ 600–R$ 1200/mês (com risca ou estilo "de/por")
  - Professor particular: R$ 1200–R$ 2400/mês
  - Texto sobre falta de acompanhamento
- H2: "Seu investimento hoje"
- Preço: "R$ 39,90" em `font-heading text-6xl md:text-7xl lg:text-8xl`
- Subtexto: "Pagamento à vista ou parcelado. Sem mensalidade..."
- **Sub-bloco Garantia**:
  - Borda/fundo diferenciado (ex: `bg-white/10` ou `border border-white/30 rounded-xl`)
  - Ícone `ShieldCheck` (Phosphor SSR)
  - H3: "Garantia Incondicional de 7 Dias"
  - Texto sobre testar e pedir reembolso
  - "O risco é zero."
- CTA final: "Garanta sua vaga no Grupo VIP" — botão grande `bg-cta text-white href="#"`

**Copy**: Seção OFERTA de `docs/landing-page-copy.md` (linhas 210-267)

### Revisão de Responsividade [Não Iniciada ⏳]

- Testar todas as 7 seções em viewports: 375px (mobile), 768px (tablet), 1280px (desktop)
- Verificar que alternância de fundos está correta ao longo de toda a página
- Verificar heading hierarchy completa (H1 → H2s → H3s)
- Verificar que todas as imagens têm `alt` text descritivo

### Revisão de Performance [Não Iniciada ⏳]

- Verificar que `next/image` está sendo usado em todas as imagens
- Hero image com `priority`, restante com lazy loading (default)
- `npm run build` sem warnings

### Verificação Final [Não Iniciada ⏳]

- Página completa renderizando corretamente
- Todos os CTAs com `href="#"`
- Metadata SEO exportada (verificar com view-source ou Next.js DevTools)
- Footer padrão do site aparecendo após a oferta
- Sem erros no console

### Comentários:
- A seção de oferta é a mais longa em termos de copy — atenção à hierarquia visual
- O sub-bloco de garantia deve se destacar visualmente mas sem competir com o preço
- Revisão final deve ser feita com a página completa, scrollando do topo ao final
