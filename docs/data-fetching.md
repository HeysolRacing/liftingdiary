# Data Fetching Guidelines

## Core Principle: Server Components Only

**CRITICAL**: ALL data fetching within this application MUST be done via Server Components. This is a fundamental architectural requirement.

### ✅ Allowed Data Fetching Methods
- **Server Components** - The ONLY approved method for data fetching

### ❌ Prohibited Data Fetching Methods
- Route handlers (API routes)
- Client components
- Client-side fetching (useEffect, SWR, React Query, etc.)
- Any other method not explicitly listed as allowed

## Database Query Requirements

### Helper Functions in /data Directory
All database queries MUST be implemented as helper functions within the `/data` directory.

### Drizzle ORM Required
- **MUST** use Drizzle ORM for all database queries
- **NEVER** use raw SQL queries
- Follow Drizzle's type-safe query patterns

### Data Access Security
**CRITICAL SECURITY REQUIREMENT**:

A logged-in user can ONLY access their own data. They MUST NOT be able to access any other user's data.

- Always filter queries by the current user's ID
- Implement proper authorization checks in all data helper functions
- Validate user ownership before returning any data
- Never return data that doesn't belong to the authenticated user

## Implementation Pattern

```typescript
// Example: src/data/workouts.ts
import { db } from '@/lib/db'
import { workouts } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

export async function getWorkoutsByUser(userId: string) {
  return await db
    .select()
    .from(workouts)
    .where(eq(workouts.userId, userId))
}
```

```typescript
// Example: Server Component usage
// src/app/workouts/page.tsx
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { getWorkoutsByUser } from '@/data/workouts'

export default async function WorkoutsPage() {
  const { userId } = await auth()
  if (!userId) {
    redirect('/sign-in')
  }

  const workouts = await getWorkoutsByUser(userId)

  return (
    <div>
      {workouts.map(workout => (
        <div key={workout.id}>{workout.name}</div>
      ))}
    </div>
  )
}
```

Authentication is verified where the request originates (the Server Component), and the resulting `userId` is passed into the data helper — the helper never performs its own auth lookup. This mirrors the pattern in [Data Mutations](./data-mutations.md), where server actions authenticate and pass `userId` into helpers.

## Why This Approach?

1. **Security**: Server-side data fetching with proper authorization
2. **Performance**: No client-side data fetching waterfalls
3. **SEO**: Fully server-rendered content
4. **Type Safety**: Drizzle ORM provides full TypeScript support
5. **Consistency**: Single pattern for all data access