import { AnimatedSection } from "./AnimatedSection";

export function SelectedFocus() {
  return (
    <AnimatedSection className="w-full px-6 md:px-10 lg:px-[74px]">
      <div className="max-w-[680px] flex flex-col gap-5">
        <h2
          className="font-['DM_Sans',sans-serif] text-[20px] text-[#0f0f0f]"
          style={{ fontWeight: 500 }}
        >
          Selected Focus
        </h2>
        <div className="flex flex-col gap-4 font-['Inter',sans-serif] text-[15px] text-[#3d3d3d] leading-[1.7]">
          <p>
            To avoid spreading across the entire system, I focused on scenarios
            that directly impact security, control, and operational efficiency.
          </p>
          <p>
            I designed three screens to address this focus:
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}