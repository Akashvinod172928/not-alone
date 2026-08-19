import { NextResponse } from "next/server";
import { COMPANION_FORM_ENDPOINT } from "@/config/site";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const languagesStr = Array.isArray(body.languages)
      ? body.languages.join(", ")
      : String(body.languages || "");

    // Comprehensive multi-schema payload matching all Apps Script column conventions
    const payload: Record<string, string> = {
      // Lowercase & camelCase
      name: body.name || "",
      age: String(body.age || ""),
      gender: body.gender || "",
      phone: body.phone || "",
      whatsapp: body.whatsapp || body.phone || "",
      location: body.location || "",
      languages: languagesStr,
      whyJoin: body.whyJoin || "",

      // TitleCase / Standard Sheet Column Name variations
      Name: body.name || "",
      Age: String(body.age || ""),
      Gender: body.gender || "",
      Phone: body.phone || "",
      WhatsApp: body.whatsapp || body.phone || "",
      Location: body.location || "",
      Languages: languagesStr,
      "Why Join": body.whyJoin || "",
      "Why do you want to become a Companion?": body.whyJoin || "",
      "Why They Want to Join": body.whyJoin || "",
    };

    // Format query params & URLSearchParams
    const params = new URLSearchParams();
    Object.entries(payload).forEach(([key, val]) => {
      params.append(key, val);
    });

    const targetUrlWithParams = `${COMPANION_FORM_ENDPOINT}?${params.toString()}`;

    console.log("Sending payload to Google Apps Script:", payload);

    // Attempt 1: POST text/plain JSON to target URL with query params
    let response = await fetch(targetUrlWithParams, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    let text = await response.text();

    // Attempt 2: POST form-urlencoded if Attempt 1 was non-200 or HTML error
    if (!response.ok || text.includes("Sorry, unable to open")) {
      response = await fetch(COMPANION_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        },
        body: params.toString(),
        redirect: "follow",
      });
      text = await response.text();
    }

    // Attempt 3: GET query request if POST returned 401/html error (doGet execution fallback)
    if (!response.ok || text.includes("Sorry, unable to open")) {
      response = await fetch(targetUrlWithParams, {
        method: "GET",
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        },
        redirect: "follow",
      });
      text = await response.text();
    }

    let data: any = {};
    try {
      data = JSON.parse(text);
    } catch {
      data = { rawText: text };
    }

    console.log("Apps Script Response Status:", response.status);
    console.log("Apps Script Response Body:", data);

    const isSuccess =
      data.success === true ||
      data.result === "success" ||
      data.status === "success" ||
      data.success === "true" ||
      (response.ok &&
        !text.includes("Sorry, unable to open") &&
        !text.includes("Error") &&
        (text.includes("success") || text.includes("Success") || text.includes("OK")));

    if (isSuccess) {
      return NextResponse.json({ success: true, data });
    }

    if (response.status === 401 || text.includes("Sorry, unable to open")) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Google Apps Script returned 401 Unauthorized. In Google Apps Script, click Deploy > Manage Deployments > Edit, set 'Who has access' to 'Anyone', and click Deploy.",
          details: data,
        },
        { status: 401 }
      );
    }

    if (data.success === false) {
      return NextResponse.json(
        { success: false, message: data.message || "Submission failed" },
        { status: 400 }
      );
    }

    // If HTTP status is ok and not access error
    if (response.ok && !text.includes("Sorry, unable to open")) {
      return NextResponse.json({ success: true, data });
    }

    return NextResponse.json(
      { success: false, message: "Apps Script response error", details: data },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("Error submitting to Google Apps Script:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
