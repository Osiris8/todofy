import { NextResponse } from "next/server";
import { db } from "@/db/drizzle";
import { todo } from "@/db/schema";

export async function GET() {
  try {
    const data = await db.select().from(todo);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error to fetch data :", error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { text } = body;

    if (!text) {
      return NextResponse.json({ message: "Undifined field" }, { status: 400 });
    }

    await db.insert(todo).values({ text });

    return NextResponse.json({ message: "Todo added !" }, { status: 201 });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ message: "Error server" }, { status: 500 });
  }
}
