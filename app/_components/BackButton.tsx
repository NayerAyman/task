import Link from "next/link";
import { FiHome } from "react-icons/fi";

export default function BackButton() {
  return (
    <Link
      href={"/"}
      className="fixed z-1000 bottom-5 right-5 bg-blue-400 text-white p-4 rounded-full hover:bg-blue-500 hover:scale-[1.1] duration-200"
    >
      <FiHome size={20} />
    </Link>
  );
}
