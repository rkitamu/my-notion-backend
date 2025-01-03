export type Route = {
  url: URLPattern;
  method: HttpMethod;
  handler: (req: Request) => Promise<Response>;
};

export type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "PATCH"
  | "OPTIONS"
  | "HEAD"
  | "CONNECT"
  | "TRACE";
