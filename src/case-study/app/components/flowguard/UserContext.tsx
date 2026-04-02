import { AnimatedSection } from "./AnimatedSection";

export function UserContext() {
  return (
    <AnimatedSection className="w-full px-6 md:px-10 lg:px-[74px]">
      <div className="max-w-[680px] flex flex-col gap-5">
        <h2
          className="font-['DM_Sans',sans-serif] text-[20px] text-[#0f0f0f]"
          style={{ fontWeight: 500 }}
        >
          User Context
        </h2>
        <p className="font-['Inter',sans-serif] italic text-[#6b6b6b] text-[15px] leading-[1.7] border-l-2 border-[#e5e5e5] pl-5">
          “When I set up a company in the system, I want to securely manage all roles and permissions so that employees only have access to the features they need, without creating security risks.”
        </p>
      </div>
    </AnimatedSection>
  );
}