import imgRectangle1 from "../../assets/d8d99c1159d799482f608fe59d26e2d589d52354.png";
import imgRectangle2 from "../../assets/fcc79264b5cb22f56fb888b9720e5baa02803e24.png";
import imgRectangle3 from "../../assets/71754697a5136c744a2c3c03606645bc275bc8ce.png";
import imgRectangle4 from "../../assets/19a8650f0e445be59b32962a5b74c3686916cc75.png";
import imgRectangle5 from "../../assets/22e38510fe418ed385b1f5f607d3c9ece599b583.png";
import imgRectangle6 from "../../assets/0da72f2537b77bc9d1a4aad44c7ea244f406a6c3.png";
import imgRectangle7 from "../../assets/098ba28c81640a0a7e87fa113ee7a708c00e3377.png";
import { AnimatedSection } from "./AnimatedSection";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  image: string;
  title: string;
  subtitle?: string;
  tags: string[];
  description: string;
  stickyDescription: string;
  imageClass?: string;
  isLinked?: boolean;
}

function ProjectCard({ image, title, subtitle, tags, description, stickyDescription, imageClass = "", isLinked = false }: ProjectCardProps) {
  return (
    <div 
      className={`w-full ${isLinked ? 'cursor-pointer group' : ''}`} 
      data-project-title={stickyDescription}
      
    >
      {/* 🔽 ТЁМНАЯ КАРТОЧКА - ОТ КРАЯ ДО КРАЯ (20px отступы по бокам) */}
      <div 
  className="bg-[#F7F7F7] rounded-[16px] p-5 md:p-8 lg:p-10 overflow-hidden mx-5 md:mx-[20px]"
  
>
        
        {/* 🔽 КОНТЕНТ МАКС 1280PX ПО ЦЕНТРУ */}
        <div className="max-w-[1800px] mx-auto">
          
          {/* 🔽 GRID ДЛЯ ГОРИЗОНТАЛЬНОЙ ВЁРСТКИ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* 🔽 ПРАВАЯ КОЛОНКА — КАРТИНКА С ТЕГАМИ (на мобилке ПЕРВАЯ/СВЕРХУ) */}
            <div className="order-1 lg:order-2 relative overflow-hidden rounded-2xl">
              <img
                alt={title}
                className={`w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 ${imageClass}`}
                src={image}
                loading="lazy"  
                decoding="async"
              />
              
              {/* 🔽 ТЕГИ СВЕРХУ СЛЕВА НА КАРТИНКЕ (без чёрной полоски) */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-[10px] bg-white backdrop-blur-sm font-['Inter',sans-serif] text-[#161616] text-[12px] font-medium whitespace-nowrap shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 🔽 ЛЕВАЯ КОЛОНКА — ТЕКСТ СВЕРХУ + КНОПКА ВНИЗУ (на мобилке ВТОРАЯ/СНИЗУ) */}
            <div className="order-2 lg:order-1 flex flex-col justify-between w-full lg:max-w-[600px]">
              {/* Заголовок + описание — СВЕРХУ, на уровне верха картинки */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className={`font-['Instrument_Sans',sans-serif] font-medium text-black text-[24px] md:!text-[32px] leading-[1.1] tracking-[-1px] ${isLinked ? 'group-hover:text-blue-400 transition-colors duration-300' : ''}`}>
                    {title}
                  </h3>
                </div>

                {/* Описание */}
                <p className="font-['Inter',sans-serif] text-[#424242] text-[14px] md:!text-[14px] leading-[1.6]">
                  {description}
                </p>
              </div>

              {/* Кнопка Learn more — ВНИЗУ */}
              {isLinked && (
                <button className="w-full md:w-auto px-6 py-2.5 bg-black text-[#ffffff] rounded-[10px] font-['Inter',sans-serif] text-[15px] font-medium hover:bg-[#f0f0f0] transition-colors duration-300 flex items-center justify-center gap-2 mt-6">
                  <span>Learn more</span>
                  <ArrowRight size={18} />
                </button>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeDescription, setActiveDescription] = useState("My Projects");
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number | null>(null);
  
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectDescriptions = [
    "iMerch App — автоматизация работы мерчандайзеров в розничных точках и на складах.",
    "Flowguard — платформа управления доступом для B2B SaaS с контролем ролей и политик.",
    "Invoicee — мобильное приложение для создания счетов и управления финансами.",
  ];

  const otherWorks = [imgRectangle7, imgRectangle5, imgRectangle4, imgRectangle6];

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const openOverlay = (index: number) => {
    setCurrentImageIndex(index);
    setOverlayOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeOverlay = () => {
    setOverlayOpen(false);
    document.body.style.overflow = 'auto';
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => Math.max(0, prev - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => Math.min(otherWorks.length - 1, prev + 1));
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && overlayOpen) {
        closeOverlay();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [overlayOpen]);

  return (
    <section className="py-16 md:!py-0">
      

      {/* 🔽 СПИСОК ПРОЕКТОВ - КАЖДЫЙ ОТ КРАЯ ДО КРАЯ */}
      <div ref={projectsContainerRef} className="flex flex-col bg-[#EBEBEB] md:!py-6 gap-4 md:gap-4">
        
        {/* Проект 1 — iMerch App */}
        <AnimatedSection>
          <div 
            onMouseEnter={() => setHoveredProjectIndex(0)}
            onMouseLeave={() => setHoveredProjectIndex(null)}
          >
            <Link to="/jti-study" className="block group">
              <ProjectCard
                image={imgRectangle1}
                title="iMerch App for JTI (Japan Tobacco International)"
                subtitle="Mobile Design / Contract"
                tags={["Mobile Design", "Contract"]}
                description="The internal Android application is designed to automate the work of JTI employees involved in servicing retail outlets and warehouses, including coordinators, retail and technical merchandisers, and team leaders."
                stickyDescription={projectDescriptions[0]}
                isLinked={true}
              />
            </Link>
          </div>
        </AnimatedSection>
        
        {/* Проект 2 — Flowguard */}
        <AnimatedSection>
          <div 
            onMouseEnter={() => setHoveredProjectIndex(1)}
            onMouseLeave={() => setHoveredProjectIndex(null)}
          >
            <Link to="/case-study" className="block group">
              <ProjectCard
                image={imgRectangle2}
                title="Flowguard Enterprise Access Management Platform"
                subtitle="Web Design / Pet Project"
                tags={["Web Design", "Pet Project"]}
                description="An internal admin platform designed to manage users, roles, teams, and access policies in a scalable B2B SaaS environment, ensuring secure access control and operational governance."
                stickyDescription={projectDescriptions[1]}
                isLinked={true}
              />
            </Link>
          </div>
        </AnimatedSection>
        
        {/* Проект 3 — INVOICEE */}
        <AnimatedSection>
          <ProjectCard
            image={imgRectangle3}
            title="INVOICEE Ios App"
            subtitle="Mobile Design / Freelance"
            tags={["Mobile Design", "Freelance"]}
            description="A convenient mobile app for creating invoices, tracking payments, and managing finances."
            imageClass="object-[20%_center]"
            stickyDescription={projectDescriptions[2]}
            isLinked={false}
          />
        </AnimatedSection>
        
      </div>

      {/* 🔽 Other works с каруселью - 20PX ОТСТУПЫ, МАКС 1280PX */}
      <div className="mx-5 md:mx-[20px] mt-24 md:mt-32">
        <div className="max-w-[1280px] mx-auto">
          <AnimatedSection>
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-['Instrument_Sans',sans-serif] font-medium text-black text-[18px] md:text-[20px] leading-[24px] tracking-[-1px]">
                Other works
              </h3>
              
              <div className="flex gap-2">
                <button
                  onClick={scrollLeft}
                  className="p-2 rounded-full border border-[#323232]/32 hover:bg-[#f5f5f5] transition-all"
                  aria-label="Scroll left"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M12.5 15L7.5 10L12.5 5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  onClick={scrollRight}
                  className="p-2 rounded-full border border-[#323232]/32 hover:bg-[#f5f5f5] transition-all"
                  aria-label="Scroll right"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 5L12.5 10L7.5 15" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </AnimatedSection>
          
          {/* 🔽 КАРУСЕЛЬ */}
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-6 " 
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <style>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {otherWorks.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div 
                  className="min-w-[280px] md:min-w-[320px] lg:min-w-[350px] aspect-square lg:h-[350px] relative overflow-hidden rounded-lg cursor-pointer group shrink-0"
                  onClick={() => openOverlay(i)}
                >
                  <img
                    alt={`Other work ${i + 1}`}
                    className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-500 group-hover:scale-105"
                    src={img}
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* 🔽 ОВЕРЛЕЙ С КАРТИНКАМИ — ВНЕ КОНТЕЙНЕРА */}
      {overlayOpen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center" data-theme="dark"
          onClick={closeOverlay}
        >
          {/* Кнопка закрытия */}
          <button
            onClick={closeOverlay}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-[10000]"
            aria-label="Close overlay"
          >
            <X size={24} className="text-white" />
          </button>

          {/* Стрелка влево */}
          {currentImageIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-[10000]"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} className="text-white" />
            </button>
          )}

          {/* Стрелка вправо */}
          {currentImageIndex < otherWorks.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-[10000]"
              aria-label="Next image"
            >
              <ChevronRight size={32} className="text-white" />
            </button>
          )}

          {/* Картинка */}
          <div 
            className="max-w-[90vw] max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={otherWorks[currentImageIndex]}
              alt={`Other work ${currentImageIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            
            {/* Индикатор позиции */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white text-[14px] font-['Instrument_Sans',sans-serif]">
              {currentImageIndex + 1} / {otherWorks.length}
            </div>
          </div>
        </div>
      )}

    </section>
  );
}