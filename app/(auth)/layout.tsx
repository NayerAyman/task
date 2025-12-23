"use client";

import BackButton from "../_components/BackButton";
import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation"; // ✅ use App Router

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);

    // Access localStorage only on client
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard"); // ✅ navigate after mount
    }
  }, [router]);

  // Wait until client has mounted
  if (!isMounted) return null;

  return (
    <>
      <BackButton />
      {children}
    </>
  );
}
