import { Route } from "./type.ts";
import { updateTimeline } from "./finance.route.ts";

const routes: Route[] = [updateTimeline];

export async function router(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const targetRoute = routes.find(
    (route) => route.url.exec(url) && route.method === req.method
  );
  const response = targetRoute
    ? await targetRoute.handler(req)
    : new Response("Not found", { status: 404 });
  return response;
}
