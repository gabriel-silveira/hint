# GST-8: Criar Landing Page de Venda do Curso (rota /course)

Se você está trabalhando nesta funcionalidade, certifique-se de atualizar este arquivo plan.md conforme progride.

## FASE 1 — Infraestrutura [Não Iniciada ⏳]

Setup do branch, dependência, refatoração da page e componente base.

### Criar feature branch [Não Iniciada ⏳]

- `git checkout -b feature/gst-8-landing-page-course`

### Instalar embla-carousel-react [Não Iniciada ⏳]

- `npm install embla-carousel-react` no diretório `frontend/`
- Versão mais recente (~8.x)

### Refatorar page.tsx para Server Component [Não Iniciada ⏳]

- Remover `"use client"` e hooks
- Exportar `metadata` com title, description, og:image
- Criar estrutura `<main>` que compõe todas as seções
- Importar `ThemeSetter` + todos os componentes de seção (podem ser stubs inicialmente)

### Criar ThemeSetter [Não Iniciada ⏳]

- `src/app/course/components/theme-setter.tsx`
- Client Component que usa `useHeaderTheme()` + `useEffect` para setar `"light"`
- Renderiza `null`

### Criar diretório de componentes [Não Iniciada ⏳]

- `mkdir src/app/course/components/`
- Criar stubs vazios para todos os 7 componentes de seção (retornando `<section>` vazio)

### Verificação [Não Iniciada ⏳]

- `npm run build` deve compilar sem erros
- Acessar `/course` deve mostrar página vazia com header em theme light

### Comentários:
- Esta fase é pré-requisito para todas as outras
- Executar sequencialmente: branch → install → componentes → verificação

---

## FASE 2 — Hero + Bio [Não Iniciada ⏳]

Implementação das 2 primeiras seções visíveis usando a skill `frontend-design`.

### Hero Section [Não Iniciada ⏳]

**Arquivo**: `src/app/course/components/hero.tsx` (Server Component)

**Elementos**:
- Fundo escuro/roxo com gradient para contraste com header light
- `pt-20 md:pt-24` para compensar header fixo
- H1: "Destrave seu inglês de uma vez por todas." — `font-heading text-4xl md:text-5xl lg:text-6xl`
- H2 (subheadline): texto sobre pronúncia e confiança
- Parágrafo de apoio sobre método estruturado
- CTA: "Garanta sua vaga no Grupo VIP" — `bg-cta text-white href="#"`
- Responsivo: centralizado em mobile, layout impactante em desktop

**Copy**: Seção HERO de `docs/landing-page-copy.md` (linhas 5-14)

**Ícones SSR**: importar de `@phosphor-icons/react/dist/ssr` se necessário

### Bio Section [Não Iniciada ⏳]

**Arquivo**: `src/app/course/components/bio.tsx` (Server Component)

