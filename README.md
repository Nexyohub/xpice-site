# XPICE — Market Intelligence for Ingredients

Site institucional da **XPICE** (rebranding da JR Spice). Broker internacional de
especiarias, ervas e ingredientes alimentícios, com inteligência de mercado.

Bilíngue (EN/PT), smooth scroll, animações de entrada. Construído em Next.js.

- **Produção:** https://xpice-site.vercel.app
- **Stack:** Next.js 15 · React 19 · Motion · Lenis · Geist

## Desenvolvimento

```bash
npm install        # instala dependências
npm run dev        # servidor local em http://localhost:3000
npm run build      # build de produção
```

## Auto-sync (commit + push + deploy automáticos)

Cada alteração salva é commitada e enviada ao GitHub automaticamente. Como o
repositório está conectado à Vercel, todo push gera um novo deploy de produção.

```bash
npm run sync       # deixe rodando enquanto trabalha (Ctrl+C para parar)
```

Fluxo: **salvar arquivo → commit + push (GitHub) → deploy automático (Vercel)**.

Se preferir commitar manualmente, basta `git add -A && git commit && git push` —
a Vercel reimplanta do mesmo jeito.

## Estrutura

```
app/            # App Router (layout, página, estilos globais)
components/     # Header, Hero, Reveal, Counter, SmoothScroll, LanguageProvider
lib/            # dictionary.ts (conteúdo bilíngue EN/PT)
public/         # logos (wordmark + símbolo, variantes claras)
scripts/        # sync.mjs (watcher de auto-sync)
```

## Identidade

- Navy `#06123D` · Verde especiaria `#2F7D32` · Açafrão `#D9A72E` · Off-white `#F7F5EF` · Grafite `#20242A`
- Tipografia Geist + acento serif italic (Instrument Serif)
