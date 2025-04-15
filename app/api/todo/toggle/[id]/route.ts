import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/drizzle";
import { todo } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const current = await db.select().from(todo).where(eq(todo.id, id)).limit(1);
  const existingTodo = current[0];

  if (!existingTodo) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  await db
    .update(todo)
    .set({ done: !existingTodo.done })
    .where(eq(todo.id, id));

  return NextResponse.json({ message: "Todo updated!" }, { status: 200 });
}
