import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedSection } from "./AnimatedSection";
import { Plus, Minus } from "lucide-react";

interface ExperienceItem {
  id: number;
  dateRange: string;
  location: string;
  title: string;
  role: string;
  details?: string[];
  projectInfo?: { label: string; value: string }[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    dateRange: "Sep 2025 — Dec 2025",
    location: "Russia, Moscow",
    title: "Invoice iOS, (freelance for international market)",
    role: "Role: UI UX Designer",
    projectInfo: [
      { label: "Project", value: "Fintech app for invoicing and service management (USA, Canada, Australia)" },
      { label: "Target audience", value: "Freelancers, small business, and self-employed" },
      { label: "Tools", value: "Figma, Miro" },
    ],
    details: [
      "Designed 60+ iOS app screens with comprehensive logic and UX for all key functions: creating and editing invoices, estimates, adding services, invoice templates, client database, services catalog, account settings, PDF export;",
      "Handled the entire project independently, including UX, UI, prototyping, design system, and UX copy;",
      "Conducted competitive analysis and SWOT, including studying features of foreign apps, identifying insights, forming JTBD; defined product strategy: target semi-automation segment for busy freelancers and small businesses, ensure smooth onboarding without pressure;",
      "Optimized user flow for invoice creation: implemented templates to reduce steps, speed up the process, and lower cognitive load for users;",
      "Developed all UX copy independently, including formulations for complex and repetitive scenarios, coordinated directly with the developer;",
      "Closely collaborated with client-developer: discussed and documented solutions, ensuring correct implementation of all UX/UI patterns;",
      "Created unified style and layouts ensuring interface consistency, ease of working with client database and services catalog;",
      "Participated in all project stages: from competitor analysis and feature planning to handing off prototypes for MVP development.",
    ],
  },
  {
    id: 2,
    dateRange: "Feb 2025 — Sep 2025",
    location: "Russia, Moscow",
    title: "JTI - Japan Tobacco International (Contract)",
    role: "Role: UI UX Designer",
    projectInfo: [
      { label: "Project", value: "Fintech app for invoicing and service management (USA, Canada, Australia)" },
      { label: "Target audience", value: "Freelancers, small business, and self-employed" },
      { label: "Tools", value: "Figma, Miro" },
    ],
    details: [
      "Designed 60+ iOS app screens with comprehensive logic and UX for all key functions: creating and editing invoices, estimates, adding services, invoice templates, client database, services catalog, account settings, PDF export;",
      "Handled the entire project independently, including UX, UI, prototyping, design system, and UX copy;",
      "Conducted competitive analysis and SWOT, including studying features of foreign apps, identifying insights, forming JTBD; defined product strategy: target semi-automation segment for busy freelancers and small businesses, ensure smooth onboarding without pressure;",
      "Optimized user flow for invoice creation: implemented templates to reduce steps, speed up the process, and lower cognitive load for users;",
      "Developed all UX copy independently, including formulations for complex and repetitive scenarios, coordinated directly with the developer;",
      "Closely collaborated with client-developer: discussed and documented solutions, ensuring correct implementation of all UX/UI patterns;",
      "Created unified style and layouts ensuring interface consistency, ease of working with client database and services catalog;",
      "Participated in all project stages: from competitor analysis and feature planning to handing off prototypes for MVP development.",
    ],
  },
];

function AccordionItem({ item }: { item: ExperienceItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-[#dadada]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 md:py-10 cursor-pointer text-left"
      >
        {/* МОБИЛЬНЫЙ: Дата + Плюс в одной строке */}
        <div className="flex items-start justify-between mb-2 md:!hidden">
          {/* Дата и локация */}
          <div className="w-[200px] shrink-0">
            <p className="font-['Instrument_Sans',sans-serif] text-[#454545] text-[16px] leading-[24px]">
              {item.dateRange}
            </p>
            <p className="font-['Instrument_Sans',sans-serif] text-[#454545] text-[16px] leading-[24px]">
              {item.location}
            </p>
          </div>
          
          {/* Плюс (справа на мобильном) */}
          <div className="shrink-0">
            {isOpen ? <Minus size={24} /> : <Plus size={24} />}
          </div>
        </div>

        {/* МОБИЛЬНЫЙ: Название и роль под датой */}
        <div className="md:hidden mt-2">
          <p className="font-['Instrument_Sans',sans-serif] font-medium text-[#161616] text-[18px] leading-[24px] tracking-[-1px] mb-1">
            {item.title}
          </p>
          <p className="font-['Instrument_Sans',sans-serif] text-[#464646] text-[16px] leading-[24px]">
            {item.role}
          </p>
        </div>

        {/* ДЕСКТОП: Всё в одну горизонтальную строку */}
        <div className="hidden md:flex items-center justify-between gap-8">
          {/* Дата + Описание */}
          <div className="flex gap-16 lg:gap-24 flex-1">
            {/* Дата */}
            <div className="w-[240px] shrink-0">
              <p className="font-['Instrument_Sans',sans-serif] text-[#454545] text-[16px] leading-[24px]">
                {item.dateRange}
              </p>
              <p className="font-['Instrument_Sans',sans-serif] text-[#454545] text-[16px] leading-[24px]">
                {item.location}
              </p>
            </div>

            {/* Название и роль */}
            <div className="flex flex-col gap-2 flex-1">
              <p className="font-['Instrument_Sans',sans-serif] font-medium text-[#161616] text-[20px] leading-[24px] tracking-[-1px]">
                {item.title}
              </p>
              <p className="font-['Instrument_Sans',sans-serif] text-[#464646] text-[16px] leading-[24px]">
                {item.role}
              </p>
            </div>
          </div>

          {/* Плюс (справа на десктопе) */}
          <div className="shrink-0">
            {isOpen ? <Minus size={24} /> : <Plus size={24} />}
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && item.details && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {/* Отступ = ширине колонки с датой (240px) */}
            <div className="pb-10 pl-0 md:pl-[304px]">
              {item.projectInfo && (
                <div className="mb-6 flex flex-col gap-1">
                  {item.projectInfo.map((info) => (
                    <p key={info.label} className="font-['Instrument_Sans',sans-serif] text-[16px] leading-[28px]">
                      <span className="font-medium text-[#161616]">{info.label}: </span>
                      <span className="text-[#464646]">{info.value}</span>
                    </p>
                  ))}
                </div>
              )}
              <ul className="flex flex-col gap-1">
                {item.details.map((detail, i) => (
                  <li key={i} className="font-['Instrument_Sans',sans-serif] text-[#464646] text-[16px] leading-[24px]">
                    • {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function WorkExperience() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-[160px]">
        <AnimatedSection>
          <h2 className="font-['Instrument_Sans',sans-serif] font-medium text-black text-[28px] md:text-[32px] leading-[40px] capitalize mb-6">
            Work Experience
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div>
            {experiences.map((exp) => (
              <AccordionItem key={exp.id} item={exp} />
            ))}
            <div className="border-t border-[#dadada]" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}