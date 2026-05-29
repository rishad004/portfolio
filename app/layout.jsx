import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rishad004.github.io";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhammed Rishad | Senior Backend Developer",
    template: "%s | Muhammed Rishad"
  },
  description:
    "Muhammed Rishad is a senior back-end developer in Kerala building scalable APIs, microservices, and high-performance systems with Go, Node.js, PostgreSQL, gRPC, Kafka, Docker, and Kubernetes.",
  keywords: [
    "Muhammed Rishad",
    "Rishad backend developer",
    "Golang developer Kerala",
    "Node.js backend developer",
    "Go microservices developer",
    "Senior Backend Developer",
    "API developer",
    "PostgreSQL developer"
  ],
  authors: [{ name: "Muhammed Rishad", url: siteUrl }],
  creator: "Muhammed Rishad",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Muhammed Rishad | Senior Backend Developer",
    description:
      "Backend developer specializing in Go, Node.js, scalable APIs, microservices, and production-grade systems.",
    siteName: "Muhammed Rishad Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Muhammed Rishad logo"
      }
    ]
  },
  twitter: {
    card: "summary",
    title: "Muhammed Rishad | Senior Backend Developer",
    description:
      "Go and Node.js backend developer building scalable APIs and high-performance systems.",
    images: ["/logo.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jetBrainsMono.variable} ${spaceGrotesk.variable}`}>
      <body className="relative">{children}</body>
    </html>
  );
}
