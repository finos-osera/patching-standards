---
sequence: 10
standard_id: FORK-001
title: Repository Naming
summary: Backpatched repositories use a consistent `backpatch-<reponame>` name in the finos-osera GitHub organization.
doc-status: Draft
type: FORK
applies-to:
  - Patch providers
  - OSERA maintainers
---

## Requirement

Backpatched repositories MUST live in the `github.com/finos-osera` organization unless the working group approves an exception.

Backpatched repositories SHOULD use the prefix `backpatch-` followed by the upstream repository or artifact name.

## Rationale

The prefix distinguishes forked upstream projects from OSERA governance, tooling, and operations repositories.

Because the repositories are public, the GitHub fork relationship with the upstream project SHOULD be preserved where possible.

## Evidence

Consumers SHOULD be able to identify:

* the OSERA fork URL;
* the upstream project URL;
* whether GitHub retains the fork relationship;
* the artifact coordinates covered by the repository.
