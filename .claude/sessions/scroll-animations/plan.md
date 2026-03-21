# Scroll-triggered animations em todas as seções

## Status: Pendente

## Objetivo

Implementar animações de fade-in-up acionadas por scroll (Intersection Observer) em todas as seções da landing page O Curso, substituindo as animações estáticas atuais da Bio e adicionando animações consistentes nas demais seções.

---

## Abordagem técnica

Criar um **hook reutilizável `useScrollReveal`** + um **componente `<ScrollReveal>`** wrapper que encapsula a lógica do Intersection Observer, evitando duplicação em cada seção.

---

## Fase 1: Criar hook e componente reutilizável

### 1.1 — `frontend/src/hooks/use-scroll-reveal.ts`
- Hook customizado que retorna uma `ref`
- Usa `IntersectionObserver` com `threshold: 0.1` e `triggerOnce: true`
- Quando o elemento entra na viewport, adiciona classe `is-visible`
- Cleanup do observer no unmount

### 1.2 — `frontend/src/components/scroll-reveal.tsx` (Client Component)
- Componente wrapper: `<ScrollReveal delay={0.2}>{children}</ScrollReveal>`
- Usa o hook internamente
- Aplica `opacity: 0` + `translateY(24px)` por padrão, transiciona para visível
- Aceita prop `delay` (em segundos) para escalonamento
- Aceita prop opcional `className` para merge de classes

### Configuração da animação
- **Duração**: 0.65s
- **Easing**: `cubic-bezier(0.22, 1, 0.36, 1)` (spring suave)
- **Transform**: `translateY(24px)` → `translateY(0)`
- **Opacity**: `0` → `1`
- **Trigger**: quando 10% do elemento está visível
- **Once**: sim, anima apenas uma vez

---

## Fase 2: Migrar Bio (remover sistema antigo)

### Arquivo: `frontend/src/app/course/components/bio.tsx`
- Remover bloco `<style>` com `@keyframes fadeInUp` e classes `.bio-animate`, `.bio-delay-*`
- Remover classes `bio-animate bio-delay-*` dos elementos
- Envolver cada grupo de elementos com `<ScrollReveal delay={N}>`
- Converter para Client Component se necessário (por causa do hook/ref)

**Elementos animados e delays:**
| Elemento | Delay |
|---|---|
| Eyebrow | 0.1s |
| H2 "Sua professora" | 0.2s |
| Subtitle | 0.3s |
| Quote block | 0.4s |
| Parágrafos descritivos | 0.5s |
| Mini credential cards | 0.6s |

---

## Fase 3: Implementar nas demais seções

### 3.1 — Hero (`hero.tsx`)
- Converter para Client Component
- **Elementos e delays:**

| Elemento | Delay |
|---|---|
| Eyebrow label | 0.1s |
| H1 headline | 0.2s |
| Decorative rule | 0.3s |
| H2 subheadline | 0.3s |
| Parágrafo | 0.4s |
| CTA + trust badges | 0.5s |
| Vídeo YouTube | 0.6s |

### 3.2 — Credentials (`credentials.tsx`)
- Converter para Client Component
- **Elementos e delays:**

| Elemento | Delay |
|---|---|
| Eyebrow | 0.1s |
| H2 heading | 0.2s |
| Decorative divider | 0.3s |
| Card 1 (Formação Acadêmica) | 0.3s |
| Card 2 (Experiência Internacional) | 0.4s |
| Card 3 (Experiência Profissional) | 0.5s |

### 3.3 — Reframing (`reframing.tsx`)
- Converter para Client Component
- **Elementos e delays:**

| Elemento | Delay |
|---|---|
| Eyebrow | 0.1s |
| H2 heading | 0.2s |
| Pain-point cards (3x) | 0.3s, 0.4s, 0.5s |
| Texto transição "Respire" | 0.4s |
| Frase-chave (amber) | 0.5s |
| NeedLines (3x) | 0.5s, 0.55s, 0.6s |

### 3.4 — Method (`method.tsx`)
- Converter para Client Component
- **Elementos e delays:**

| Elemento | Delay |
|---|---|
| Eyebrow | 0.1s |
| H2 heading | 0.2s |
| Intro paragraph | 0.3s |
| Card 1 (Videoaulas) | 0.3s |
| Card 2 (Exercícios) | 0.4s |
| Card 3 (Grupo VIP) | 0.5s |
| CTA secundário | 0.6s |

### 3.5 — Proof (`proof.tsx`)
- Converter para Client Component
- **Elementos e delays:**

| Elemento | Delay |
|---|---|
| Eyebrow | 0.1s |
| Stats (30+, 11, 13) | 0.2s, 0.25s, 0.3s |
| Parágrafos | 0.3s |
| Amber card | 0.4s |
| CTA | 0.5s |

### 3.6 — Testimonials (`testimonials.tsx`)
- Já é Client Component
- **Elementos e delays:**

| Elemento | Delay |
|---|---|
| Eyebrow | 0.1s |
| H2 heading | 0.2s |
| Decorative divider | 0.3s |
| Cards (5x) | 0.3s → 0.5s |
| Closing line | 0.5s |
| CTA | 0.6s |

### 3.7 — Offer (`offer.tsx`)
- Converter para Client Component
- **Elementos e delays:**

| Elemento | Delay |
|---|---|
| Eyebrow | 0.1s |
| H2 "Agora a decisão..." | 0.2s |
| Parágrafos de contraste | 0.3s |
| H2 "O que você recebe" | 0.2s |
| Benefits list | 0.3s |
| H2 "Quanto custaria" | 0.2s |
| Price comparison lines | 0.3s |
| H2 "Seu investimento" | 0.2s |
| Price monument (R$ 39,90) | 0.3s |
| Guarantee block | 0.4s |
| CTA final | 0.5s |

---

## Impacto nos componentes

| Seção | Tipo atual | Tipo após mudança |
|---|---|---|
| Hero | Server | Client |
| Bio | Server | Client |
| Credentials | Server | Client |
| Reframing | Server | Client |
| Method | Server | Client |
| Proof | Server | Client |
| Testimonials | Client | Client (sem mudança) |
| Offer | Server | Client |

---

## O que NÃO muda
- Conteúdo textual das seções
- Layout e posicionamento dos elementos
- Paleta de cores e tipografia
- Animações existentes de `animate-pulse` nos CTAs (glow effect)
- Transições de hover nos cards

---

## Ordem de execução
1. Criar hook + componente (Fase 1)
2. Migrar Bio como prova de conceito (Fase 2)
3. Implementar Hero → Credentials → Reframing → Method → Proof → Testimonials → Offer (Fase 3)
4. Testar scroll completo da página — verificar que todas as animações disparam corretamente
5. Commit e push
