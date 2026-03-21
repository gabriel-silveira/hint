# Deploy Amplify Next.js — Contexto

## Por que
O website atual (Vue.js/Quasar) em repo antigo precisa ser substituído pelo novo (Next.js 15) no repo `gabriel-silveira/hint`. O domínio `hintlanguage.com` deve continuar funcionando.

## Objetivo
`hintlanguage.com` servindo o novo website Next.js 15 com auto-deploy na branch `main`.

## Escopo do dev IA (2 alterações)
1. `frontend/package.json` — remover `--turbopack` do script `build`
2. `amplify.yml` — criar na raiz do projeto

## Escopo do humano (console AWS)
3. Criar novo app Amplify conectado ao repo
4. Configurar Node.js 20+
5. Validar deploy no domínio provisório
6. Migrar domínio `hintlanguage.com`
7. Remover app antigo

## Verificações feitas
- Sem `revalidatePath`/`revalidateTag`/`unstable_after` no código
- Sem pasta `public/static/`
- `next.config.ts` compatível (apenas redirects)
- Sem variáveis de ambiente
- Imagens no `public/` são pequenas

## Restrições
- Node.js 20+ obrigatório no Amplify
- Bundle SSR limitado a 50 MB
- Imagens otimizadas limitadas a 4.3 MB
- ISR on-demand não funciona no Amplify
