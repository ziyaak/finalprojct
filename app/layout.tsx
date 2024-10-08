import type { Metadata } from "next";
import "./globals.css";
import HeaderTop from "@/src/components/HeaderTop";
import HeaderMain from "@/src/components/HeaderMain";
import CatMenu from "@/src/components/CatMenu";
import ProductShowcase from "@/src/components/MainMenu";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
          <HeaderTop/>
          <HeaderMain/>
          <CatMenu/>
          <ProductShowcase/>
        {children}
        </body>
    </html>
  );
}
