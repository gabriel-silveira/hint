# GST-6: Scaffolding do website HINT

Se voce esta trabalhando nesta funcionalidade, certifique-se de atualizar este arquivo plan.md conforme progride.

## FASE 1 — Projeto Next.js + Design System [Completada]

Setup do projeto, dependencias, configuracao do Tailwind com tokens HINT, shadcn/ui e fontes.

### 1.1 Criar projeto Next.js [Completada]

- Executado `npx create-next-app@15` dentro de `frontend/`
- Flags: `--typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
- `npm run dev` funciona (Ready in ~1.9s)

### 1.2 Instalar dependencias adicionais [Completada]

- `@phosphor-icons/react`, `@tanstack/react-query`, `zustand`, `axios`
- `tailwindcss-animate`, `class-variance-authority`, `clsx`, `tailwind-merge`

### 1.3 Inicializar shadcn/ui [Completada]

- `components.json` criado manualmente (CLI interativo nao suportado)
- `src/lib/utils.ts` com funcao `cn()` criado

### 1.4 Configurar Design System no Tailwind [Completada]

- `globals.css` com CSS variables HINT (HSL)
- `tailwind.config.ts` com tokens semanticos + customizados (`hint-purple`, `hint-green`, `hint-gray`)
- Token `cta` adicionado para Verde Progresso

### 1.5 Configurar fontes via next/font/google [Completada]

- Source Sans 3 (700) como `--font-heading`
- Roboto (400, 500) como `--font-body`
- Aplicadas no `<html>` via CSS variables
- Mapeadas no tailwind: `font-heading`, `font-body`, `font-sans`

### 1.6 Assets e Favicon [Completada]

- `hint-logo-icon.png` copiado para `public/`
- `favicon.ico` 32x32 gerado via sharp
- Metadata configurada no `layout.tsx`

### Validacao da Fase 1: PASSED
- `npm run dev` inicia sem erros
- Fontes configuradas corretamente
- CSS variables do design system aplicadas
- Favicon gerado e configurado

### Comentarios:
- `create-next-app@15` gera Tailwind v4 por padrao. Foi necessario downgrade para Tailwind v3.4 com PostCSS + autoprefixer para manter compatibilidade com shadcn/ui v0.x
- shadcn/ui CLI interativo nao funcionou no ambiente; `components.json` e `utils.ts` foram criados manualmente
- Ainda existem assets padrao do create-next-app em `public/` (file.svg, globe.svg, etc) — serao removidos na Fase 3 (limpeza)

---

## FASE 2 — Rotas, Header e Footer [Completada]

Criar as paginas, header com tema variavel, footer e mobile nav.

### 2.1 Configurar redirect e rotas [Completada]

- `next.config.ts` com redirect `/` -> `/about` (permanent: true)
- `src/app/page.tsx` tambem tem `redirect("/about")` como fallback
- 4 paginas criadas: about, course, service, contact

### 2.2 Header Theme Context [Completada]

- `src/contexts/header-theme-context.tsx` com `HeaderThemeProvider`, `useHeaderTheme()` hook
- `setTheme` memoizado com `useCallback`
- Provider integrado no `layout.tsx`

### 2.3 Instalar componente Sheet do shadcn [Completada]

- Sheet criado manualmente em `src/components/ui/sheet.tsx`
- Usa `@radix-ui/react-dialog` + Phosphor `X` icon (em vez de lucide)
- Dependencia `@radix-ui/react-dialog` instalada

### 2.4 Componente Header [Completada]

- Header fixo com fundo transparente
- Logo clicavel -> `/about`
- Nav com labels em portugues (com caracteres especiais corretos)
- Tema light (text-white) vs dark (text-foreground) via context
- Item ativo com `text-primary font-bold`
- Nav oculta no mobile (hidden < md)

### 2.5 Componente Mobile Nav [Completada]

- Hamburger com Phosphor `List` icon
- Sheet lateral direita com links de navegacao
- Fecha ao clicar em link

### 2.6 Componente Footer [Completada]

- Server Component com imports de `@phosphor-icons/react/dist/ssr`
- 3 colunas: Contato (email, tel, WhatsApp), Endereco, Redes Sociais (Instagram, Facebook)
- Copyright dinamico com ano atual
- Dados placeholder

### 2.7 Integrar Header e Footer no Layout [Completada]

- `layout.tsx`: HeaderThemeProvider > Header > children > Footer

### 2.8 Configurar tema do header por pagina [Completada]

- Cada pagina e "use client" e chama `setTheme()` via `useEffect`
- `/about` -> light, demais -> dark

### Validacao da Fase 2: PASSED
- Build sem erros de compilacao
- Redirect, rotas, header, footer, mobile nav implementados

### Comentarios:
- Sheet criado manualmente pois CLI shadcn-ui nao funciona interativamente neste ambiente
- Footer usa imports SSR-safe do Phosphor Icons (`/dist/ssr`) por ser Server Component
- `page.tsx` raiz mantido com `redirect()` como fallback alem do redirect no next.config

---

## FASE 3 — Polish e Validacao Final [Completada]

Ajustes finais, revisao de responsividade e validacao completa.

### 3.1 Revisao de responsividade [Completada]

- Header e footer usam classes responsivas (hidden/flex em md breakpoint)
- Container com padding responsivo
- Footer grid: 1 coluna mobile, 3 colunas desktop

### 3.2 Revisao de acessibilidade basica [Completada]

- `<nav aria-label="Menu principal">` no header
- `<button aria-label="Abrir menu de navegacao">` no hamburger
- `SheetTitle` como label acessivel no mobile nav
- `<span className="sr-only">Fechar</span>` no botao de fechar do Sheet
- `aria-label` em links de redes sociais no footer

### 3.3 Limpeza [Completada]

- Removidos: file.svg, globe.svg, next.svg, vercel.svg, window.svg de `public/`
- Removido: `src/app/favicon.ico` duplicado
- `npm run build` passa sem erros (6 rotas SSG, 149kB shared JS)
- `npm run dev` inicia em ~1.9s sem erros

### Validacao da Fase 3: PASSED
- Build sem erros
- Sem warnings no console
- Acessibilidade basica verificada

### Comentarios:
- Build gera 6 rotas estaticas (SSG) automaticamente
- First Load JS compartilhado: 149 kB
