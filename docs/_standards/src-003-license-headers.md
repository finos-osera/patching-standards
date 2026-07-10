---
sequence: 130
standard_id: SRC-003
title: License Headers for New Files
summary: New source or test files match the prevailing license format of the surrounding project.
doc-status: Draft
type: SRC
applies-to:
  - Patch providers
---

## Requirement

Patch providers MUST apply the repository's prevailing license header format to net new files added by a patch.

When the surrounding project uses different headers for source and test files, providers SHOULD follow the local file-family convention.

## Rationale

Most fixes modify pre-existing source files that already carry license headers. Test files are often the new files added by a backpatch, so license consistency must be explicit.

## Evidence

Review evidence SHOULD include a license-header check for new files added in the patch commit set.
