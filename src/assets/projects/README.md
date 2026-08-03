# Project screenshots

Drop a screenshot here and it appears on the matching project card. No code
change needed — `Projects.astro` globs this directory and matches on filename.

## Filenames

The basename must equal the project's `slug` in `src/components/Projects.astro`:

| File | Project |
|---|---|
| `rise-of-the-lich-king.png` | Rise of the Lich King |
| `odinpedidos.png` | odinPedidos |
| `boraa.png` | Boraa |

`.png`, `.jpg`, `.jpeg` and `.webp` all work. Astro converts and resizes at
build time, so commit the original, not a hand-optimised copy.

## What to put in them

One screenshot per app, in an official device frame. Frames are in
[Apple Design Resources](https://developer.apple.com/design/resources/).

Pick the screen that best shows what the app does — not the login screen, not
the splash. The App Store Connect listing already has approved screenshots; the
fastest route is reusing the first one from there.

Aim for around 1200px wide before framing. The card renders at 150px, and
Astro generates the smaller variants.

## Why they matter

This is the highest-value item in the audit. See
[docs/05-auditoria-e-plano.md](../../../docs/05-auditoria-e-plano.md) — a
portfolio for an iOS developer with no picture of any app leaves the strongest
asset on the table.
