import { AnimatedSection } from "./AnimatedSection";

const hypotheses = [
  {
    condition:
      "Move user, role, and team management into a clear and centralized interface",
    outcome: "The number of errors in access management will decrease",
  },
  {
    condition: "Make user statuses and permissions immediately visible",
    outcome: "Action transparency will improve",
  },
  {
    condition:
      "Enable key actions without complex approval processes",
    outcome:
      "Time spent on administrative tasks will be reduced",
  },
];

export function UXHypothesis() {
  return (
    <AnimatedSection className="w-full px-6 md:px-10 lg:px-[74px] py-16 md:py-20">
      <div className="w-full">
        <h2
          className="font-['DM_Sans',sans-serif] text-[20px] text-[#0f0f0f] mb-8"
          style={{ fontWeight: 500 }}
        >
          UX Hypothesis
        </h2>

        <div className="w-full overflow-x-auto">
          <div className="min-w-[540px]">
            {/* Table header */}
            <div className="grid grid-cols-2 border-b border-[#e5e5e5] pb-3 mb-1">
              <div className="font-['Inter',sans-serif] text-[12px] text-[#999] uppercase tracking-[0.06em]" style={{ fontWeight: 500 }}>
                If
              </div>
              <div className="font-['Inter',sans-serif] text-[12px] text-[#999] uppercase tracking-[0.06em] pl-6" style={{ fontWeight: 500 }}>
                Then
              </div>
            </div>

            {/* Table rows */}
            {hypotheses.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-2 border-b border-[#f0f0f0] group transition-colors hover:bg-[#fafafa]"
              >
                <div className="py-5 pr-6 flex items-start gap-3">
                  <span className="mt-[7px] shrink-0 w-[5px] h-[5px] rounded-full bg-[#FF8228]" />
                  <p className="font-['Inter',sans-serif] text-[14px] text-[#3d3d3d] leading-[1.65]">
                    {item.condition}
                  </p>
                </div>
                <div className="py-5 pl-6 border-l border-[#f0f0f0]">
                  <p className="font-['Inter',sans-serif] text-[14px] text-[#6b6b6b] leading-[1.65]">
                    {item.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}