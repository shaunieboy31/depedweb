import React from "react";

export default function OSDS() {
  const items = [
    "OFFICE OF THE SCHOOLS DIVISION SUPERINTENDENT",
    "OFFICE OF THE ASSISTANT SCHOOLS DIVISION SUPERINTENDENT",
    "ADMINISTRATIVE SERVICES UNIT",
    "HUMAN RESOURCE UNIT",
    "FINANCE UNIT",
    "INFORMATION AND COMMUNICATIONS TECHNOLOGY UNIT",
    "SUPPLY AND PROPERTIES",
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Division Office &gt; OSDS
      </h1>
      <hr className="mb-6 border-t border-blue-200" />

      <ul className="list-disc pl-6 space-y-2 text-blue-600">
        {items.map((it) => (
          <li key={it} className="text-lg">
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
