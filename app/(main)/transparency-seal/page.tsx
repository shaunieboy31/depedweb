"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, FileText, ChevronRight } from "lucide-react";

export default function TransparencySealPage() {
  return (
    <div className="bg-white min-h-screen pb-32">
      <div className="max-w-5xl mx-auto px-6 pt-12 space-y-16">

        {/* Header Section */}
        <div className="text-center space-y-8">
          <div className="flex justify-center">
            <Image
              src="/images/logo/transparency-seal-160x160.png"
              alt="Transparency Seal"
              width={160}
              height={160}
              className="bg-white rounded-full p-2 shadow-xl border border-slate-100"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-black text-[#032977] uppercase tracking-tighter">Transparency Seal</h1>
            <div className="h-1.5 w-24 bg-[#4279D2] mx-auto" />
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">
              Compliance with Section 93 (Transparency Seal) of the GAA
            </p>
          </div>
        </div>

        {/* Legal Basis Section */}
        <section className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 space-y-6">
          <div className="flex items-center gap-3 text-[#032977]">
            <FileText size={24} />
            <h2 className="text-xl font-bold uppercase">Legal Basis</h2>
          </div>
          <div className="text-slate-600 leading-relaxed font-medium space-y-4 text-sm md:text-base">
            <p>
              National Budget Circular 542, issued by the Department of Budget and Management (DBM) on August 29, 2012,
              reiterates compliance with Section 93 of the General Appropriations Act of FY 2012. Section 93 is the
              Transparency Seal provision, to wit:
            </p>
            <div className="border-l-4 border-[#4279D2] pl-6 py-2 italic font-semibold text-slate-700">
              "To enhance transparency and enforce accountability, all national government agencies shall maintain a
              transparency seal on their official websites. The transparency seal shall contain the following information:
              (i) the agency’s mandates and functions, names of its officials with their position and designation, and
              contact information..."
            </div>
            <p>
              A Transparency Seal, prominently displayed on the main page of the website of a particular government
              agency, is a certificate that it has complied with the requirements of Section 93.
            </p>
          </div>
        </section>

        {/* Compliance Sections Grid */}
        <div className="space-y-16">
          {/* I. Mandates and Officials */}
          <MainSection title="I. The Agency's Mandates, Vision, Mission, and List of Officials with their Position, Designation, and Contact Information">
            <SubSection title="A. Agency Mandate, Vision and Mission">
              <ul className="space-y-2 pl-6">
                <ListItem title="Agency Mandate, Vision and Mission" href="/" blue />
                <ListItem title="Legal Mandate (RA 9155)" href="/" blue />
                <ListItem title="Organizational Structure & List of Officials" href="/about-us/division-profile" isExternal blue />
              </ul>
            </SubSection>
          </MainSection>

          {/* II. Annual Financial Reports */}
          <MainSection title="II. Annual Financial Reports">

            {/* A. Financial Accountability Reports */}
            <SubSection title="A. Financial Accountability Reports">

              <ReportBlock title="1. Statement of Appropriations, Allotments, Obligations, Disbursements and Balances (SAAOBDB - FAR No. 1)">
                {[2023, 2022, 2021, 2020, 2019, 2018].map(year => (
                  <YearItem key={year} year={year.toString()} href={`https://drive.google.com/drive/folders/${getFar1Id(year)}`} />
                ))}
              </ReportBlock>

              <ReportBlock title="2. Summary Statement of Appropriations, Allotments, Obligations, Disbursements and Balances by Object of Expenditures (FAR No. 1A)">
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
                {[2023, 2022, 2021, 2020, 2019, 2018].map(year => (
                  <ListItem key={year} title={`FY ${year}`} href={`https://www.depedimuscity.com/TransparencySeal/BED1/${year}_BED1.pdf`} isExternal blue />
                ))}
              </ReportBlock>

              <ReportBlock title="3. Annual Physical Plan (BED No. 2)">
                <ListItem title="FY 2022" href="https://www.depedimuscity.com/TransparencySeal/PRS/FY-2022-BED-of-SDO-IMUS-CITY.pdf" isExternal blue />
                <ListItem title="FY 2021" href="https://www.depedimuscity.com/TransparencySeal/PRS/SDOIC-03C-PRS-File-007-Imus-City-R4a-New-BED2-FY-2021.xlsx" isExternal blue />
                <ListItem title="FY 2020" href="https://www.depedimuscity.com/TransparencySeal/PRS/BED-2_IMUS-CITY_2020.xlsx" isExternal blue />
                <ListItem title="FY 2019" href="https://www.depedimuscity.com/TransparencySeal/PRS/BED-2_IMUS-CITY-2019.xlsx" isExternal blue />
              </ReportBlock>

            </SubSection>
          </MainSection>

          {/* III. Annual Procurement Plan (APP) */}
          <MainSection title="III. Annual Procurement Plan (APP)">
            <SubSection title="A. Annual Procurement Plan (APP)">
              <ul className="space-y-1.5 pl-6">
                {["2026", "2025", "2024", "2022", "2021", "2020", "2019"].map(year => (
                  <ListItem key={year} title={`FY ${year} APP`} href={getAppHref(year)} isExternal blue />
                ))}
              </ul>
            </SubSection>
            <SubSection title="B. Supplemental APP / CSE">
              <ul className="space-y-1.5 pl-6">
                <ListItem title="2023 APP-CSE" href="https://www.depedimuscity.com/TransparencySeal/APP_CSE_Template_2023-SDOIC-Imus.xlsx" isExternal blue />
                <ListItem title="2022 APP-CSE" href="https://www.depedimuscity.com/TransparencySeal/Procurement/APP_CSE_2022_SDO_Imus_City_2022.pdf" isExternal blue />
                <ListItem title="2021 APP-CSE" href="https://www.depedimuscity.com/TransparencySeal/Procurement/APP-CSE-2021-Deped-Imus-City-IV-A-Calabarzon.pdf" isExternal blue />
                <ListItem title="2019 APP-CSE" href="https://www.depedimuscity.com/TransparencySeal/Procurement/APP-CSE%202019.pdf" isExternal blue />
              </ul>
            </SubSection>
          </MainSection>

          {/* IV. SALN Compliance */}
          <MainSection title="IV. System of Ranking Delivery Units and SALN Compliance">
            <ul className="space-y-1.5 pl-6">
              {["2021", "2020", "2019", "2018"].map(year => (
                <ListItem key={year} title={`SALN ${year}`} href={`https://www.depedimuscity.com/TransparencySeal/SALN/SALN_${year === '2021' ? '2021-COC' : year}.pdf`} isExternal blue />
              ))}
            </ul>
          </MainSection>

          {/* V. Freedom of Information (FOI) */}
          <MainSection title="V. Freedom of Information (FOI)">
            <ul className="space-y-1.5 pl-6">
              <ListItem title="DepEd People’s FOI Manual" href="https://www.depedimuscity.com/TransparencySeal/DO_s2016_72corr.pdf" isExternal blue />
              <ListItem title="Modified One-page FOI Manual" href="https://www.depedimuscity.com/TransparencySeal/FOI-Info-Program.pdf" isExternal blue />
              <ListItem title="FOI Summary Reports & Inventory" href="https://docs.google.com/spreadsheets/d/1QWncGLFI_z5_oxwrm9eQVeGODY7RqQh2iLF5y4piwnE/edit#gid=1026049968" isExternal blue />
            </ul>
          </MainSection>

          {/* VI. MFO Report Cards */}
          <MainSection title="VI. MFO & Management Accountability Report Cards (MARC)">
            <ul className="space-y-1.5 pl-6">
              <ListItem title="MARC-I (2018)" href="https://www.depedimuscity.com/TransparencySeal/DepEd-MARC-1.pdf" isExternal blue />
              <ListItem title="MARC-II (2018)" href="https://www.depedimuscity.com/TransparencySeal/DepEd-MARC-2.pdf" isExternal blue />
              <ListItem title="MARC-I (2017)" href="https://www.depedimuscity.com/TransparencySeal/DEPED_MARC-1_2017pdf.pdf" isExternal blue />
              <ListItem title="MARC-II (2017)" href="https://www.depedimuscity.com/TransparencySeal/DEPED_MARC-2_2017.pdf" isExternal blue />
            </ul>
          </MainSection>

          {/* VII. Citizen's Charter */}
          <MainSection title="VII. DepEd Citizen's Charter & Satisfaction Results">
            <ul className="space-y-1.5 pl-6">
              <ListItem title="Citizen's Charter 2023" href="https://www.depedimuscity.com/DepEd-Citizens-Charter-2023.pdf" isExternal blue />
              <ListItem title="Anti-Fixing Campaign" href="https://www.depedimuscity.com/TransparencySeal/anti_fixing.pdf" isExternal blue />
              <ListItem title="No Noon Break Policy" href="https://www.depedimuscity.com/TransparencySeal/no_noon_break.pdf" isExternal blue />
              <ListItem title="ID/Nameplates" href="https://www.depedimuscity.com/TransparencySeal/ID-TEMPLATE.pdf" isExternal blue />
              <ListItem title="Assistance Desk" href="https://www.depedimuscity.com/TransparencySeal/PACD.pdf" isExternal blue />
              <ListItem title="Satisfaction Results" href="https://docs.google.com/spreadsheets/d/1uG4WrFb3uj5UBslKNSig0nw9VcNHr0NNP1NjrTicobQ/edit?usp=sharing" isExternal blue />
            </ul>
          </MainSection>

        </div>

        {/* Closing Compliance Info */}
        <div className="pt-20 border-t border-slate-100 text-center">
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

function getAppHref(year: string) {
  const base = "https://www.depedimuscity.com/TransparencySeal/Procurement/";
  if (year === "2026") return `${base}APP-2026.pdf`;
  if (year === "2025") return `${base}APP-2025.pdf`;
  if (year === "2024") return `${base}FY2024-APP.pdf`;
  if (year === "2022") return `${base}APP-2022-latest.pdf`;
  if (year === "2021") return `${base}APP-2021.pdf`;
  if (year === "2020") return `${base}APP-2020.pdf`;
  return `${base}APP-2019.pdf`;
}

function MainSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="space-y-8">
      <h2 className="text-xl md:text-2xl font-black text-slate-800 border-b-4 border-[#032977] pb-3 uppercase tracking-tight leading-tight">
        {title}
      </h2>
      <div className="space-y-10">
        {children}
      </div>
    </div>
  );
}

function SubSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg md:text-xl font-bold text-slate-800 border-b border-slate-100 pb-2">
        {title}
      </h3>
      <div className="space-y-6">
        {children}
      </div>
    </div>
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
    <li className="flex items-center gap-2 text-slate-700 text-sm md:text-base">
      <span className="w-1.5 h-1.5 bg-slate-400 rotate-45 flex-shrink-0" />
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#4279D2] hover:underline font-bold">
        {year}
      </a>
      <span className="text-slate-500 font-medium">({labels.join(", ")})</span>
    </li>
  );
}

function ListItem({ title, href, isExternal = false, blue = false }: { title: string, href: string, isExternal?: boolean, blue?: boolean }) {
  return (
    <li className="flex items-center gap-2 text-slate-700 text-sm md:text-base">
      <span className="w-1.5 h-1.5 bg-slate-400 rotate-45 flex-shrink-0" />
      <a
        href={href}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : ""}
        className={`${blue ? 'text-[#4279D2] font-bold' : 'text-slate-700 font-medium'} hover:underline`}
      >
        {title}
      </a>
    </li>
  );
}

