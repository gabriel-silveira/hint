# GST-6: Scaffolding do website HINT — Arquitetura

## Estrutura de Pastas

```
hint/                          (repo raiz)
├── assets/                    (existente)
├── docs/                      (existente)
├── CLAUDE.md                  (existente)
└── frontend/                  <- NOVO
    ├── public/
    │   ├── hint-logo-icon.png
    │   └── favicon.ico
    ├── src/
    │   ├── app/
    │   │   ├── globals.css
    │   │   ├── layout.tsx
    │   │   ├── about/page.tsx
    │   │   ├── course/page.tsx
    │   │   ├── service/page.tsx
    │   │   └── contact/page.tsx
    │   ├── components/
    │   │   ├── header.tsx
    │   │   ├── mobile-nav.tsx
    │   │   ├── footer.tsx
    │   │   └── ui/            <- shadcn/ui components
    │   ├── contexts/
    │   │   └── header-theme-context.tsx
    │   └── lib/
    │       └── utils.ts       <- shadcn cn() utility
    ├── components.json
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── next.config.ts
    └── package.json
```

## Componentes e Relacionamentos

- **layout.tsx** -> HeaderThemeProvider -> Header + children (pages) + Footer
- **Header** -> Logo (Link /about) + Nav Desktop (links) + Mobile Nav (hamburger + Sheet)
- **Paginas** -> Cada pagina define o tema do header via `useHeaderTheme().setTheme()`
  - `/about` -> tema light (texto branco)
  - `/course`, `/service`, `/contact` -> tema dark (texto escuro)

## Decisoes de Arquitetura

### 1. Header Theme — React Context
- `HeaderThemeContext` com `theme: 'light' | 'dark'` e `setTheme()`
- `HeaderThemeProvider` no root layout
- Cada pagina chama `setTheme()` via `useEffect` no mount
- Header consome o contexto e aplica classes condicionais

### 2. Redirect `/` -> `/about`
Via `next.config.ts` (permanent redirect 308):
```ts
redirects: async () => [
  { source: '/', destination: '/about', permanent: true }
]
```

### 3. Tailwind CSS 3.4 + shadcn/ui v0.x
- CSS variables em formato HSL
- `tailwind.config.ts` estende cores via `hsl(var(--token))`

### 4. Design System -> CSS Variables

| Token HINT | CSS Variable | HSL Value |
|---|---|---|
| Roxo Profundo `#5503af` | `--primary` | `270 97% 35%` |
| Verde Progresso `#00C853` | `--cta` | `145 100% 39%` |
| Fundo claro `#F7F7FA` | `--background` | `240 18% 97%` |
| Texto principal `#1A1A1A` | `--foreground` | `0 0% 10%` |
| Cinza auxiliar `#8A8A95` | `--muted-foreground` | `240 4% 56%` |

Tokens customizados: `hint-purple`, `hint-green`, `hint-gray`

### 5. Tipografia via `next/font/google`
- `font-heading` -> Source Sans 3 Bold 700
- `font-body` -> Roboto (400, 500)

### 6. Mobile Nav — shadcn Sheet
Menu hamburger usa componente Sheet do shadcn/ui (Radix Dialog, acessivel).

### 7. Favicon
Gerar `favicon.ico` a partir de `hint-logo-icon.png`.

## Dependencias

| Pacote | Uso |
|---|---|
| `next@15` | Framework |
| `react@19`, `react-dom@19` | UI |
| `tailwindcss@3.4` | Estilizacao |
| `shadcn-ui` (CLI v0.x) | Componentes UI |
| `@phosphor-icons/react@2.1` | Icones |
| `@tanstack/react-query@5` | Cache (setup only) |
| `zustand@5` | Estado (setup only) |
| `axios` | HTTP (setup only) |
| `tailwindcss-animate` | Animacoes shadcn |
| `class-variance-authority` | Variants shadcn |
| `clsx`, `tailwind-merge` | Utility cn() |

## Trade-offs

| Decisao | Alternativa | Motivo |
|---|---|---|
| Tailwind v3.4 + shadcn v0.x | Tailwind v4 + shadcn v2.x | User especificou v3.4 |
| Context API para header theme | CSS-only via data attributes | Context e mais explicito e flexivel |
| Redirect via next.config | Redirect via page.tsx | Config e mais limpo |
| Sheet do shadcn para mobile nav | Drawer customizado | Acessivel, consistente com design system |

## Riscos
- **shadcn v0.x deprecated**: Monitorar. Migrar para Tailwind v4 + shadcn v2.x se necessario.
- **Header theme via Context requer "use client"**: Impacto minimo pois paginas sao vazias.
