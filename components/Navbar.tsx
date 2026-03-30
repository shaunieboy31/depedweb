"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Icons } from "@/components/icons";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openNested, setOpenNested] = useState<string | null>(null);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const nestedCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const menuItems = [
    { label: "Home Page", href: "/", dropdown: false },
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
        {
          label: "Online Services",
          href: "/services/online",
          submenu: [
            {
              label: "Request / Submission of Documents",
              href: "/services/online/request-submission",
            },
            {
              label: "Document Tracking System Self Service",
              href: "/services/online/document-tracking",
            },
            {
              label: "Online Enrollment",
              href: "/services/online/online-enrollment",
            },
            {
              label: "Online Feedback",
              href: "/services/online/online-feedback",
            },
            { label: "Online OBE Form", href: "/services/online/online-obe" },
            { label: "PHILGEPS", href: "/services/online/philgeps" },
            {
              label: "QATAME Satisfaction Form",
              href: "/services/online/qatame-satisfaction",
            },
            {
              label: "Unified Information System",
              href: "/services/online/unified-info",
            },
            { label: "Vacancies", href: "/services/online/vacancies" },
            {
              label: "Bida System",
              href: "/services/online/bida-system",
              submenu: [
                {
                  label: "Health Check",
                  href: "/services/online/bida-system/health-check",
                },
              ],
            },
            {
              label: "Complaint Form",
              href: "/services/online/complaint-form",
            },
            {
              label: "ICT Easy Links",
              href: "/services/online/ict-easy-links",
            },
          ],
        },
      ],
    },
    {
      label: "Programs",
      href: "#",
      dropdown: true,
      submenu: [
        { label: "Central Office", href: "/programs/central-office" },
        { label: "Regional Office", href: "/programs/regional-office" },
        {
          label: "Division Office",
          href: "/programs/division-office",
          submenu: [
            { label: "OSDS", href: "/programs/division-office/osds" },
            { label: "CID", href: "/programs/division-office/cid" },
            { label: "SGOD", href: "/programs/division-office/sgod" },
          ],
        },
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
    <nav className="bg-white border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex items-center h-14 gap-4">
          {/* Left - Brand */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-gray-900 font-semibold text-base px-3 py-2 pr-2"
            >
              GOVPH
            </Link>
          </div>

          {/* Center - Menu */}
          <div className="flex-1 flex justify-start">
            <ul className="inline-flex items-center text-sm font-medium text-gray-700">
              {menuItems.map((item, idx) => {
                const isActive = item.href !== "#" && pathname === item.href;
                return (
                  <li
                    key={item.label}
                    className="relative border-l border-gray-200"
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
                        closeTimer.current = setTimeout(
                          () => setOpenDropdown(null),
                          150,
                        );
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`transition-colors block h-14 px-4 text-sm flex items-center whitespace-nowrap ${
                        isActive
                          ? "bg-gray-200 text-gray-900 font-bold"
                          : "text-gray-700 hover:bg-gray-200 hover:text-gray-900 hover:font-bold"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                      {item.dropdown && (
                        <Icons.chevronDown size={16} className="ml-1" />
                      )}
                    </Link>

                    {item.dropdown &&
                      item.submenu &&
                      openDropdown === item.label && (
                        <div
                          className="absolute left-0 top-full w-75 bg-white border border-gray-200 shadow-lg z-50"
                          onMouseEnter={() => {
                            if (closeTimer.current) {
                              clearTimeout(closeTimer.current as any);
                              closeTimer.current = null;
                            }
                          }}
                          onMouseLeave={() => {
                            closeTimer.current = setTimeout(
                              () => setOpenDropdown(null),
                              150,
                            );
                          }}
                        >
                          {item.submenu.map((subitem) => {
                            const nestedKey = `${item.label}::${subitem.label}`;
                            return (
                              <div
                                key={subitem.label}
                                className="relative"
                                onMouseEnter={() => {
                                  if (nestedCloseTimer.current) {
                                    clearTimeout(
                                      nestedCloseTimer.current as any,
                                    );
                                    nestedCloseTimer.current = null;
                                  }
                                  if (subitem.submenu) setOpenNested(nestedKey);
                                }}
                                onMouseLeave={() => {
                                  if (subitem.submenu) {
                                    nestedCloseTimer.current = setTimeout(
                                      () =>
                                        setOpenNested((prev) =>
                                          prev === nestedKey ? null : prev,
                                        ),
                                      150,
                                    );
                                  }
                                }}
                              >
                                <Link
                                  href={subitem.href}
                                  className="flex items-center justify-between px-4 py-4 text-gray-700 hover:bg-gray-200 hover:text-gray-700 hover:font-bold transition-colors text-sm whitespace-nowrap"
                                >
                                  <span>{subitem.label}</span>
                                  {subitem.submenu && (
                                    <span className="ml-2 text-gray-400">
                                      ›
                                    </span>
                                  )}
                                </Link>

                                {subitem.submenu &&
                                  openNested === nestedKey && (
                                    <div className="absolute left-full top-0 ml-0 w-75 bg-white border border-gray-200 shadow-lg z-50">
                                      {subitem.submenu.map((nested) => (
                                        <Link
                                          key={nested.label}
                                          href={nested.href}
                                          className="block px-4 py-3 text-gray-700 hover:bg-gray-200 hover:text-gray-700 hover:font-bold transition-colors text-sm whitespace-nowrap"
                                        >
                                          {nested.label}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right - Search and Accessibility Icons */}
          <div className="flex items-center gap-3 ml-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery.trim()) {
                  router.push(
                    `/search?q=${encodeURIComponent(searchQuery.trim())}`,
                  );
                }
              }}
              className="relative hidden sm:block"
            >
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                placeholder="Search ..."
                className="px-2 py-1 border border-gray-200 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-[#191970] w-36 bg-white"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 text-gray-400 p-1"
              >
                <Icons.search size={16} />
              </button>
            </form>
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
