"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  History, 
  Target, 
  Eye, 
  ShieldCheck, 
  Play,
  Layers,
  ChevronRight
} from "lucide-react";


export function AboutSection() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <div className="py-24 space-y-32">
      {/* Overview Section */}
      <div className="space-y-8 max-w-4xl">
        <div className="space-y-2">
          <h2 className="text-3xl font-black text-[#191970] uppercase tracking-tight">Schools Division Office of Imus City</h2>
          <div className="h-1 w-20 bg-[#191970]" />
        </div>
        <div className="space-y-6 text-slate-600 leading-relaxed font-medium">
          <p>
            The City Schools Division of Imus was established pursuant to Deped Order No. 50 s. 2002, 
            when the City Government of Imus was created with the promulgation of RA 10161.
          </p>
          <p>
            A memorandum of Agreement (MOA) was signed by the Secretary of the Department of Education, 
            Bro. Armin A. Luistro FSC and the City Mayor of Imus, Hon. Emmanuel L. Maliksi, who then worked 
            collaboratively for the realization of this goal. Likewise, Dr. Lualhati O. Cadavedo was 
            appointed as its first OIC Division Superintendent on January 12, 2013.
          </p>
          <p>
            Three Districts were created to ensure the effective and efficient delivery of Education 
            services to its clientele.
          </p>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Vision */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-[#191970]">
            <Eye size={32} />
            <h3 className="text-2xl font-black uppercase tracking-tight">Vision</h3>
          </div>
          <div className="space-y-4 text-slate-600 leading-relaxed font-medium">
            <p>
              We dream of Filipinos who passionately love their country and whose values and 
              competencies enable them to realize their full potential and contribute meaningfully 
              to building the nation.
            </p>
            <p>
              As a learner-centered public institution, the Department of Education continuously 
              improves itself to better serve its stakeholders.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-[#191970]">
            <Target size={32} />
            <h3 className="text-2xl font-black uppercase tracking-tight">Mission</h3>
          </div>
          <div className="space-y-4 text-slate-600 leading-relaxed font-medium">
            <p>To protect and promote the right of every Filipino to quality, equitable, culture-based, and complete basic education where:</p>
            <ul className="space-y-3 list-disc pl-5 text-sm">
              <li>Students learn in a child-friendly, gender-sensitive, safe, and motivating environment</li>
              <li>Teachers facilitate learning and constantly nurture every learner</li>
              <li>Administrators and staff, as stewards of the institution, ensure an enabling and supportive environment for effective learning to happen</li>
              <li>Family, community, and other stakeholders are actively engaged and share responsibility for developing life-long learners</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mandate Section */}
      <div className="space-y-8 bg-slate-50 p-12 rounded-2xl border border-slate-100">
        <div className="flex items-center gap-4 text-[#191970]">
          <History size={32} />
          <h3 className="text-2xl font-black uppercase tracking-tight">Mandate</h3>
        </div>
        <p className="text-slate-600 leading-relaxed font-medium text-sm">
          The Department of Education was established through the Education Decree of 1863 as the 
          Superior Commission of Primary Instruction under a Chairman. The Education agency underwent 
          many reorganization efforts in the 20th century in order to better define its purpose 
          vis-a-vis the changing administrations and charters. The present day Department of Education 
          was eventually mandated through Republic Act 9155, otherwise known as the Governance of 
          Basic Education act of 2001 which establishes the mandate of this agency.
        </p>
      </div>

      {/* Quality Policy Section */}
      <div className="space-y-10 border-l-4 border-[#191970] pl-12">
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-[#191970]">
            <ShieldCheck size={32} />
            <h3 className="text-2xl font-black uppercase tracking-tight">DepEd Quality Policy Statement (QPS)</h3>
          </div>
          <p className="text-slate-700 leading-relaxed font-bold text-lg italic">
            "The Department of Education is committed to provide learners with quality basic education 
            that is accessible, inclusive, liberating through:"
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-slate-600 font-medium">
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-1.5 rounded-full bg-[#191970]" />
            <p>Proactive leadership</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-1.5 rounded-full bg-[#191970]" />
            <p>Shared governance</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-1.5 rounded-full bg-[#191970]" />
            <p>Evidenced-based policies, standards and programs</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-1.5 rounded-full bg-[#191970]" />
            <p>Responsive and relevant curricula</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-1.5 rounded-full bg-[#191970]" />
            <p>Highly competent and committed officials, and teaching and non-teaching personnel</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-1.5 rounded-full bg-[#191970]" />
            <p>An enabling learning environment</p>
          </div>
        </div>

        <p className="text-slate-600 leading-relaxed font-medium text-sm pt-4">
          The Department upholds the highest standards of conduct and performance to fulfill 
          stakeholders’ needs and expectations by adhering to constitutional mandates, statutory, 
          and regulatory requirements, and sustains client satisfaction through continuous 
          improvement of the Quality Management System.
        </p>
      </div>

      {/* Institutional Media */}
      <div className="space-y-12">
        <div className="border-b border-slate-100 pb-6">
          <h2 className="text-3xl font-black text-[#191970] uppercase tracking-tight">Institutional Media</h2>
          <p className="text-slate-500 font-medium">Hymns and national symbols of unity</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { id: "aDD7lM0iO5Q", title: "Imus Hymn", author: "Engr. Aurello P. Bautista" },
            { id: "ACKqYOV2Urk", title: "National Anthem", author: "Jaime G. Caro Jr." }
          ].map((vid) => (
            <div key={vid.id} className="space-y-6">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-100 group">
                {playingVideo === vid.id ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${vid.id}?autoplay=1&rel=0`}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <div 
                    onClick={() => setPlayingVideo(vid.id)}
                    className="w-full h-full relative cursor-pointer"
                  >
                    <Image
                      src={`https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`}
                      alt={vid.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/30 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-16 h-16 bg-[#191970] text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition duration-300">
                          <Play size={32} fill="currentColor" />
                       </div>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800">{vid.title}</h4>
                <p className="text-xs font-bold text-[#191970] uppercase tracking-widest mt-1">{vid.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


