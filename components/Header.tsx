"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [currentTime, setCurrentTime] = React.useState("");

  React.useEffect(() => {
    setCurrentTime(
      new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    );

    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full bg-white">
      <div className="w-full bg-[#032977]">
        <div className="max-w-7xl mx-auto px-35 py-5">
          <Link href="/" className="block hover:opacity-90 transition-opacity">
            <div className="flex justify-between items-center">
              {/* Logo and Department Info */}
              <div
                className="flex gap-4 items-center flex-1"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/images/logo/deped_logo.png"
                    alt="DepEd Logo"
                    width={96}
                    height={96}
                    className="rounded-full shadow-lg object-cover"
                  />
                </div>

                <div className="flex-1">
                  <p className="text-xs text-gray-100 leading-tight">
                    Department of Education
                  </p>
                  <p className="text-xs text-gray-100 leading-tight">
                    Region IV-A, CALABARZON
                  </p>
                  <h1 className="font-bold text-white mt-1 text-base decoration-white decoration-2">
                    SCHOOLS DIVISION OFFICE OF IMUS CITY
                  </h1>
                  <p className="text-xs text-gray-100 mt-1 leading-tight">
                    Satorre St. Toclong I.C., Imus City, Cavite, 4103
                    Philippines
                  </p>
                </div>
              </div>

              {/* Right Side - Date/Time */}
              <div
                className="text-right text-xs"
                style={{ fontFamily: "Arabato, sans-serif" }}
              >
                <p className="text-gray-100">Philippine Standard Time:</p>
                <p className="text-gray-100 mb-15">{currentTime}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
