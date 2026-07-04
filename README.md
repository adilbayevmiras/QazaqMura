# Qazaq Mūra — Monorepo

National digital culture platform for Kazakhstan. This repository is at **Phase 0** (infrastructure foundation only).

> **Статус:** Phase 0 — инфраструктурный фундамент. Продуктовые экраны, Strapi, бронирование и дизайн-система начинаются с Phase 1+.

See the full development sequence in [`docs/qazaqmura-development-guide-v1.0.md`](docs/qazaqmura-development-guide-v1.0.md).

## Repository structure

```
/apps
  /web   — Next.js (public site + dashboard, Phase 0 stub)
  /api   — NestJS backend (Phase 0 health endpoint only)
  /cms   — CMS stub on :1337 (real Strapi in Phase 2)
/packages
  /ui     — shared UI library (empty stub until Phase 1)
  /config — shared ESLint, TypeScript, Prettier config
  /types  — shared TypeScript types (empty stub until Phase 2)
```

## Prerequisites

| Tool | Version |
|------|---------|
| Node.js | 20+ |
| pnpm | 9+ (`corepack enable` recommended) |
| Docker Desktop | latest (for PostgreSQL, Redis, Meilisearch) |

## First-time setup

```bash
# 1. Clone and install
git clone <repository-url>
cd QazaqMura
pnpm install

# 2. Start infrastructure services
docker compose up -d

# 3. Copy environment templates (never commit .env files)
cp apps/web/.env.example apps/web/.env
cp apps/api/.env.example apps/api/.env
cp apps/cms/.env.example apps/cms/.env

# 4. Start all apps
pnpm dev
```

After `pnpm dev`, you should see:

| Service | URL | Expected response |
|---------|-----|-------------------|
| Web | http://localhost:3000 | `Qazaq Mūra — web (Phase 0 stub)` |
| API | http://localhost:4000/health | `{"status":"ok","service":"api"}` |
| CMS stub | http://localhost:1337 | `{"status":"ok","service":"cms",...}` |

## Verify infrastructure

```bash
# PostGIS — должно вернуть версию расширения
docker compose exec postgres psql -U qazaqmura -d qazaqmura -c "SELECT PostGIS_version();"

# Redis — должно вернуть PONG
docker compose exec redis redis-cli ping

# Meilisearch — health endpoint
curl http://localhost:7700/health
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start web, api, and cms in parallel (Turborepo) |
| `pnpm build` | Build all packages and apps |
| `pnpm lint` | ESLint across the monorepo |
| `pnpm typecheck` | TypeScript strict check (no emit) |

## Branching workflow

- **`main`** — stable; do not push directly
- **`dev`** — integration branch; open PRs into `main`
- CI runs on every push/PR to `main` and `dev` (lint, typecheck, build)

## Phase map

| Phase | Scope | Status |
|-------|-------|--------|
| 0 | Monorepo, Docker, CI, empty app stubs | **Current** |
| 1 | Design system in code (Storybook, tokens) | Not started |
| 2 | Strapi CMS + content model | Not started |
| 3+ | Public site, map, search, auth, booking… | Not started |

## Troubleshooting

**Port already in use** — stop conflicting processes on 3000, 4000, 1337, 5432, 6379, or 7700.

**Docker not running** — `docker compose up -d` requires Docker Desktop to be started.

**pnpm version mismatch** — run `corepack enable && corepack prepare pnpm@9.15.0 --activate`.

**PostGIS check fails** — wait a few seconds after `docker compose up -d` for the postgres healthcheck to pass.

## Recovery note

If you return to this project after months away:

1. Read this README top to bottom
2. Run `pnpm install && docker compose up -d && pnpm dev`
3. Check the Development Guide for the current phase and its Exit Criteria before starting new work
