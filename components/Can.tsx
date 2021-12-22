import { ReactNode } from "react";

interface CanProps {
  children: ReactNode;
  permission?: string[];
  role?: string[];
}

export function Can({}: CanProps) {}
