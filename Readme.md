# OSERA Patching Standards

[![badge-labs](docs/assets/finos-labs-badge.svg)](https://community.finos.org/docs/governance/lifecycle-stages/labs)

This repository contains a provisional evaluation standards site for FINOS OSERA patch production and consumption.

The work is inspired by the catalog-oriented approach used by the [FINOS SDLC Controls Framework](https://github.com/finos-labs/SDLC-Controls-Framework), but focuses on OSERA backpatches: fork management, source provenance, release compatibility, OpenVEX and CycloneDX feeds, and the recipient evidence enterprises need to decide what changed and what to test.

## Site

The standards site lives in [`docs/`](docs/) and is designed for GitHub Pages/Jekyll.

```sh
cd docs
bundle install
bundle exec jekyll serve
```

The site includes:

* a searchable standards catalog;
* numbered draft standards such as `FORK-001`, `SRC-002`, `REL-002`, `FEED-001`, and `EVD-001`;
* examples for patch evidence and recipient guidance;
* governance notes for moving from provisional evaluation content toward a Community Specification.

## Source material

The initial content is aligned with:

* current OSERA community materials at <https://osera.finos.org> and <https://github.com/finos-osera/community>;
* the public OSERA GitHub organization, which had 62 public repositories on July 10, 2026, including 60 public `backpatch-*` repositories;
* a provider-hosted OpenVEX and CycloneDX reference example;
* Jonathan Schneider / Moderne OSERA backpatching work summarized in the July 7, 2026 OSERA update deck;
* the group discussion about publishing patch-provider evidence such as "what changed" and "what surface area should recipients test".

## Status

This material is provisional and in active evaluation status. It is intended to help OSERA members, patch providers, and enterprise recipients converge on an open, bank-consumable format before formal ratification. It has not been published as a formal FINOS standard.

## Governance

This repository keeps the Community Specification governance scaffold in [`governance-documents/`](governance-documents/). The site currently treats the standards as provisional evaluation material and points contributors toward that process.
