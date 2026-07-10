---
sequence: 20
standard_id: FORK-002
title: Backpatch Branches
summary: Patch providers use `backpatch/<version>` branches for every supported major or minor line.
doc-status: Draft
type: FORK
applies-to:
  - Patch providers
  - OSERA maintainers
---

## Requirement

Patch providers MUST create backpatch branches using the form:

```text
backpatch/<version>
```

The `<version>` segment SHOULD identify the major, minor, or maintenance line being patched.

## Rationale

OSERA may patch multiple major or minor versions of a single upstream project. Version-scoped branches make the supported line explicit and avoid mixing unrelated maintenance histories.

## Examples

```text
backpatch/5.3.x
backpatch/2.7.x
backpatch/1.2.17
```

## Observed OSERA examples

The public `finos-osera/backpatch-spring-framework` repository uses `backpatch/5.3.39`, and `finos-osera/backpatch-logback` uses `backpatch/1.2.9`.

Not every current backpatch repository uses this branch convention yet, so tooling should treat it as a target standard rather than an assumption about all historical repos.
