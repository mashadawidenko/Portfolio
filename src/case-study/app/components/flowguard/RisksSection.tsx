import { AnimatedSection } from "./AnimatedSection";

export function RisksSection() {
  return (
    <AnimatedSection className="w-full px-6 md:px-10 lg:px-[74px]">
      <div className="flex flex-col gap-12">
        <div className="max-w-[680px] flex flex-col gap-5">
          <h2
            className="font-['DM_Sans',sans-serif] text-[20px] text-[#0f0f0f]"
            style={{ fontWeight: 500 }}
          >
            Текущие риски
          </h2>
          <div className="flex flex-col gap-4 font-['Inter',sans-serif] text-[15px] leading-[1.7]">
            <p className="text-[#3d3d3d]">
              На этапе анализа я зафиксировала основные риски текущего подхода:
            </p>
            <ul className="flex flex-col gap-1 ml-5 list-disc text-[#555] marker:text-[#ccc]">
              <li>ошибки при распределении прав;</li>
              <li>сложность контроля того, кто и к чему имеет доступ;</li>
              <li>рост рисков безопасности при масштабировании команды;</li>
              <li>усложнение управления при появлении новых интеграций и подписок.</li>
            </ul>
          </div>
        </div>

        <div className="max-w-[680px] flex flex-col gap-3">
          <h3
            className="font-['DM_Sans',sans-serif] text-[17px] text-[#0f0f0f]"
            style={{ fontWeight: 500 }}
          >
            Дополнительный контекст
          </h3>
          <p className="font-['Inter',sans-serif] italic text-[#6b6b6b] text-[15px] leading-[1.7] border-l-2 border-[#e5e5e5] pl-5">
            «Когда новые пользователи подключаются к системе, я хочу создавать
            политики доступа и роли, чтобы гарантировать безопасную работу»
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
