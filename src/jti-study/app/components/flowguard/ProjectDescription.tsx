import { AnimatedSection } from "./AnimatedSection";

export function ProjectDescription() {
  return (
    <AnimatedSection className="w-full px-6 md:px-10 lg:px-[74px]">
      <div className="max-w-[680px] flex flex-col gap-5">
        <h2
          className="font-['DM_Sans',sans-serif] text-[20px] text-[#0f0f0f]"
          style={{ fontWeight: 500 }}
        >
          Product
        </h2>
        <div className="flex flex-col gap-4 font-['Inter',sans-serif] text-[#3d3d3d] text-[15px] leading-[1.7]">
          <p>
            iMerch is an internal Android application for automating the work of JTI employees involved in servicing retail outlets and warehouses: coordinators, retail and technical merchandisers, and team leads.
          </p>
          <p>
            The application covers the entire service visit cycle: planning and executing visits, auditing retail locations and warehouses, working with equipment, completing forms, and transferring data to the central system.
          </p>
          <p>
            The application was created as an MVP and is part of the company’s internal services ecosystem. The main focus is to ensure accurate and convenient execution of service visits, which are critical to the business.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}