"use client";

import React from "react";
import Image from "next/image";

// Helper component for identical links
function TLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#337ab7] hover:text-[#23527c] hover:underline">
      {children}
    </a>
  );
}

export default function TransparencySealPage() {
  return (
    <div className="bg-[#f9f9f9] min-h-screen py-10 font-sans text-[14px] leading-relaxed">
      <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-gray-200">
        
        {/* Header Section */}
        <div className="border-b-2 border-green-700 pb-4 mb-8 flex items-center gap-6">
          <Image
            src="/images/logo/transparency-seal-160x160.png"
            alt="Transparency Seal"
            width={120}
            height={120}
            className="flex-shrink-0"
          />
          <h1 className="text-3xl font-bold text-gray-800">Transparency Seal</h1>
        </div>

        {/* Legal Basis Section */}
        <div className="space-y-4 text-gray-700 mb-10">
          <p>
            National Budget Circular 542, issued by the Department of Budget and Management (DBM) on August 29, 2012, reiterates compliance with Section 93 of the General Appropriations Act of FY 2012. Section 93 is the Transparency Seal provision, to wit:
          </p>
          <p className="pl-8 italic">
            Sec. 93. Transparency Seal. To enhance transparency and enforce accountability, all national government agencies shall maintain a transparency seal on their official websites. The transparency seal shall contain the following information: (i) the agency’s mandates and functions, names of its officials with their position and designation, and contact information; (ii) annual reports, as required under National Budget Circular Nos. 507 and 507-A dated January 31, 2007 and June 12, 2007, respectively, for the last three (3) years; (iii) their respective approved budgets and corresponding targets immediately upon approval of this Act; (iv) major programs and projects categorized in accordance with the five key results areas under <TLink href="https://www.deped.gov.ph/wp-content/uploads/2018/10/20110513-EO-0043-BSA.pdf">E.O. No. 43, s. 2011</TLink>; (v) the program/projects beneficiaries as identified in the applicable special provisions; (vi) status of implementation and program/project evaluation and/or assessment reports; and (vii) annual procurement plan, contracts awarded and the name of contractors/suppliers/consultants.
          </p>
          <p className="pl-8 italic">
            The respective heads of the agencies shall be responsible for ensuring compliance with this section.
          </p>
          <p>
            A Transparency Seal, prominently displayed on the main page of the website of a particular government agency, is a certificate that it has complied with the requirements of Section 93. This Seal links to a page within the agency’s website which contains an index of downloadable items of each of the above-mentioned documents.
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-8 text-gray-800">
          
          <div>
            <p className="font-bold mb-4">
              DepEd – City Schools Division of Imus Compliance with Sec. 91 (Transparency Seal) <TLink href="https://www.officialgazette.gov.ph/2013/12/20/republic-act-no-10633/">R.A. No. 10633</TLink> (General Appropriations Act FY 2014)
            </p>
            
            <h2 className="font-bold text-base mt-6 mb-3">I. The Agency's Mandates, Vision, Mission, and List of Officials with their Position, Designation, and Contact Information</h2>
            <ul className="list-disc pl-10 space-y-1 mb-6">
              <li><TLink href="https://www.depedimuscity.com/about-us.php">Agency Mandate, Vision, Mision</TLink></li>
              <li><TLink href="https://www.depedimuscity.com/list_of_Officials.php">SDO Imus City Organizational Structure, Roles, and List of Officials with their Position, Designation, and Contact Information</TLink></li>
            </ul>

            <h2 className="font-bold text-base mt-8 mb-3">II. Annual Financial Reports</h2>
            <p className="italic text-sm mb-4">(as required under National Budget Circular Nos. 507 and 507-A dated January 31, 2007 and June 12, 2007, respectively, for the last three (3) years)</p>
            
            <div className="pl-6 space-y-6">
              <div>
                <h3 className="font-bold mb-2">A. Financial Accountability Reports</h3>
                <div className="pl-6 space-y-4">
                  <div>
                    <p className="font-bold">1. Statement of Appropriations, Allotments, Obligations, Disbursements and Balances (SAAOBDB - FAR No. 1)</p>
                    <ul className="list-disc pl-10 space-y-0.5 mt-1">
                      <li><TLink href="https://drive.google.com/drive/folders/1eSMNc_dYEslxicqz3vLH3aJ_id_4YE1y">2023</TLink> (Q1, Q2, Q3, Q4)</li>
                      <li><TLink href="https://drive.google.com/drive/folders/1uKsyx3pIS2CXD8IhaWBsx0as6_KA95fu">2022</TLink> (Q1, Q2, Q3, Q4)</li>
                      <li><TLink href="https://drive.google.com/drive/u/0/folders/1J06Uqy3klrjroIbghBM4Be07wmmQNull">2021</TLink> (Q1, Q2, Q3, Q4)</li>
                      <li><TLink href="https://drive.google.com/drive/u/0/folders/1CiwNngN3c8dMHGDL0ydRUU8X8WkSrjmU">2020</TLink> (Q1, Q2, Q3, Q4)</li>
                      <li><TLink href="https://drive.google.com/drive/u/0/folders/1lN73jjRjSVKOjAB5gHTTQhZnAESMMSfZ">2019</TLink> (Q1, Q2, Q3, Q4)</li>
                      <li><TLink href="https://drive.google.com/drive/u/0/folders/1dItWDZWtTi3_VIDHkeOPJbH8Lr4DXD53">2018</TLink> (Q1, Q2, Q3, Q4)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold">2. Summary of Statement of Appropriations, Allotments, Obligations, Disbursements and Balances by Object of Expenditures (FAR No. 1A)</p>
                    <ul className="list-disc pl-10 space-y-0.5 mt-1">
                      <li><TLink href="https://drive.google.com/drive/folders/1WlrBVQ-29TQ7tqKsj7FEcLfYEt_dkWa9">2023</TLink> (Q1, Q2, Q3, Q4)</li>
                      <li><TLink href="https://drive.google.com/drive/folders/1CKWiTEBuzSEvrfqp8XTw2BwC9Gr-B8yr">2022</TLink> (Q1, Q2, Q3, Q4)</li>
                      <li><TLink href="https://drive.google.com/drive/u/0/folders/1TVmcCT7uUyUSKEWO4RO6D5ABDrgxB56y">2021</TLink> (Q1, Q2, Q3, Q4)</li>
                      <li><TLink href="https://drive.google.com/drive/u/0/folders/1bz5X6R4F-3H_vTm8t9754_L3clJSzb5V">2020</TLink> (Q1, Q2, Q3, Q4)</li>
                      <li><TLink href="https://drive.google.com/drive/u/0/folders/1oINOH9J6kjYNUz86gmX2K4DGnEP6Dylz">2019</TLink> (Q1, Q2, Q3, Q4)</li>
                      <li><TLink href="https://drive.google.com/drive/u/0/folders/1e9pMhIxDn2wijWWF4OFFbRZRaMRlod6i">2018</TLink> (Q1, Q2, Q3, Q4)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold">3. Lists of Allotments and Sub-allotments (FAR No. 1b)</p>
                    <ul className="list-disc pl-10 space-y-0.5 mt-1">
                      <li><TLink href="https://drive.google.com/drive/folders/1H_DdVXN6QmeQZO0IJaT5VtUuAwuY1a4f">2023</TLink> (Q1, Q2, Q3, Q4)</li>
                      <li><TLink href="https://drive.google.com/drive/folders/1atZB2fFDZkfmnvOX7DBQE412O8cCZPL8">2022</TLink> (Q1, Q2, Q3, Q4)</li>
                      <li><TLink href="https://drive.google.com/drive/u/0/folders/1s2FJrfduBXgxLRRl4XAyQI31_Gg0kCfb">2021</TLink> (Q1, Q2, Q3, Q4)</li>
                      <li><TLink href="https://drive.google.com/drive/u/0/folders/1jxmhmrXApHwXImNt3EgTNCSqruKKNHYT">2020</TLink> (Q1, Q2, Q3, Q4)</li>
                      <li><TLink href="https://drive.google.com/drive/u/0/folders/1w3CnjSeLIgXkYCNSNtrKUGJtZprIC0sk">2019</TLink> (Q1, Q2, Q3, Q4)</li>
                      <li><TLink href="https://drive.google.com/drive/u/0/folders/1tQwj61D5iEf6nD2CfWf-mk-9QBCkylhr">2018</TLink> (Q1, Q2, Q3, Q4)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-2">B. Annual Report of Disbursement and Revenue</h3>
                <div className="pl-6 space-y-4">
                  <div>
                    <p className="font-bold">1. Disbursement (Consolidated Monthly Report of Disbursement - FAR No. 4)</p>
                    <ul className="list-disc pl-10 space-y-0.5 mt-1">
                      <li><TLink href="https://drive.google.com/drive/folders/1mJWzWvukXTNwrZUa4advNHqGRY4QG-Eb">2022</TLink> (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec)</li>
                      <li><TLink href="https://drive.google.com/drive/u/0/folders/1rWNbqerL6d07UbNXtB-z1xyTGdObnpUS">2021</TLink> (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec)</li>
                      <li><TLink href="https://drive.google.com/drive/u/0/folders/1my9xJ6cZYgqEN0MMe5s7dl0kQd4d1kki">2020</TLink> (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec)</li>
                      <li><TLink href="https://drive.google.com/drive/u/0/folders/1FuMx0NDb5D-K-ky4NSDWaH0FnWDnMSaI">2019</TLink> (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec)</li>
                      <li><TLink href="https://drive.google.com/drive/u/0/folders/15jkuxeu7fpWEqycivKVVuWrYnWYobsj0">2018</TLink> (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold">2. Revenue (Consolidated Quarterly Report of Revenue and other Receipts - FAR No. 5)</p>
                    <ul className="list-disc pl-10 space-y-0.5 mt-1">
                      <li><TLink href="https://drive.google.com/drive/u/0/folders/1_6GqZNKMd4NFohYXb4gmet_jh-96otl1">2022</TLink> (Q1, Q2, Q3, Q4)</li>
                      <li><TLink href="https://drive.google.com/drive/u/0/folders/1Ezos8YrFhyObGmPkEJEcQLesh1u7VCdJ">2021</TLink> (Q1, Q2, Q3, Q4)</li>
                      <li><TLink href="https://drive.google.com/drive/u/0/folders/1t98IJtZ-ihC3B5CcOH6ECbYZXNCDLiEI">2020</TLink> (Q1, Q2, Q3, Q4)</li>
                      <li><TLink href="https://drive.google.com/drive/u/0/folders/12d46uSnLahSY7wyStZ5zJ38iYVW7qYuF">2019</TLink> (Q1, Q2, Q3, Q4)</li>
                      <li><TLink href="https://drive.google.com/drive/u/0/folders/1ctFCea90advGeo2wYhtJ8nLdX8hffT1u">2018</TLink> (Q1, Q2, Q3, Q4)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-2">C. Annual and Quarterly Physical Report of Operations/Physical Plan</h3>
                <div className="pl-6 space-y-4">
                  <div>
                    <p className="font-bold">1. Annual and Quarterly Physical Report of Operations (BAR No. 1)</p>
                    <ul className="list-disc pl-10 space-y-0.5 mt-1">
                      <li>2021 (<TLink href="https://www.depedimuscity.com/TransparencySeal/PRS/SDO_IMUS-CITY_1st-Quarterly-BAR-1-Report_as-of-MArch-31-2021-with-signatures-2.pdf">Q1</TLink>, <TLink href="https://www.depedimuscity.com/a%22TransparencySeal/PRS/SDO-IMUS-CITY-R4a-_2nd-QTR-BAR-REPORT-July-5-2021.xlsx%22">Q2</TLink>, <TLink href="https://www.depedimuscity.com/a%22TransparencySeal/PRS/SDO-IMUS-CITY-R4a-3rd-QTR-BAR-REPORT-Oct-5-2021-bar-1-output.pdf%22">Q3</TLink>, <TLink href="https://www.depedimuscity.com/a%22TransparencySeal/PRS/SDO-IMUS-CITY-R4a-4th-QTR-BAR-REPORT-Oct-5-2021-bar-1-output.pdf%22">Q4</TLink>)</li>
                      <li>2020 (<TLink href="https://www.depedimuscity.com/TransparencySeal/BAR1-1stQuarter-FY-2020.xlsx">Q1</TLink>, <TLink href="https://www.depedimuscity.com/TransparencySeal/PRS/BAR1-2ndQuarter-FY-2020.xlsx">Q2</TLink>, <TLink href="https://www.depedimuscity.com/TransparencySeal/PRS/BAR1-3rdQuarter-FY-2020.xlsx">Q3</TLink>, <TLink href="https://www.depedimuscity.com/TransparencySeal/PRS/BAR1-4th-FY-2020-December-2020.xlsx">Q4</TLink>)</li>
                      <li>2019 (<TLink href="https://www.depedimuscity.com/TransparencySeal/PRS/1st-QTR-BAR-2019.xlsx">Q1</TLink>, <TLink href="https://www.depedimuscity.com/TransparencySeal/PRS/2nd-QTR-BAR-2019.xlsx">Q2</TLink>)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold">2. Annual Financial Plan (BED No. 1)</p>
                    <ul className="list-disc pl-10 space-y-0.5 mt-1">
                      <li><TLink href="https://www.depedimuscity.com/TransparencySeal/BED1/2023_BED1.pdf">FY 2023</TLink></li>
                      <li><TLink href="https://www.depedimuscity.com/TransparencySeal/BED1/2022_BED1.pdf">FY 2022</TLink></li>
                      <li><TLink href="https://www.depedimuscity.com/TransparencySeal/BED1/2021_BED1.pdf">FY 2021</TLink></li>
                      <li><TLink href="https://www.depedimuscity.com/TransparencySeal/BED1/2020_BED1.pdf">FY 2020</TLink></li>
                      <li><TLink href="https://www.depedimuscity.com/TransparencySeal/BED1/2019_BED1.pdf">FY 2019</TLink></li>
                      <li><TLink href="https://www.depedimuscity.com/TransparencySeal/BED1/2018_BED1.pdf">FY 2018</TLink></li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold">3. Annual Physical Plan (BED No. 2)</p>
                    <ul className="list-disc pl-10 space-y-0.5 mt-1">
                      <li><TLink href="https://www.depedimuscity.com/TransparencySeal/PRS/FY-2022-BED-of-SDO-IMUS-CITY.pdf">FY 2022</TLink></li>
                      <li><TLink href="https://www.depedimuscity.com/TransparencySeal/PRS/SDOIC-03C-PRS-File-007-Imus-City-R4a-New-BED2-FY-2021.xlsx">FY 2021</TLink></li>
                      <li><TLink href="https://www.depedimuscity.com/TransparencySeal/PRS/BED-2_IMUS-CITY_2020.xlsx">FY 2020</TLink></li>
                      <li><TLink href="https://www.depedimuscity.com/TransparencySeal/PRS/BED-2_IMUS-CITY-2019.xlsx">FY 2019</TLink></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="font-bold text-base mt-8 mb-3">III. DBM Approved Budget and Targets (GAA)</h2>
            <div className="pl-6 space-y-4">
              <div>
                <h3 className="font-bold mb-2">A. DBM Approved Budget Part for SDO Imus City</h3>
                <ul className="list-disc pl-10 space-y-0.5 mt-1">
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/DBM_GAA/GAA_2023.pdf">GAA 2023</TLink></li>
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/DBM_GAA/GAA_2022.pdf">GAA 2022</TLink></li>
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/DBM_GAA/GAA_2021.pdf">GAA 2021</TLink></li>
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/DBM_GAA/GAA_2020.pdf">GAA 2020</TLink></li>
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/DBM_GAA/GAA_2019.pdf">GAA 2019</TLink></li>
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/DBM_GAA/GAA_2018.pdf">GAA 2018</TLink></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">B. Performance Targets (SDO Imus City)</h3>
                <ul className="list-disc pl-10 space-y-0.5 mt-1">
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/PRS/BAR%201%204th%20Quarter%202022.pdf">GAA 2022</TLink></li>
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/PRS/BAR%201%204th%20Quarter%202021.pdf">GAA 2021</TLink></li>
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/PRS/GAA%202020.pdf">GAA 2020</TLink></li>
                </ul>
              </div>
            </div>

            <h2 className="font-bold text-base mt-8 mb-3">IV. Major Projects, Programs and Activities, Beneficiaries, and Status of Implementation</h2>
            <ul className="list-disc pl-10 space-y-0.5 mb-4">
              <li><TLink href="https://www.depedimuscity.com/TransparencySeal/PRS/MAJOR%20PPAs%202022.pdf">Major Projects, Programs and Activities (PPAs) (2022)</TLink></li>
              <li><TLink href="https://www.depedimuscity.com/TransparencySeal/PRS/MAJOR%20PPAs%202021.pdf">Major Projects, Programs and Activities (PPAs) (2021)</TLink></li>
              <li><TLink href="https://www.depedimuscity.com/TransparencySeal/PRS/MAJOR%20PPAs%202020.pdf">Major Projects, Programs and Activities (PPAs) (2020)</TLink>
                <ul className="list-[circle] pl-8 mt-1 space-y-0.5">
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/AIP/AIP-PROGRAMS-AND-PROJECTS-2020_for-submission-to-RO.pdf">AIP 2022</TLink></li>
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/AIP/SDOIC-03C-PRS-File-041c-AIP-FY-2021.pdf">AIP 2021</TLink></li>
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/AIP/SDOIC-03C-PRS-File-041c-AIP-FY-2022.pdf">AIP 2020</TLink></li>
                </ul>
              </li>
            </ul>
            <p className="italic text-xs mb-4">
              (Projects Categorized in Accordance with the Five Key Result Areas under E.O. No. 43, s. 2011. For DepEd Cluster, the Section 2. Key Results Area of our Social Contract is <strong>B. Poverty Reduction and Empowerment of the Poor and Vulnerable</strong>)
            </p>
            <ul className="list-disc pl-10 space-y-0.5 mb-6">
              <li><TLink href="https://www.depedimuscity.com/TransparencySeal/PRS/SDOIC-03C-PRS-File-042a-SDOIC-DASHBOARD-2022.pdf">Accomplishment Report of Education Dashboard 2022</TLink></li>
              <li><TLink href="https://www.depedimuscity.com/TransparencySeal/PRS/SDOIC-03C-PRS-File-042a-SDOIC%20DASHBOARD-Dashboard-SY202-2021.pdf">Accomplishment Report of Education Dashboard 2021</TLink></li>
              <li><TLink href="https://www.depedimuscity.com/TransparencySeal/PRS/SDOIC-03C-PRS-File-042a-SDOIC%20DASHBOARD-Dashboard%20-SY2019-2020.pdf">Accomplishment Report of Education Dashboard 2020</TLink></li>
              <li><TLink href="https://www.depedimuscity.com/TransparencySeal/PRS/SDOIC-03C-PRS-File-042a-SDOIC%20DASHBOARD-Dashboard-SY2018-2019.pdf">Accomplishment Report of Education Dashboard 2019</TLink></li>
            </ul>

            <h2 className="font-bold text-base mt-8 mb-3">V. Annual Procurement Plan, Contracts awarded, and the Name of Contractors/Suppliers/Consultants</h2>
            <div className="pl-6 space-y-4">
              <div>
                <h3 className="font-bold mb-2">A. Annual Procurement Plan</h3>
                <ul className="list-disc pl-10 space-y-0.5 mt-1">
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/Procurement/APP-2026.pdf">FY 2026 APP</TLink></li>
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/Procurement/APP-2025.pdf">FY 2025 APP</TLink></li>
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/Procurement/FY2024-APP.pdf">FY 2024 APP</TLink></li>
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/APP_CSE_Template_2023-SDOIC-Imus.xlsx">FY 2023 APP-CSE</TLink></li>
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/Procurement/APP_CSE_2022_SDO_Imus_City_2022.pdf">FY 2022 APP-CSE</TLink></li>
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/Procurement/APP-CSE-2021-Deped-Imus-City-IV-A-Calabarzon.pdf">FY 2021 APP-CSE</TLink></li>
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/Procurement/APP-CSE%202019.pdf">FY 2019 APP-CSE</TLink></li>
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/Procurement/APP-2022-latest.pdf">FY 2022 APP</TLink></li>
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/Procurement/APP-2021.pdf">FY 2021 APP</TLink></li>
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/Procurement/APP-2020.pdf">FY 2020 APP</TLink></li>
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/Procurement/APP-2019.pdf">FY 2019 APP</TLink></li>
                  <li><TLink href="https://www.depedimuscity.com/transparency_seal_v2.php">FY 2020 APCPI</TLink></li>
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/Procurement/APCPI%202019_0001.pdf">FY 2019 APCPI</TLink></li>
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/Procurement/Early-Procurement-2022.pdf">Early Procurement Activities</TLink></li>
                </ul>
              </div>
              <p className="font-bold">B. <TLink href="https://www.depedimuscity.com/transparency_seal_v2.php">List of Contracts awarded and Contractors/Suppliers/Consultants</TLink></p>
              <p className="font-bold">C. <TLink href="https://www.depedimuscity.com/TransparencySeal/Procurement/PhilGeps_posting_2022.pdf">Philippine Government Electronic Procurement System (PhilGeps) posting of SDO Imus City</TLink></p>
            </div>

            <h2 className="font-bold text-base mt-8 mb-3">VI. Quality Management System Certified by International Certifying Body or Agency Operations Manual</h2>
            <ul className="list-disc pl-10 space-y-0.5 mb-6">
              <li><TLink href="https://www.depedimuscity.com/TransparencySeal/IMUS-Certificate.pdf">SDO Imus City ISO 9001:2015 Certification</TLink></li>
              <li><TLink href="https://www.depedimuscity.com/about-us.php#services-99">DepEd Quality Policy Statement</TLink></li>
              <li><TLink href="https://www.depedimuscity.com/TransparencySeal/DO_s2021_009.pdf">DepEd National Quality Management System (DepEd Order No. 009, s. 2021)</TLink></li>
              <li><TLink href="https://www.depedimuscity.com/TransparencySeal/ISO-DM_s2022_014.pdf">The DepEd Quality Management System Manual and Procedures and Work Instructions Manual (DepEd Memorandum No. 014, s. 2022)</TLink></li>
            </ul>

            <h2 className="font-bold text-base mt-8 mb-3">VII. System of Ranking Delivery Units and Individuals</h2>
            <div className="pl-6 space-y-4">
              <div>
                <h3 className="font-bold mb-2">A. PBB Guidelines</h3>
                <ul className="list-disc pl-10 space-y-0.5 mt-1">
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/DO_2022_005.pdf">PBB Guidelines on Eligibility Requirements Accountability Matrix (DepEd Order No. 005, s. 2022)</TLink></li>
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/DO_s2021_007.pdf">Internal Multiyear Guidelines on the Grant of Performance-Based Bonus for the Department of Education Employees and Officials (DepEd Order No. 007, s. 2021)</TLink></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">B. Rating and Ranking of Delivery Units</h3>
                <ul className="list-disc pl-10 space-y-0.5 mt-1">
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/PBB/RO4A_PBB_Ranking-2020.pdf">FY 2020</TLink></li>
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/PBB/RO4A_PBB_Ranking-2019.pdf">FY 2019</TLink></li>
                  <li><TLink href="https://www.depedimuscity.com/TransparencySeal/PBB/RO4A_PBB_Ranking-2018.pdf">FY 2018</TLink></li>
                </ul>
              </div>
            </div>

            <h2 className="font-bold text-base mt-8 mb-3">VIII. Agency Review and Compliance Procedure of Statements of Assets and Financial Disclosure</h2>
            <ul className="list-disc pl-10 space-y-0.5 mb-6">
              <li><TLink href="https://www.depedimuscity.com/TransparencySeal/SALN/SALN-2021-COC.pdf">SALN Compliance 2021</TLink></li>
              <li><TLink href="https://www.depedimuscity.com/TransparencySeal/SALN/SALN_2020.pdf">SALN Compliance 2020</TLink></li>
              <li><TLink href="https://www.depedimuscity.com/TransparencySeal/SALN/SALN_2019.pdf">SALN Compliance 2019</TLink></li>
              <li><TLink href="https://www.depedimuscity.com/TransparencySeal/SALN/SALN_2018.pdf">SALN Compliance 2018</TLink></li>
            </ul>

            <h2 className="font-bold text-base mt-8 mb-3">IX. Freedom of Information (FOI) Program Compliance</h2>
            <ul className="list-disc pl-10 space-y-0.5 mb-6">
              <li><TLink href="https://www.depedimuscity.com/TransparencySeal/DO_s2016_72corr.pdf">DepEd People’s Freedom of Information (FOI) Manual</TLink></li>
              <li><TLink href="https://www.depedimuscity.com/TransparencySeal/FOI-Info-Program.pdf">Modified One-page Freedom of Information (FOI) Manual</TLink></li>
              <li><TLink href="https://docs.google.com/spreadsheets/d/1QWncGLFI_z5_oxwrm9eQVeGODY7RqQh2iLF5y4piwnE/edit#gid=1026049968">FOI Summary Reports, Registry and Inventory</TLink></li>
            </ul>

            <h2 className="font-bold text-base mt-8 mb-3">X. Management Accountability Report Card</h2>
            <ul className="list-disc pl-10 space-y-0.5 mb-6">
              <li><TLink href="https://www.depedimuscity.com/TransparencySeal/DepEd-MARC-1.pdf">MFO Accountability Report Card (MARC-I) (2018)</TLink></li>
              <li><TLink href="https://www.depedimuscity.com/TransparencySeal/DepEd-MARC-2.pdf">Management Accountability Report Card (MARC-II) (2018)</TLink></li>
              <li><TLink href="https://www.depedimuscity.com/TransparencySeal/DEPED_MARC-1_2017pdf.pdf">MFO Accountability Report Card (MARC-I) (2017)</TLink></li>
              <li><TLink href="https://www.depedimuscity.com/TransparencySeal/DEPED_MARC-2_2017.pdf">Management Accountability Report Card (MARC-II) (2017)</TLink></li>
            </ul>

            <h2 className="font-bold text-base mt-8 mb-3">XI. DepEd Freedom of Information (FOI) Manual</h2>
            <div className="pl-6 space-y-4 pb-12">
              <div>
                <h3 className="font-bold mb-2">A. DepEd Citizens’ Charter</h3>
                <p className="italic text-xs mb-2">In strict adherence with Section 6 of RA 11032, the Department of Education established the following service standards or DepEd Citizen’s Charter:</p>
                <ul className="list-disc pl-10 space-y-0.5 mt-1">
                  <li><TLink href="https://www.depedimuscity.com/DepEd-Citizens-Charter-2023.pdf">DepEd Citizen’s Charter 2023 (1st Edition)</TLink></li>
                </ul>
              </div>
              <p className="font-bold">B. <TLink href="https://www.depedimuscity.com/TransparencySeal/anti_fixing.pdf">Anti-Fixing Campaign</TLink></p>
              <p className="font-bold">C. <TLink href="https://www.depedimuscity.com/TransparencySeal/no_noon_break.pdf">No Noon Break Policy</TLink></p>
              <p className="font-bold">D. <TLink href="https://www.depedimuscity.com/TransparencySeal/ID-TEMPLATE.pdf">ID/Nameplates</TLink></p>
              <p className="font-bold">E. <TLink href="https://www.depedimuscity.com/TransparencySeal/PACD.pdf">Public Assistance and Complaints Desk</TLink></p>
              <p className="font-bold">F. <TLink href="https://docs.google.com/spreadsheets/d/1uG4WrFb3uj5UBslKNSig0nw9VcNHr0NNP1NjrTicobQ/edit?usp=sharing">Citizen/Client Satisfaction Results</TLink></p>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}
