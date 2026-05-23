# Build Task: restaurant-pos-sales-analyzer

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: restaurant-pos-sales-analyzer
HEADLINE: Analyze restaurant POS data for profit optimization
WHAT: Connects to popular restaurant POS systems and analyzes sales patterns to identify most/least profitable menu items and peak times
WHY: Restaurant owners have sales data but no easy way to analyze profitability by item and optimize menus
WHO PAYS: Restaurant owners, food service managers
NICHE: local-business-tools
PRICE: $$19/mo

ARCHITECTURE SPEC:
A Next.js web app that connects to restaurant POS APIs (Square, Toast, Clover) to fetch sales data, calculates profit margins by combining sales with cost data, and displays analytics dashboards with charts showing profitable items, peak hours, and optimization recommendations.

PLANNED FILES:
- app/page.tsx
- app/dashboard/page.tsx
- app/api/pos/connect/route.ts
- app/api/pos/sync/route.ts
- app/api/analytics/route.ts
- components/pos-connector.tsx
- components/profit-chart.tsx
- components/menu-analyzer.tsx
- components/peak-times-chart.tsx
- lib/pos-integrations.ts
- lib/analytics-engine.ts
- lib/profit-calculator.ts
- lib/database.ts

DEPENDENCIES: next, tailwindcss, prisma, @prisma/client, recharts, square, @lemonsqueezy/lemonsqueezy.js, next-auth, zod, date-fns, lucide-react

REQUIREMENTS:
- Next.js 15 with App Router (app/ directory)
- TypeScript
- Tailwind CSS v4
- shadcn/ui components (npx shadcn@latest init, then add needed components)
- Dark theme ONLY — background #0d1117, no light mode
- Stripe Payment Link for payments (hosted checkout — use the URL directly as the Buy button href)
- Landing page that converts: hero, problem, solution, pricing, FAQ
- The actual tool/feature behind a paywall (cookie-based access after purchase)
- Mobile responsive
- SEO meta tags, Open Graph tags
- /api/health endpoint that returns {"status":"ok"}
- NO HEAVY ORMs: Do NOT use Prisma, Drizzle, TypeORM, Sequelize, or Mongoose. If the tool needs persistence, use direct SQL via `pg` (Postgres) or `better-sqlite3` (local), or just filesystem JSON. Reason: these ORMs require schema files and codegen steps that fail on Vercel when misconfigured.
- INTERNAL FILE DISCIPLINE: Every internal import (paths starting with `@/`, `./`, or `../`) MUST refer to a file you actually create in this build. If you write `import { Card } from "@/components/ui/card"`, then `components/ui/card.tsx` MUST exist with a real `export const Card` (or `export default Card`). Before finishing, scan all internal imports and verify every target file exists. Do NOT use shadcn/ui patterns unless you create every component from scratch — easier path: write all UI inline in the page that uses it.
- DEPENDENCY DISCIPLINE: Every package imported in any .ts, .tsx, .js, or .jsx file MUST be
  listed in package.json dependencies (or devDependencies for build-only). Before finishing,
  scan all source files for `import` statements and verify every external package (anything
  not starting with `.` or `@/`) appears in package.json. Common shadcn/ui peers that MUST
  be added if used:
  - lucide-react, clsx, tailwind-merge, class-variance-authority
  - react-hook-form, zod, @hookform/resolvers
  - @radix-ui/* (for any shadcn component)
- After running `npm run build`, if you see "Module not found: Can't resolve 'X'", add 'X'
  to package.json dependencies and re-run npm install + npm run build until it passes.

ENVIRONMENT VARIABLES (create .env.example):
- NEXT_PUBLIC_STRIPE_PAYMENT_LINK  (full URL, e.g. https://buy.stripe.com/test_XXX)
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY  (pk_test_... or pk_live_...)
- STRIPE_WEBHOOK_SECRET  (set when webhook is wired)

BUY BUTTON RULE: the Buy button's href MUST be `process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK`
used as-is — do NOT construct URLs from a product ID, do NOT prepend any base URL,
do NOT wrap it in an embed iframe. The link opens Stripe's hosted checkout directly.

After creating all files:
1. Run: npm install
2. Run: npm run build
3. Fix any build errors
4. Verify the build succeeds with exit code 0

Do NOT use placeholder text. Write real, helpful content for the landing page
and the tool itself. The tool should actually work and provide value.


PREVIOUS ATTEMPT FAILED WITH:
Codex exited 1: Reading additional input from stdin...
OpenAI Codex v0.121.0 (research preview)
--------
workdir: /tmp/openclaw-builds/restaurant-pos-sales-analyzer
model: gpt-5.3-codex
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019e5543-25df-7301-877d-312eabc8f952
--------
user
# Build Task: restaurant-pos-sales-analyzer

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: restaurant-pos-sales-analyzer
H
Please fix the above errors and regenerate.