import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ error: "You must be signed in to access this endpoint" }),
      { status: 401 }
    );
  }

  return NextResponse.json({
    content: "This is protected content. You can access this because you are signed in.",
    session,
  });
}
