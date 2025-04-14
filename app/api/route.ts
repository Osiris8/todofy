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
