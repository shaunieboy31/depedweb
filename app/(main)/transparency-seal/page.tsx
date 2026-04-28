"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FileText, ChevronDown, LayoutGrid, CheckCircle2 } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function TransparencySealPage() {
  return (
    <div className="bg-[#f9f9f9] min-h-screen py-6 font-sans text-[14px] leading-relaxed">
      <div className="max-w-5xl mx-auto bg-white p-6 md:p-8 shadow-sm border border-gray-200">

        {/* Header Section */}
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-black text-black uppercase tracking-tighter italic">Transparency Seal</h1>
            <div className="h-1.5 w-24 bg-black/30 mx-auto" />
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">
              Compliance with Section 93 (Transparency Seal) of the GAA
            </p>
          </div>
        </div>

        {/* Legal Basis Section */}
        <section className="bg-[#ECEFF1]/50 p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="flex flex-col md:flex-row gap-10 items-start relative z-10">
            {/* Logo on Left (as per screenshot) */}
            <div className="flex-shrink-0 pt-2">
              <Image
                src="/images/logo/transparency-seal-160x160.png"
                alt="Transparency Seal Logo"
                width={120}
                height={120}
                className="opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content on Right */}
            <div className="space-y-6 text-slate-700 leading-relaxed font-medium text-sm md:text-base">
              <div className="flex items-center gap-3 text-[#4279D2] mb-4">
                <div className="p-2 bg-blue-50 rounded-xl border border-blue-100">
                   <FileText size={24} />
                </div>
                <h2 className="text-xl font-black uppercase tracking-tight text-slate-800">Legal Basis</h2>
              </div>

              <div className="space-y-6">
                <p>
                  National Budget Circular 542, issued by the Department of Budget and Management (DBM) on August 29, 2012,
                  reiterates compliance with Section 93 of the General Appropriations Act of FY 2012. Section 93 is the
                  Transparency Seal provision, to wit:
                </p>

                <div className="space-y-4">
                  <p className="font-bold">
                    Sec. 93. Transparency Seal. <span className="font-medium text-slate-600 italic">To enhance transparency and enforce accountability, all national government agencies shall maintain a transparency seal on their official websites. The transparency seal shall contain the following information: (i) the agency’s mandates and functions, names of its officials with their position and designation, and contact information; (ii) annual reports, as required under National Budget Circular Nos. 507 and 507-A dated January 31, 2007 and June 12, 2007, respectively, for the last three (3) years; (iii) their respective approved budgets and corresponding targets immediately upon approval of this Act; (iv) major programs and projects categorized in accordance with the five key results areas under <a href="https://www.officialgazette.gov.ph/2011/05/13/executive-order-no-43-s-2011/" target="_blank" rel="noopener noreferrer" className="text-[#4279D2] underline hover:text-[#4279D2]/80">E.O. No. 43, s. 2011</a>; (v) the program/projects beneficiaries as identified in the applicable special provisions; (vi) status of implementation and program/project evaluation and/or assessment reports; and (vii) annual procurement plan, contracts awarded and the name of contractors/suppliers/consultants.</span>
                  </p>
                </div>

                <p>
                  The respective heads of the agencies shall be responsible for ensuring compliance with this section.
                </p>

                <p>
                  A Transparency Seal, prominently displayed on the main page of the website of a particular government agency, is a certificate that it has complied with the requirements of Section 93. This Seal links to a page within the agency’s website which contains an index of downloadable items of each of the above-mentioned documents.
                </p>

                <p className="pt-4 border-t border-slate-200">
                  DepEd – City Schools Division of Imus Compliance with Sec. 91 (Transparency Seal) <a href="https://www.officialgazette.gov.ph/2013/12/20/republic-act-no-10633/" target="_blank" rel="noopener noreferrer" className="text-[#4279D2] underline hover:text-[#4279D2]/80 font-bold">R.A. No. 10633</a> (General Appropriations Act FY 2014)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Sections Grid */}
        <div className="space-y-6">
          
          <div className="flex items-center justify-between py-4 border-b border-slate-100 mb-4">
             <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-100">
                   <LayoutGrid size={24} />
                </div>
                <div>
                   <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Compliance Index</h2>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5 italic">Interactive Drill-down</p>
                </div>
             </div>
             <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100 italic font-bold text-[10px] uppercase tracking-widest">
                <CheckCircle2 size={14} />
                Verified SY 2026
             </div>
          </div>

          {/* I. Mandates and Officials */}
          <MainSection title="I. The Agency’s Mandates, Vision, Mission, and List of Officials with their Position, Designation, and Contact Information">
            <SubSection title="A. Agency Mandate, Vision, Mission">
              <ul className="space-y-2 pl-6">
                <ListItem title="Agency Mandate, Vision, Mission, and Core Values" href="https://www.depedimuscity.com/about-us.php" isExternal />
                <ListItem title="Legal Mandate (RA 9155)" href="/" />
              </ul>
            </SubSection>
            <SubSection title="B. SDO Imus City Organizational Structure, Roles, and List of Officials with their Position, Designation, and Contact Information">
              <ul className="space-y-2 pl-6">
                <ListItem title="SDO Imus City Organizational Structure, Roles, and List of Officials with their Position, Designation, and Contact Information" href="https://www.depedimuscity.com/list_of_Officials.php" isExternal />
              </ul>
            </SubSection>
          </MainSection>

          {/* II. Annual Financial Reports */}
          <MainSection title="II. Annual Financial Reports">
            <p className="text-slate-500 text-sm italic mb-4">
              (as required under National Budget Circular Nos. 507 and 507-A dated January 31, 2007 and June 12, 2007, respectively, for the last three (3) years)
            </p>

            {/* A. Financial Accountability Reports */}
            <SubSection title="A. Financial Accountability Reports">
              <ReportBlock title="1. Statement of Appropriations, Allotments, Obligations, Disbursements and Balances (SAAOBDB - FAR No. 1)">
                {[2023, 2022, 2021, 2020, 2019, 2018].map(year => (
                  <YearItem key={year} year={year.toString()} href={`https://drive.google.com/drive/folders/${getFar1Id(year)}`} />
                ))}
              </ReportBlock>

              <ReportBlock title="2. Summary of Statement of Appropriations, Allotments, Obligations, Disbursements and Balances by Object of Expenditures (FAR No. 1A)">
                {[2023, 2022, 2021, 2020, 2019, 2018].map(year => (
                  <YearItem key={year} year={year.toString()} href={`https://drive.google.com/drive/folders/${getFar1AId(year)}`} />
                ))}
              </ReportBlock>

              <ReportBlock title="3. Lists of Allotments and Sub-allotments (FAR No. 1b)">
                {[2023, 2022, 2021, 2020, 2019, 2018].map(year => (
                  <YearItem key={year} year={year.toString()} href={`https://drive.google.com/drive/folders/${getFar1BId(year)}`} />
                ))}
              </ReportBlock>
            </SubSection>

            {/* B. Annual Report of Disbursement and Revenue */}
            <SubSection title="B. Annual Report of Disbursement and Revenue">
              <ReportBlock title="1. Disbursement (Consolidated Monthly Report of Disbursement - FAR No. 4)">
                {[2022, 2021, 2020, 2019, 2018].map(year => (
                  <YearItem key={year} year={year.toString()} href="/" months />
                ))}
              </ReportBlock>
              <ReportBlock title="2. Revenue (Consolidated Quarterly Report of Revenue and other Receipts - FAR No. 5)">
                {[2022, 2021, 2020, 2019, 2018].map(year => (
                  <YearItem key={year} year={year.toString()} href="/" />
                ))}
              </ReportBlock>
            </SubSection>

            {/* C. Annual and Quarterly Physical Report of Operations/Physical Plan */}
            <SubSection title="C. Annual and Quarterly Physical Report of Operations/Physical Plan">
              <ReportBlock title="1. Annual and Quarterly Physical Report of Operations (BAR No. 1)">
                <YearItem year="2021" href="https://www.depedimuscity.com/TransparencySeal/PRS/SDO_IMUS-CITY_1st-Quarterly-BAR-1-Report_as-of-MArch-31-2021-with-signatures-2.pdf" />
                <YearItem year="2020" href="https://www.depedimuscity.com/TransparencySeal/BAR1-1stQuarter-FY-2020.xlsx" />
                <YearItem year="2019" href="https://www.depedimuscity.com/TransparencySeal/PRS/1st-QTR-BAR-2019.xlsx" quarters={["Q1", "Q2"]} />
              </ReportBlock>

              <ReportBlock title="2. Annual Financial Plan (BED No. 1)">
                <ul className="space-y-1 pl-6">
                  {[2023, 2022, 2021, 2020, 2019, 2018].map((year) => (
                    <ListItem key={year} title={`FY ${year}`} href={`https://www.depedimuscity.com/TransparencySeal/BED1/${year}_BED1.pdf`} isExternal />
                  ))}
                </ul>
              </ReportBlock>

              <ReportBlock title="3. Annual Physical Plan (BED No. 2)">
                <ul className="space-y-1 pl-6">
                  <ListItem title="FY 2022" href="https://www.depedimuscity.com/TransparencySeal/PRS/FY-2022-BED-of-SDO-IMUS-CITY.pdf" isExternal />
                  <ListItem title="FY 2021" href="https://www.depedimuscity.com/TransparencySeal/PRS/SDOIC-03C-PRS-File-007-Imus-City-R4a-New-BED2-FY-2021.xlsx" isExternal />
                  <ListItem title="FY 2020" href="https://www.depedimuscity.com/TransparencySeal/PRS/BED-2_IMUS-CITY_2020.xlsx" isExternal />
                  <ListItem title="FY 2019" href="https://www.depedimuscity.com/TransparencySeal/PRS/BED-2_IMUS-CITY-2019.xlsx" isExternal />
                </ul>
              </ReportBlock>
            </SubSection>
          </MainSection>

          {/* III. Approved Budgets and Corresponding Targets (GAA) */}
          <MainSection title="III. DBM Approved Budgets and Corresponding Targets (GAA)">
            <SubSection title="A. DBM Approved Budget Part for SDO Imus City">
              <ul className="space-y-1 pl-6">
                <ListItem title="GAA 2023" href="https://www.depedimuscity.com/TransparencySeal/DBM_GAA/GAA_2023.pdf" isExternal />
                <ListItem title="GAA 2022" href="https://www.depedimuscity.com/TransparencySeal/DBM_GAA/GAA_2022.pdf" isExternal />
                <ListItem title="GAA 2021" href="https://www.depedimuscity.com/TransparencySeal/DBM_GAA/GAA_2021.pdf" isExternal />
                <ListItem title="GAA 2020" href="https://www.depedimuscity.com/TransparencySeal/DBM_GAA/GAA_2020.pdf" isExternal />
                <ListItem title="GAA 2019" href="https://www.depedimuscity.com/TransparencySeal/DBM_GAA/GAA_2019.pdf" isExternal />
                <ListItem title="GAA 2018" href="https://www.depedimuscity.com/TransparencySeal/DBM_GAA/GAA_2018.pdf" isExternal />
              </ul>
            </SubSection>
            <SubSection title="B. Performance Targets (SDO Imus City)">
              <ul className="space-y-1 pl-6">
                <ListItem title="GAA 2022" href="https://www.depedimuscity.com/TransparencySeal/PRS/BAR%201%204th%20Quarter%202022.pdf" isExternal />
                <ListItem title="GAA 2021" href="https://www.depedimuscity.com/TransparencySeal/PRS/BAR%201%204th%20Quarter%202021.pdf" isExternal />
                <ListItem title="GAA 2020" href="https://www.depedimuscity.com/TransparencySeal/PRS/GAA%202020.pdf" isExternal />
              </ul>
            </SubSection>
          </MainSection>

          {/* IV. Major Projects, Programs and Activities */}
          <MainSection title="IV. Major Projects, Programs and Activities, Beneficiaries, and Status of Implementation">
            <SubSection title="Major Projects, Programs and Activities (PPAs)">
              <ul className="space-y-1 pl-6">
                <ListItem title="Major Projects, Programs and Activities (PPAs) (2022)" href="https://www.depedimuscity.com/TransparencySeal/PRS/MAJOR%20PPAs%202022.pdf" isExternal />
                <ListItem title="Major Projects, Programs and Activities (PPAs) (2021)" href="https://www.depedimuscity.com/TransparencySeal/PRS/MAJOR%20PPAs%202021.pdf" isExternal />
                <ListItem title="Major Projects, Programs and Activities (PPAs) (2020)" href="https://www.depedimuscity.com/TransparencySeal/PRS/MAJOR%20PPAs%202020.pdf" isExternal />
              </ul>
            </SubSection>
            <SubSection title="Annual Implementation Plan (AIP)">
              <ul className="space-y-1 pl-6">
                <ListItem title="AIP 2022" href="https://www.depedimuscity.com/TransparencySeal/AIP/SDOIC-03C-PRS-File-041c-AIP-FY-2022.pdf" isExternal />
                <ListItem title="AIP 2021" href="https://www.depedimuscity.com/TransparencySeal/AIP/SDOIC-03C-PRS-File-041c-AIP-FY-2021.pdf" isExternal />
                <ListItem title="AIP 2020" href="https://www.depedimuscity.com/TransparencySeal/AIP/AIP-PROGRAMS-AND-PROJECTS-2020_for-submission-to-RO.pdf" isExternal />
              </ul>
            </SubSection>
            <SubSection title="Accomplishment Report of Education Dashboard">
              <ul className="space-y-1 pl-6">
                <ListItem title="2022" href={getDashboardHref(2022)} />
                <ListItem title="2021" href={getDashboardHref(2021)} />
                <ListItem title="2020" href={getDashboardHref(2020)} />
                <ListItem title="2019" href={getDashboardHref(2019)} />
              </ul>
            </SubSection>
          </MainSection>

          {/* V. Annual Procurement Plan */}
          <MainSection title="V. Annual Procurement Plan, Contracts awarded, and the Name of Contractors/Suppliers/Consultants">
            <SubSection title="A. Annual Procurement Plan">
              <ul className="space-y-1 pl-6">
                {["2026", "2025", "2024", "2023 APP-CSE", "2022 APP-CSE", "2021 APP-CSE", "2019 APP-CSE", "2022 APP", "2021 APP", "2020 APP", "2019 APP", "2020 APCPI", "2019 APCPI", "Early Procurement Activities"].map((item) => (
                  <ListItem key={item} title={item.includes("FY") ? item : `FY ${item}`} href={getAppHref(item)} isExternal />
                ))}
              </ul>
            </SubSection>
            <SubSection title="B. List of Contracts awarded and Contractors/Suppliers/Consultants">
              <ListItem title="List of Contracts awarded and Contractors/Suppliers/Consultants" href="https://www.depedimuscity.com/contracts-awarded.php" isExternal />
            </SubSection>
            <SubSection title="C. Philippine Government Electronic Procurement System (PhilGeps) posting of SDO Imus City">
              <ListItem title="Philippine Government Electronic Procurement System (PhilGeps) posting of SDO Imus City" href="https://www.depedimuscity.com/philgeps.php" isExternal />
            </SubSection>
          </MainSection>

          {/* VI. Quality Management System */}
          <MainSection title="VI. Quality Management System Certified by International Certifying Body or Agency Operations Manual">
            <ul className="space-y-2 pl-6">
              <ListItem title="SDO Imus City ISO 9001:2015 Certification" href="/" isExternal />
              <ListItem title="DepEd Quality Policy Statement" href="https://www.deped.gov.ph/wp-content/uploads/2021/05/Quality-Policy-Poster-revised.pdf" isExternal />
              <ListItem title="DepEd National Quality Management System (DO No. 009, s. 2021)" href="https://www.deped.gov.ph/wp-content/uploads/2021/02/DO_s2021_009.pdf" isExternal />
              <ListItem title="The DepEd QMS Manual and Procedures and Work Instructions Manual (DM No. 014, s. 2022)" href="https://www.deped.gov.ph/wp-content/uploads/2022/03/DM_s2022_014.pdf" isExternal />
            </ul>
          </MainSection>

          {/* VII. System of Ranking */}
          <MainSection title="VII. System of Ranking Delivery Units and Individuals">
            <SubSection title="A. PBB Guidelines">
              <ul className="space-y-1 pl-6">
                <ListItem title="PBB Guidelines on Eligibility Requirements Accountability Matrix (DepEd Order No. 005, s. 2022)" href="https://www.deped.gov.ph/wp-content/uploads/2022/02/DO_s2022_005.pdf" isExternal />
                <ListItem title="Internal Multiyear Guidelines on the Grant of Performance-Based Bonus for the Department of Education Employees and Officials (DepEd Order No. 007, s. 2021)" href="https://www.deped.gov.ph/wp-content/uploads/2021/02/DO_s2021_007.pdf" isExternal />
              </ul>
            </SubSection>
            <SubSection title="B. Rating and Ranking of Delivery Units">
              <ul className="space-y-1 pl-6">
                <ListItem title="FY 2020" href="/" />
                <ListItem title="FY 2019" href="/" />
                <ListItem title="FY 2018" href="/" />
              </ul>
            </SubSection>
          </MainSection>

          {/* VIII. SALN Compliance */}
          <MainSection title="VIII. Agency Review and Compliance Procedure of Statements of Assets and Financial Disclosure">
            <ul className="space-y-1.5 pl-6">
              <ListItem title="SALN 2021" href="https://www.depedimuscity.com/TransparencySeal/SALN/SALN_2021-COC.pdf" isExternal />
              <ListItem title="SALN 2020" href="https://www.depedimuscity.com/TransparencySeal/SALN/SALN_2020.pdf" isExternal />
              <ListItem title="SALN 2019" href="https://www.depedimuscity.com/TransparencySeal/SALN/SALN_2019.pdf" isExternal />
              <ListItem title="SALN 2018" href="https://www.depedimuscity.com/TransparencySeal/SALN/SALN_2018.pdf" isExternal />
            </ul>
          </MainSection>

          {/* IX. Freedom of Information (FOI) */}
          <MainSection title="IX. Freedom of Information (FOI) Program Compliance">
            <ul className="space-y-1.5 pl-6">
              <ListItem title="DepEd People's FOI Manual" href="https://www.deped.gov.ph/wp-content/uploads/2018/10/DO_s2017_072.pdf" isExternal />
              <ListItem title="FOI Reports (Q1-Q4) for 2018-2023" href="https://docs.google.com/spreadsheets/d/1QWncGLFI_z5_oxwrm9eQVeGODY7RqQh2iLF5y4piwnE/edit#gid=1026049968" isExternal />
              <ListItem title="Certificates of Compliance (2017-2022)" href="/" isExternal />
            </ul>
          </MainSection>

          {/* X. MARC Cards */}
          <MainSection title="X. MFO Accountability Report Card (MARC-1) and Management Accountability Report Card (MARC-2)">
            <ul className="space-y-1.5 pl-6">
              <ListItem title="MARC-I (2018)" href="https://www.depedimuscity.com/TransparencySeal/DepEd-MARC-1.pdf" isExternal />
              <ListItem title="MARC-II (2018)" href="https://www.depedimuscity.com/TransparencySeal/DepEd-MARC-2.pdf" isExternal />
              <ListItem title="MARC-I (2017)" href="https://www.depedimuscity.com/TransparencySeal/DEPED_MARC-1_2017pdf.pdf" isExternal />
              <ListItem title="MARC-II (2017)" href="https://www.depedimuscity.com/TransparencySeal/DEPED_MARC-2_2017.pdf" isExternal />
            </ul>
          </MainSection>

          {/* XI. FOI Manual */}
          <MainSection title="XI. DepEd Freedom of Information (FOI) Manual">
            <ListItem title="DepEd Freedom of Information (FOI) Manual" href="https://www.deped.gov.ph/wp-content/uploads/2018/10/DO_s2017_072.pdf" isExternal />
          </MainSection>

        </div>

        {/* Closing Compliance Info */}
        <div className="pt-10 border-t border-slate-200 text-center">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-relaxed">
            Official Website of Schools Division Office (SDO) Imus City | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

