// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

import { clientRouter } from './client';
import { protectedExampleRouter } from './protected-example-router';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('client.', clientRouter)
  .merge('auth.', protectedExampleRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
