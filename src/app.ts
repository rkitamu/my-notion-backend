import { router } from "./route/route.ts";
import { environment } from "./environment/environment.ts";

// TODO: Add a logger
// TODO: Add a middleware
// TODO: Add a error handler
// TODO: Add a CORS
// TODO: Add a CSRF protection

Deno.serve(
  {
    port: environment.PORT,
    hostname: environment.HOST_NAME,
  },
  router
);
