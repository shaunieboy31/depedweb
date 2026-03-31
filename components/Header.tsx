"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [currentTime, setCurrentTime] = React.useState("");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    const format = () =>
      new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

    // initialize after mount to avoid SSR/client mismatch
    setCurrentTime(format());

    const interval = setInterval(() => {
      setCurrentTime(format());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full bg-white">
      <div className="w-full bg-[#191970]">
        <div className="max-w-7xl mx-auto px-10 py-5">
          <Link href="/" className="block hover:opacity-90 transition-opacity">
            <div className="flex justify-between items-center">
              {/* Logo and Department Info */}
              <div
                className="flex gap-4 items-center flex-1"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                <div className="flex items-center gap-6 flex-shrink-0">
                  <div className="w-28 h-28 flex-shrink-0 flex items-center justify-center">
                    <Image
                      src="/images/logo/deped_logo.png"
                      alt="SDO Imus Logo"
                      width={110}
                      height={110}
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="flex-1 text-white" style={{ fontFamily: "serif" }}>
                  <p className="text-base leading-tight">
                    Department of Education
                  </p>
                  <p className="text-base leading-tight">
                    Region IV-A, CALABARZON
                  </p>
                  <h1 className="font-bold text-lg mt-0.5 underline decoration-1 tracking-tight">
                    SCHOOLS DIVISION OFFICE OF IMUS CITY
                  </h1>
                  <p className="text-xs mt-1 leading-tight opacity-90">
                    Satorre St. Toclong I-C, Imus, City Cavite, 4103 Philippines
                  </p>
                </div>
              </div>

               {/* Right Side - Date/Time & Admin Access */}
               <div className="flex items-center gap-6">
                 <div
                   className="text-right text-sm font-medium"
                   style={{ fontFamily: "serif" }}
                 >
                   <p className="text-gray-100 opacity-90 text-[10px] uppercase tracking-widest">Philippine Standard Time:</p>
                   <p
                     className="text-gray-100 font-bold"
                     suppressHydrationWarning
                   >
                     {mounted ? currentTime : null}
                   </p>
                 </div>

                 {/* Admin Quick Link */}
                 <Link 
                   href="/dashboard" 
                   className="p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all border border-white/10 group shadow-lg"
                   title="Admin Command Center"
                 >
                   <svg 
                     xmlns="http://www.w3.org/2000/svg" 
                     width="20" 
                     height="20" 
                     viewBox="0 0 24 24" 
                     fill="none" 
                     stroke="currentColor" 
                     strokeWidth="2" 
                     strokeLinecap="round" 
                     strokeLinejoin="round" 
                     className="text-blue-200 group-hover:text-white transition-colors"
                   >
                     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                   </svg>
                 </Link>
               </div>
            </div>
          </Link>
        </div>
      </div>
    </header>


  );
}
