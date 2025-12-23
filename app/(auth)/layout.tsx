import type { Metadata } from "next";
import BackButton from "../_components/BackButton";

export const metadata: Metadata = {
  title: "TinyTals App",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <BackButton />
      {children}
    </>
  );
}
