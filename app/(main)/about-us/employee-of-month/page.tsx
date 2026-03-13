"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function EmployeeOfMonth() {
  // months — keep minimal. Place your images in `public/images/employees/{slug}.jpg`.
  const months = [
    "January 2024",
    "February 2024",
    "March 2024",
    "April 2024",
    "May 2024",
    "June 2024",
    "July 2024",
    "August 2024",
    "September 2024",
    "October 2024",
    "November 2024",
    "December 2024",
  ];

  // selected month key (use month string)
  const makeKey = (e: any) => (typeof e === "string" ? e : e.month);
  const [selectedKey, setSelectedKey] = useState<string>(() => months[0]);

  // track which month sections are open
  const [openIds, setOpenIds] = useState<string[]>([]);

  // derive index and navigation helpers from months
  const currentIndex = Math.max(
    0,
    months.findIndex((m) => m === selectedKey),
  );

  useEffect(() => {
    if (!months.includes(selectedKey)) setSelectedKey(months[0]);
  }, [selectedKey]);

  const nextMonth = () => {
    const next = (currentIndex + 1) % months.length;
    setSelectedKey(months[next]);
  };

  const prevMonth = () => {
    const prev = (currentIndex - 1 + months.length) % months.length;
    setSelectedKey(months[prev]);
  };

  const current = months[currentIndex] || months[0];

  const currentId = makeKey(current)
    .replace(/[^a-z0-9]+/gi, "-")
    .toLowerCase();
  const currentImageSrc = `/images/employees/${currentId}.jpg`;

  return (
    <div className="w-full">
      <section className="px-4 lg:px-16 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Employee of the Month
          </h1>

          {/* Quick-links (months) */}
          <nav className="mb-4">
            <ul className="list-disc pl-5 space-y-1 text-sm flex flex-wrap gap-2">
              {months.map((m) => {
                const id = makeKey(m)
                  .replace(/[^a-z0-9]+/gi, "-")
                  .toLowerCase();
                return (
                  <li key={id} className="mr-3">
                    <a
                      href={`#${id}`}
                      onClick={(ev) => {
                        ev.preventDefault();
                        setOpenIds((prev) =>
                          prev.includes(id) ? prev : [...prev, id],
                        );
                        // select this month so featured area updates
                        setSelectedKey(makeKey(m));
                        setTimeout(() => {
                          const el = document.getElementById(id);
                          if (el)
                            el.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                        }, 60);
                      }}
                      className="text-blue-600 hover:underline"
                    >
                      {m}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image Section */}
              <div className="flex items-center justify-center">
                <img
                  src={currentImageSrc}
                  alt={current}
                  loading="lazy"
                  className="w-64 h-64 object-cover rounded-lg"
                  onError={(ev) => {
                    // hide broken image and show simple fallback text
                    (ev.currentTarget as HTMLImageElement).style.display =
                      "none";
                    const parent = ev.currentTarget.parentElement;
                    if (parent) {
                      const fallback = document.createElement("div");
                      fallback.className =
                        "w-64 h-64 flex items-center justify-center bg-gray-50 rounded-lg border";
                      fallback.innerHTML = `<p class=\"text-sm text-gray-700 text-center\">${current}</p>`;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>

              {/* Content Section */}
              <div>
                <p className="text-blue-600 font-semibold text-lg mb-2">
                  {current}
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Featured
                </h2>
                <p className="text-gray-600 mb-6">Image slot for the month</p>

                {/* Navigation Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={prevMonth}
                    className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextMonth}
                    className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                    aria-label="Next"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Month sections (collapsible) */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              All Featured Employees
            </h2>
            <div className="flex flex-col gap-6">
              {months.map((month) => {
                const id = makeKey(month)
                  .replace(/[^a-z0-9]+/gi, "-")
                  .toLowerCase();
                const isOpen = openIds.includes(id);
                const imageSrc = `/images/employees/${id}.jpg`;
                return (
                  <section
                    key={id}
                    id={id}
                    className="bg-white rounded-lg border border-gray-200 p-4"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{month}</h3>
                        <p className="text-sm text-gray-600">
                          Image slot: {id}
                        </p>
                      </div>
                      <div>
                        <button
                          onClick={() =>
                            setOpenIds((prev) =>
                              prev.includes(id)
                                ? prev.filter((x) => x !== id)
                                : [...prev, id],
                            )
                          }
                          className="px-3 py-1 bg-blue-600 text-white rounded-md"
                          aria-expanded={isOpen}
                        >
                          {isOpen ? "Hide" : "View"}
                        </button>
                      </div>
                    </div>

                    <div
                      className={`mt-4 overflow-hidden transition-[max-height] duration-300 ${isOpen ? "max-h-[1200px]" : "max-h-0"}`}
                    >
                      <div className="rounded-lg bg-gray-50 p-4">
                        <img
                          src={imageSrc}
                          alt={month}
                          loading="lazy"
                          className="w-full max-h-96 object-cover rounded"
                        />
                        <div className="mt-3">
                          <p className="text-sm text-gray-700">
                            Add your image file at{" "}
                            <span className="font-mono">
                              /public/images/employees/{id}.jpg
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
