import { AnimatedSection } from "./AnimatedSection";

export function Conclusion() {
  return (
    <AnimatedSection className="w-full px-6 md:px-10 lg:px-[74px] pb-20 md:pb-32">
      <div className="max-w-[680px] flex flex-col gap-5">
        <h2
          className="font-['DM_Sans',sans-serif] text-[20px] text-[#0f0f0f]"
          style={{ fontWeight: 500 }}
        >
          Conclusion
        </h2>
        <div className="flex flex-col gap-4 font-['Inter',sans-serif] text-[15px] text-[#3d3d3d] leading-[1.7]">
          <p>
            I designed a key service visit scenario that ensures:
          </p>
          <ul className="flex flex-col gap-1 ml-5 list-disc text-[#555] marker:text-[#ccc]">
            <li>correct task execution;</li>
            <li>minimization of errors and data loss;</li>
            <li>transparency and convenience for all roles.</li>
          </ul>
          <p>
            Even without full analytics and test metrics, I transformed fragmented and confusing processes into a logical, repeatable user flow that became the foundation of the MVP and can be scaled for further product development.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
