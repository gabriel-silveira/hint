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

## FASE 2 — Rotas, Header e Footer [Nao Iniciada]

Criar as paginas, header com tema variavel, footer e mobile nav.

### 2.1 Configurar redirect e rotas [Nao Iniciada]

- Editar `next.config.ts`: adicionar redirect `/` -> `/about` (permanent: true)
- Criar `src/app/about/page.tsx` (pagina vazia)
- Criar `src/app/course/page.tsx` (pagina vazia)
- Criar `src/app/service/page.tsx` (pagina vazia)
- Criar `src/app/contact/page.tsx` (pagina vazia)
- Remover conteudo padrao de `src/app/page.tsx` (ou remover arquivo se redirect via config basta)

Todas as paginas em paralelo.

### 2.2 Header Theme Context [Nao Iniciada]

Sequencial (apos 2.1):
- Criar `src/contexts/header-theme-context.tsx`
  - `HeaderThemeContext` com `theme: 'light' | 'dark'` e `setTheme()`
  - `HeaderThemeProvider` component
  - `useHeaderTheme()` hook
- Envolver conteudo do `layout.tsx` com `HeaderThemeProvider`

### 2.3 Instalar componente Sheet do shadcn [Nao Iniciada]

Paralelo com 2.2:
- `npx shadcn-ui@latest add sheet`
- Verificar que componente foi adicionado em `src/components/ui/`

### 2.4 Componente Header [Nao Iniciada]

Sequencial (apos 2.2 e 2.3):
- Criar `src/components/header.tsx`
  - Fundo transparente, posicao fixa/absolute sobre o conteudo
  - Logo HINT a esquerda (Image de `hint-logo-icon.png`), clicavel -> `/about`
  - Nav links a direita: Quem Somos (`/about`), O Curso (`/course`), Servico (`/service`), Contato (`/contact`)
  - Consome `useHeaderTheme()` para alternar entre `text-white` e `text-foreground`
  - Item ativo indicado por cor diferenciada (usar `usePathname()`)
  - Nav links ocultos no mobile (hidden em telas < md)

### 2.5 Componente Mobile Nav [Nao Iniciada]

Sequencial (apos 2.4):
- Criar `src/components/mobile-nav.tsx`
  - Botao hamburger (Phosphor Icons `List`) visivel apenas no mobile
  - Abre Sheet lateral com links de navegacao
  - Mesmo estilo/links do header desktop

### 2.6 Componente Footer [Nao Iniciada]

Paralelo com 2.4:
- Criar `src/components/footer.tsx`
  - Layout responsivo
  - Dados placeholder: email, telefone, endereco, redes sociais, WhatsApp
  - Estilizado com tokens do design system

### 2.7 Integrar Header e Footer no Layout [Nao Iniciada]

Sequencial (apos 2.4, 2.5 e 2.6):
- Editar `layout.tsx`: adicionar Header e Footer
- Estrutura: HeaderThemeProvider > Header > main(children) > Footer

### 2.8 Configurar tema do header por pagina [Nao Iniciada]

Sequencial (apos 2.7):
- Cada pagina chama `useHeaderTheme().setTheme()` via `useEffect`
  - `/about` -> `setTheme('light')`
  - `/course` -> `setTheme('dark')`
  - `/service` -> `setTheme('dark')`
  - `/contact` -> `setTheme('dark')`
- Paginas precisam de wrapper "use client" para usar o hook

### Validacao da Fase 2:
- Redirect `/` -> `/about` funciona
- Todas as 4 rotas acessiveis
- Header visivel com logo + nav em todas as rotas
- Header tema light em `/about`, dark nas demais
- Item ativo destacado no menu
- Menu hamburger funcional no mobile (Sheet abre/fecha)
- Footer visivel em todas as rotas
- Layout responsivo em todas as telas

---

## FASE 3 — Polish e Validacao Final [Nao Iniciada]

Ajustes finais, revisao de responsividade e validacao completa.

### 3.1 Revisao de responsividade [Nao Iniciada]

- Testar em breakpoints: mobile (375px), tablet (768px), desktop (1280px)
- Ajustar espacamentos e tamanhos se necessario
- Verificar que header e footer se adaptam corretamente

### 3.2 Revisao de acessibilidade basica [Nao Iniciada]

- Verificar que nav tem `aria-label`
- Verificar que Sheet tem labels acessiveis
- Verificar contraste de texto (especialmente header light sobre fundo escuro)

### 3.3 Limpeza [Nao Iniciada]

- Remover arquivos/codigo padrao do create-next-app que nao sao usados
- Verificar que nao ha warnings no console
- Verificar que build (`npm run build`) passa sem erros

### Validacao da Fase 3:
- Todos os testes do context.md passam
- Build sem erros
- Sem warnings no console
- Responsivo em todos os breakpoints
