import { DefaultFooter, DefaultHeader } from "@/components/globals";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
            <DefaultHeader />
            {children}
            <DefaultFooter />
        </body>
    </html>
  );
}
