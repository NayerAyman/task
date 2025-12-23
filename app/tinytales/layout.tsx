import type { Metadata } from "next";
import Header from "../_components/header/Header";
import Footer from "../_components/footer/Footer";
import BackButton from "../_components/BackButton";

export const metadata: Metadata = {
  title: "TinyTals App",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main id="mainLayout">
      <BackButton />
      <Header />
      {children}
      <Footer />
    </main>
  );
}
