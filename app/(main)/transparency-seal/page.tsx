"use client";

import React from "react";
import Image from "next/image";
import { 
  FileText, 
  LayoutGrid, 
  CheckCircle2, 
  Building2, 
  Coins, 
  BarChart3, 
  ShoppingBag, 
  Award, 
  ShieldCheck, 
  Scale, 
  BookOpen, 
  Info, 
  Lock,
  Download,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function TransparencySealPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 pb-16">
      
      {/* Header / Hero Section */}
      <section className="bg-white border-b border-slate-200 py-12 md:py-16 mb-8">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest animate-in fade-in slide-in-from-bottom-4 duration-700">
            <ShieldCheck size={14} />
            <span>Official Government Compliance</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase italic animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Transparency <span className="text-blue-600">Seal</span>
          </h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            Compliance with Section 93 (Transparency Seal) of the General Appropriations Act of FY 2012
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 space-y-8">
        
        {/* Legal Basis Card */}
        <Card className="border-slate-200 shadow-xl shadow-slate-200/50 rounded-[2.5rem] overflow-hidden bg-white">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* Seal Logo */}
              <div className="flex-shrink-0 mx-auto md:mx-0 p-4 bg-slate-50 rounded-3xl border border-slate-100 shadow-inner">
                <Image
                  src="/images/logo/transparency-seal-160x160.png"
                  alt="Transparency Seal Logo"
                  width={140}
                  height={140}
                  className="opacity-90 hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Text Content */}
              <div className="space-y-6 flex-1">
                <div className="flex items-center gap-3 text-blue-600">
                  <div className="p-2 bg-blue-50 rounded-xl">
                    <FileText size={20} />
                  </div>
                  <h2 className="text-xl font-black uppercase tracking-tight text-slate-900">Legal Basis</h2>
                </div>

                <div className="text-slate-600 leading-relaxed font-medium text-sm md:text-base space-y-4">
                  <p>
                    National Budget Circular 542, issued by the Department of Budget and Management (DBM) on August 29, 2012,
                    reiterates compliance with Section 93 of the General Appropriations Act of FY 2012. 
                  </p>
                  
                  <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-blue-600 italic">
                    <p className="font-bold text-slate-800 mb-2">Sec. 93. Transparency Seal.</p>
                    <p className="text-sm">
                      "To enhance transparency and enforce accountability, all national government agencies shall maintain a transparency seal on their official websites..."
                    </p>
                    <a 
                      href="https://www.officialgazette.gov.ph/2011/05/13/executive-order-no-43-s-2011/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1 mt-4 text-blue-600 underline font-bold text-xs"
                    >
                      View Full E.O. No. 43, s. 2011 <ExternalLink size={12} />
                    </a>
                  </div>

                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider pt-4 border-t border-slate-100">
                    Compliance with Sec. 91 | R.A. No. 10633 (GAA FY 2014)
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compliance Index Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-slate-900 text-white rounded-xl">
                <LayoutGrid size={20} />
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Compliance Index</h2>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Document Registry</p>
              </div>
            </div>
            <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-100 px-4 py-1 gap-1.5 font-black uppercase text-[9px] tracking-widest hidden sm:flex">
              <CheckCircle2 size={12} />
              Verified SY 2026
            </Badge>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            
            {/* I. Mandates and Officials */}
            <ComplianceItem 
              value="section-1"
              icon={<Building2 className="text-blue-600" size={20} />}
              title="I. Agency Mandates, Vision, Mission, and List of Officials"
            >
              <div className="space-y-6 pt-2">
                <SubSection title="A. Agency Mandate, Vision, Mission">
                  <DocumentList>
                    <DocumentItem title="Agency Mandate, Vision, Mission, and Core Values" href="https://www.depedimuscity.com/about-us.php" isExternal />
                    <DocumentItem title="Legal Mandate (RA 9155)" href="/" />
                  </DocumentList>
                </SubSection>
                <SubSection title="B. Organizational Structure & List of Officials">
                  <DocumentList>
                    <DocumentItem title="SDO Imus City Organizational Structure and Official Directory" href="https://www.depedimuscity.com/list_of_Officials.php" isExternal />
                  </DocumentList>
                </SubSection>
              </div>
            </ComplianceItem>

            {/* II. Annual Financial Reports */}
            <ComplianceItem 
              value="section-2"
              icon={<Coins className="text-amber-600" size={20} />}
              title="II. Annual Financial Reports"
              description="Last three (3) fiscal years as per NBC Nos. 507 and 507-A"
            >
              <div className="space-y-8 pt-2">
                <SubSection title="A. Financial Accountability Reports (FAR)">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ReportCategory title="FAR No. 1: SAAOBDB">
                      {[2023, 2022, 2021, 2020].map(y => (
                        <YearLink key={y} year={y} href={`https://drive.google.com/drive/folders/${getFar1Id(y)}`} />
                      ))}
                    </ReportCategory>
                    <ReportCategory title="FAR No. 1A: Summary SAAOBDB">
                      {[2023, 2022, 2021, 2020].map(y => (
                        <YearLink key={y} year={y} href={`https://drive.google.com/drive/folders/${getFar1AId(y)}`} />
                      ))}
                    </ReportCategory>
                  </div>
                </SubSection>

                <Separator className="opacity-50" />

                <SubSection title="B. Annual Physical Report of Operations (BAR)">
                  <DocumentList>
                    <DocumentItem title="FY 2021 Quarterly BAR-1 Report" href="https://www.depedimuscity.com/TransparencySeal/PRS/SDO_IMUS-CITY_1st-Quarterly-BAR-1-Report_as-of-MArch-31-2021-with-signatures-2.pdf" isExternal />
                    <DocumentItem title="FY 2020 1st Quarter BAR-1" href="https://www.depedimuscity.com/TransparencySeal/BAR1-1stQuarter-FY-2020.xlsx" isExternal />
                  </DocumentList>
                </SubSection>
              </div>
            </ComplianceItem>

            {/* III. Approved Budgets */}
            <ComplianceItem 
              value="section-3"
              icon={<BarChart3 className="text-emerald-600" size={20} />}
              title="III. DBM Approved Budgets and Corresponding Targets"
            >
              <div className="space-y-6 pt-2">
                <SubSection title="A. DBM Approved Budget (GAA)">
                  <DocumentList>
                    {[2023, 2022, 2021, 2020, 2019].map(y => (
                      <DocumentItem key={y} title={`GAA FY ${y} - Approved Budget`} href={`https://www.depedimuscity.com/TransparencySeal/DBM_GAA/GAA_${y}.pdf`} isExternal />
                    ))}
                  </DocumentList>
                </SubSection>
              </div>
            </ComplianceItem>

            {/* IV. Major Projects */}
            <ComplianceItem 
              value="section-4"
              icon={<Award className="text-indigo-600" size={20} />}
              title="IV. Major Projects, Programs and Activities (PPAs)"
            >
              <div className="space-y-6 pt-2">
                <SubSection title="A. Annual Implementation Plan (AIP)">
                  <DocumentList>
                    {[2022, 2021, 2020].map(y => (
                      <DocumentItem key={y} title={`FY ${y} Annual Implementation Plan`} href={`https://www.depedimuscity.com/TransparencySeal/AIP/SDOIC-03C-PRS-File-041c-AIP-FY-${y}.pdf`} isExternal />
                    ))}
                  </DocumentList>
                </SubSection>
              </div>
            </ComplianceItem>

            {/* V. Procurement */}
            <ComplianceItem 
              value="section-5"
              icon={<ShoppingBag className="text-rose-600" size={20} />}
              title="V. Annual Procurement Plan and Contracts Awarded"
            >
              <div className="space-y-6 pt-2">
                <SubSection title="A. Annual Procurement Plan (APP)">
                  <div className="flex flex-wrap gap-2">
                    {["2026", "2025", "2024", "2023 APP-CSE", "2022 APP-CSE"].map((item) => (
                      <Badge key={item} variant="secondary" className="hover:bg-slate-100 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-tight">
                         <a href={getAppHref(item)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                           FY {item} <Download size={10} />
                         </a>
                      </Badge>
                    ))}
                  </div>
                </SubSection>
                <SubSection title="B. Awarded Contracts">
                  <DocumentList>
                    <DocumentItem title="Registry of Contracts Awarded & Suppliers" href="https://www.depedimuscity.com/contracts-awarded.php" isExternal />
                    <DocumentItem title="PhilGeps Posting of SDO Imus City" href="https://www.depedimuscity.com/philgeps.php" isExternal />
                  </DocumentList>
                </SubSection>
              </div>
            </ComplianceItem>

            {/* VI. QMS */}
            <ComplianceItem 
              value="section-6"
              icon={<BookOpen className="text-sky-600" size={20} />}
              title="VI. Quality Management System (QMS) & Operations Manual"
            >
              <div className="space-y-4 pt-2">
                <DocumentList>
                  <DocumentItem title="DepEd Quality Policy Statement" href="https://www.deped.gov.ph/wp-content/uploads/2021/05/Quality-Policy-Poster-revised.pdf" isExternal />
                  <DocumentItem title="DepEd National QMS (DO No. 009, s. 2021)" href="https://www.deped.gov.ph/wp-content/uploads/2021/02/DO_s2021_009.pdf" isExternal />
                  <DocumentItem title="QMS Manual and Procedures (DM No. 014, s. 2022)" href="https://www.deped.gov.ph/wp-content/uploads/2022/03/DM_s2022_014.pdf" isExternal />
                </DocumentList>
              </div>
            </ComplianceItem>

            {/* VII. System of Ranking */}
            <ComplianceItem 
              value="section-7"
              icon={<Scale className="text-purple-600" size={20} />}
              title="VII. System of Ranking Delivery Units and Individuals"
            >
              <div className="space-y-4 pt-2">
                <DocumentList>
                  <DocumentItem title="PBB Guidelines (DO No. 005, s. 2022)" href="https://www.deped.gov.ph/wp-content/uploads/2022/02/DO_s2022_005.pdf" isExternal />
                  <DocumentItem title="Internal Multiyear Guidelines for PBB (DO No. 007, s. 2021)" href="https://www.deped.gov.ph/wp-content/uploads/2021/02/DO_s2021_007.pdf" isExternal />
                </DocumentList>
              </div>
            </ComplianceItem>

            {/* VIII. SALN */}
            <ComplianceItem 
              value="section-8"
              icon={<Lock className="text-slate-600" size={20} />}
              title="VIII. Agency Review and Compliance of SALN Disclosure"
            >
              <div className="space-y-4 pt-2">
                <DocumentList>
                  {[2021, 2020, 2019, 2018].map(y => (
                    <DocumentItem key={y} title={`SALN FY ${y} Certificate of Compliance`} href={`https://www.depedimuscity.com/TransparencySeal/SALN/SALN_${y}-COC.pdf`} isExternal />
                  ))}
                </DocumentList>
              </div>
            </ComplianceItem>

            {/* IX. FOI */}
            <ComplianceItem 
              value="section-9"
              icon={<Info className="text-red-600" size={20} />}
              title="IX. Freedom of Information (FOI) Program Compliance"
            >
              <div className="space-y-4 pt-2">
                <DocumentList>
                  <DocumentItem title="DepEd People's FOI Manual" href="https://www.deped.gov.ph/wp-content/uploads/2018/10/DO_s2017_072.pdf" isExternal />
                  <DocumentItem title="FOI Reports (2018-2023)" href="https://docs.google.com/spreadsheets/d/1QWncGLFI_z5_oxwrm9eQVeGODY7RqQh2iLF5y4piwnE/edit#gid=1026049968" isExternal />
                </DocumentList>
              </div>
            </ComplianceItem>

          </Accordion>
        </div>

        {/* Footer / Copyright */}
        <Separator className="mt-12 bg-slate-200" />
        <footer className="py-12 text-center space-y-4">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">Schools Division Office of Imus City</p>
          <p className="text-slate-500 text-xs font-bold leading-relaxed">
            Integrity ● Excellence ● Service
          </p>
          <p className="text-[9px] text-slate-300 font-medium">
            © {new Date().getFullYear()} SDO Imus City Official Website. All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

{/* --- Internal Components --- */}

function ComplianceItem({ 
  value, 
  icon, 
  title, 
  description, 
  children 
}: { 
  value: string; 
  icon: React.ReactNode; 
  title: string; 
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <AccordionItem value={value} className="bg-white border border-slate-200 rounded-[2rem] px-8 shadow-sm hover:shadow-md transition-shadow">
      <AccordionTrigger className="hover:no-underline py-8">
        <div className="flex items-start gap-6 text-left">
          <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
            {icon}
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-black text-slate-900 leading-tight uppercase tracking-tight">{title}</h3>
            {description && <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{description}</p>}
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pb-10">
        <div className="pl-1 space-y-4">
          {children}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h4 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] flex items-center gap-2">
        <ChevronRight size={14} className="text-slate-300" />
        {title}
      </h4>
      <div className="pl-6">
        {children}
      </div>
    </div>
  );
}

