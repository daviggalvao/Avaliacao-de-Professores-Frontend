import type { Metadata } from "next";
import '../app/globals.css';

export const metadata: Metadata = {
  title: "Avalia aê",
  description: "Site de avaliação de professores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
