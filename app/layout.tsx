import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xonix - Authentication",
  description: "Login and sign up for Xonix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
