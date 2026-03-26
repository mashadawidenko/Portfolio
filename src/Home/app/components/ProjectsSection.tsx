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

interface ProjectCardProps {
  image: string;
  title: string;
  tags: string[];
  description: string;
  imageClass?: string;
}

function ProjectCard({ image, title, tags, description, imageClass = "" }: ProjectCardProps) {
  return (
    <AnimatedSection className="flex flex-col gap-8 flex-1 min-w-[280px]">
      <div className="h-[220px] md:h-[262px] lg:h-[600px] xl:h-[650px] relative overflow-hidden rounded-lg">
        <img
          alt={title}
          className={`absolute inset-0 max-w-none object-cover size-full ${imageClass}`}
          src={image}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-['Instrument_Sans',sans-serif] font-medium text-[#161616] text-[20px] md:text-[24px] leading-[32px] tracking-[-1px]">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-5 py-1.5 rounded-full border border-[#323232]/32 font-['Instrument_Sans',sans-serif] text-[#161616] text-[14px] leading-[28px] whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="font-['Instrument_Sans',sans-serif] text-[#414141] text-[14px] md:!text-[18px] leading-[30px]">
          {description}
        </p>
      </div>
    </AnimatedSection>
  );
}

export function ProjectsSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [fixedStyles, setFixedStyles] = useState({ left: 0, width: 0, height: 0 });
  const triggerScrollRef = useRef<number>(0);

  // 🔑 Проверка: десктоп или нет (1024px = lg breakpoint)
  const isDesktop = () => window.innerWidth >= 1024;

  useEffect(() => {
    // Вычисляем точку скролла только для десктопа
    if (titleRef.current && isDesktop()) {
      const rect = titleRef.current.getBoundingClientRect();
      triggerScrollRef.current = window.scrollY + rect.top - 80;
    }

    const handleScroll = () => {
      if (!titleRef.current || !projectsContainerRef.current) return;

      // 🔑 На телефоне вообще не фиксируем
      if (!isDesktop()) {
        if (isFixed) setIsFixed(false);
        return;
      }

      const currentScroll = window.scrollY;
      const projectsRect = projectsContainerRef.current.getBoundingClientRect();
      const offsetTop = 80;

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
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll); // Пересчитываем при изменении размера
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isFixed]);

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-[0px]">
        
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
          
          {/* ЛЕВАЯ КОЛОНКА - ЗАГОЛОВОК */}
          <div className="sm:w-[280px] shrink-0">
            {/* Placeholder только на десктопе */}
            {isFixed && <div style={{ height: fixedStyles.height }} className="hidden lg:block" />}
            
            {/* Заголовок */}
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
                <h2 className="font-['Instrument_Sans',sans-serif] font-medium text-black text-[28px] md:text-[32px] leading-[40px] capitalize">
                  My Projects
                </h2>
              </AnimatedSection>
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА - СПИСОК ПРОЕКТОВ */}
          <div ref={projectsContainerRef} className="max-w-[1000px] flex-1 flex flex-col gap-20 ml-auto">
            <ProjectCard
              image={imgRectangle1}
              title="iMerch App for JTI (Japan Tobacco International)"
              tags={["Mobile Design", "Contract"]}
              description="The internal Android application is designed to automate the work of JTI employees involved in servicing retail outlets and warehouses, including coordinators, retail and technical merchandisers, and team leaders."
            />
            <Link to="/case-study" className="block group transition-all duration-300 hover:scale-[1.04] cursor-pointer">
  <ProjectCard
    image={imgRectangle2}
    title="Flowguard Enterprise Access Management Platform"
    tags={["Web Design", "Pet Project"]}
    description="An internal admin platform designed to manage users, roles, teams, and access policies in a scalable B2B SaaS environment, ensuring secure access control and operational governance."
  />
</Link>

            
            <ProjectCard
              image={imgRectangle3}
              title="INVOICEE Ios App"
              tags={["Mobile Design", "Freelance"]}
              description="A convenient mobile app for creating invoices, tracking payments, and managing finances."
              imageClass="object-[20%_center]"
            />
          </div>
          

        </div>

        {/* Other works */}
        <div className="mt-16 md:mt-20">
          <AnimatedSection>
            <h3 className="font-['Instrument_Sans',sans-serif] font-medium text-black text-[18px] md:text-[20px] leading-[24px] tracking-[-1px] mb-8">
              Other works
            </h3>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[imgRectangle7, imgRectangle5, imgRectangle4, imgRectangle6].map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="h-[180px] md:h-[240px] lg:h-[287px] relative overflow-hidden rounded-lg cursor-pointer group">
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
    </section>
  );
}