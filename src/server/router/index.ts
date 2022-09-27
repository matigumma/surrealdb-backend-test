// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { surrealApi } from "./surrealApi";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("surrealdb.", surrealApi);

// export type definition of API
export type AppRouter = typeof appRouter;
