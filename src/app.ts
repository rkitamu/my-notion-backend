import { router } from "./route/route.ts";

// TODO: environment
Deno.serve(
  {
    port: 8000,
  },
  router
);
