"use client";

import React from "react";
import { AboutOverview } from "./components/AboutOverview";
import { VisionMission } from "./components/VisionMission";
import { QualityPolicy } from "./components/QualityPolicy";
import { InstitutionalMedia } from "./components/InstitutionalMedia";

export function AboutSection() {
  return (
    <div className="py-24 space-y-32">
      <AboutOverview />
      <VisionMission />
      <QualityPolicy />
      <InstitutionalMedia />
    </div>
  );
}
