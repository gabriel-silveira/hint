# Deploy do novo website Next.js no AWS Amplify

Se você está trabalhando nesta funcionalidade, certifique-se de atualizar este arquivo plan.md conforme progride.

## FASE 1 — Alterações no código [Completada ✅]

### Remover `--turbopack` do build script [Completada ✅]

Editado `frontend/package.json`, trocado `"build": "next build --turbopack"` para `"build": "next build"`.

### Criar `amplify.yml` [Completada ✅]

Criado `amplify.yml` na raiz do projeto com config de build para subdiretório `frontend/`.

### Validar build local [Completada ✅]

Build executado com sucesso via `docker compose exec frontend npm run build`. Todas as 6 rotas geradas como estáticas.

### Commit e push [Não Iniciada ⏳]

Aguardando validação do usuário antes de commit.

### Comentários:
- `playwright.config.ts` causou falha no build porque `@playwright/test` não está disponível no container de dev (é devDependency mas node_modules é volume Docker). Corrigido adicionando `playwright.config.ts` ao `exclude` do `tsconfig.json`.
- O build gerou todas as páginas como estáticas (○ Static), o que é bom para performance no Amplify.
- Alteração extra não prevista: `frontend/tsconfig.json` — adicionado `playwright.config.ts` ao exclude.

## FASE 2 — Setup no console AWS (humano) [Não Iniciada ⏳]

Todas as tarefas desta fase são manuais e sequenciais.

### Criar novo app Amplify [Não Iniciada ⏳]

No console AWS Amplify, criar novo app conectado ao repo `gabriel-silveira/hint`, branch `main`. Configurar Node.js 20+ no build environment.

### Validar deploy provisório [Não Iniciada ⏳]

Acessar a URL provisória gerada pelo Amplify (formato `https://main.xxxxx.amplifyapp.com`) e verificar que o website carrega corretamente. Testar navegação entre páginas (/, /course, /service, /contact).

## FASE 3 — Migração do domínio (humano) [Não Iniciada ⏳]

Sequencial — só iniciar após validação da Fase 2.

### Remover domínio do app antigo [Não Iniciada ⏳]

No app Amplify antigo, ir em Domain Management e remover a associação de `hintlanguage.com`.

### Associar domínio ao novo app [Não Iniciada ⏳]

No app Amplify novo, ir em Domain Management, adicionar `hintlanguage.com`. O Amplify vai gerar os registros DNS e provisionar o certificado SSL.

### Validar domínio final [Não Iniciada ⏳]

Aguardar propagação DNS e validação SSL. Acessar `https://hintlanguage.com` e confirmar que o novo website está online com SSL válido.

### Remover app antigo [Não Iniciada ⏳]

Após confirmação de que tudo funciona, deletar o app Amplify antigo no console AWS.
