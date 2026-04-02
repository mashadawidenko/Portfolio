import { AnimatedSection } from "./AnimatedSection";

const tags = [
  { label: "Mobile App", bg: "bg-[#ffd4ce]" },
  { label: "2025", bg: "bg-[#d4ffb9]" },
  { label: "Figma", bg: "bg-[#cfe9ff]" },
  { label: "UX/UI", bg: "bg-[#ffddb5]" },
  { label: "Android", bg: "bg-[#edd7ff]" },
];

export function HeroSection() {
  return (
    <AnimatedSection className="w-full px-6 md:px-10 lg:px-[74px]">
      <div className="max-w-[820px] flex flex-col gap-8">
        <h1
          className="font-['DM_Sans',sans-serif] text-[36px] sm:text-[48px] lg:text-[60px] text-[#0f0f0f] leading-[1.08] tracking-[-0.02em]"
          style={{ fontWeight: 500 }}
        >
          iMerch App for JTI (Japan Tobacco International)
        </h1>
        <div className="flex flex-col gap-5">
          <p className="font-['Inter',sans-serif] text-[#6b6b6b] text-[15px] leading-[1.6]">
            Mobile App · UX/UI Design Case Study
          </p>

          <p className="font-['Inter',sans-serif] text-[#6b6b6b] text-[15px] leading-[1.6]">
            iMerch is an internal Android application for automating the work of JTI employees involved in servicing retail outlets and warehouses: coordinators, retail and technical merchandisers, and team leaders.
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.label}
                className={`${tag.bg} px-4 py-1.5 rounded-lg text-[#3d3d3d] text-[13px] font-['Inter',sans-serif]`}
                style={{ fontWeight: 500 }}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
