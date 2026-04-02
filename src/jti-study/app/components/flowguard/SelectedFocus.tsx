import { AnimatedSection } from "./AnimatedSection";

export function SelectedFocus() {
  return (
    <AnimatedSection className="w-full px-6 md:px-10 lg:px-[74px]">
      <div className="max-w-[680px] flex flex-col gap-5">
        <h2
          className="font-['DM_Sans',sans-serif] text-[20px] text-[#0f0f0f]"
          style={{ fontWeight: 500 }}
        >
          MVP Goal
        </h2>
        <div className="flex flex-col gap-4 font-['Inter',sans-serif] text-[15px] text-[#3d3d3d] leading-[1.7]">
          <p>Create the main visit scenario that:</p>
          <ul className="flex flex-col gap-1 ml-5 list-disc text-[#555] marker:text-[#ccc]">
            <li>ensures tasks are executed correctly;</li>
            <li>minimizes errors and data loss;</li>
            <li>makes the process transparent and convenient for all roles.</li>
          </ul>
          <p>
            The MVP focus was built around the visit scenario, and other functions
            were designed as supporting elements.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}