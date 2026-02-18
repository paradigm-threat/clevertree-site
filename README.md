# clevertree.net — Ari Asulin

Personal website and portfolio for **Ari Asulin**, a full-stack developer with 18+ years of experience building free, high-performance open-source software.

## About

I build free, high-performance alternatives to proprietary software. I consider programming to be a form of art requiring a creative mind. My ambitions include designing music software and video games and studying history.

## Active Projects

- **[SongWalker](https://songwalker.net)** — A music programming language with a built-in Rust/WASM synthesis engine (oscillators, sampler, effects, 64-voice polyphony). Write music as code, render in the browser or as a VST3 plugin.
- **[SNESology](https://snesology.net)** — A retro music composer using authentic Super Nintendo sound samples, powered by the SongWalker engine.
- **[SongWalker VSTi](https://songwalker.net/vsti.html)** — Free open-source VST3/CLAP multi-timbral instrument plugin for DAWs.
- **[Keyboard Prototype](https://songwalker.net/keyboard.html)** — A planned hardware keyboard instrument running Rust on embedded Daisy hardware — instant boot, stage-grade stability, no laptop required.
- **[Forgotten Future](https://forgottenfuturebook.com)** — AI-driven interactive book and game project with parallax scrolling and WebGL.
- **[Paradigm Threat](https://paradigmthreat.net)** — An investigation repository and alternate history timeline compiled from ancient testimony.
- **[Relay](https://relaygateway.net)** — A decentralized Web3.0 stack and social network architecture.

## Published Libraries

| Library | Description | Links |
|---------|-------------|-------|
| **songwalker-core** | Rust core for the SongWalker music language — lexer, parser, compiler, DSP engine, WASM bindings | [GitHub](https://github.com/clevertree/songwalker-core) · [crates.io](https://crates.io/crates/songwalker_core) |
| **songwalker-js** | JS/TS package: WASM bindings, preset loader, preset browser, Monaco integration | [GitHub](https://github.com/clevertree/songwalker-js) · [npm](https://www.npmjs.com/package/songwalker-js) |
| **hook-transpiler** | High-performance JSX/TSX transpiler for Relay hooks | [GitHub](https://github.com/clevertree/hook-transpiler) · [npm](https://www.npmjs.com/package/@clevertree/hook-transpiler) · [crates.io](https://crates.io/crates/relay-hook-transpiler) |
| **md2jsx** | Markdown to JSX converter with custom React component support | [GitHub](https://github.com/clevertree/md2jsx) · [npm](https://www.npmjs.com/package/@clevertree/md2jsx) · [crates.io](https://crates.io/crates/md2jsx) |
| **themed-styler** | Rust/WASM engine for dynamic theme generation and CSS variable management | [GitHub](https://github.com/clevertree/themed-styler) · [npm](https://www.npmjs.com/package/@clevertree/themed-styler) · [crates.io](https://crates.io/crates/themed-styler) |

## Sponsor

Your sponsorship directly funds development of free music tools and open hardware. Every contribution helps keep these projects independent, ad-free, and available to everyone.

[GitHub Sponsors](https://github.com/sponsors/clevertree)

## Links

[clevertree.net](https://clevertree.net) · [songwalker.net](https://songwalker.net) · [snesology.net](https://snesology.net) · [GitHub](https://github.com/clevertree)

## Development

Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/).

```bash
npm install
npm run dev     # dev server on http://localhost:3000
npm run build   # production build
```
