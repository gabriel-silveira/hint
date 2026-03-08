# GST-8: Arquitetura da Landing Page `/course`

## Visão Geral

### Antes
- `course/page.tsx` é um Client Component vazio que apenas seta o theme do header para `"dark"`

### Depois
- Page Server Component com metadata SEO exportada
- 7 componentes de seção (maioria server components)
- Carrossel funcional nos depoimentos (client component)
- Client component dedicado para setar o theme do header

## Decisão Arquitetural: Server vs Client Components

**Problema**: A page atual é `"use client"` para usar `useHeaderTheme()`, mas `export const metadata` requer Server Component.

**Solução**: Criar um pequeno Client Component `ThemeSetter` que apenas seta o theme. A page permanece Server Component e exporta metadata normalmente.

```
page.tsx (Server Component)
├── ThemeSetter (Client) — apenas seta header theme para "light"
├── Hero (Server)
├── Bio (Server)
├── Reframing (Server)
├── Method (Server)
├── Proof (Server)
├── Testimonials (Client) — carrossel interativo
└── Offer (Server)
```

## Estrutura de Arquivos

```
src/app/course/
  page.tsx                      # Server Component, metadata export, composição das seções
  components/
    theme-setter.tsx            # Client Component — seta useHeaderTheme("light")
    hero.tsx                    # Server Component
    bio.tsx                     # Server Component
    reframing.tsx               # Server Component
    method.tsx                  # Server Component
    proof.tsx                   # Server Component
    testimonials.tsx            # Client Component (carrossel)
    offer.tsx                   # Server Component
```

## Componentes em Detalhe

### page.tsx (Server Component)
- Exporta `metadata` com title, description, og:image
- Importa e compõe todas as seções na ordem correta
- Wrapper `<main>` com `min-h-screen`

### theme-setter.tsx (Client Component)
- Componente "invisível" (`"use client"`)
- Usa `useHeaderTheme()` + `useEffect` para setar `"light"`
- Renderiza `null`
- Padrão consistente com como `about/page.tsx` e `course/page.tsx` já funcionam

### hero.tsx
- Fundo escuro/roxo (bg-hint-purple ou gradient) para contraste com header light
- `pt-20` ou `pt-24` para compensar header fixo
- Headline em `font-heading` com tamanho grande (text-4xl md:text-6xl)
- CTA com `bg-cta text-white` e `href="#"`
- Responsivo: texto centralizado mobile, pode ter layout diferente desktop

