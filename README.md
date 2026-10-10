# Temple Bar workspace trial

Public, disposable fixture for [temple-bar issue 309](https://github.com/londontypescript/temple-bar/issues/309). This repository investigates pnpm workspace behaviour with three plain TypeScript packages. Retain it for review; it is not a production application.

## Fixture

- `@trial/shared` normalizes a name and rejects blank input.
- `@trial/consumer-a` imports the shared package to produce a greeting.
- `@trial/consumer-b` imports the shared package to produce an uppercase label.

Each package builds TypeScript to `dist/` and runs Node behavioural tests against that output. Workspace imports use `workspace:*` and package exports; tests exercise the compiled imports rather than source aliases. There is one root packageManager pin and one lockfile.

## Reproduce

Use Node **24.21.0** and pnpm **10.34.5**. Check the effective versions from this directory before installing; a runtime shim can choose a different Node version in another checkout. `.node-version` and `engines.node` record the tested baseline. No global installation is required by this fixture.

```sh
node --version
pnpm --version
pnpm install --frozen-lockfile
pnpm check
```

The root coordinates all package scripts in dependency order. `pnpm typecheck` builds first so sibling package declarations exist, then runs each package's typecheck. Root lint and format checks also cover shared configuration. `pnpm test` builds and tests each package. `pnpm knip` analyses the whole workspace, including entry exports, using Knip **6.39.0**, the version shipped with Temple Bar **0.0.10**.

For per-package checks, build the workspace once, then run:

```sh
pnpm build
pnpm --filter @trial/shared typecheck
pnpm --filter @trial/consumer-a lint
pnpm --filter @trial/consumer-b format:check
pnpm --filter @trial/consumer-a test
```

Each code package declares `typecheck`, `lint`, `format:check` and `test`. The root has no application source and aggregates these checks. Recursive pnpm execution is an explicit fixture configuration; it is not evidence that Temple Bar discovers or enforces package scripts.

## Trial status

Stages A–B establish the public repository and reproducible fixture. Temple Bar launcher/init/gate, protected PR experiments, and fresh-worktree hook behaviour belong to later separately approved stages. No Temple Bar installation or enforcement claim is made by this baseline.

Licence: MIT, copyright London TypeScript.
