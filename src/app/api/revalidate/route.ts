// app/api/revalidate/route.ts
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST() {
  revalidatePath("/");
  revalidatePath(`/posts/[slug]`);

  return NextResponse.json({ revalidated: true });
}
