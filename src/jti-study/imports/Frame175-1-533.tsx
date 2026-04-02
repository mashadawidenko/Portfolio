import clsx from "clsx";
import svgPaths from "./svg-tyi22mwi4d";
import imgFrame260887621 from "figma:asset/7417d82587ad1fd729012665e9647068b6781e50.png";

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f8f8f8] relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[12px] items-start not-italic p-[16px] relative w-full">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className="flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3d3d3d] text-[16px] whitespace-nowrap">
      <p className="leading-[28px]">{children}</p>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col justify-center relative shrink-0 w-full">
      <ul>
        <li className="list-disc ms-[24px] whitespace-pre-wrap">
          <span className="leading-[22px]">{children}</span>
        </li>
      </ul>
    </div>
  );
}
type Frame2608888HelperProps = {
  additionalClassNames?: string;
};

function Frame2608888Helper({ additionalClassNames = "" }: Frame2608888HelperProps) {
  return (
    <div className={clsx("absolute h-0 left-0 w-[1920px]", additionalClassNames)}>
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 1">
          <path d="M0 0.5H1920" id="Vector 16" stroke="var(--stroke-0, #E9E9E9)" />
        </svg>
      </div>
    </div>
  );
}
type Text4Props = {
  text: string;
};

function Text4({ text }: Text4Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Montserrat:Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[#4b4b4b] text-[16px] w-[653px]">
        <p className="leading-[22px]">{text}</p>
      </div>
    </div>
  );
}
type Text3Props = {
  text: string;
};

function Text3({ text }: Text3Props) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[12px] text-black w-full">
        <p className="leading-[18px]">{`⚡ Риски сейчас: `}</p>
      </div>
      <p className="leading-[16px] relative shrink-0 text-[#575757] text-[10px] w-full">{text}</p>
    </div>
  );
}
type Helper4Props = {
  text: string;
  text1: string;
};

function Helper4({ text, text1 }: Helper4Props) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="leading-[normal] relative shrink-0 text-[12px] text-black w-full">{text}</p>
      <p className="leading-[16px] relative shrink-0 text-[#575757] text-[10px] w-full">{text1}</p>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <ul className="block relative shrink-0 w-full">
      <li className="list-disc ms-[15px] whitespace-pre-wrap">
        <span className="leading-[16px]">{text}</span>
      </li>
    </ul>
  );
}
type Helper3Props = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
};

function Helper3({ text, text1, text2, text3 }: Helper3Props) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-[#575757] text-[10px] w-full">
      <Text2 text={text} />
      <Text2 text={text1} />
      <Text2 text={text2} />
      <Text2 text={text3} />
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return <Wrapper>{text}</Wrapper>;
}
type Helper2Props = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
};

function Helper2({ text, text1, text2, text3 }: Helper2Props) {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Text1 text={text} />
      <Text1 text={text1} />
      <Text1 text={text2} />
      <Text1 text={text3} />
    </div>
  );
}
type Helper1Props = {
  additionalClassNames?: string;
};

