# Deploy Amplify Next.js — Arquitetura

## Visão geral (antes → depois)

```
ANTES:
GitHub (repo antigo, Vue.js) → Amplify App A → hintlanguage.com

DEPOIS:
GitHub (gabriel-silveira/hint, Next.js 15) → Amplify App B → hintlanguage.com
                                              └── Build: cd frontend → npm ci → npm run build
                                              └── Artifacts: frontend/.next/**/*
```

## Arquivos afetados

| Arquivo | Ação | Motivo |
|---|---|---|
| `frontend/package.json` | Editar | Remover `--turbopack` do script `build` |
| `amplify.yml` | Criar (raiz) | Config de build para Amplify com subdiretório `frontend/` |

## Alteração 1: frontend/package.json

```diff
- "build": "next build --turbopack",
+ "build": "next build",
```

## Alteração 2: amplify.yml (raiz do projeto)

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - cd frontend
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: frontend/.next
    files:
      - '**/*'
  cache:
    paths:
      - frontend/node_modules/**/*
      - frontend/.next/cache/**/*
```

## Trade-offs

| Decisão | Alternativa descartada | Motivo |
|---|---|---|
| `next build` sem `--turbopack` | Manter `--turbopack` | Symlinks quebram bundler do Amplify |
| `npm ci` no preBuild | `npm install` | Determinístico e mais rápido em CI |
| Cache de `node_modules` + `.next/cache` | Sem cache | Reduz tempo de builds subsequentes |

## Consequências negativas

- Build local com `npm run build` fica sem Turbopack (impacto mínimo, usamos Docker com `next dev --turbopack` para dev)
