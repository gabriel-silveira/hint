# GST-6: Scaffolding do website HINT — Contexto

## Por que
- Estabelecer a base do projeto web da HINT com a stack definida, design system integrado e estrutura de rotas
- Permitir desenvolvimento incremental das páginas em sessões futuras
- Garantir responsividade e consistência visual desde o início

## Objetivo
Projeto Next.js funcional dentro de `frontend/` com:
- 4 rotas (páginas em branco)
- Header responsivo com tema variável por rota
- Footer responsivo com dados placeholder
- Design system integrado ao Tailwind e shadcn/ui
- Todas as dependências da stack instaladas

## Decisões Confirmadas

| Decisao | Valor |
|---|---|
| Diretorio do projeto | `frontend/` |
| Package manager | npm |
| Logo | Mesmo `hint-logo-icon.png` para header e favicon, ambos os temas |
| Header tema `/about` | Light (texto branco) — fundo escuro |
| Header tema `/course`, `/service`, `/contact` | Dark (texto escuro) — fundo claro |
| Nav labels | Portugues: Quem Somos, O Curso, Servico, Contato |
| Footer dados | Placeholders genericos |
| Rota raiz | Redirect `/` -> `/about` |

## Stack

| Tecnologia | Versao | Uso |
|---|---|---|
| Next.js | 15 LTS | Framework React (App Router) |
| React | 19 | UI |
| TypeScript | 5 | Tipagem |
| Tailwind CSS | 3.4 | Estilizacao |
| shadcn/ui | v0.x (compat Tailwind v3) | Componentes UI |
| Phosphor Icons | 2.1 | Icones |
| React Query | 5 | Cache (setup only) |
| Zustand | 5 | Estado (setup only) |
| Axios | - | HTTP (setup only) |

## Restricoes
- Paginas completamente em branco (sem placeholder)
- React Query, Zustand e Axios apenas instalados, sem uso
- Dados do footer hardcoded com placeholders

## Testes
- `npm run dev` inicia sem erros
- Todas as rotas acessiveis e renderizando em branco
- Header visivel com logo + nav em todas as rotas
- Footer visivel em todas as rotas
- Menu hamburger funcional no mobile
- Redirect de `/` para `/about` funciona
- Tema do header alterna corretamente entre rotas
