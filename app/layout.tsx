import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restaurant POS Sales Analyzer",
  description: "Analyze restaurant POS data for profit optimization. Connect Square, Toast, and Clover to identify your most profitable menu items and peak hours."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="645c93b6-93f0-43fc-9413-042e659bfbee"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
