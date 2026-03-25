import { AnimatedSection } from "./AnimatedSection";

export function UserContext() {
  return (
    <AnimatedSection className="w-full px-6 md:px-10 lg:px-[74px]">
      <div className="max-w-[680px] flex flex-col gap-5">
        <h2
          className="font-['DM_Sans',sans-serif] text-[20px] text-[#0f0f0f]"
          style={{ fontWeight: 500 }}
        >
          Пользовательский контекст
        </h2>
        <p className="font-['Inter',sans-serif] italic text-[#6b6b6b] text-[15px] leading-[1.7] border-l-2 border-[#e5e5e5] pl-5">
          «Когда я настраиваю компанию в системе, я хочу безопасно управлять
          всеми ролями и разрешениями, чтобы сотрудники имели доступ только к
          нужным функциям, не создавая рисков для безопасности.»
        </p>
      </div>
    </AnimatedSection>
  );
}
