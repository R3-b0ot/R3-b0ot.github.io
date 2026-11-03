# R3_b0ot — Creative Portfolio

Responsive static portfolio for Abhishek Jain, hosted on GitHub Pages.

## Visual direction
- Neo-Digital Editorial: editorial hierarchy, a sigil-led identity, balanced dot-matrix graphics and restrained interface details.
- Purple identity palette with Dark, Light and System theme modes.
- First visit follows the device colour preference; explicit theme selections persist for the current browser session.
- PERFECT DARK vector lettering is reserved exclusively for the literal R3_b0ot wordmark.
- Custom dot-grid glyph artwork is maintained in `assets/img/r3-glyphs.svg`.
- Subtle motion, interrupted-signal identity behaviour and reduced-motion support.
- Vanilla HTML, CSS and JavaScript; no framework or build step.

## Pages
- `index.html` — homepage, selected work, philosophy, about, capabilities, experience and contact.
- `croma.html` — Croma retail integration case study.
- `pepsico.html` — FMCG activation / campaign adaptation case study.
- `ooh-concepts.html` — self-initiated OOH / DOOH concepts.
- `brand-systems.html` — brand systems and collateral practice.
- `creative-tech.html` — NotiPlaty and Lore Keeper.

## Theme behaviour
- Initial preference: System.
- System resolves to the current `prefers-color-scheme` setting and follows OS changes.
- Manual Dark, Light or System selection is stored in `sessionStorage`.
- A new browser session returns to System unless the browser restores the same tab session.

## Content integrity
- No fabricated testimonials or invented performance metrics.
- OOH concept work is labelled self-initiated/speculative.
- Project covers are typographic art direction, not represented as actual campaign photography.
- Client-work descriptions describe design-support contributions rather than claiming sole ownership.
- Public contact routes reuse the existing email, LinkedIn and GitHub routes.

## Deployment
Static files are published through GitHub Pages from the repository's configured publishing source. No build step is required.

## Before launch
1. Add approved, genuine campaign artwork and case-study imagery where available.
2. Confirm client names, descriptions and images can be shown publicly.
3. Verify current contact information and résumé availability.
4. Test desktop/mobile, keyboard navigation, theme switching and reduced motion.
5. Verify the deployed GitHub Pages site after each release.
