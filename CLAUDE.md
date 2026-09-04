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
