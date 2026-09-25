import { NextResponse } from "next/server";

// Placeholder integration point: no email/CRM service is configured yet.
// Wire this up to the chosen provider (e.g. Resend, SendGrid, HubSpot, a CRM
// webhook...) once credentials are available. For now it validates the
// payload and logs it so the flow can be verified end to end.
export async function POST(request: Request) {
  const data = await request.json().catch(() => null);

  if (!data || typeof data !== "object") {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  const required = ["nome", "email", "telefono"];
  const missing = required.filter((field) => !data[field]);
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: "missing_fields", fields: missing },
      { status: 400 },
    );
  }

  console.log("[preventivo] Nuova richiesta di preventivo:", data);

  return NextResponse.json({ ok: true });
}
