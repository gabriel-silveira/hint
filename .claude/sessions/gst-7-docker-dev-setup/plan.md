# GST-7: Docker Dev Setup

Se você está trabalhando nesta funcionalidade, certifique-se de atualizar este arquivo plan.md conforme progride.

## FASE 1 — Criar arquivos Docker [Completada ✅]

Todas as tarefas desta fase são independentes e foram feitas em paralelo.

### Criar `.dockerignore` [Completada ✅]

Criado na raiz do repositório.

### Criar `Dockerfile` [Completada ✅]

Criado na raiz do repositório.

### Criar `docker-compose.yml` [Completada ✅]

Criado na raiz do repositório.

## FASE 2 — Validação [Completada ✅]

### Build da imagem [Completada ✅]

Build executado com sucesso. Imagem `hint-frontend:latest` criada.

### Testar container [Completada ✅]

- `docker compose up -d` — container inicia sem erros
- `curl http://localhost:7000/about` — HTTP 200
- `docker compose down` — encerra limpo (container + network removidos)

### Testar hot reload [Completada ✅]

Next.js Turbopack rodando com `Network: http://0.0.0.0:3000`, volumes montados para hot reload.

### Comentários:
- O `.dockerignore` precisou ser corrigido de `node_modules` para `**/node_modules` (e `.next` para `**/.next`) porque o contexto do build é a raiz do repo, e o node_modules está em `frontend/node_modules`. Sem o glob recursivo, o contexto de build incluía 624MB desnecessários.
- O build com o `.dockerignore` corrigido transfere apenas 1.77kB de contexto.
