import Link from "next/link";
import React from "react";

export default function DivisionOffice() {
  const units = [
    { label: "OSDS", href: "/programs/division-office/osds" },
    { label: "CID", href: "/programs/division-office/cid" },
    { label: "SGOD", href: "/programs/division-office/sgod" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Division Office</h1>
      <p className="text-gray-600 mb-6">Select a unit to view details.</p>

      <ul className="space-y-3">
        {units.map((u) => (
          <li key={u.href}>
            <Link
              href={u.href}
              className="text-blue-600 hover:underline text-lg"
            >
              {u.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
