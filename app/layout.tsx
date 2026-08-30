import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import logo from "../img/logo.png";
import Image from "next/image";

const notoSansThai = Noto_Sans_Thai({ subsets: ["thai"] });

export const metadata: Metadata = { title: "Student Manager" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className={`${notoSansThai.className} bg-[#f5f0ff] flex flex-col min-h-screen`}>
        <ThemeProvider>
          {/* Navbar & Header */}
          <header className="sticky top-0 z-50 bg-white text-black shadow-sm border-b border-zinc-100">
            <div className="max-w-5xl mx-auto p-4 flex justify-between items-center">
              
              {/* กลุ่มฝั่งซ้าย: รูป Logo + เมนู Home, Dashboard, Students */}
              <div className="flex items-center gap-8">
                <Link href="/" className="flex items-center">
                  <Image
                    src={logo}
                    alt="Logo"
                    className="h-8 w-auto object-contain"
                  />
                </Link>

                <nav className="flex items-center gap-6 font-medium text-sm text-zinc-700">
                  <Link href="/" className="hover:text-[#000000] transition-colors">Home</Link>
                  <Link href="/dashboard" className="hover:text-[#000000] transition-colors">Dashboard</Link>
                  <Link href="/students" className="hover:text-[#000000] transition-colors">Students</Link>
                </nav>
              </div>

              {/* กลุ่มฝั่งขวา: ThemeToggle แยกอยู่ขวาสุด */}
              <div className="flex items-right gap-4">
                <Link href="/add">
                  <button className="bg-[#CC0000] text-white py-2 px-3 rounded-xl shadow-md hover:bg-[#CC0033] transition-all">
                    เพิ่มข้อมูล
                  </button>
                </Link>
                <ThemeToggle />
              </div>

            </div>
          </header>

          {/* Content */}
          <main className="flex-1 w-full max-w-5xl mx-auto p-4 md:p-8">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-white border-t border-zinc-100 text-black text-center p-4 mt-auto text-sm">
            <p>&copy; 2026 Student Manager — สงวนสิทธิ์</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
