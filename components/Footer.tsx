import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div className="flex items-start gap-6">
            <Image
              src="/images/logo/govph-seal-mono-footer.jpg"
              alt="Republic of the Philippines Seal"
              width={160}
              height={160}
              className="w-40 h-40 object-contain"
            />
            <div>
              <h3
                className={cn(
                  "text-sm font-bold uppercase tracking-wider mb-2",
                )}
              >
                Republic of the Philippines
              </h3>
              <p className="text-xs text-gray-700">
                All content is in the public domain unless otherwise stated.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3
              className={cn("text-sm font-bold uppercase tracking-wider mb-2")}
            >
              About GOVPH
            </h3>
            <p className="text-xs text-gray-700 mb-2">
              Learn more about the Philippine government, its structure, how
              government works and the people behind it.
            </p>
            <ul className="space-y-1 text-xs">
              <li>
                <a
                  href="https://www.gov.ph/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  GOV.PH
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Open Data Portal
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Official Gazette
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3
              className={cn("text-sm font-bold uppercase tracking-wider mb-2")}
            >
              Government Links
            </h3>
            <ul className="space-y-1 text-xs">
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Office of the President
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Office of the Vice President
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Senate of the Philippines
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  House of Representatives
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Supreme Court
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Court of Appeals
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Sandiganbayan
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="mt-8" />
      </div>
    </footer>
  );
}
