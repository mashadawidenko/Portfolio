import { AnimatedSection } from "./AnimatedSection";

export function Conclusion() {
  return (
    <AnimatedSection className="w-full px-6 md:px-10 lg:px-[74px] pb-20 md:pb-32">
      <div className="max-w-[680px] flex flex-col gap-5">
        <h2
          className="font-['DM_Sans',sans-serif] text-[20px] text-[#0f0f0f]"
          style={{ fontWeight: 500 }}
        >
          Вывод
        </h2>
        <div className="flex flex-col gap-4 font-['Inter',sans-serif] text-[15px] text-[#3d3d3d] leading-[1.7]">
          <p>
            Прототип показал, что в B2B-админках ценность UX измеряется не
            количеством функций, а тем, насколько интерфейсы позволяют
            предсказывать последствия действий, контролировать доступ и снижать
            операционные риски.
          </p>
          <p>
            Основной инсайт: администратору нужна система готовых сценариев
            действий, где критичные процессы защищены, а масштабирование команды
            и добавление интеграций проходят без ошибок.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
