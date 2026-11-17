# Agent instructions

**clevertree.net** — Clevertree LLC software hub (`/`), personal résumé (`/resume`), and Ads conversion thank-you (`/thankyou`).

Google Ads conversion URL: **https://clevertree.net/thankyou** (static HTML; also `/thankyou.html`).

## Brand spelling

**Clevertree** — never **CleverTree**. Keep the internal `t` lowercase in human-facing copy, titles, docs, agent text, and code identifiers (e.g. `ClevertreeGet`, `.relay.yaml` `name`). Domain/org slugs stay `clevertree` as today.

CleverScript JSX: do not put bare `@` in text nodes (emails break parse). Use a string expression, e.g. `{'*@clevertree.net'}`.

Live path is CleverScript (`hooks/client/`). Embeddable boards (Chat, SongWalker, TreeGrow) are **park-native** hosts under `hooks/client/native/` — stubs in JSX, logic in `*.host.js`. Gateway loads `park-host-common.js` when `data-relay-park-native` is present.

Chat embed rule: **domain = embedding host**; embed params set **subpath only** (per-page channels).

---

## Git and go-live

Catalog repo **`clevertree-site`** · branch **`release`** · publish origin **`iad1`**.

| Step | Action |
|------|--------|
| 1 | Checkout **`release`**. |
| 2 | **`git push iad1 HEAD:release`** first. |
| 3 | **`git push gitlab HEAD:release`**. |

*Last updated: 2026-11-16*
