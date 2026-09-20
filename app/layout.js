import "./globals.css";
import { CartProvider } from "../context/CartContext";

export const metadata = {
  title: "Baklave i urmašice",
  description: "Domaće baklave i urmašice, pripremljene po porodičnom receptu.",
  metadataBase: new URL("https://baklaveurmasice.tdispaces.com"),
  openGraph: {
    title: "Baklave i urmašice",
    description: "Domaće baklave i urmašice, pripremljene po porodičnom receptu.",
    url: "/",
    siteName: "Baklave i urmašice",
    locale: "sr_RS",
    type: "website",
    images: [
      {
        url: "/assets/img/hero/hero-naslovna1-krug.png",
        width: 1024,
        height: 1024,
        type: "image/png",
        alt: "Baklava i urmašica sa orasima na tanjiru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baklave i urmašice",
    description: "Domaće baklave i urmašice, pripremljene po porodičnom receptu.",
    images: ["/assets/img/hero/hero-naslovna1-krug.png"],
  },
  icons: {
    icon: "/assets/img/favicon.png",
    apple: "/assets/img/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body suppressHydrationWarning>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
