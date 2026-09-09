# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5.3 application with TypeScript and Tailwind CSS v4, using the App Router architecture with Turbopack enabled for both development and production builds.

## Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Code Generation Guidelines

**IMPORTANT**: ALWAYS refer to the relevant documentation file(s) within the `/docs` directory FIRST, before generating, editing, or reviewing any code in this repository. This applies to every code change, no matter how small. Match implementation to the existing patterns, conventions, and best practices documented there before writing code:

- /docs/auth.md
- /docs/data-fetching.md
- /docs/data-mutations.md
- /docs/routing.md
- /docs/server-components.md
- /docs/ui.md

## Architecture

- **App Router**: Located at `src/app/` with `layout.tsx` and `page.tsx` files
- **Styling**: Tailwind CSS v4 with PostCSS configuration
- **Path Alias**: `@/*` maps to `./src/*` for cleaner imports
- **Font System**: Uses Geist fonts configured in the root layout

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
