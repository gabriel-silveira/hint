# Deploy do novo website Next.js no AWS Amplify (hintlanguage.com)

**Status:** Pendente
**Prioridade:** Alta
**Data:** 2026-03-15

## POR QUE

- O website atual (Vue.js/Quasar) está em um repositório antigo e precisa ser substituído pelo novo website (Next.js 15) no repositório `gabriel-silveira/hint`
- O domínio `hintlanguage.com` já está configurado no Amplify e deve continuar funcionando após a migração
- Criar um novo app Amplify é mais seguro do que alterar o existente via CLI (`update-app` pode causar comportamento inesperado segundo AWS e relatos da comunidade)

## O QUE

Migrar o deploy de `hintlanguage.com` no AWS Amplify do repositório antigo para o novo, criando um novo app Amplify e transferindo o domínio.

### Alterações no código (dev IA)

1. **Ajustar `frontend/package.json`** — Trocar o script `build` de `next build --turbopack` para `next build`. Turbopack é apenas para dev server e causa problemas de symlink no bundling do Amplify
2. **Criar `amplify.yml`** na raiz do projeto com build config apontando para o subdiretório `frontend/`

### Ações manuais no console AWS (humano)

3. Criar novo app Amplify conectado ao repo `gabriel-silveira/hint`, branch `main`
4. Configurar Node.js 20+ no build environment
5. Verificar deploy no domínio provisório do Amplify (URL gerada automaticamente)
6. No app Amplify antigo, remover a associação do domínio `hintlanguage.com`
7. No app Amplify novo, associar o domínio `hintlanguage.com`
8. Aguardar propagação de DNS e validação de SSL
9. Remover o app Amplify antigo

## COMO

### amplify.yml (raiz do projeto)

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - cd frontend && npm ci
    build:
      commands:
        - cd frontend && npm run build
  artifacts:
    baseDirectory: frontend/.next
    files:
      - '**/*'
  cache:
    paths:
      - frontend/node_modules/**/*
      - frontend/.next/cache/**/*
```

### Critérios de sucesso

- Website novo acessível em `hintlanguage.com` com SSL válido
- Auto-deploy funcionando (push na `main` → deploy automático)
- App Amplify antigo removido

### Riscos e mitigações

| Risco | Mitigação |
|---|---|
| Propagação DNS lenta (até 48h) | Downtime aceitável pelo stakeholder |
| Build falhar no Amplify (subdiretório `frontend/`) | Testar no domínio provisório antes de migrar o domínio real |
| Turbopack no script de build | Removido no passo 1 (alteração no código) |

### Limitações do Amplify a respeitar

- Não usar pasta `public/static/` (reservada pelo Amplify)
- ISR on-demand (`revalidatePath`/`revalidateTag`) não funciona
- Bundle SSR limitado a 50 MB
- Imagens otimizadas limitadas a 4.3 MB
- Node.js 20+ obrigatório

### Info do ambiente

- Domínio: `hintlanguage.com`
- DNS gerenciado pelo Amplify
- Sem subdomínios
- Sem variáveis de ambiente
- Downtime aceitável durante a migração
