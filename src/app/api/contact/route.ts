import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, organization, interest, message, lang } = body as {
      name?: string; email?: string; phone?: string; organization?: string;
      interest?: string; message?: string; lang?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "name, email, and message are required" },
        { status: 400 }
      );
    }

    const record = await db.contactMessage.create({
      data: {
        name: String(name).slice(0, 200),
        email: String(email).slice(0, 200),
        phone: phone ? String(phone).slice(0, 50) : null,
        organization: organization ? String(organization).slice(0, 200) : null,
        interest: interest ? String(interest).slice(0, 100) : null,
        message: String(message).slice(0, 5000),
        lang: lang === "en" ? "en" : "id",
      },
    });

    return NextResponse.json({ ok: true, id: record.id });
  } catch (err) {
    console.error("[api/contact] error", err);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const count = await db.contactMessage.count();
    return NextResponse.json({ ok: true, count });
  } catch {
    return NextResponse.json({ ok: true, count: 0 });
  }
}
