# Agent instructions

**clevertree.net** — Clevertree LLC software hub (`/`) and personal résumé (`/resume`).

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

*Last updated: 2026-11-15*
