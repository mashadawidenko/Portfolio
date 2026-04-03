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
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectCardProps {
  image: string;
  title: string;
  tags: string[];
  description: string;
  stickyDescription: string;
  imageClass?: string;
  isLinked?: boolean;
}

function ProjectCard({ image, title, tags, description, stickyDescription, imageClass = "", isLinked = false }: ProjectCardProps) {
  return (
    <AnimatedSection 
      className={`flex flex-col flex-1 min-w-[280px] md:border md:border-[#DFDFDF] rounded-[10px] overflow-hidden ${isLinked ? 'cursor-pointer group' : ''}`} 
      data-project-title={stickyDescription}
    >
      {/* КАРТИНКА */}
      <div className={`h-[250px] md:h-[300px] lg:h-[470px] xl:h-[530px] relative overflow-hidden ${isLinked ? 'group-hover:ring-2 group-hover:ring-blue-500 transition-all duration-300' : ''}`}>
        <img
          alt={title}
          className={`absolute inset-0 max-w-none object-cover size-full ${imageClass}`}
          src={image}
          loading="lazy"  
          decoding="async"
        />
      </div>
      
      {/* 🔽 ЧЁРНАЯ ПОЛОСА С ТЕГАМИ (без обводки на мобилке) */}
      <div className="bg-black md:border-y md:border-white/10 px-4 py-1">
        <div className="flex flex-wrap items-center gap-1">
          {tags.map((tag, index) => (
            <>
            <span
              key={tag}
              className="px-3 py-1 rounded-full backdrop-blur-sm  font-['Inter',sans-serif] text-white text-[11px] md:text-[12px] font-medium whitespace-nowrap"
            >
              {tag}
            </span>
            {index < tags.length - 1 && (
          <div className="w-[6px] h-[6px] rounded-full bg-white/50 shrink-0" />
        )}
        </>
          ))}
        </div>
      </div>
      
      {/* ОПИСАНИЕ С ОТСТУПАМИ */}
      <div className="flex flex-col gap-3 px-5 py-5">
        <h3 className={`font-['Instrument_Sans',sans-serif] font-medium text-[#161616] text-[20px] md:!text-[24px] leading-[28px] tracking-[-1px] ${isLinked ? 'group-hover:text-blue-600 transition-colors duration-300' : ''}`}>
          {title}
        </h3>
        <p className="font-['Inter',sans-serif] font-regular text-[#575757] text-[14px] leading-[22px]">
          {description}
        </p>
      </div>
    </AnimatedSection>
  );
}

