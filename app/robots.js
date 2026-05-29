const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rishad004.github.io";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl
  };
}
