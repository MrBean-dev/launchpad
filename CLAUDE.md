# Launchpad

SaaS boilerplate with Next.js, Tailwind, Prisma, NextAuth, and Stripe.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL + Prisma 5
- **Auth:** NextAuth.js (Credentials provider)
- **Payments:** Stripe

## Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Database
npx prisma generate  # Generate Prisma client
npx prisma migrate dev --name <name>  # Create migration
npx prisma studio    # Open database GUI

# Docker (PostgreSQL)
docker start launchpad-db   # Start database
docker stop launchpad-db    # Stop database

# User management
npx tsx scripts/create-user.ts  # Create/update test user
```

## Docker Setup

PostgreSQL runs in Docker. The container is configured to auto-restart:

```bash
# Initial setup (already done)
docker run -d --name launchpad-db \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=launchpad \
  -p 5432:5432 \
  --restart unless-stopped \
  postgres:16-alpine

# After reboot, Docker Desktop auto-starts and container restarts automatically
```

## Project Structure

```
src/
├── app/
│   ├── (auth)/          # Login, register pages
│   ├── (dashboard)/     # Dashboard, admin, settings
│   └── api/
│       ├── auth/        # NextAuth routes
│       └── stripe/      # Checkout, webhooks
├── components/          # React components
├── lib/
│   ├── auth.ts          # NextAuth config
│   └── prisma.ts        # Prisma client
└── types/               # TypeScript types
```

## Environment Variables

Copy `.env.example` to `.env` and fill in:

- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_SECRET` - Random secret for JWT
- `STRIPE_SECRET_KEY` - Stripe API key
- `STRIPE_WEBHOOK_SECRET` - Stripe webhook signing secret

## Database Schema

- **User** - id, email, password, name, role (USER/ADMIN)
- **Subscription** - plan (FREE/PRO/ENTERPRISE), status, Stripe IDs
- **Account/Session** - NextAuth tables

## Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/login` | Sign in |
| `/register` | Create account |
| `/dashboard` | User dashboard |
| `/settings` | Account settings |
| `/admin` | Admin panel (ADMIN role only) |
