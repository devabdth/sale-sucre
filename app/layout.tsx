import { DefaultFooter, DefaultHeader } from "@/components/globals";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TreGurus - Sale Sucre",
  icons: [
    {
        rel: "icon",
        type: "image/ico",
        sizes: "64x64",
        url: "./favicon.ico"
    },
  ],
  description: "Solid Draft Presented by TreGurus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <link rel="icon" href="/favicon.ico" sizes="any" />
            <DefaultHeader />
            {children}
            <DefaultFooter />
        </body>
    </html>
  );
}
