import { AnimatedSection } from "./AnimatedSection";

export function UserContext() {
  return (
    <AnimatedSection className="w-full px-6 md:px-10 lg:px-[74px]">
      <div className="max-w-[680px] flex flex-col gap-5">
        <h2
          className="font-['DM_Sans',sans-serif] text-[20px] text-[#0f0f0f]"
          style={{ fontWeight: 500 }}
        >
          My Role
        </h2>
        <div className="flex flex-col gap-4 font-['Inter',sans-serif] text-[#3d3d3d] text-[15px] leading-[1.7]">
          <p>I joined the project as a UI/UX Designer from scratch.</p>
          <p>My contributions included:</p>
          <ul className="flex flex-col gap-1 ml-5 list-disc text-[#555] marker:text-[#ccc]">
            <li>designing user flows;</li>
            <li>developing the UX structure of key modules;</li>
            <li>creating UI prototypes and visual solutions for the MVP;</li>
            <li>
              refining and detailing the initial requirements to build logical scenarios.
            </li>
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
}