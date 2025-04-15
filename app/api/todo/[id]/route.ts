import { db } from "@/db/drizzle";
import { eq } from "drizzle-orm";
import { todo } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  await db.delete(todo).where(eq(todo.id, id));

  return NextResponse.json({ message: "Todo deleted!" }, { status: 200 });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { text } = await req.json();
  const id = Number(params.id);

  if (isNaN(id) || typeof text !== "string") {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  try {
    await db.update(todo).set({ text }).where(eq(todo.id, id));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error editing todo:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
