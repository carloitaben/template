# pnpm-effect

A pnpm template for building Effect-based TypeScript libraries.

The library lives at the root of the repo — no workspace or nested packages:

- `src/`: library source
- `test/`: Vitest tests using `@effect/vitest`
- `tsdown.config.ts`: builds `dist/` for publishing
- `.changeset/`: versioning and release notes
