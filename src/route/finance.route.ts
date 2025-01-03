import { Route } from "./type.ts";

export const updateTimeline: Route = {
  url: new URLPattern({ pathname: "/finance/update-timeline" }),
  method: "POST",
  handler: async (req) => {
    const body = await req.json();
    console.log(body);
    return new Response("OK");
  },
};
