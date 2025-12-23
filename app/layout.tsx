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
  description: "TinyTals App - Your platform for amazing tasks",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    type: "website",
    url: "https://task-nine-pied.vercel.app/",
    title: "TinyTals App",
    description: "TinyTals App -  task",
    images: [
      {
        url: "https://task-nine-pied.vercel.app/logo.svg",
        width: 1200,
        height: 630,
        alt: "TinyTals App OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TinyTals App",
    description: "TinyTals App - task",
    images: ["https://task-nine-pied.vercel.app/logo.svg"],
  },
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
