export async function updateTimeline(req: Request): Promise<Response> {
  const body = await req.json();
  console.dir(body);
  return new Response("OK");
}
