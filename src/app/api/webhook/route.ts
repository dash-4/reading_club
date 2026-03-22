import { bot } from "@/lib/bot";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await bot.handleUpdate(body);
    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("Webhook error:", err);
    return new Response("Error", { status: 500 });
  }
}

export const runtime = "nodejs";    