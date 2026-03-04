"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/icons";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const menuItems = [
    {
      label: "Home Page",
      href: "/",
      dropdown: false,
    },
    {
      label: "About Us",
      href: "/about-us",
      dropdown: true,
      submenu: [
        { label: "History", href: "/about-us/history" },
        { label: "Division Profile", href: "/about-us/division-profile" },
        {
          label: "Organizational Structure",
          href: "/about-us/organizational-structure",
        },
        { label: "Employee of the Month", href: "/about-us/employee-of-month" },
        { label: "Learning Leaders", href: "/about-us/learning-leaders" },
      ],
    },
    {
      label: "Services",
      href: "#",
      dropdown: true,
      submenu: [
        { label: "Frontline Services", href: "/services/frontline" },
        { label: "Satisfaction", href: "/services/satisfaction" },
        { label: "Innovation", href: "/services/innovation" },
        { label: "SDOIC Easy Links", href: "/services/easy-links" },
        { label: "Online Services", href: "/services/online" },
      ],
    },
    {
      label: "Programs",
      href: "#",
      dropdown: true,
      submenu: [
        { label: "Learning Programs", href: "/programs/learning" },
        { label: "Special Programs", href: "/programs/special" },
        { label: "Development Programs", href: "/programs/development" },
      ],
    },
    { label: "News", href: "/news", dropdown: false },
    {
      label: "Schools",
      href: "#",
      dropdown: true,
      submenu: [
        { label: "Schools", href: "/schools" },
        { label: "School Directory", href: "/schools/directory" },
        { label: "Featured Schools", href: "/schools/featured" },
        { label: "Elementary", href: "/schools/elementary" },
        { label: "Junior High School", href: "/schools/junior-high" },
        { label: "Senior High School", href: "/schools/senior-high" },
      ],
    },
    { label: "Issuances", href: "/issuances", dropdown: false },
    { label: "Contact Us", href: "/contact", dropdown: false },
  ];

  return (
    <nav className="bg-[#f7f7f7] border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-35">
        <div className="flex items-center justify-between h-14">
          {/* Left - Brand */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-gray-700 font-semibold text-lg px-6 py-3.5 bg-[#f7f7f7]"
            >
              GOVPH
            </Link>
          </div>

          <Separator
            orientation="vertical"
            className="mx-3 h-6"
            decorative={false}
          />

          {/* Center - Menu */}
          <div className="flex-1 flex justify-center">
            <ul className="flex items-center gap-0 text-sm font-medium text-gray-700">
              {menuItems.map((item, idx) => {
                const isActive = item.href !== "#" && pathname === item.href;
                return (
                  <li
                    key={item.label}
                    className={`relative ${idx > 0 ? "border-l border-gray-100" : ""}`}
                    onMouseEnter={() => {
                      if (item.dropdown) {
                        if (closeTimer.current) {
                          clearTimeout(closeTimer.current as any);
                          closeTimer.current = null;
                        }
                        setOpenDropdown(item.label);
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.dropdown) {
                        closeTimer.current = setTimeout(() => {
                          setOpenDropdown(null);
                        }, 150);
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`transition-colors py-3.5 px-4 flex items-center gap-1 ${
                        isActive
                          ? "bg-gray-100 text-gray-900 font-semibold"
                          : "hover:text-blue-600"
                      }`}
                    >
                      {item.label}
                      {item.dropdown && (
                        <Icons.chevronDown size={14} className="ml-1" />
                      )}
                    </Link>

                    {item.dropdown &&
                      item.submenu &&
                      openDropdown === item.label && (
                        <div
                          className="absolute left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                          onMouseEnter={() => {
                            if (closeTimer.current) {
                              clearTimeout(closeTimer.current as any);
                              closeTimer.current = null;
                            }
                          }}
                          onMouseLeave={() => {
                            closeTimer.current = setTimeout(() => {
                              setOpenDropdown(null);
                            }, 150);
                          }}
                        >
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.label}
                              href={subitem.href}
                              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
                            >
                              {subitem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right - Search and Accessibility Icons */}
          <div className="flex items-center gap-3 ml-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search ..."
                className="px-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-40 bg-white"
              />
              <Icons.search
                className="absolute right-3 top-2.5 text-gray-400"
                size={16}
              />
            </div>
            <button
              className="bg-black text-white rounded-full p-2 w-9 h-9 flex items-center justify-center"
              aria-label="Accessibility"
            >
              <Icons.volume2 size={16} />
            </button>
            <button
              className="text-gray-700 hover:text-gray-900 font-serif text-2xl px-2"
              aria-label="Font size"
            >
              A
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
