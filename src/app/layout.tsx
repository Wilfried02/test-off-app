import './globals.css'
import type { Metadata } from 'next'


const APP_NAME = "TEST OFF";
const APP_DEFAULT_TITLE = "TEST OFF";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "TEST OFF";

export const metadata: Metadata = {
    alternates: {
        canonical: "./",
    },
    referrer: "no-referrer",
    applicationName: APP_NAME,
    title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    manifest: "/manifest.json",
    authors: [{ name: "IT-SOLUTIONS", }],
    themeColor: "#201f1f",
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: APP_DEFAULT_TITLE,
    },
    formatDetection: {
        telephone: false,
    },
    icons: {
        shortcut: "/vercel.svg",
        apple: [
            // { url: "/icons/mstile-150x150.png", sizes: "152x152" },
            // { url: "/icons/touch-icon-ipad-retina.png", sizes: "167x167" },
            // { url: "/icons/touch-icon-iphone-retina.png", sizes: "180x180" },
        ],
    },
    openGraph: {
        type: "website",
        siteName: APP_NAME,
        title: {
            default: APP_DEFAULT_TITLE,
            template: APP_TITLE_TEMPLATE,
        },
        description: APP_DESCRIPTION,
        // images: "/icons/mstile-150x150.png",
    },
    twitter: {
        card: "summary",
        title: {
            default: APP_DEFAULT_TITLE,
            template: APP_TITLE_TEMPLATE,
        },
        description: APP_DESCRIPTION,
        // images: "/icons/apple-touch-icon.png",
    },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