function Helper1({ additionalClassNames = "" }: Helper1Props) {
  return (
    <div className={clsx("absolute size-[1260px] top-[-66px]", additionalClassNames)}>
      <div className="absolute inset-[-51.89%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2567.6 2567.6">
          <g filter="url(#filter0_f_1_251)" id="Ellipse 19">
            <circle cx="1283.8" cy="1283.8" fill="var(--fill-0, #FF8228)" fillOpacity="0.18" r="630" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2567.6" id="filter0_f_1_251" width="2567.6" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_251" stdDeviation="326.9" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("absolute size-[805px] top-[-319px]", additionalClassNames)}>
      <div className="absolute inset-[-81.22%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2112.6 2112.6">
          <g filter="url(#filter0_f_1_255)" id="Ellipse 18">
            <circle cx="1056.3" cy="1056.3" fill="var(--fill-0, #FF8228)" r="402.5" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2112.6" id="filter0_f_1_255" width="2112.6" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_255" stdDeviation="326.9" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex items-center justify-center px-[20px] py-[6px] relative rounded-[8px] shrink-0", additionalClassNames)}>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#515151] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}
type Frame30TextProps = {
  text: string;
};

function Frame30Text({ text }: Frame30TextProps) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'lnum', 'pnum'" }} className="flex flex-col justify-center relative shrink-0">
      <p className="[text-decoration-skip-ink:none] decoration-solid leading-[24px] text-[#3d3d3d] text-[16px] underline" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'lnum', 'pnum'" }}>
        {text}
      </p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] left-[323px] not-italic text-[24px] text-black top-[5595.5px] w-[740px]">
        <p className="leading-[normal]">UX-гипотеза</p>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[72px] h-[5736px] items-center left-0 top-0 w-[1920px]">
        <div className="relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#dadada] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[160px] py-[32px] relative w-full">
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[20px]" data-name="Frame">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="Frame">
                      <path d={svgPaths.p3e673e00} fill="var(--fill-0, #BAE920)" id="Vector" />
                    </g>
                  </svg>
                </div>
                <Wrapper1>Masha Dawindeko</Wrapper1>
              </div>
              <div className="content-stretch flex gap-[64px] items-center relative shrink-0">
                <div className="content-stretch flex font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[44px] items-center leading-[0] relative shrink-0 text-[0px] text-white whitespace-nowrap">
                  <Frame30Text text="Linkedin" />
                  <Frame30Text text="Email" />
                </div>
                <div className="content-stretch flex gap-[10px] items-center justify-center pl-[32px] pr-[24px] py-[10px] relative rounded-[99px] shrink-0" data-name="Items">
                  <div aria-hidden="true" className="absolute border-[#323232] border-[0.4px] border-solid inset-0 pointer-events-none rounded-[99px]" />
                  <Wrapper1>CV</Wrapper1>
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ArrowLineUp">
                    <div className="absolute inset-[18.75%_12.5%_12.5%_12.5%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16.5">
                        <path d={svgPaths.p1b14380} fill="var(--fill-0, #3D3D3D)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[122px] items-start relative shrink-0 w-[1344px]">
          <div className="content-stretch flex flex-col gap-[104px] items-end relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[144px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[89px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[72px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[123px] items-start px-[74px] relative shrink-0">
                      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[820px]">
                        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[64px] text-black w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[normal]">Flowguard Enterprise Access Management Platform</p>
                        </div>
                        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[505px]">
                          <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#424242] text-[16px] w-full">
                            <p className="leading-[normal]">Admin panel · Feature-focused UX/UI case</p>
                          </div>
                          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
                            <Text text="Web" additionalClassNames="bg-[#ffd4ce]" />
                            <Text text="2025" additionalClassNames="bg-[#d4ffb9]" />
                            <Text text="Figma" additionalClassNames="bg-[#cfe9ff]" />
                            <Text text="Admin Panel" additionalClassNames="bg-[#ffddb5]" />
                            <Text text="After Effects" additionalClassNames="bg-[#edd7ff]" />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-[740px]">
                        <div className="flex flex-col font-['Montserrat:Medium',sans-serif] justify-center relative shrink-0 text-[24px] text-black w-full">
                          <p className="leading-[normal]">Описание проекта:</p>
                        </div>
                        <div className="content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] gap-[12px] items-start relative shrink-0 text-[#424242] text-[16px] w-full">
                          <div className="flex flex-col justify-center relative shrink-0 w-full">
                            <p className="leading-[22px]">Flowguard - PET-проект, концепт B2B-админ-панели для управления пользователями, ролями, доступами, интеграциями и подписками внутри компании.</p>
                          </div>
                          <div className="flex flex-col justify-center relative shrink-0 w-full">
                            <p className="leading-[22px]">В этом кейсе я осознанно не показываю всю систему. Фокус - на поднаборе сценариев, которые я проработала от проблемы до интерфейса и реализовала в виде трёх ключевых экранов.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#f7f7f7] h-[1054px] overflow-clip relative shrink-0 w-full">
                      <div className="-translate-x-1/2 absolute bg-[#222] border border-[#f1f1f1] border-solid h-[908px] left-1/2 overflow-clip rounded-[24px] top-[73px] w-[1194px]">
                        <Helper additionalClassNames="left-[896px]" />
                        <Helper1 additionalClassNames="left-[-487px]" />
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[635px] left-1/2 rounded-[10px] shadow-[0px_0px_14.1px_1px_rgba(0,0,0,0.02),0px_2px_24px_0px_rgba(0,0,0,0.04)] top-[calc(50%+0.5px)] w-[990px]" data-name="Frame 2608876 (2) 1">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
                            <img alt="" className="absolute h-[120.33%] left-[-6.45%] max-w-none top-[-10.16%] w-[112.91%]" src={imgFrame260887621} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic px-[74px] relative w-full">
                      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] justify-center min-w-full relative shrink-0 text-[24px] text-black w-[min-content]">
                        <p className="leading-[normal]">Проблемы</p>
                      </div>
                      <div className="content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] gap-[24px] items-start relative shrink-0 text-[#424242] text-[16px] w-[740px]">
                        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                          <div className="flex flex-col justify-center relative shrink-0 w-full">
                            <p className="leading-[22px]">Сотрудники B2B-компаний сталкиваются с трудностями при управлении:</p>
                          </div>
                          <Helper2 text="пользователями," text1="ролями," text2="доступами," text3="интеграциями и подписками." />
                        </div>
                        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                          <div className="flex flex-col justify-center relative shrink-0 w-full">
                            <p className="leading-[22px]">Из-за этого:</p>
                          </div>
                          <Helper2 text="процессы согласования внутри компании занимают несколько дней;" text1="теряется эффективность сотрудников;" text2="снижается прозрачность действий;" text3="возрастает риск ошибок и проблем с безопасностью." />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#f7f7f7] h-[1054px] overflow-clip relative shrink-0 w-full">
                    <div className="absolute bg-white border border-[#f1f1f1] border-solid h-[974px] left-[76px] overflow-clip rounded-[24px] top-[40px] w-[1191px]">
                      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[24px] items-start left-[calc(50%-0.5px)] top-[56px]">
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-black uppercase w-[min-content]">Целевые пользователи + JTBD</p>
                        <div className="content-start flex flex-wrap gap-[26px] items-start relative shrink-0 w-[1126px]">
                          <div className="content-stretch flex items-start justify-between p-[16px] relative rounded-[12px] shrink-0 w-[550px]">
                            <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
                            <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic py-[14px] relative shrink-0 w-[211px]">
                              <ol className="block relative shrink-0 text-[12px] text-black w-full" start="1">
                                <li className="ms-[18px] whitespace-pre-wrap">
                                  <span className="leading-[18px]">Super Admin</span>
                                </li>
                              </ol>
                              <Helper3 text="Полный доступ" text1="Настройка всего аккаунта компании" text2="Управление биллингом, интеграциями, ролями" text3="Ответственность за безопасность" />
                            </div>
                            <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-[282px]">
                              <Wrapper2>
                                <Helper4 text="Контекст:" text1="Когда я настраиваю компанию в системе, я хочу безопасно управлять всеми ролями и разрешениями, чтобы сотрудники имели доступ только к нужным функциям не создавая рисков в безопасности." />
                                <Text3 text="Ошибки при распредлении прав" />
                              </Wrapper2>
                              <Wrapper2>
                                <Helper4 text="Контекст:" text1="Когда появляются новые интеграции или подписки, я хочу управлять биллингом и подключениями в одном месте, чтобы снизить вероятность финансовых и технических ошибок" />
                                <Text3 text="Ручное согласование через несколько платформ → ошибки" />
                              </Wrapper2>
                            </div>
                          </div>
                          <div className="content-stretch flex h-[412px] items-start justify-between p-[16px] relative rounded-[12px] shrink-0 w-[550px]">
                            <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
                            <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] h-full items-start leading-[0] not-italic relative shrink-0 w-[230px]">
                              <ol className="block relative shrink-0 text-[12px] text-black w-full" start="2">
                                <li className="ms-[18px] whitespace-pre-wrap">
                                  <span className="leading-[18px]">Admin (IT / Security)</span>
                                </li>
                              </ol>
                              <Helper3 text="Управление пользователями и ролями" text1="Создание политик доступа" text2="Работа с инцидентами и логами" text3="Нет доступа к биллингу" />
                            </div>
                            <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[18px] items-start not-italic relative shrink-0 w-[282px]">
                              <div className="bg-[#f8f8f8] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[12px] shrink-0 w-[282px]">
                                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                                  <p className="leading-[normal] relative shrink-0 text-[12px] text-black w-full">Контекст:</p>
                                  <p className="leading-[16px] relative shrink-0 text-[#575757] text-[10px] w-full">{`Когда новые пользователи подключаются к системе, я хочу создавать политики доступа и роли, чтобы гарантировать безопасную работу `}</p>
                                </div>
                                <Text3 text="Риски некорректных доступов" />
                              </div>
                              <div className="bg-[#f8f8f8] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[12px] shrink-0 w-[282px]">
                                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                                  <p className="leading-[normal] relative shrink-0 text-[12px] text-black w-full">Контекст:</p>
                                  <p className="leading-[16px] relative shrink-0 text-[#575757] text-[10px] w-full">{`Когда возникает инцидент или подозрительная активность, я хочу быстро просматривать логи дабы предотвратить или устранить последствия `}</p>
                                </div>
                                <Text3 text="Просмотр данных занимает длительное время" />
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex h-[380px] items-start justify-between p-[16px] relative rounded-[12px] shrink-0 w-[550px]">
                            <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
                            <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] h-full items-start leading-[0] not-italic relative shrink-0 w-[233px]">
                              <ol className="block relative shrink-0 text-[12px] text-black w-full" start="3">
                                <li className="ms-[18px] whitespace-pre-wrap">
                                  <span className="leading-[18px]">Manager</span>
                                </li>
                              </ol>
                              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-[#575757] text-[10px] w-full">
                                <Text2 text="Управляет своей командой" />
                                <Text2 text="Одобряет / отклоняет запросы" />
                                <Text2 text="Видит отчёты по своей зоне" />
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[18px] items-start not-italic relative shrink-0 w-[282px]">
                              <div className="bg-[#f8f8f8] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[12px] shrink-0 w-[282px]">
                                <Helper4 text="Контекст:" text1="Когда моя команда отправляет запросы, я хочу быстро одобрять или отклонять их, чтобы поддерживать эффективность процессов" />
                                <Text3 text="Задержки из-за ручной обработки" />
                              </div>
                              <div className="bg-[#f8f8f8] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[12px] shrink-0 w-[282px]">
                                <Helper4 text="Контекст:" text1="Когда я оцениваю работу своей зоны, я хочу видеть актуальные отчеты, чтобы принимать решения на актуальных данных" />
                                <Text3 text="Данные разбросаны, нужна ручная сверка" />
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex items-start justify-between p-[16px] relative rounded-[12px] shrink-0 w-[550px]">
                            <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
                            <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic relative self-stretch shrink-0 w-[212px]">
                              <ol className="block relative shrink-0 text-[12px] text-black w-full" start="4">
                                <li className="ms-[18px] whitespace-pre-wrap">
                                  <span className="leading-[18px]">Support / Auditor (Read-only)</span>
                                </li>
                              </ol>
                              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-[#575757] text-[10px] w-full">
                                <Text2 text="Доступ только к просмотру" />
                                <Text2 text="Логи, отчёты, история изменений" />
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[18px] items-start not-italic relative shrink-0 w-[282px]">
                              <div className="bg-[#f8f8f8] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[12px] shrink-0 w-[282px]">
                                <Helper4 text="Контекст:" text1="Когда я проверяю логи и отчеты, я хочу видеть все изменения , чтобы убедиться в корректности работы без вмешательства в процесс" />
                                <Text3 text="Трудно отслеживать изменения в реальном времени" />
                              </div>
                              <div className="bg-[#f8f8f8] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[12px] shrink-0 w-[282px]">
                                <Helper4 text="Контекст:" text1="Когда я анализирую изменения, я хочу доступ к полным данным без риска случайного изменения, чтобы соблюдать безопасность" />
                                <Text3 text="Необходимость двойной проверки → потеря времени" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center px-[74px] py-[10px] relative shrink-0">
                  <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ca2626] text-[16px] whitespace-nowrap">
                    <p className="leading-[22px]">Ключевой запрос пользователя - контроль и предсказуемость при работе с доступами*</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[24px] items-start px-[74px] relative w-full">
                  <div className="flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black w-full">
                    <p className="leading-[normal]">Пользовательский контекст</p>
                  </div>
                  <Text4 text="«Когда я настраиваю компанию в системе, я хочу безопасно управлять всеми ролями и разрешениями, чтобы сотрудники имели доступ только к нужным функциям, не создавая рисков для безопасности.»" />
                </div>
              </div>
            </div>
            <div className="bg-[#f7f7f7] h-[973px] overflow-clip relative shrink-0 w-full">
              <div className="absolute bg-[#222] border border-[#f1f1f1] border-solid h-[834px] left-[76px] overflow-clip rounded-[24px] top-[70px] w-[1192px]">
                <Helper additionalClassNames="left-[1019px]" />
                <Helper1 additionalClassNames="left-[-364px]" />
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[556px] left-[calc(50%+0.5px)] mix-blend-screen top-[calc(50%-32px)] w-[791px]" data-name="modalwin_1 1">
                  <div className="absolute inset-0 overflow-hidden">
                    <video autoPlay className="absolute h-[210.7%] left-[-70.3%] max-w-none top-[-56.51%] w-[240.6%]" controlsList="nodownload" loop playsInline>
                      <source src="/_videos/v1/654c51c75c7005ca55c6f5cc6f4834a8616be860" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[56px] items-start px-[74px] relative shrink-0">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[740px]">
              <div className="flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black w-full">
                <p className="leading-[normal]">Текущие риски</p>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <Text4 text="На этапе анализа я зафиксировала основные риски текущего подхода:" />
                <div className="content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] gap-[6px] items-start leading-[0] not-italic relative shrink-0 text-[#424242] text-[16px] w-full">
                  <Wrapper>{` ошибки при распределении прав;`}</Wrapper>
                  <Text1 text="сложность контроля того, кто и к чему имеет доступ;" />
                  <Text1 text="рост рисков безопасности при масштабировании команды;" />
                  <Text1 text="усложнение управления при появлении новых интеграций и подписок." />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[740px]">
              <div className="flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black w-full">
                <p className="leading-[normal]">Дополнительный контекст:</p>
              </div>
              <Text4 text="«Когда новые пользователи подключаются к системе, я хочу создавать политики доступа и роли, чтобы гарантировать безопасную работу »" />
            </div>
          </div>
        </div>
        <div className="absolute h-[8490px] left-[1632px] top-[112px] w-0">
          <div className="absolute inset-[0_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 8490">
              <path d="M0.5 0V8490" id="Vector 15" stroke="var(--stroke-0, #E9E9E9)" />
            </svg>
          </div>
        </div>
        <Frame2608888Helper additionalClassNames="top-[501px]" />
        <Frame2608888Helper additionalClassNames="top-[802px]" />
        <Frame2608888Helper additionalClassNames="top-[1871px]" />
        <Frame2608888Helper additionalClassNames="top-[3461px]" />
        <Frame2608888Helper additionalClassNames="top-[3540px]" />
        <Frame2608888Helper additionalClassNames="top-[4867px]" />
        <Frame2608888Helper additionalClassNames="top-[5448px]" />
        <Frame2608888Helper additionalClassNames="top-[517px]" />
        <Frame2608888Helper additionalClassNames="top-[818px]" />
        <Frame2608888Helper additionalClassNames="top-[1887px]" />
        <Frame2608888Helper additionalClassNames="top-[3477px]" />
        <Frame2608888Helper additionalClassNames="top-[3556px]" />
        <Frame2608888Helper additionalClassNames="top-[4883px]" />
        <Frame2608888Helper additionalClassNames="top-[5464px]" />
        <Frame2608888Helper additionalClassNames="top-[3894px]" />
        <Frame2608888Helper additionalClassNames="top-[2407px]" />
        <div className="absolute h-[8489px] left-[288px] top-[112px] w-0">
          <div className="absolute inset-[0_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 8489">
              <path d="M0.5 0V8489" id="Vector 14" stroke="var(--stroke-0, #E9E9E9)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}