**Elementos**:
- H2: "Conheça Larissa Rovaron — a professora que vai transformar o seu inglês de verdade"
- Foto `larissa-frontal.png` via `next/image` com `priority` (acima da dobra em desktop)
- Layout: foto esquerda + texto direita (desktop), empilhado (mobile)
- Texto narrativo sobre vivência com o idioma
- 3 sub-seções H3: Formação Acadêmica, Experiência Internacional, Experiência Profissional
- Listas com bullet points em cada sub-seção
- Fundo branco (#FFFFFF)

**Copy**: Seção QUEM É LARISSA ROVARON de `docs/landing-page-copy.md` (linhas 17-61)

### Verificação [Não Iniciada ⏳]

- Visual review no browser (desktop + mobile)
- Heading hierarchy correta (H1 → H2 → H3)
- Imagem carregando com `next/image`
- Responsividade: empilhado mobile, lado a lado desktop

### Comentários:
- Usar skill `frontend-design` para design de alta qualidade
- Hero e Bio podem ser implementados em paralelo (sem dependência entre si)
- Hero define o tom visual da página toda — merece atenção especial

---

## FASE 3 — Reenquadramento + Método [Não Iniciada ⏳]

Seções 3 e 4 usando a skill `frontend-design`.

### Reframing Section [Não Iniciada ⏳]

**Arquivo**: `src/app/course/components/reframing.tsx` (Server Component)

**Elementos**:
- Fundo alternado `bg-secondary` (#F7F7FA)
- H2: "O problema não é você. É o jeito que te ensinaram."
- 3 bullet points de dor com ícones Phosphor (ex: `SpeakerX`, `BookOpen`, `ShieldWarning` ou similares)
  - "Estudou por anos… mas ainda trava na hora de falar"
  - "Entende quando lê… mas não consegue formar frases com naturalidade"
  - "Sabe regras gramaticais… mas sente insegurança ao se comunicar"
- Texto "Respire." com espaço visual
- Frase destaque: "O problema nunca foi falta de capacidade. Foi excesso de método errado." — tipografia grande, bold
- Restante do texto empático
- Frases finais: "Precisa de clareza. / Precisa de direção. / Precisa de um método..."

**Copy**: Seção REENQUADRAMENTO de `docs/landing-page-copy.md` (linhas 64-93)

**Ícones SSR**: importar de `@phosphor-icons/react/dist/ssr`

### Method Section [Não Iniciada ⏳]

**Arquivo**: `src/app/course/components/method.tsx` (Server Component)

**Elementos**:
- Fundo branco
- H2: "Um sistema completo para destravar seu inglês com direção, prática e suporte real."
- Parágrafo introdutório sobre os 3 pilares
- 3 cards em grid: `grid-cols-1 md:grid-cols-3`
  - **Card 1 — Videoaulas Estratégicas**: H3, descrição, 4 bullet points com ícones
  - **Card 2 — Exercícios de Avaliação**: H3, descrição, 4 bullet points com ícones
  - **Card 3 — Grupo VIP de Mentoria**: H3, descrição, 5 bullet points com ícones, **destaque visual** (borda primary, ou bg diferenciado, ou badge "Diferencial")
- Textos de ênfase após cada card ("Você não apenas assiste...", etc.)

**Copy**: Seção O MÉTODO LARISSA ROVARON de `docs/landing-page-copy.md` (linhas 96-143)

### Verificação [Não Iniciada ⏳]

- Visual review (desktop + mobile)
- Alternância de fundos correta (bio branco → reframing cinza → method branco)
- Cards responsivos: empilhados mobile, grid 3 colunas desktop
- Grupo VIP visivelmente destacado dos outros cards

### Comentários:
- Reenquadramento e Método podem ser implementados em paralelo
- A alternância de fundos (branco/cinza) deve ser visualmente clara entre seções adjacentes

---

## FASE 4 — Prova & Autoridade + Depoimentos [Não Iniciada ⏳]

Seções 5 e 6 usando a skill `frontend-design`. Depoimentos é o componente mais complexo (carrossel).

### Proof Section [Não Iniciada ⏳]

**Arquivo**: `src/app/course/components/proof.tsx` (Server Component)

**Elementos**:
- Fundo diferenciado para peso visual (hint-purple com texto branco, ou gradiente escuro)
- Foto `larissa-autoridade.png` via `next/image` — pose de autoridade, braços cruzados
- Layout: foto + texto lado a lado (desktop), empilhado (mobile)
- Texto narrativo sobre vivência com o idioma
- 3 números em destaque grande (`font-heading text-5xl md:text-6xl`):
  - "30+" — anos convivendo com o inglês
  - "11" — países visitados
  - "13" — anos como English Teacher
- Texto "Não é teoria. É resultado."

**Copy**: Seção PROVA & AUTORIDADE de `docs/landing-page-copy.md` (linhas 146-159)

### Testimonials Section (Carrossel) [Não Iniciada ⏳]

**Arquivo**: `src/app/course/components/testimonials.tsx` (Client Component — `"use client"`)

**Elementos**:
- H2: "Veja o que nossos alunos dizem"
- 5 depoimentos, cada um com:
  - Avatar: div circular com iniciais coloridas (cores variadas, sem imagens)
  - Nome + Cidade
  - 5 estrelas (`Star` weight="fill" do Phosphor)
  - Texto do depoimento entre aspas
- **Desktop**: grid estático (layout 3+2 ou 2+2+1)
- **Mobile**: carrossel Embla com dots de navegação e swipe

**Implementação do carrossel Embla**:
```tsx
const [emblaRef, emblaApi] = useEmblaCarousel({
  loop: true,
  align: 'start',
  breakpoints: {
    '(min-width: 768px)': { active: false } // desativa carrossel no desktop
  }
})
```
- Dots: baseado em `emblaApi.scrollSnapList()` + `selectedScrollSnap()`
- Evento `select` para atualizar dot ativo
- CSS: `overflow-hidden` no viewport, `flex` no container, `min-w-0 flex-[0_0_85%]` nos slides mobile

**Copy**: Seção DEPOIMENTOS de `docs/landing-page-copy.md` (linhas 162-207)

**Dados dos depoimentos** (array estático no componente):
```tsx
const testimonials = [
  { name: "Mariana S.", city: "São Paulo", initials: "MS", color: "bg-purple-500", text: "..." },
  { name: "Rafael M.", city: "Campinas", initials: "RM", color: "bg-blue-500", text: "..." },
  { name: "Juliana P.", city: "Rio de Janeiro", initials: "JP", color: "bg-pink-500", text: "..." },
  { name: "André L.", city: "Belo Horizonte", initials: "AL", color: "bg-green-500", text: "..." },
  { name: "Camila R.", city: "Curitiba", initials: "CR", color: "bg-amber-500", text: "..." },
]
```

### Verificação [Não Iniciada ⏳]

- Proof: números grandes e legíveis, foto de autoridade carregando
- Testimonials desktop: grid estático funcionando
- Testimonials mobile: carrossel com swipe e dots funcionais
- Touch/swipe funciona em mobile
- Dots atualizam ao navegar

### Comentários:
- Proof pode ser implementado primeiro (mais simples)
- Testimonials é o componente mais complexo — implementar carrossel por último
- Testar carrossel em viewport mobile real (ou DevTools responsive)
- A propriedade `active: false` do Embla desativa o carrossel no desktop, mostrando o grid estático

---

## FASE 5 — Oferta + Garantia + Revisão Final [Não Iniciada ⏳]

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
