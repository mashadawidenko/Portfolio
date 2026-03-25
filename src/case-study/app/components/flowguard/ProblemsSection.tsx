import { AnimatedSection } from "./AnimatedSection";

export function ProblemsSection() {
  return (
    <AnimatedSection className="w-full px-6 md:px-10 lg:px-[74px]">
      <div className="max-w-[680px] flex flex-col gap-5">
        <h2
          className="font-['DM_Sans',sans-serif] text-[20px] text-[#0f0f0f]"
          style={{ fontWeight: 500 }}
        >
          Проблемы
        </h2>
        <div className="flex flex-col gap-5 font-['Inter',sans-serif] text-[#3d3d3d] text-[15px] leading-[1.7]">
          <div className="flex flex-col gap-3">
            <p>
              Сотрудники B2B-компаний сталкиваются с трудностями при управлении:
            </p>
            <ul className="flex flex-col gap-1 ml-5 list-disc text-[#555] marker:text-[#ccc]">
              <li>пользователями,</li>
              <li>ролями,</li>
              <li>доступами,</li>
              <li>интеграциями и подписками.</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <p>Из-за этого:</p>
            <ul className="flex flex-col gap-1 ml-5 list-disc text-[#555] marker:text-[#ccc]">
              <li>процессы согласования внутри компании занимают несколько дней;</li>
              <li>теряется эффективность сотрудников;</li>
              <li>снижается прозрачность действий;</li>
              <li>возрастает риск ошибок и проблем с безопасностью.</li>
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
