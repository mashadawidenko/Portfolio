import { AnimatedSection } from "./AnimatedSection";

export function RisksSection() {
  return (
    <AnimatedSection className="w-full px-6 md:px-10 lg:px-[74px]">
      <div className="max-w-[680px] flex flex-col gap-5">
        <h2
          className="font-['DM_Sans',sans-serif] text-[20px] text-[#0f0f0f]"
          style={{ fontWeight: 500 }}
        >
          UX Challenges
        </h2>
        <div className="flex flex-col gap-4 font-['Inter',sans-serif] text-[15px] leading-[1.7]">
          <p className="text-[#3d3d3d]">
            The project involved the following tasks:
          </p>
          <ol className="flex flex-col gap-3 ml-5 list-decimal text-[#555] marker:text-[#999]">
            <li>
              <span style={{ fontWeight: 500 }} className="text-[#3d3d3d]">
                Make the visit execution scenario clear and repeatable
              </span>{" "}
              for employees without additional training.
            </li>
            <li>
              <span style={{ fontWeight: 500 }} className="text-[#3d3d3d]">
                Simplify visit management
              </span>
              : finding assigned visits, tracking status, and quickly starting upon arrival at a retail location.
            </li>
            <li>
              <span style={{ fontWeight: 500 }} className="text-[#3d3d3d]">
                Bring fragmented in-visit operations into a unified logic:
              </span>{" "}
              task execution, form completion, result recording, and visit completion.
            </li>
            <li>
              <span style={{ fontWeight: 500 }} className="text-[#3d3d3d]">
                Reduce the risk of errors and data loss
              </span>{" "}
              during service execution.
            </li>
            <li>
              <span style={{ fontWeight: 500 }} className="text-[#3d3d3d]">
                Account for different roles within a single scenario
              </span>
              : a team lead can perform merchandiser functions and reassign visits to other employees.
            </li>
            <li>
              <span style={{ fontWeight: 500 }} className="text-[#3d3d3d]">
                Ensure verification of visit completion at the correct location
              </span>{" "}
              through the use of coordinates.
            </li>
          </ol>
        </div>
      </div>
    </AnimatedSection>
  );
}