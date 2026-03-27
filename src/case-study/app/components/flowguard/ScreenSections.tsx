import { AnimatedSection } from "./AnimatedSection";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion } from "motion/react";

import bulkActionsImg from "../../../assets/dbfde302128a01e12a507a1aab4d2df15f2107d7.png";
import inviteUserImg from "../../../assets/595e5efbd160a63011fec12bb5f07bef1a15c57b.png";
import manageTeamImg from "../../../assets/ede3dee0da84c03539d0dbefc12c575bbfdf5ab9.png";

interface ScreenData {
  number: string;
  title: string;
  subtitle: string;
  task: string;
  features: string[];
  effect: string;
  image?: string;
  featureSections?: {
    heading: string;
    description?: string;
    image: string;
    video?: boolean;
    videoSrc?: string; // ← Добавляем поле для ссылки на видео
  }[];
}

const screens: ScreenData[] = [
  {
    number: "01",
    title: "Users & Teams",
    subtitle: "управление пользователями",
    image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwZGFzaGJvYXJkJTIwdXNlcnMlMjBtYW5hZ2VtZW50JTIwZGFyayUyMFVJfGVufDF8fHx8MTc3MzI1NjIxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral  ",
    task: "Дать администратору быстрый обзор текущего состояния пользователей в системе.",
    features: [
      "Таблица пользователей с ключевыми параметрами: имя, email, роль, команда, статус, последний вход",
      "Фильтры и поиск по имени, роли, статусу и команде",
    ],
    featureSections: [
      {
        heading: "Массовые действия: Assign role, Move team, Suspend, Delete",
        image: bulkActionsImg,
      },
      {
        heading: "Pop-up Invite User",
        description: "контролируемое добавление новых пользователей со статусом Invited",
        image: inviteUserImg,
        video: true,
        videoSrc: "https://www.dropbox.com/scl/fi/xfpfmew5t7faeize7jg39/Video-Project-2.mp4?rlkey=uoz2nkyxbh5gm4779wdaso4mc&st=99cr3zgx&dl=1", // ← Вставь ссылку на 2-е видео
      },
      {
        heading: "Right sidebar Manage Team",
        description: "структура команды, тимлид, быстрые действия, без ухода с основной страницы",
        image: manageTeamImg,
        video: true,
        videoSrc: "https://www.dropbox.com/scl/fi/37sayd0ebw6dgsm7cbl9p/Comp-1_6.mp4?rlkey=2y64t4o51hsm1xmnwkp3brp0l&st=yn4ynfap&dl=1", // ← Вставь ссылку на 3-е видео
      },
    ],
    effect:
      "прозрачность действий, меньше ручных ошибок, поддержка масштабирования команды.",
  },
  {
    number: "02",
    title: "Roles & Permissions",
    subtitle: "настройка ролей и прав доступа, безопасное разграничение функций",
    task: "Безопасное управление ролями и разрешениями без перегрузки интерфейса.",
    features: [
      "Разделение System и Custom roles",
      "Явная структура разрешений (User Management, Roles, Policies)",
      "Контекст: количество пользователей в роли, история изменений, последний редактор",
    ],
    effect:
      "контроль над критичными действиями, снижение рисков ошибок, предсказуемость интерфейса.",
  },
  {
    number: "03",
    title: "Access Policies",
    subtitle: "условия доступа по времени, устройствам и IP, снижение рисков безопасности",
    task: "Управлять условиями применения прав (время, IP, устройство, сессии), снижая операционные и security-риски.",
    features: [
      "Политики как отдельные сущности (не смешаны с ролями)",
      "Декомпозиция условий: время, география, устройства, сессии, re-auth для чувствительных действий",
      "Явная привязка к действиям и ролям",
    ],
    effect:
      "безопасное применение ограничений без микроменеджмента, масштабируемость, контроль над рисками.",
  },
];

