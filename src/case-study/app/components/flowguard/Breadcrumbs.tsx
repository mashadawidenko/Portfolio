import { ChevronRight } from "lucide-react";

export function Breadcrumbs() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1.5 font-['Inter',sans-serif] text-[13px] text-[#999]"
    >
      <a href="/" className="hover:text-[#1a1a1a] transition-colors">
        Home
      </a>
      <ChevronRight className="w-3.5 h-3.5" />
      <span className="text-[#1a1a1a]">Flowguard Case Study</span>
    </nav>
  );
}
