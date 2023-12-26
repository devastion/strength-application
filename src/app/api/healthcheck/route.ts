import { NextResponse } from "next/server";

export function GET() {
  const data = {
    status: "ok",
    time: Date.now(),
  };

  return NextResponse.json(data, { status: 200 });
}