function ScreenCard({ screen, index }: { screen: ScreenData; index: number }) {
  return (
    <AnimatedSection delay={index * 0.08}>
      <div className="rounded-2xl border border-[#eaeaea] bg-white overflow-hidden">
        <div className="p-6 md:p-8 lg:p-10 flex flex-col gap-8 bg-[#fafafa]">
          {/* Header */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-baseline gap-3">
              <span
                className="font-['Inter',sans-serif] text-[12px] text-[#A4A4A4] tracking-[0.06em]"
                style={{ fontWeight: 500 }}
              >
                {screen.number}
              </span>
              <h3
                className="font-['DM_Sans',sans-serif] text-[22px] md:text-[24px] text-[#0f0f0f]"
                style={{ fontWeight: 500 }}
              >
                {screen.title}
              </h3>
            </div>
            <p className="font-['Inter',sans-serif] text-[14px] text-[#999] leading-[1.5]">
              {screen.subtitle}
            </p>
          </div>

          <div className="h-px bg-[#f0f0f0]" />

          {/* Task + Solution grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Task */}
            <div className="flex flex-col gap-2">
              <span
                className="font-['Inter',sans-serif] text-[11px] text-[#999] uppercase tracking-[0.08em]"
                style={{ fontWeight: 500 }}
              >
                Задача
              </span>
              <p className="font-['Inter',sans-serif] text-[14px] text-[#3d3d3d] leading-[1.65]">
                {screen.task}
              </p>
            </div>

            {/* Solution */}
            <div className="flex flex-col gap-2">
              <span
                className="font-['Inter',sans-serif] text-[11px] text-[#999] uppercase tracking-[0.08em]"
                style={{ fontWeight: 500 }}
              >
                Решение
              </span>
              <ul className="flex flex-col gap-2">
                {screen.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-[7px] shrink-0 w-[4px] h-[4px] rounded-full bg-[#d0d0d0]" />
                    <span className="font-['Inter',sans-serif] text-[14px] text-[#3d3d3d] leading-[1.65]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Effect */}
          <div className="flex items-start gap-3 bg-tranparent rounded-xl px-0 py-4 ">
            
            <p className="font-['Inter',sans-serif] text-[14px] text-[#6b6b6b] leading-[1.65]">
              <span className="text-[#999]" style={{ fontWeight: 500 }}>Эффект:</span>{" "}
              {screen.effect}
            </p>
          </div>

          {/* Feature Sections */}
          {screen.featureSections && (
            <div className="flex flex-col gap-10">
              {screen.featureSections.map((section, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col gap-5"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.12 }}
                >
                  <div className="h-px bg-[#f0f0f0]" />
                  <div className="flex flex-col gap-2">
                    <span
                      className="font-['Inter',sans-serif] text-[11px] text-[#A4A4A4] uppercase tracking-[0.08em]"
                      style={{ fontWeight: 500 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4
                      className="font-['DM_Sans',sans-serif] text-[20px] text-[#0f0f0f] leading-[1.35]"
                      style={{ fontWeight: 500 }}
                    >
                      {section.heading}
                    </h4>
                    {section.description && (
                      <p className="font-['Inter',sans-serif] text-[14px] text-[#6b6b6b] leading-[1.65] mt-0.5">
                        {section.description}
                      </p>
                    )}
                  </div>
                  <motion.div
                    className="rounded-xl overflow-hidden border border-[#eaeaea]"
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.12 + 0.15 }}
                  >
                    <ImageWithFallback
                      src={section.image}
                      alt={section.heading}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>

                  {/* 🔽 ВИДЕО вместо заглушки 🔽 */}
                  {section.video && section.videoSrc && (
                    <motion.div
                      className="relative rounded-xl overflow-hidden border border-[#eaeaea] bg-[#1a1a1a] aspect-video"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.12 + 0.25 }}
                    >
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      >
                        <source src={section.videoSrc} type="video/mp4" />
                      </video>
                    </motion.div>
                  )}
                  {/* 🔼 КОНЕЦ ВИДЕО 🔼 */}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}

export function ScreenSections() {
  return (
    <div className="w-full px-6 md:px-10 lg:px-[74px] flex flex-col gap-5">
      {screens.map((screen, index) => (
        <ScreenCard key={screen.number} screen={screen} index={index} />
      ))}
    </div>
  );
}