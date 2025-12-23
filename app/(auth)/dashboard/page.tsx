"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUser } from "../../_lib/auth";

export default function DashboardPage() {
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    // Run in a microtask to avoid synchronous state update warnings
    const token = localStorage.getItem("token");
    const user = getUser();

    if (!token || !user) {
      router.push("/login"); // redirect if not authenticated
      return;
    }

    // Update state asynchronously
    setTimeout(() => setUserName(user.name), 0);
  }, [router]);

  if (!userName) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">Welcome, {userName}!</h1>
    </div>
  );
}
