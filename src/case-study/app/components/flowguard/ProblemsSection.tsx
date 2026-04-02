import { AnimatedSection } from "./AnimatedSection";

export function ProblemsSection() {
  return (
    <AnimatedSection className="w-full px-6 md:px-10 lg:px-[74px]">
      <div className="max-w-[680px] flex flex-col gap-5">
        <h2
          className="font-['DM_Sans',sans-serif] text-[20px] text-[#0f0f0f]"
          style={{ fontWeight: 500 }}
        >
          Problems
        </h2>
        <div className="flex flex-col gap-5 font-['Inter',sans-serif] text-[#3d3d3d] text-[15px] leading-[1.7]">
          <div className="flex flex-col gap-3">
            <p>
              Employees in B2B companies face challenges when managing:
            </p>
            <ul className="flex flex-col gap-1 ml-5 list-disc text-[#555] marker:text-[#ccc]">
              <li>users,</li>
              <li>roles,</li>
              <li>access,</li>
              <li>integrations and subscriptions.</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <p>As a result:</p>
            <ul className="flex flex-col gap-1 ml-5 list-disc text-[#555] marker:text-[#ccc]">
              <li>internal approval processes can take several days;</li>
              <li>employee efficiency decreases;</li>
              <li>action transparency is reduced;</li>
              <li>the risk of errors and security issues increases.</li>
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}