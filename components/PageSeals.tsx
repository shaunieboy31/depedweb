"use client";

import React from "react";
import Image from "next/image";

export default function PageSeals() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-center gap-100 mt-0">
          <a
            href="https://your-transparency-link.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/logo/transparency-seal.webp"
              alt="Transparency Seal"
              width={150}
              height={128}
              className="object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
          <a
            href="https://your-foi-link.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/logo/foi-logo.webp"
              alt="Freedom of Information Seal"
              width={160}
              height={128}
              className="object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
