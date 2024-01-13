import { ReactNode } from "react";

interface SectionProps {
  children?: ReactNode;
}

export default function Section({ children }: SectionProps) {
  return <div className="section column">{children}</div>;
}