### bio.tsx
- Layout: foto esquerda + texto direita (desktop), empilhado (mobile)
- Foto via `next/image` com `larissa-frontal.png`, sizes e priority configurados
- 3 sub-seções com listas de formação/experiência
- Fundo branco (#FFFFFF)

### reframing.tsx
- Fundo alternado `bg-secondary` (#F7F7FA)
- 3 ícones Phosphor para os bullet points de dor
- Frase destaque com tipografia maior e bold
- Texto de transição empático

### method.tsx
- 3 cards em grid (1 coluna mobile, 3 colunas desktop)
- Card "Grupo VIP" com destaque visual (borda primary, scale ligeiramente maior, ou badge)
- Bullet points dentro de cada card com ícones Phosphor
- Fundo branco

### proof.tsx
- Foto `larissa-autoridade.png` via `next/image`
- 3 números em destaque grande (font-heading, text-5xl+)
- Fundo diferenciado para peso visual (hint-purple com texto branco, ou gradiente)

### testimonials.tsx (Client Component)
- `"use client"` para interatividade do carrossel
- **Dependência nova**: `embla-carousel-react` (~4kb gzipped, padrão do ecossistema React/shadcn)
- Desktop: grid 3+2 ou 2+2+1 estático (sem carrossel)
- Mobile: carrossel horizontal com dots de navegação
- Avatares: divs com iniciais coloridas, sem dependência de imagens
- 5 estrelas via ícone Phosphor `Star`

### offer.tsx
- Fundo `bg-hint-purple` com `text-white`
- Lista de benefícios com `CheckCircle` (Phosphor)
- Bloco de comparação de preços (presencial vs particular vs método)
- Preço R$ 39,90 em tipografia extra grande (text-6xl+)
- Sub-bloco garantia: ícone `ShieldCheck` (Phosphor), borda/fundo diferenciado
- CTA final verde grande

## Dependências

### Existentes (sem mudança)
- `@phosphor-icons/react` — ícones em todas as seções
- `next/image` — otimização de imagens
- Tailwind CSS tokens — cores, fontes, espaçamento

### Nova dependência
- **`embla-carousel-react`** (~4kb gzipped) — carrossel dos depoimentos no mobile
  - Leve, sem dependências externas
  - Padrão do ecossistema shadcn/Radix
  - Suporte nativo a touch/swipe
  - Alternativa considerada: CSS scroll-snap puro (descartada por não suportar dots/autoplay nativamente)

## Padrões e Convenções

1. **Importação de ícones**: usar `@phosphor-icons/react/dist/ssr` para Server Components, `@phosphor-icons/react` para Client Components (padrão já usado no footer)
2. **Tailwind classes**: usar tokens do design system (`primary`, `cta`, `hint-purple`, `hint-green`, etc.)
3. **Fontes**: `font-heading` para títulos, `font-body` implícito (é o default)
4. **Imagens**: `next/image` com `alt` descritivo, `sizes` prop para responsividade
5. **Semântica HTML**: `<section>` para cada bloco, heading hierarchy (H1 no Hero, H2 nas seções, H3 nos sub-blocos)

## SEO Metadata

```tsx
export const metadata: Metadata = {
  title: "O Curso | HINT",
  description: "Destrave seu inglês de uma vez por todas com o Método Larissa Rovaron. Videoaulas, exercícios e mentoria no WhatsApp por apenas R$ 39,90.",
  openGraph: {
    title: "Destrave seu inglês de uma vez por todas | HINT",
    description: "Método estruturado com suporte real e acompanhamento humano.",
    images: [{ url: "/larissa-frontal.png" }],
  },
};
```

## Restrições e Suposições

- **Copy inalterado**: Todo texto vem de `docs/landing-page-copy.md` sem modificações
- **CTAs placeholder**: Todos os CTAs usam `href="#"` literal
- **Sem backend**: Página puramente estática, sem formulários ou integrações
- **Heading hierarchy**: H1 apenas no Hero, H2 para títulos de seção, H3 para sub-seções
- **Header fixo**: Todas as seções consideram `pt-20` no topo da page para compensar

## Trade-offs

| Decisão | Prós | Contras |
|---|---|---|
| ThemeSetter separado | Page como Server Component, metadata SEO funciona | Componente extra "invisível" |
| Embla Carousel | Leve, touch nativo, padrão do ecossistema | Dependência nova no projeto |
| Grid estático desktop + carrossel mobile | Melhor UX em cada breakpoint | Lógica condicional de renderização |
| Server Components nas seções | Performance, streaming, menor bundle | Ícones precisam de import SSR específico |

## Consequências Negativas

- Adicionar `embla-carousel-react` como dependência (mitigado: é muito leve ~4kb)
- O padrão `ThemeSetter` como componente invisível é um pouco incomum, mas é a solução correta para manter Server Components com metadata

## Arquivos Principais a Criar/Editar

### Criar
1. `src/app/course/components/theme-setter.tsx`
2. `src/app/course/components/hero.tsx`
3. `src/app/course/components/bio.tsx`
4. `src/app/course/components/reframing.tsx`
5. `src/app/course/components/method.tsx`
6. `src/app/course/components/proof.tsx`
7. `src/app/course/components/testimonials.tsx`
8. `src/app/course/components/offer.tsx`

### Editar
1. `src/app/course/page.tsx` — reescrever como Server Component com metadata + composição

### Instalar
1. `embla-carousel-react` — carrossel para depoimentos
