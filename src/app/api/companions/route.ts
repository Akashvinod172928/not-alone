import { NextResponse } from "next/server";

// In-memory application storage fallback
let applicationsStore: any[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const newApplication = {
      id: `NA-COMP-${Date.now()}`,
      name: body.name || "",
      age: body.age || "",
      gender: body.gender || "Female",
      phone: body.phone || "",
      whatsApp: body.whatsApp || body.phone || "",
      location: body.location || "",
      languages: Array.isArray(body.languages) ? body.languages.join(", ") : body.languages || "",
      whyJoin: body.whyJoin || "",
      applicationDate: new Date().toISOString().split("T")[0],
      status: "New", // Set automatically to New
    };

    applicationsStore.unshift(newApplication);

    console.log("New Companion Application Received:", newApplication);

    return NextResponse.json({
      success: true,
      message: "Application received successfully",
      data: newApplication,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error processing application" },
      { status: 400 }
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const format = searchParams.get("format");

  if (format === "csv") {
    const headers = [
      "Application ID",
      "Name",
      "Age",
      "Gender",
      "Phone",
      "WhatsApp",
      "Location",
      "Languages",
      "Why Join",
      "Application Date",
      "Status",
    ];

    const rows = applicationsStore.map((app) => [
      `"${app.id}"`,
      `"${(app.name || "").replace(/"/g, '""')}"`,
      `"${app.age}"`,
      `"${app.gender}"`,
      `"${app.phone}"`,
      `"${app.whatsApp}"`,
      `"${(app.location || "").replace(/"/g, '""')}"`,
      `"${(app.languages || "").replace(/"/g, '""')}"`,
      `"${(app.whyJoin || "").replace(/"/g, '""')}"`,
      `"${app.applicationDate}"`,
      `"${app.status}"`,
    ]);

    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

    return new Response(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="Not_Alone_Companion_Applications_${new Date().toISOString().slice(0, 10)}.csv"`,
      },
    });
  }

  return NextResponse.json({
    success: true,
    total: applicationsStore.length,
    data: applicationsStore,
  });
}
