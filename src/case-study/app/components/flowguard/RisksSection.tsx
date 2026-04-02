import { AnimatedSection } from "./AnimatedSection";

export function RisksSection() {
  return (
    <AnimatedSection className="w-full px-6 md:px-10 lg:px-[74px]">
      <div className="flex flex-col gap-12">
        <div className="max-w-[680px] flex flex-col gap-5">
          <h2
            className="font-['DM_Sans',sans-serif] text-[20px] text-[#0f0f0f]"
            style={{ fontWeight: 500 }}
          >
            Current Risks
          </h2>
          <div className="flex flex-col gap-4 font-['Inter',sans-serif] text-[15px] leading-[1.7]">
            <p className="text-[#3d3d3d]">
              During the analysis phase, I identified the key risks of the current approach:
            </p>
            <ul className="flex flex-col gap-1 ml-5 list-disc text-[#555] marker:text-[#ccc]">
              <li>errors in permission assignment;</li>
              <li>difficulty tracking who has access to what;</li>
              <li>increased security risks as the team scales;</li>
              <li>growing complexity when adding new integrations and subscriptions.</li>
            </ul>
          </div>
        </div>

        <div className="max-w-[680px] flex flex-col gap-3">
          <h3
            className="font-['DM_Sans',sans-serif] text-[17px] text-[#0f0f0f]"
            style={{ fontWeight: 500 }}
          >
            Additional Context
          </h3>
          <p className="font-['Inter',sans-serif] italic text-[#6b6b6b] text-[15px] leading-[1.7] border-l-2 border-[#e5e5e5] pl-5">
            “When new users are added to the system, I want to create access policies and roles to ensure secure operations”
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}