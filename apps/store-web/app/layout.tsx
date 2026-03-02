import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MiniStoreX POS",
  description: "Point of Sale for MiniStoreX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
