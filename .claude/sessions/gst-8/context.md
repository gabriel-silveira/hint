# GST-8: Criar Landing Page de Venda do Curso (rota /course)

## Contexto

A HINT precisa de uma landing page de venda para o curso de inglês da Larissa Rovaron. A página deve converter visitantes em compradores, transmitindo confiança, autoridade e acolhimento. O preço acessível (R$ 39,90) exige que o visual reforce percepção de valor.

## Objetivo

Criar a landing page completa na rota `/course` com 7 seções, design de alta qualidade, responsiva e otimizada para conversão.

## Seções

1. **Hero** — Headline impactante, subheadline, CTA verde, fundo que contraste com header light
2. **Bio (Quem é Larissa Rovaron)** — Foto frontal + texto narrativo + 3 sub-seções (Formação, Internacional, Profissional)
3. **Reenquadramento** — Fundo alternado (#F7F7FA), 3 bullet points de dor com ícones Phosphor, frase de transição destacada
4. **O Método (Cards)** — 3 cards (Videoaulas, Exercícios, Grupo VIP), Grupo VIP com destaque visual diferenciado
5. **Prova & Autoridade** — Foto de autoridade, números grandes (30+ anos, 11 países, 13 anos teacher), fundo diferenciado
6. **Depoimentos** — 5 depoimentos com avatar de iniciais, grid desktop, carrossel funcional no mobile
7. **Oferta + Garantia** — Fundo Roxo Profundo, lista benefícios, comparação preços, R$ 39,90 grande, sub-bloco garantia com selo/escudo, CTA final verde

## Decisões Técnicas

- **Header theme**: `setTheme("light")` — Hero terá fundo escuro/roxo para header com texto branco ficar legível
- **Copy**: Todo texto vem de `docs/landing-page-copy.md` sem alterações
- **CTAs**: Todos com `href="#"` literal (placeholder)
- **og:image**: Usar `larissa-frontal.png`
- **Depoimentos mobile**: Carrossel funcional (não stack estático)
- **Avatares**: Iniciais em círculos coloridos (sem imagens externas)
- **Processo**: Usar skill `frontend-design` quebrando por seções

## Stack & Configuração Existente

- **Framework**: Next.js 15 + Tailwind CSS
- **Ícones**: @phosphor-icons/react
- **Fontes**: `font-heading` (Source Sans 3 Bold 700), `font-body` (Roboto)
- **Tokens Tailwind**: `primary` (#5503af), `cta` (#00C853), `background` (#F7F7FA), `foreground` (#1A1A1A), `muted-foreground` (#8A8A95), `hint-purple`, `hint-green`
- **Assets**: `larissa-frontal.png` e `larissa-autoridade.png` já em `public/`

## Estrutura de Componentes

```
src/app/course/
  page.tsx                    # composição das seções + metadata export
  components/
    hero.tsx
    bio.tsx
    reframing.tsx
    method.tsx
    proof.tsx
    testimonials.tsx
    offer.tsx
```

## Requisitos Não-Funcionais

- **Performance**: `next/image` com lazy loading abaixo da dobra
- **Acessibilidade**: HTML semântico, heading hierarchy, alt text, contraste WCAG AA
- **SEO**: Meta tags (title, description, og:image) exportadas da page
- **Responsividade**: Mobile-first com soluções criativas por seção
- **Design**: Tipografia forte e grande, espaçamento generoso, alternância de fundos, sem poluição visual

## Documentos de Referência

- `docs/landing-page-copy.md` — Copy completo
- `docs/hint-orientacoes-layout.md` — Orientações de layout
- `docs/hint-design-system.md` — Design system