// Helper functions for IDs (Scraped from reference)
function getFar1Id(year: number) {
  const ids: Record<number, string> = {
    2023: "1eSMNc_dYEslxicqz3vLH3aJ_id_4YE1y",
    2022: "1uKsyx3pIS2CXD8IhaWBsx0as6_KA95fu",
    2021: "1J06Uqy3klrjroIbghBM4Be07wmmQNull",
    2020: "1CiwNngN3c8dMHGDL0ydRUU8X8WkSrjmU",
    2019: "1lN73jjRjSVKOjAB5gHTTQhZnAESMMSfZ",
    2018: "1dItWDZWtTi3_VIDHkeOPJbH8Lr4DXD53"
  };
  return ids[year] || "";
}

function getFar1AId(year: number) {
  const ids: Record<number, string> = {
    2023: "1WlrBVQ-29TQ7tqKsj7FEcLfYEt_dkWa9",
    2022: "1CKWiTEBuzSEvrfqp8XTw2BwC9Gr-B8yr",
    2021: "1TVmcCT7uUyUSKEWO4RO6D5ABDrgxB56y",
    2020: "1bz5X6R4F-3H_vTm8t9754_L3clJSzb5V",
    2019: "1oINOH9J6kjYNUz86gmX2K4DGnEP6Dylz",
    2018: "1e9pMhIxDn2wijWWF4OFFbRZRaMRlod6i"
  };
  return ids[year] || "";
}

