"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUser } from "../../_lib/auth";
import LogoutBtn from "@/app/_components/ui/LogoutBtn";

export default function DashboardPage() {
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = getUser();

    if (!token || !user) {
      router.push("/login");
      return;
    }

    setTimeout(() => setUserName(user.name), 0);
  }, [router]);

  if (!userName) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500 text-lg animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
        Welcome, {userName}!
      </h1>
      <LogoutBtn />
    </div>
  );
}
