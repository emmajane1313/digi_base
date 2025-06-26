import { NextResponse } from "next/server";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://emmajanemackinnonlee-digitalax.com";

export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
   <url>
        <loc>${baseUrl}/</loc>
         <image:image>
        <image:loc>${baseUrl}/images/seams.png</image:loc>
        <image:title><![CDATA[ Seams | DIGITALAX]]></image:title>
        <image:caption><![CDATA[ Seams | DIGITALAX]]></image:caption>
      </image:image>
      </url>
      <url>
        <loc>${baseUrl}/about/</loc>
         <image:image>
        <image:loc>${baseUrl}/images/emmajanemackinnonlee.png</image:loc>
        <image:title><![CDATA[ Emma-Jane MacKinnon-Lee | DIGITALAX]]></image:title>
        <image:caption><![CDATA[ Emma-Jane MacKinnon-Lee | DIGITALAX]]></image:caption>
      </image:image>
      </url>
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
