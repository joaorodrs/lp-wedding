import type React from "react";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Planner de Casamento 2026 | Organize Seu Dia Perfeito",
  description:
    "Planeje seu casamento sem estresse com o guia completo. Controle financeiro, checklists, lista de convidados e muito mais. Garanta seu planner digital agora!",
  keywords: [
    "planner de casamento",
    "organizar casamento",
    "checklist de casamento",
    "orçamento de casamento",
    "planejamento de casamento 2026",
    "lista de convidados",
    "cronograma de casamento",
    "guia de noiva",
  ],
  authors: [{ name: "Thais Sousa" }],
  creator: "Thais Sousa",
  publisher: "Thais Sousa",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://seudominioaqui.com",
    siteName: "Planner de Casamento 2026",
    title: "Planner de Casamento 2026 | Organize Seu Dia Perfeito",
    description:
      "Planeje seu casamento sem estresse! E-book completo com controle financeiro, checklists, lista de convidados e muito mais. Acesso imediato após a compra.",
    images: [
      {
        url: "/images/5.jpg",
        width: 1200,
        height: 630,
        alt: "Planner de Casamento 2026 - Guia Completo para Noivas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Planner de Casamento 2026 | Organize Seu Dia Perfeito",
    description:
      "Planeje seu casamento sem estresse! E-book completo com controle financeiro, checklists e muito mais.",
    images: ["/images/5.jpg"],
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#8FA9A3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Planner de Casamento 2026",
    description:
      "E-book completo para planejar seu casamento sem estresse. Inclui controle financeiro, checklists, lista de convidados e muito mais.",
    image: "/images/5.jpg",
    brand: {
      "@type": "Brand",
      name: "Planner de Casamento",
    },
    offers: {
      "@type": "Offer",
      url: "https://seudominioaqui.com",
      priceCurrency: "BRL",
      price: "97.00",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "127",
    },
    author: {
      "@type": "Person",
      name: "Thais Sousa",
    },
  };

  return (
    <html lang="pt-BR">
      <body className={`${cormorantGaramond.variable} font-sans antialiased`}>
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '2661313790928781');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
              <img
                height="1"
                width="1"
                style="display:none"
                src="https://www.facebook.com/tr?id=2661313790928781&ev=PageView&noscript=1"
              />
            </noscript>
          </>
        )}

        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
