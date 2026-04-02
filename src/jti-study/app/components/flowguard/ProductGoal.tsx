import { AnimatedSection } from "./AnimatedSection";

export function ProductGoal() {
  return (
    <AnimatedSection className="w-full px-6 md:px-10 lg:px-[74px]">
      <div className="max-w-[680px] flex flex-col gap-5">
        <h2
          className="font-['DM_Sans',sans-serif] text-[20px] text-[#0f0f0f]"
          style={{ fontWeight: 500 }}
        >
          Product Goal
        </h2>
        <div className="font-['Inter',sans-serif] text-[#3d3d3d] text-[15px] leading-[1.7]">
          <p className="mb-3">To automate the service visit process:</p>
          <ul className="flex flex-col gap-1 ml-5 list-disc text-[#555] marker:text-[#ccc]">
            <li>equipment tracking;</li>
            <li>merchandising and distribution control;</li>
            <li>conducting audits;</li>
            <li>reporting and communication between process participants.</li>
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
}