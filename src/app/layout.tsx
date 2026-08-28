import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/components/language-context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sindo Groups — Ekosistem Korporasi Terintegrasi | PT Solusi Investasi Indonesia",
  description:
    "SINDO GROUPS — ekosistem korporasi terintegrasi yang menghubungkan strategi, hukum, teknologi, operasi, kemitraan, dan investasi. Smart Port, logistik kemaritiman, energi, IoT, dan investasi lintas batas Indonesia–Tiongkok. 2026–2030.",
  keywords: [
    "Sindo Groups",
    "PT Solusi Investasi Indonesia",
    "ekosistem korporasi",
    "smart port",
    "pelabuhan cerdas",
    "logistik kemaritiman",
    "energi surya",
    "IoT",
    "investasi Indonesia",
    "GalaxyLink",
    "kemitraan strategis",
  ],
  authors: [{ name: "Sindo Groups" }],
  icons: {
    icon: "/logo-sindo.png",
  },
  openGraph: {
    title: "Sindo Groups — Ekosistem Korporasi Terintegrasi",
    description:
      "Strategi • Hukum • Teknologi • Operasi • Kemitraan • Investasi. Dari struktur yang jelas menuju pertumbuhan yang bernilai.",
    siteName: "Sindo Groups",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sindo Groups — Ekosistem Korporasi Terintegrasi",
    description:
      "Strategi • Hukum • Teknologi • Operasi • Kemitraan • Investasi.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        <LanguageProvider>{children}</LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
