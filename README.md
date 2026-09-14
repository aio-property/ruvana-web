# RUVANA Web

All-in-one property marketplace and management experience for guests, property owners, and internal operations. This phase uses realistic local mock data so product flows can be reviewed before the backend contract is connected.

## Product areas

| Area | Main routes | Coverage |
| --- | --- | --- |
| Public marketplace | `/`, `/search`, `/property/[slug]`, `/campaigns/[slug]` | Search, filters, map, listing details, reviews, promotions |
| End user | `/checkout`, `/bookings`, `/bookings/[id]`, `/favorites`, `/messages`, `/profile` | Payment simulation, history, check-in progress, inbox, account settings |
| Property owner | `/owner/*` | Portfolio, property onboarding, reservations, calendar, operations, finance, campaigns, inbox, settings |
| Internal management | `/internal/*` | Supply, booking ops, reconciliation, risk, growth, support, audit, record review |

## Local development

Requires Node.js 22+ and pnpm 11+.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`. The role switcher in the global header provides direct access to the end-user, owner, and internal experiences.

## Quality checks

```bash
pnpm typecheck
pnpm lint
pnpm build
pnpm smoke
```

`pnpm smoke` starts the production server temporarily and verifies the main public and authenticated routes, content markers, and responsive breakpoints.

## Project structure

```text
src/app/          Next.js App Router pages and layouts
src/components/   Reusable server and client UI components
src/lib/          Typed mock domain data and helpers
scripts/          Repeatable project verification
```

Backend integration should replace `src/lib/mock-data.ts` behind a typed service layer so page components remain independent from the transport and API vendor.
