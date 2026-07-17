# clevertree.net — Ari Asulin

Personal website and portfolio for **Ari Asulin**, a full-stack engineer building free, high-performance open-source software.

## About

I build free, high-performance open-source software. I'm a full-stack engineer with 18+ years of industry experience — equally at home in teams and working independently. Programming is a craft that rewards a creative mind. My work spans Relay, music tools, interactive narrative, and history research.

## Active Projects

- **[Forgotten Future](https://forgottenfuturebook.com)** — AI-driven interactive book and game with parallax scrolling and WebGL.
- **[Paradigm Threat](https://paradigmthreat.net)** — An investigation repository and alternate history timeline compiled from ancient testimony.
- **[Relay](https://relaygateway.net)** — Git-backed distributed hosting and social stack — content, search, and SSR across a mesh of peers.
- **[SongWalker](https://songwalker.net)** — A music programming language with a built-in Rust/WASM synthesis engine (oscillators, sampler, effects, 64-voice polyphony). Write music as code, render in the browser or as a VST3 plugin.
- **[SNESology](https://snesology.net)** — A retro music composer using authentic Super Nintendo sound samples, powered by the SongWalker engine.
- **[Skinner Family Dental](https://skinnerfamilydental.com)** — Professional dental practice website with patient portals and appointment integration.
- **[Gordonston Arts Fair](https://gordonstonartsfair.com)** — Annual arts community hub for Savannah's historic Gordonston neighborhood.

## Published Libraries

| Library | Description | Links |
|---------|-------------|-------|
| **songwalker-core** | Rust core for the SongWalker music language — lexer, parser, compiler, DSP engine, WASM bindings | [GitHub](https://github.com/clevertree/songwalker-core) · [crates.io](https://crates.io/crates/songwalker_core) |
| **songwalker-js** | JS/TS package: WASM bindings, preset loader, preset browser, Monaco integration | [GitHub](https://github.com/clevertree/songwalker-js) · [npm](https://www.npmjs.com/package/songwalker-js) |
| **hook-transpiler** | High-performance JSX/TSX transpiler for Relay hooks | [GitHub](https://github.com/clevertree/hook-transpiler) · [npm](https://www.npmjs.com/package/@clevertree/hook-transpiler) · [crates.io](https://crates.io/crates/relay-hook-transpiler) |
| **md2jsx** | Markdown to JSX converter with custom React component support | [GitHub](https://github.com/clevertree/md2jsx) · [npm](https://www.npmjs.com/package/@clevertree/md2jsx) · [crates.io](https://crates.io/crates/md2jsx) |
| **themed-styler** | Rust/WASM engine for dynamic theme generation and CSS variable management | [GitHub](https://github.com/clevertree/themed-styler) · [npm](https://www.npmjs.com/package/@clevertree/themed-styler) · [crates.io](https://crates.io/crates/themed-styler) |

## Support

Membership on Patreon directly funds development of free music tools and open hardware. Every contribution helps keep these projects independent, ad-free, and available to everyone.

[Patreon — Paradigm Threat / Earth History Timeline](https://www.patreon.com/c/ahsctimeline)

## Links

[clevertree.net](https://clevertree.net) · [songwalker.net](https://songwalker.net) · [snesology.net](https://snesology.net) · [GitHub](https://github.com/clevertree)

## Development

Live site is CleverScript on [Relay](https://relaygateway.net) (`hooks/client/`). Legacy Next.js app under `app/` is retained for local preview only.

```bash
npm install
npm run dev     # legacy Next.js preview on http://localhost:3000
npm run build   # production build (legacy)
```
