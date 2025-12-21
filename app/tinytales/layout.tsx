import type { Metadata } from "next";
import Header from "../_components/header/Header";

export const metadata: Metadata = {
  title: "TinyTals App",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header/>
        {children}
        {/* <Footer/> */}
    </>

  );
}