function DocumentList({ children }: { children: React.ReactNode }) {
  return <ul className="grid grid-cols-1 gap-3">{children}</ul>;
}

function DocumentItem({ title, href, isExternal = false }: { title: string; href: string; isExternal?: boolean }) {
  return (
    <li>
      <a 
        href={href} 
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : ""}
        className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
      >
        <div className="p-2 bg-white rounded-xl shadow-sm text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-colors">
          <FileText size={16} />
        </div>
        <span className="text-sm font-bold text-slate-700 group-hover:text-white transition-colors">{title}</span>
        {isExternal && <ExternalLink size={12} className="ml-auto text-slate-300 group-hover:text-blue-200" />}
      </a>
    </li>
  );
}

function ReportCategory({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4 p-6 bg-slate-50/50 rounded-3xl border border-slate-100">
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{title}</p>
      <div className="flex flex-wrap gap-2">
        {children}
      </div>
    </div>
  );
}

function YearLink({ year, href }: { year: number; href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm flex items-center gap-2"
    >
      {year} <Download size={12} className="opacity-50" />
    </a>
  );
}

// Helper functions for IDs (Preserved from existing code)
function getFar1Id(year: number) {
  const ids: Record<number, string> = {
    2023: "1eSMNc_dYEslxicqz3vLH3aJ_id_4YE1y",
    2022: "1uKsyx3pIS2CXD8IhaWBsx0as6_KA95fu",
    2021: "1J06Uqy3klrjroIbghBM4Be07wmmQNull",
    2020: "1CiwNngN3c8dMHGDL0ydRUU8X8WkSrjmU"
  };
  return ids[year] || "";
}

function getFar1AId(year: number) {
  const ids: Record<number, string> = {
    2023: "1WlrBVQ-29TQ7tqKsj7FEcLfYEt_dkWa9",
    2022: "1CKWiTEBuzSEvrfqp8XTw2BwC9Gr-B8yr",
    2021: "1TVmcCT7uUyUSKEWO4RO6D5ABDrgxB56y",
    2020: "1bz5X6R4F-3H_vTm8t9754_L3clJSzb5V"
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
  return "/";
}
