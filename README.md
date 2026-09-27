# NUSAVYRA Web

All-in-one tourism and travel superapp prototype for travelers, property owners, tourism partners, and Nusavyra internal operations. This phase uses realistic JSON mock data so the complete ecosystem and cross-service journeys can be reviewed before backend contracts are connected.

## Product areas

| Area | Main routes | Coverage |
| --- | --- | --- |
| Public marketplace | `/`, `/explore/[category]`, `/explore/[category]/[product]`, `/search`, `/property/[slug]` | 12 tourism verticals, search/filter/sort, service details, property marketplace, and campaigns |
| Traveler Center | `/account/*`, `/checkout`, `/bookings/*`, `/messages` | Unified itinerary, orders, wallet, payment, insurance, rewards, favorites, reviews, profile, and 24/7 support |
| Property owner | `/owner/*` | Portfolio, property onboarding, reservations, calendar, operations, finance, campaigns, inbox, and settings |
| Partner ecosystem | `/partner`, `/partner/[role]/*` | 12 partner types with catalog, bookings, schedule, operations, CRM, finance, marketing, quality, reports, team, compliance, inbox, and settings |
| Internal management | `/internal/*` | Partner supply, catalog, journey orchestration, transport, experience, event, fleet, insurance, payments, settlement, risk, support, growth, finance, compliance, people, data, audit, and system health |

## Tourism verticals

Stay & property, flights, rail, bus & travel, airport transfer, attractions & recreation, tour packages, events, vehicle rental, marine experiences, private aviation, and travel protection.

## Partner roles

Property owner, attraction operator, tour & travel agency, event organizer, bus & shuttle operator, rail operator, vehicle rental, marine operator, aviation charter, insurance provider, local guide, and culinary partner.

## Local development

Requires Node.js 22+ and pnpm 11+.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`. The role switcher in the global header provides direct access to Explore, Traveler Center, Property Owner, Partner Ecosystem, and Nusavyra HQ.

## Quality checks

```bash
pnpm typecheck
pnpm lint
pnpm build
pnpm smoke
```

`pnpm smoke` serves the static production output, verifies representative public and authenticated routes, checks every generated page for broken internal links, and validates responsive breakpoints.

## Project structure

```text
src/app/          Next.js App Router pages and layouts
src/components/   Reusable server and client UI components
src/data/         JSON mock ecosystem data
src/lib/          Typed domain adapters and helpers
scripts/          Repeatable project verification
```

Backend integration should replace `src/data/ecosystem.json` and `src/lib/mock-data.ts` behind typed service adapters so page components remain independent from transport and API vendors.
