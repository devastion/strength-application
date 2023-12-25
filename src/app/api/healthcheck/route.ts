/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
export function GET() {
  return Response.json(
    { status: "ok", time: Date.now() },
    {
      status: 200,
    }
  );
}
