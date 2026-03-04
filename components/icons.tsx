"use client";

import React from "react";
import {
  ChevronDown as LucideChevronDown,
  Search as LucideSearch,
  Volume2 as LucideVolume2,
} from "lucide-react";

type IconProps = React.ComponentProps<typeof LucideChevronDown>;

export function ChevronDown(props: IconProps) {
  return <LucideChevronDown {...props} />;
}

export function Search(props: IconProps) {
  return <LucideSearch {...props} />;
}

export function Volume2(props: IconProps) {
  return <LucideVolume2 {...props} />;
}

// shadcn-style Icons object (lowercase keys) for consistent usage
export const Icons = {
  chevronDown: ChevronDown,
  search: Search,
  volume2: Volume2,
};

export default Icons;
