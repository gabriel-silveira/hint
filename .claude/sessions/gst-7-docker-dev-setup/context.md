# GST-7: Dockerfile e Docker Compose para ambiente de desenvolvimento

## Contexto
Padronizar o ambiente de desenvolvimento do projeto HINT com Docker para que qualquer colaborador possa rodar o projeto com um único comando.

## Objetivo
Criar 3 arquivos na raiz do repositório:
1. `Dockerfile` — Imagem de dev com `node:20-alpine`
2. `docker-compose.yml` — Orquestração com port mapping e volumes
3. `.dockerignore` — Otimização do contexto de build

## Abordagem
- Dockerfile simples para dev (sem multi-stage)
- `npm run dev` com `--hostname 0.0.0.0` para acesso externo ao container
- Volume mount de `./frontend` para hot reload
- Volumes anônimos para `node_modules` e `.next`
- Porta mapeada `7000:3000`
- Serviço nomeado `frontend`

## Decisões
- Branch criada a partir de `feature/gst-6` (contém o scaffolding Next.js)
- Adicionar `--hostname 0.0.0.0` ao comando `next dev` para permitir acesso de fora do container
- Nome do serviço: `frontend`

## Critérios de Aceite
1. `docker compose up -d` inicia o container em segundo plano
2. Aplicação acessível em `http://localhost:7000`
3. Hot reload funcional ao editar arquivos em `frontend/src/`
4. `docker compose down` encerra o container limpo

## Stack
- Next.js 15.5.12 com Turbopack
- React 19.1.0
- Node 20 (Alpine)
- npm
- Código em `frontend/`
