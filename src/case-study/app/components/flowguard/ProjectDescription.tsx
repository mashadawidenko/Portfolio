import { AnimatedSection } from "./AnimatedSection";

export function ProjectDescription() {
  return (
    <AnimatedSection className="w-full px-6 md:px-10 lg:px-[74px]">
      <div className="max-w-[680px] flex flex-col gap-5">
        <h2
          className="font-['DM_Sans',sans-serif] text-[20px] text-[#0f0f0f]"
          style={{ fontWeight: 500 }}
        >
          Project Description
        </h2>
        <div className="flex flex-col gap-4 font-['Inter',sans-serif] text-[#3d3d3d] text-[15px] leading-[1.7]">
          <p>
            Flowguard is a pet project — a concept of a B2B admin panel for managing
            users, roles, access, integrations, and subscriptions within a company.
          </p>
          <p>
            In this case study, I intentionally do not present the entire system. The focus
            is on a subset of scenarios that I explored from problem to interface and
            implemented as three key screens.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}