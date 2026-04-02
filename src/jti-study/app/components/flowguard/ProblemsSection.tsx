import { AnimatedSection } from "./AnimatedSection";

export function ProblemsSection() {
  return (
    <AnimatedSection className="w-full px-6 md:px-10 lg:px-[74px]">
      <div className="max-w-[680px] flex flex-col gap-5">
        <h2
          className="font-['DM_Sans',sans-serif] text-[20px] text-[#0f0f0f]"
          style={{ fontWeight: 500 }}
        >
          What It Was Like “Before”
        </h2>
        <div className="flex flex-col gap-5 font-['Inter',sans-serif] text-[#3d3d3d] text-[15px] leading-[1.7]">
          <p>Before the application was introduced:</p>
          <ul className="flex flex-col gap-1 ml-5 list-disc text-[#555] marker:text-[#ccc]">
            <li>
              Employees used fragmented tools and paper reports.
            </li>
            <li>
              Visit execution processes were unstructured, lacking checkpoints and a unified workflow.
            </li>
            <li>
              Difficulties arose in planning visits and tracking results, especially when a team lead had to perform multiple roles simultaneously.
            </li>
          </ul>
          <p>
            The main problem: the core visit process was{" "}
            <span style={{ fontWeight: 500 }} className="text-[#0f0f0f]">
              labor-intensive, unclear, and not automated.
            </span>
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}