function getFar1BId(year: number) {
  const ids: Record<number, string> = {
    2023: "1H_DdVXN6QmeQZO0IJaT5VtUuAwuY1a4f",
    2022: "1atZB2fFDZkfmnvOX7DBQE412O8cCZPL8",
    2021: "1s2FJrfduBXgxLRRl4XAyQI31_Gg0kCfb",
    2020: "1jxmhmrXApHwXImNt3EgTNCSqruKKNHYT",
    2019: "1w3CnjSeLIgXkYCNSNtrKUGJtZprIC0sk",
    2018: "1tQwj61D5iEf6nD2CfWf-mk-9QBCkylhr"
  };
  return ids[year] || "";
}

function getAppHref(item: string) {
  const base = "https://www.depedimuscity.com/TransparencySeal/Procurement/";
  if (item === "2026") return `${base}APP-2026.pdf`;
  if (item === "2025") return `${base}APP-2025.pdf`;
  if (item === "2024") return `${base}FY2024-APP.pdf`;
  if (item === "2023 APP-CSE") return "https://www.depedimuscity.com/TransparencySeal/APP_CSE_Template_2023-SDOIC-Imus.xlsx";
  if (item === "2022 APP-CSE") return `${base}APP_CSE_2022_SDO_Imus_City_2022.pdf`;
  if (item === "2021 APP-CSE") return `${base}APP-CSE-2021-Deped-Imus-City-IV-A-Calabarzon.pdf`;
  if (item === "2019 APP-CSE") return `${base}APP-CSE%202019.pdf`;
  if (item === "2022 APP") return `${base}APP-2022-latest.pdf`;
  if (item === "2021 APP") return `${base}APP-2021.pdf`;
  if (item === "2020 APP") return `${base}APP-2020.pdf`;
  if (item === "2019 APP") return `${base}APP-2019.pdf`;
  return "/";
}

