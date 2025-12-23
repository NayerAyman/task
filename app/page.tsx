import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-12 text-center">
        Select a Task
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* UI Task Card */}
        <Link href="/tinytales" className="group">
          <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
            <div className="relative w-full h-64">
              <Image
                src="/imgs/ui.png" // replace with your image
                alt="UI Task"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h2 className="text-2xl font-bold text-white">UI Task</h2>
            </div>
          </div>
        </Link>

        {/* Auth Task Card */}
        <Link href="/login" className="group">
          <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
            <div className="relative w-full h-64">
              <Image
                src="/imgs/auth.png" // replace with your image
                alt="Auth Task"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h2 className="text-2xl font-bold text-white">Auth Task</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
