# UI Coding Standards

## Component Standards

### ONLY shadcn/ui Components
- **ABSOLUTELY NO custom components should be created**
- Use ONLY shadcn/ui components for all UI elements
- All components must come from the shadcn/ui library
- No exceptions to this rule

This applies to every UI element in this project: buttons, inputs, dialogs, dropdowns, tables, forms, cards, alerts, tooltips, tabs, navigation, layout primitives — everything. If a UI need arises and no shadcn/ui component covers it, install the matching shadcn/ui component rather than hand-rolling one.

### Installing Components
- Add new components via the shadcn/ui CLI, e.g. `npx shadcn@latest add <component>`
- Installed components land in `src/components/ui/` per the project's `components.json` (aliases: `@/components/ui`)
- Do not hand-write files in `src/components/ui/` — only add to that directory through the CLI
- Do not fork, rewrite, or "simplify" a generated shadcn/ui component's internals; if a variant is missing, regenerate/extend it using shadcn/ui's own patterns (e.g. `cva` variants), not a bespoke implementation

### Composition, Not Custom Components
- Build screens by composing existing shadcn/ui components (`Card`, `Dialog`, `Table`, `Form`, etc.) directly in pages/route files
- Do not create wrapper components, "presentational" components, or one-off UI abstractions around shadcn/ui primitives
- Non-visual helpers (data fetching, formatting, hooks) are fine — the restriction is specifically on UI/presentational components
- `src/components/theme-provider.tsx` and `src/components/theme-toggle.tsx` are pre-existing infrastructure (not new custom UI) — do not use them as precedent for adding further custom components

### Styling
- Use Tailwind CSS utility classes and the theme tokens already wired into `src/app/globals.css` (via `components.json` `cssVariables: true`, base color `neutral`)
- Do not introduce new design tokens, custom CSS files, or CSS-in-JS
- Use the `cn` utility from `@/lib/utils` for conditional class merging, consistent with shadcn/ui conventions

### Icons
- Use `lucide-react` icons only, per the project's configured icon library (`components.json` → `iconLibrary: "lucide"`)

## Date Formatting Standards

### Library
- Use `date-fns` for all date formatting operations

### Format Specification
Dates must be formatted using ordinal indicators as follows:
- 1st Sep 2025
- 2nd Aug 2025
- 3rd Jan 2026
- 4th Jun 2024

### Format Pattern
- Day with ordinal suffix (1st, 2nd, 3rd, 4th, etc.)
- Abbreviated month name (3 letters)
- Full year (4 digits)
