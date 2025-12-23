import type { Metadata } from "next";
import "./_styling/globals.css";
import { Poppins } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // weights from Figma
  variable: "--font-poppins", // optional for CSS variables
});

export const metadata: Metadata = {
  title: "TinyTals App",
  icons:{
    icon:"/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.className} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
