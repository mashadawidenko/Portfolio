import { AnimatedSection } from "./AnimatedSection";

export function SelectedFocus() {
  return (
    <AnimatedSection className="w-full px-6 md:px-10 lg:px-[74px]">
      <div className="max-w-[680px] flex flex-col gap-5">
        <h2
          className="font-['DM_Sans',sans-serif] text-[20px] text-[#0f0f0f]"
          style={{ fontWeight: 500 }}
        >
          Выбранный фокус
        </h2>
        <div className="flex flex-col gap-4 font-['Inter',sans-serif] text-[15px] text-[#3d3d3d] leading-[1.7]">
          <p>
            Чтобы не распыляться на всю систему, я сфокусировалась на
            сценариях, которые напрямую влияют на безопасность, контроль,
            операционную эффективность.
          </p>
          <p>
            И реализовала три экрана, закрывающие этот фокус:
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
