// FILE: src/app/api/download/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  try {
    // Fetch file dari GitHub/Source External
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    if (!response.body) {
      throw new Error("No response body");
    }

    const contentLength = response.headers.get("content-length");
    const contentType = response.headers.get("content-type");
    
    // Ambil nama file dari URL
    const fileName = url.split('/').pop() || "app.apk";

    // Siapkan headers untuk response ke browser
    const headers = new Headers();
    if (contentLength) headers.set("Content-Length", contentLength); // Penting untuk progress bar
    if (contentType) headers.set("Content-Type", contentType);
    headers.set("Content-Disposition", `attachment; filename="${fileName}"`);

    // Stream data langsung ke user tanpa simpan di server
    return new NextResponse(response.body, {
      status: 200,
      headers: headers,
    });

  } catch (error) {
    console.error("Download proxy error:", error);
    return NextResponse.json({ error: "Download failed" }, { status: 500 });
  }
}
