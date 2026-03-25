import { AnimatedSection } from "./AnimatedSection";

export function ProjectDescription() {
  return (
    <AnimatedSection className="w-full px-6 md:px-10 lg:px-[74px]">
      <div className="max-w-[680px] flex flex-col gap-5">
        <h2
          className="font-['DM_Sans',sans-serif] text-[20px] text-[#0f0f0f]"
          style={{ fontWeight: 500 }}
        >
          Описание проекта
        </h2>
        <div className="flex flex-col gap-4 font-['Inter',sans-serif] text-[#3d3d3d] text-[15px] leading-[1.7]">
          <p>
            Flowguard — PET-проект, концепт B2B-админ-панели для управления
            пользователями, ролями, доступами, интеграциями и подписками внутри
            компании.
          </p>
          <p>
            В этом кейсе я осознанно не показываю всю систему. Фокус — на
            поднаборе сценариев, которые я проработала от проблемы до интерфейса
            и реализовала в виде трёх ключевых экранов.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
