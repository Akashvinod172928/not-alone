import { NextResponse } from "next/server";
import { GOOGLE_FORM_URL, GOOGLE_FORM_FIELDS } from "@/config/site";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const languagesStr = Array.isArray(body.languages)
      ? body.languages.join(", ")
      : String(body.languages || "");

    const formParams = new URLSearchParams();

    // Map exact entry.XXXXXXXX IDs to values
    formParams.append(GOOGLE_FORM_FIELDS.name, body.name || "");
    formParams.append(GOOGLE_FORM_FIELDS.age, String(body.age || ""));
    formParams.append(GOOGLE_FORM_FIELDS.gender, body.gender || "Female");
    formParams.append(GOOGLE_FORM_FIELDS.phone, body.phone || "");
    formParams.append(GOOGLE_FORM_FIELDS.whatsapp, body.whatsapp || body.phone || "");
    formParams.append(GOOGLE_FORM_FIELDS.location, body.location || "");
    formParams.append(GOOGLE_FORM_FIELDS.languages, languagesStr);
    formParams.append(GOOGLE_FORM_FIELDS.about, body.about || body.whyJoin || "");
    formParams.append(GOOGLE_FORM_FIELDS.whyJoin, body.whyJoin || "");

    console.log("Submitting to Google Form response endpoint:", formParams.toString());

    // Submit URL-encoded form data to Google Forms formResponse endpoint
    const response = await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      body: formParams.toString(),
      redirect: "follow",
    });

    console.log("Google Form submission response status:", response.status);

    // Google Forms returns 200 OK or 302 Redirect upon successful response registration
    if (response.ok || response.status === 200 || response.status === 302) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { success: false, message: "Failed to record response in Google Form" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("Error submitting to Google Form endpoint:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
