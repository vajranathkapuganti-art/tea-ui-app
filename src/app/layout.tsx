import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tea Shop",
  description: "Bubble tea shop mobile UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full overflow-hidden">
      <body className="h-full flex flex-col font-sans antialiased">{children}</body>
    </html>
  );
}
