"use client";

import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi"; // optional icon

export default function LogoutBtn() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="
        flex items-center justify-center gap-2
        px-4 py-2
        sm:px-6 sm:py-3
        bg-red-500 text-white font-medium
        rounded-lg
        shadow-md
        hover:bg-red-600
        focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50
        transition-all duration-200
      "
    >
      <FiLogOut className="w-5 h-5 sm:w-6 sm:h-6" />
      <span className="text-sm sm:text-base">Logout</span>
    </button>
  );
}