export function ProjectsSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [fixedStyles, setFixedStyles] = useState({ left: 0, width: 0, height: 0 });
  const [activeDescription, setActiveDescription] = useState("My Projects");
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number | null>(null);
  const triggerScrollRef = useRef<number>(0);
  
  // 🔽 Стейт для оверлея с картинками
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectDescriptions = [
    "iMerch App — автоматизация работы мерчандайзеров в розничных точках и на складах.",
    "Flowguard — платформа управления доступом для B2B SaaS с контролем ролей и политик.",
    "Invoicee — мобильное приложение для создания счетов и управления финансами.",
  ];

  const otherWorks = [imgRectangle7, imgRectangle5, imgRectangle4, imgRectangle6];

  const isDesktop = () => typeof window !== 'undefined' && window.innerWidth >= 1024;

  // 🔽 Функции для карусели
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

  // 🔽 Функции для оверлея
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

  // Закрытие по Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && overlayOpen) {
        closeOverlay();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [overlayOpen]);

  useEffect(() => {
    if (titleRef.current && isDesktop()) {
      const rect = titleRef.current.getBoundingClientRect();
      triggerScrollRef.current = window.scrollY + rect.top - 80;
    }

    const handleScroll = () => {
      if (!titleRef.current || !projectsContainerRef.current) return;

      if (!isDesktop()) {
        if (isFixed) setIsFixed(false);
        return;
      }

      const currentScroll = window.scrollY;
      const projectsRect = projectsContainerRef.current.getBoundingClientRect();

      const scrolledPastTrigger = currentScroll >= triggerScrollRef.current;
      const notAtEndOfProjects = projectsRect.bottom > 150;
      const shouldStick = scrolledPastTrigger && notAtEndOfProjects;

      if (shouldStick && !isFixed) {
        const rect = titleRef.current.getBoundingClientRect();
        setFixedStyles({
          left: rect.left,
          width: rect.width,
          height: rect.height
        });
        setIsFixed(true);
      } else if (!shouldStick && isFixed) {
        setIsFixed(false);
      }

      // Определяем активный проект по скроллу
      const projectCards = document.querySelectorAll('[data-project-title]');
      let foundActive = false;
      
      projectCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
          setActiveDescription(projectDescriptions[index] || "My Projects");
          foundActive = true;
        }
      });
      
      if (!foundActive && scrolledPastTrigger) {
        setActiveDescription("My Projects");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isFixed]);

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-[160px]">
        
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
          
          {/* ЛЕВАЯ КОЛОНКА - ЗАГОЛОВОК */}
          <div className="sm:w-[280px] shrink-0">
            {isFixed && <div style={{ height: fixedStyles.height }} className="hidden lg:block" />}
            
            <div 
              ref={titleRef}
              style={isFixed ? {
                position: 'fixed',
                top: '80px',
                left: `${fixedStyles.left}px`,
                width: `${fixedStyles.width}px`,
                zIndex: 50
              } : {}}
            >
              <AnimatedSection>
                <h2 className={`font-['Instrument_Sans',sans-serif] font-medium text-[28px] md:!text-[36px] leading-[40px] capitalize transition-all duration-300 ${
                  hoveredProjectIndex !== null && activeDescription !== "My Projects" 
                    ? 'text-blue-600' 
                    : 'text-black'
                }`}>
                  {activeDescription}
                </h2>
              </AnimatedSection>
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА - СПИСОК ПРОЕКТОВ */}
          <div ref={projectsContainerRef} className="max-w-[800px] flex-1 flex flex-col gap-24 ml-auto">
            
            {/* Проект 1 — со ссылкой и ховером */}
            <div 
              onMouseEnter={() => setHoveredProjectIndex(0)}
              onMouseLeave={() => setHoveredProjectIndex(null)}
            >
              <Link to="/jti-study" className="block group transition-all duration-300 hover:scale-[1.02]">
                <ProjectCard
                  image={imgRectangle1}
                  title="iMerch App for JTI (Japan Tobacco International)"
                  tags={["Mobile Design", "Contract"]}
                  description="The internal Android application is designed to automate the work of JTI employees involved in servicing retail outlets and warehouses, including coordinators, retail and technical merchandisers, and team leaders."
                  stickyDescription={projectDescriptions[0]}
                  isLinked={true}
                />
              </Link>
            </div>
            
            {/* Проект 2 — со ссылкой и ховером */}
            <div 
              onMouseEnter={() => setHoveredProjectIndex(1)}
              onMouseLeave={() => setHoveredProjectIndex(null)}
            >
              <Link to="/case-study" className="block group transition-all duration-300 hover:scale-[1.02]">
                <ProjectCard
                  image={imgRectangle2}
                  title="Flowguard Enterprise Access Management Platform"
                  tags={["Web Design", "Pet Project"]}
                  description="An internal admin platform designed to manage users, roles, teams, and access policies in a scalable B2B SaaS environment, ensuring secure access control and operational governance."
                  stickyDescription={projectDescriptions[1]}
                  isLinked={true}
                />
              </Link>
            </div>
            
            {/* Проект 3 — без ссылки, без ховера */}
            <ProjectCard
              image={imgRectangle3}
              title="INVOICEE Ios App"
              tags={["Mobile Design", "Freelance"]}
              description="A convenient mobile app for creating invoices, tracking payments, and managing finances."
              imageClass="object-[20%_center]"
              stickyDescription={projectDescriptions[2]}
              isLinked={false}
            />
            
          </div>
        </div>

        {/* 🔽 Other works с каруселью */}
        <div className="mt-16 md:mt-20">
          <AnimatedSection>
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-['Instrument_Sans',sans-serif] font-medium text-black text-[18px] md:text-[20px] leading-[24px] tracking-[-1px]">
                Other works
              </h3>
              
              {/* Стрелки навигации для карусели */}
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
          
          {/* Карусель */}
          <div 
            ref={carouselRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
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
                  className="min-w-[280px] md:!min-w-[460px] lg:min-w-[287px] aspect-square lg:!h-[380px] relative overflow-hidden rounded-lg cursor-pointer group shrink-0"
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

      {/* 🔽 ОВЕРЛЕЙ С КАРТИНКАМИ */}
      {overlayOpen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center"
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