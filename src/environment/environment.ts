import { EnvironmentVariable } from "./type.ts";
import { checkNullable } from "./util.ts";

// Template for .env/{env}.env file
//# Environment Variables
//PORT=8000
//HOST_NAME=127.0.0.1
//NOTION_API_KEY=dummy

const port = Deno.env.get("PORT");
checkNullable(port, "PORT");

const hostName = Deno.env.get("HOST_NAME");
checkNullable(hostName, "HOST_NAME");

const notionApiKey = Deno.env.get("NOTION_API_KEY");
checkNullable(notionApiKey, "NOTION_API_KEY");

export const environment: EnvironmentVariable = {
  PORT: parseInt(port!),
  HOST_NAME: hostName!,
  NOTION_API_KEY: notionApiKey!,
};
