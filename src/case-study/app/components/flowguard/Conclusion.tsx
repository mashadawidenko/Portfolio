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
            The prototype showed that in B2B admin panels, UX value is not defined
            by the number of features, but by how well the interface allows users
            to predict the outcomes of their actions, control access, and reduce
            operational risks.
          </p>
          <p>
            The key insight: administrators need a system of predefined workflows
            where critical processes are protected, and team scaling and integration
            management happen without errors.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}