import { AnimatedSection } from "./AnimatedSection";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SectionImage } from "./SectionImage";
import imgSection4 from "../../../assets/xasbhksabhx8asx8asxjsaxjs.png";
import imgSection5 from "../../../assets/dsjsjc9s9s900xsjjxs.png";
import imgSection6 from "../../../assets/axbkkabj9ax99asx0asa7x6.png";
import imgSection7 from "../../../assets/alnxasxnasxuw82838e3ui2whdw.png";
import imgSection8 from "../../../assets/asnjxaa823e23eic.png";


interface StepData {
  number: number;
  title: string;
  content: React.ReactNode;
}

function StepItem({ step }: { step: StepData }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#f0f0f0]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 py-5 text-left group cursor-pointer"
      >
        <span
          className="font-['Inter',sans-serif] text-[12px] text-[#999] mt-[3px] shrink-0"
          style={{ fontWeight: 500 }}
        >
          {String(step.number).padStart(2, "0")}
        </span>
        <span
          className="font-['DM_Sans',sans-serif] text-[17px] text-[#0f0f0f] flex-1"
          style={{ fontWeight: 500 }}
        >
          {step.title}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="mt-[3px] shrink-0"
        >
          <ChevronDown className="w-4 h-4 text-[#999]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-9 font-['Inter',sans-serif] text-[15px] text-[#3d3d3d] leading-[1.7]">
              {step.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="my-6 bg-[#f5f5f5] border border-[#eaeaea] rounded-xl overflow-hidden aspect-video flex items-center justify-center">
      <span className="font-['Inter',sans-serif] text-[13px] text-[#bbb]">
        {label}
      </span>
    </div>
  );
}

const steps: StepData[] = [
  {
    number: 1,
    title: "Requirements Analysis and Process Study",
    content: (
      <div className="flex flex-col gap-4">
        <p>
          I studied the prepared user stories and business requirements.
        </p>
        <p>
          The materials were often general, so I clarified and supplemented them
          with details to build logical and repeatable user flows.
        </p>
        <p>
          I identified gaps, refined scenarios, and developed a UX structure
          that accounted for real user actions and ensured ease of use in the field.
        </p>
      </div>
    ),
  },
  {
    number: 2,
    title: "Defining Key MVP Scenarios",
    content: (
      <div className="flex flex-col gap-4">
        <p>
          Based on business requirements, user stories, and discussions with the product team, I analyzed all planned scenarios and product modules.
        </p>
        <SectionImage alt="Section 4" aspectRatio="1192/700" src={imgSection4}/>
        <p>
          The analysis revealed that executing a service visit is:
        </p>
        <ul className="flex flex-col gap-1 ml-5 list-disc text-[#555] marker:text-[#ccc]">
          <li>the primary user action;</li>
          <li>a business-critical scenario;</li>
          <li>
            the point on which all other modules depend (schedule, audit,
            forms).
          </li>
        </ul>
        <p>
          As a result, the MVP focus was built around the visit scenario, and other functions were designed as supporting elements rather than standalone entities.
        </p>
      </div>
    ),
  },
  {
    number: 3,
    title: "Designing User Flows",
    content: (
      <div className="flex flex-col gap-4">
        <p>I created User Flows for:</p>
        <ul className="flex flex-col gap-1 ml-5 list-disc text-[#555] marker:text-[#ccc]">
          <li>retail merchandisers;</li>
          <li>technical merchandisers;</li>
          <li>team leads performing multiple roles.</li>
        </ul>
        <p>
          These flows became the basis for interface design, ensuring logical and simple scenarios.
        </p>
        <SectionImage alt="Section 5" aspectRatio="1192/700" src={imgSection5}/>
      </div>
    ),
  },
  {
    number: 4,
    title: "UX Development for Modules",
    content: (
      <div className="flex flex-col gap-4">
        <p>
          Based on the user flows, the logic of the key MVP modules was designed:
        </p>
        <ul className="flex flex-col gap-1 ml-5 list-disc text-[#555] marker:text-[#ccc]">
          <li>visit management;</li>
          <li>work schedule;</li>
          <li>audit;</li>
          <li>forms.</li>
        </ul>
        <p>For each module:</p>
        <ul className="flex flex-col gap-1 ml-5 list-disc text-[#555] marker:text-[#ccc]">
          <li>main user actions were defined;</li>
          <li>screen states were considered (empty, active, error);</li>
          <li>
            a unified navigation logic and transitions between modules were built.
          </li>
        </ul>
        <div className="bg-[#fafafa] rounded-xl p-5 flex flex-col gap-3 mt-2">
          <p>
            <span style={{ fontWeight: 500 }} className="text-[#0f0f0f]">
              UX Focus:
            </span>{" "}
            All modules are integrated into a single visit scenario, reducing the likelihood of errors and data loss.
          </p>
          <p>
            <span style={{ fontWeight: 500 }} className="text-[#0f0f0f]">
              Estimated Metrics:
            </span>{" "}
            optimizing steps and logic can speed up the visit process{" "}
            <span style={{ fontWeight: 500 }}>by 20–30%</span> and{" "}
            <span style={{ fontWeight: 500 }}>reduce the risk</span> of input errors.
          </p>
        </div>
        <p>
          Special attention was paid to ensuring all modules work in a unified
          system and do not break the main visit scenario.
        </p>
        <SectionImage alt="Section 6" aspectRatio="1192/700" src={imgSection6}/>
        <SectionImage alt="Section 7" aspectRatio="1192/700" src={imgSection7}/>
      </div>
    ),
  },
  {
    number: 5,
    title: "UI Design and Prototyping",
    content: (
      <div className="flex flex-col gap-4">
        <p>
          After approving the UX logic, I developed visual solutions and interactive prototypes.
        </p>
        <p>UI Highlights:</p>
        <ul className="flex flex-col gap-1 ml-5 list-disc text-[#555] marker:text-[#ccc]">
          <li>compliance with brand guidelines and corporate style;</li>
          <li>readability in field conditions;</li>
          <li>minimization of actions to complete tasks without errors.</li>
        </ul>
        <p>
          Prototypes were used for demonstrating solutions to the business, discussions with analysts and developers, and clarifying logic before handoff to development.
        </p>
        <SectionImage alt="Section 8" aspectRatio="1192/700" src={imgSection8}/>
      </div>
    ),
  },
  {
    number: 6,
    title: "Alignment with Business and Product",
    content: (
      <div className="flex flex-col gap-4">
        <p>
          I regularly aligned decisions with product managers, analysts, and business representatives.
        </p>
        <ul className="flex flex-col gap-1 ml-5 list-disc text-[#555] marker:text-[#ccc]">
          <li>UX solutions were adapted to real constraints;</li>
          <li>
            scenarios and interfaces were adjusted without losing product integrity;
          </li>
          <li>
            a balance was maintained between user convenience, business goals, and development capabilities.
          </li>
        </ul>
      </div>
    ),
  },
];

export function ScreenSections() {
  return (
    <AnimatedSection className="w-full px-6 md:px-10 lg:px-[74px]">
      <div className="max-w-[820px]">
        <h2
          className="font-['DM_Sans',sans-serif] text-[20px] text-[#0f0f0f] mb-6"
          style={{ fontWeight: 500 }}
        >
          Work Stages
        </h2>
        <div className="border-t border-[#f0f0f0]">
          {steps.map((step) => (
            <StepItem key={step.number} step={step} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}