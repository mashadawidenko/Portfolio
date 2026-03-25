import { AnimatedSection } from "./AnimatedSection";

interface PersonaCardProps {
  number: number;
  role: string;
  capabilities: string[];
  contexts: {
    context: string;
    risk: string;
  }[];
}

function PersonaCard({ number, role, capabilities, contexts }: PersonaCardProps) {
  return (
    <div className="border border-[#eaeaea] rounded-xl p-5 flex flex-col gap-4 w-full font-['Inter',sans-serif] h-full">
      {/* Role + Capabilities */}
      <div className="flex flex-col gap-3">
        <div className="flex items-baseline gap-2">
          <span className="text-[12px] text-[#999]" style={{ fontWeight: 500 }}>
            {String(number).padStart(2, "0")}
          </span>
          <span className="text-[13px] text-[#0f0f0f]" style={{ fontWeight: 500 }}>
            {role}
          </span>
        </div>
        <ul className="flex flex-col gap-1 ml-4 list-disc text-[12px] text-[#6b6b6b] leading-[1.6] marker:text-[#d0d0d0]">
          {capabilities.map((cap, i) => (
            <li key={i}>{cap}</li>
          ))}
        </ul>
      </div>

      {/* Contexts */}
      <div className="flex flex-col gap-3 mt-auto">
        {contexts.map((ctx, i) => (
          <div key={i} className="bg-[#f8f8f8] rounded-xl p-4 flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <p className="text-[12px] text-[#999]" style={{ fontWeight: 500 }}>Контекст</p>
              <p className="text-[12px] text-[#3d3d3d] leading-[1.6]">{ctx.context}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[12px] text-[#999]" style={{ fontWeight: 500 }}>⚡ Риски сейчас</p>
              <p className="text-[12px] text-[#3d3d3d] leading-[1.6]">{ctx.risk}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const personas: PersonaCardProps[] = [
  {
    number: 1,
    role: "Super Admin",
    capabilities: [
      "Полный доступ",
      "Настройка всего аккаунта компании",
      "Управление биллингом, интеграциями, ролями",
      "Ответственность за безопасность",
    ],
    contexts: [
      {
        context: "Когда я настраиваю компанию в системе, я хочу безопасно управлять всеми ролями и разрешениями, чтобы сотрудники имели доступ только к нужным функциям не создавая рисков в безопасности.",
        risk: "Ошибки при распределении прав",
      },
      {
        context: "Когда появляются новые интеграции или подписки, я хочу управлять биллингом и подключениями в одном месте, чтобы снизить вероятность финансовых и технических ошибок",
        risk: "Ручное согласование через несколько платформ → ошибки",
      },
    ],
  },
  {
    number: 2,
    role: "Admin (IT / Security)",
    capabilities: [
      "Управление пользователями и ролями",
      "Создание политик доступа",
      "Работа с инцидентами и логами",
      "Нет доступа к биллингу",
    ],
    contexts: [
      {
        context: "Когда новые пользователи подключаются к системе, я хочу создавать политики доступа и роли, чтобы гарантировать безопасную работу",
        risk: "Риски некорректных доступов",
      },
      {
        context: "Когда возникает инцидент или подозрительная активность, я хочу быстро просматривать логи дабы предотвратить или устранить последствия",
        risk: "Просмотр данных занимает длительное время",
      },
    ],
  },
  {
    number: 3,
    role: "Manager",
    capabilities: [
      "Управляет своей командой",
      "Одобряет / отклоняет запросы",
      "Видит отчёты по своей зоне",
    ],
    contexts: [
      {
        context: "Когда моя команда отправляет запросы, я хочу быстро одобрять или отклонять их, чтобы поддерживать эффективность процессов",
        risk: "Задержки из-за ручной обработки",
      },
      {
        context: "Когда я оцениваю работу своей зоны, я хочу видеть актуальные отчеты, чтобы принимать решения на актуальных данных",
        risk: "Данные разбросаны, нужна ручная сверка",
      },
    ],
  },
  {
    number: 4,
    role: "Support / Auditor (Read-only)",
    capabilities: [
      "Доступ только к просмотру",
      "Логи, отчёты, история изменений",
    ],
    contexts: [
      {
        context: "Когда я проверяю логи и отчеты, я хочу видеть все изменения, чтобы убедиться в корректности работы без вмешательства в процесс",
        risk: "Трудно отслеживать изменения в реальном времени",
      },
      {
        context: "Когда я анализирую изменения, я хочу доступ к полным данным без риска случайного изменения, чтобы соблюдать безопасность",
        risk: "Необходимость двойной проверки → потеря времени",
      },
    ],
  },
];

export function UserPersonas() {
  return (
    <AnimatedSection className="w-full">
      <div className="bg-[#fafafa] w-full overflow-hidden py-10 md:py-16 flex items-center justify-center">
        <div className="bg-white border border-[#eaeaea] rounded-2xl overflow-hidden w-[90%] max-w-[1191px] p-6 md:p-10 lg:p-14">
          <p
            className="font-['Inter',sans-serif] text-[12px] text-[#999] uppercase tracking-[0.08em] mb-6"
            style={{ fontWeight: 500 }}
          >
            Целевые пользователи + JTBD
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {personas.map((persona) => (
              <PersonaCard key={persona.number} {...persona} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}