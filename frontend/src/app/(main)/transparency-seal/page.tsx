import React from "react";
import TransparencySealPageContent from "./TransparencySealPageContent";
import { fetchTransparencyItems } from "@/lib/backend";

export default async function TransparencySealPage() {
  const items = (await fetchTransparencyItems()) as any;
  return <TransparencySealPageContent items={items || []} />;
}

