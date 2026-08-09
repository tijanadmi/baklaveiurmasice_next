import "./globals.css";
import { CartProvider } from "../context/CartContext";

export const metadata = {
  title: "Baklave i urmašice",
  description: "Domaće baklave i urmašice, pripremljene po porodičnom receptu.",
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
