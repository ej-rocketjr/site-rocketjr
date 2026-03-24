import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import CursorBlur from "@/components/ui/cursorBlur";
import "./globals.css";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://www.rocketjr.com.br"),
  title: {
    default: "RocketJR | Soluções Digitais e Desenvolvimento Web",
    template: "%s | RocketJR",
  },
  description:
    "A RocketJR é a Empresa Júnior de Sistemas de Informação da UFAL que desenvolve sites, e-commerces e soluções digitais para empresas.",
  keywords: [
    "empresa júnior de tecnologia",
    "desenvolvimento de sites",
    "e-commerce",
    "soluções digitais",
    "transformação digital",
    "análise de dados",
    "sistemas de informação",
    "landing pages",
  ],
  applicationName: "RocketJR",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RocketJR | Soluções Digitais e Desenvolvimento Web",
    description:
      "A RocketJR e a Empresa Júnior de Sistemas de Informação da UFAL que desenvolve sites, e-commerces e soluções digitais para empresas.",
    url: "/",
    siteName: "RocketJR",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RocketJR | Soluções Digitais e Desenvolvimento Web",
    description:
      "A RocketJR e a Empresa Júnior de Sistemas de Informação da UFAL que desenvolve sites, e-commerces e soluções digitais para empresas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <CursorBlur />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
