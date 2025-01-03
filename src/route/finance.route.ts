import { Route } from "./type.ts";
import { updateTimeline } from "../feature/finance/controller.ts";

export const updateTimelineRoute: Route = {
  url: new URLPattern({ pathname: "/finance/update-timeline" }),
  method: "POST",
  handler: updateTimeline,
};