function getDashboardHref(year: number) {
  const links: Record<number, string> = {
    2022: "https://www.depedimuscity.com/TransparencySeal/PRS/FY-2022-Summary-Report-of-Education-Dashboard.pdf",
    2021: "https://www.depedimuscity.com/TransparencySeal/PRS/PRS-FY-2021-Accomplishment-of-Dashboard.pdf",
    2020: "https://www.depedimuscity.com/TransparencySeal/PRS/FY-2020-Imus-City-Quarterly-Physical-Report-of-Operations-as-of-December-31-2020.pdf",
    2019: "https://www.depedimuscity.com/TransparencySeal/PRS/Accomplishment-Report-of-Education-Dashboard-FY-2019.pdf"
  };
  return links[year] || "/";
}

function MainSection({ title, children }: { title: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="group/main">
      <div className="space-y-6">
        <CollapsibleTrigger asChild>
          <button className="w-full text-left group">
            <div className={`flex items-start justify-between gap-6 pb-4 border-b-4 transition-all duration-300 ${
              isOpen ? "border-[#4279D2] text-[#4279D2]" : "border-slate-300 text-slate-900 hover:border-slate-400"
            }`}>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-tight flex-1">
                {title}
              </h2>
              <div className={`mt-1.5 p-1.5 rounded-full transition-all duration-500 ${
                isOpen ? "bg-[#4279D2] text-white rotate-180" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
              }`}>
                <ChevronDown size={24} />
              </div>
            </div>
          </button>
        </CollapsibleTrigger>
        
        <CollapsibleContent className="animate-in slide-in-from-top-4 duration-500">
          <div className="space-y-8 pl-2 md:pl-6 pb-8 border-l-2 border-slate-50 ml-1">
            {children}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}

function SubSection({ title, children }: { title: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="group/sub">
      <div className="space-y-4">
        <CollapsibleTrigger asChild>
          <button className="w-full text-left group">
            <div className={`flex items-center justify-between gap-4 pb-2 border-b transition-all duration-300 ${
              isOpen ? "border-[#4279D2]/30 text-[#4279D2]" : "border-slate-200 text-slate-700 hover:border-slate-300"
            }`}>
              <h3 className="text-lg md:text-xl font-bold">
                {title}
              </h3>
              <div className={`p-1 rounded-lg transition-all duration-300 ${
                isOpen ? "bg-blue-50 text-[#4279D2] rotate-180" : "bg-slate-50 text-slate-300 group-hover:text-slate-500"
              }`}>
                <ChevronDown size={18} />
              </div>
            </div>
          </button>
        </CollapsibleTrigger>
        
        <CollapsibleContent className="animate-in slide-in-from-top-2 duration-300">
          <div className="space-y-4 pt-2">
            {children}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}

function ReportBlock({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="space-y-3 pl-4">
      <h4 className="font-bold text-slate-700 text-base md:text-lg">
        {title}
      </h4>
      <ul className="space-y-1.5 pl-6">
        {children}
      </ul>
    </div>
  );
}

function YearItem({ year, href, quarters = ["Q1", "Q2", "Q3", "Q4"], months = false }: { year: string, href: string, quarters?: string[], months?: boolean }) {
  const labels = months ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] : quarters;
  return (
    <li className="flex flex-wrap items-center gap-2 text-slate-700 text-sm md:text-base mb-1">
      <span className="w-2 h-2 border border-[#4279D2] rounded-full flex-shrink-0" />
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#4279D2] hover:underline font-bold">
        {year}
      </a>
      {labels.length > 0 && <span className="text-slate-500 font-medium">({labels.join(", ")})</span>}
    </li>
  );
}

function ListItem({ title, href, isExternal = false }: { title: string, href: string, isExternal?: boolean }) {
  return (
    <li className="flex items-center gap-2 text-slate-700 text-sm md:text-base mb-1">
      <span className="w-2 h-2 border border-[#4279D2] rounded-full flex-shrink-0" />
      <a
        href={href}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : ""}
        className="text-[#4279D2] hover:underline font-bold"
      >
        {title}
      </a>
    </li>
  );
}

