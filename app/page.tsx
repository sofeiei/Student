"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [quote, setQuote] = useState("กำลังโหลดคำแนะนำ...");

  // ดึงข้อมูลจาก External API (ตามคำสั่งอาจารย์ข้อ 1)
  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setQuote(data.slip.advice))
      .catch(() => setQuote("Welcome to the Student Manager!"));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center mt-10 md:mt-20 gap-6 animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#000000] leading-tight animate-bounce-in">ระบบจัดการนักศึกษา</h2>
      
      <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-slide-up-delayed">
        <Link href="/dashboard">
          <button className="px-6 py-2.5 bg-[#700d2b] hover:bg-[#590a22] text-white font-semibold rounded-full shadow-sm hover:shadow  duration-200 inline-block text-center">
            แดช์บอร์ด
          </button>
        </Link>
        <Link href="/students">
          <button className="bg-[#700d2b] text-[#000000] font-semibold px-6 py-2.5 rounded-full hover:bg-[#590a22] inline-block hover:text-yellow-300 transition-all border border-[#c4b5fd] hover:scale-105 transform shadow-sm text-center">
            รายชื่อทั้งหมด
          </button>
        </Link>
      </div>

      {/* ส่วนแสดงข้อมูลจาก API ภายนอก */}
      {/* <div className="mt-12 bg-[#fff0f5] p-6 rounded-2xl shadow-sm border border-[#ffd6e7] max-w-md w-full">
        <p className="text-xs font-bold text-[#ff6fa5] uppercase tracking-widest mb-3">คำแนะนำประจำวัน (External API)</p>
        <p className="text-lg font-medium text-slate-700 italic">"{quote}"</p>
      </div> */}
    </div>
  );
}