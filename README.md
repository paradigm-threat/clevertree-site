# clevertree.net — Clevertree LLC

Software projects hub for **Clevertree LLC**: embeddable Clevertree Chat, SongWalker, MyProblem, Paradigm Threat, and Relay.

**Assistants:** start at [`AGENTS.md`](AGENTS.md).

## Site map

| Path | Content |
|------|---------|
| `/` | LLC landing — TreeGrow brand, live embeds (Chat + SongWalker), key projects |
| `/resume.md` | Ari Asulin résumé + client sites (Skinner, Gordonston) |

## Active Projects

- **[QuizGate](https://quizgate.app)** — Android-first Hard quiz unlock (earn screen time; first-access + math; daily anonymous stats → next-day patches; no ads/IAP). Source: [GitLab](https://gitlab.com/clevertree/quizgate).
- **[MyProblem](https://myproblem.app)** — Case intake and investigation tooling (photos, tickets, batch AI workers).
- **[Clevertree Chat](https://clevertree.chat)** — Standing debates on a page; batch SI files perspectives and keeps the map fair. Embeds use the **host domain**; only the **page path** selects the channel.
- **[Paradigm Threat](https://paradigmthreat.net)** — Investigation files, chronology, and park UI.
- **[Relay](https://relaygateway.net)** — Git-backed distributed hosting and social stack across a mesh of peers.

## Embeds

Home demos park-native embeds (`hooks/client/native/*Embed.host.js`):

- **Clevertree Chat** — `data-path` = page subpath; domain = embedding site (`clevertree.net`).
- **SongWalker** — songwalker.net UI iframe. **[SNESology](https://snesology.org)** is the same software (link only).

## Published Libraries

| Library | Description | Links |
|---------|-------------|-------|
| **songwalker-core** | Rust core for the SongWalker music language — lexer, parser, compiler, DSP engine, WASM bindings | [GitHub](https://github.com/clevertree/songwalker-core) · [crates.io](https://crates.io/crates/songwalker_core) |
| **songwalker-js** | JS/TS package: WASM bindings, preset loader, preset browser, Monaco integration | [GitHub](https://github.com/clevertree/songwalker-js) · [npm](https://www.npmjs.com/package/songwalker-js) |
| **hook-transpiler** | JSX/TSX transpiler for Relay hooks | [GitHub](https://github.com/clevertree/hook-transpiler) · [npm](https://www.npmjs.com/package/@clevertree/hook-transpiler) |
| **md2jsx** | Markdown to JSX with custom React components | [GitHub](https://github.com/clevertree/md2jsx) |
| **themed-styler** | Rust/WASM theme / CSS variable engine | [GitHub](https://github.com/clevertree/themed-styler) |

## Links

[clevertree.net](https://clevertree.net) · [songwalker.net](https://songwalker.net) · [snesology.org](https://snesology.org) · [GitHub](https://github.com/clevertree)

## Development

Live site is CleverScript on [Relay](https://relaygateway.net) (`hooks/client/`). Embeddable UI is park-native (`hooks/client/native/`). Legacy Next.js under `app/` is local preview only.

```bash
npm install
npm run dev     # legacy Next.js preview on http://localhost:3000
npm run build   # production build (legacy)
```
