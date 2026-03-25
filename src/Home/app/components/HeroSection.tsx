import svgPaths from "../../imports/svg-7wmd1n95bc";
import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import ellipseImg from "../../assets/djj3840dkscmv9493kwwk.png";

export function HeroSection() {
  const [showForm, setShowForm] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const handleBookCall = () => {
    setShowForm(true);
  };
  
  const handleCopyEmail = () => {
    const email = "твоя@почта.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pt-24 md:pt-40 pb-24 md:pb-40">
      
      <style>{`
        @media (min-width: 1024px) {
          .mobile-only-buttons {
            display: none !important;
          }
          .desktop-right-column {
            display: block !important;
          }
          .desktop-only-buttons {
            display: flex !important;
          }
          .hero-main-container {
            flex-direction: row !important;
          }
          .mobile-only-status {
            display: none !important;
          }
        }
        @media (max-width: 1023px) {
          .desktop-right-column {
            display: none !important;
          }
          .desktop-only-buttons {
            display: none !important;
          }
          .hero-main-container {
            flex-direction: column !important;
          }
        }
      `}</style>

      <div className="hero-main-container flex flex-col gap-12 lg:gap-16">
        
        {/* ЛЕВАЯ КОЛОНКА - ТЕКСТ */}
        <div className="flex flex-col gap-10 md:gap-14 max-w-[810px] w-full lg:w-auto lg:flex-1">
          
          {/* 👇 НОВЫЙ БЛОК - СТАТУС ТОЛЬКО ДЛЯ МОБИЛЬНЫХ (в самом верху) 👇 */}
          <AnimatedSection delay={0.1}>
            <div className="mobile-only-status flex gap-2.5 items-center mb-4 md:mb-6">
              <div className="relative shrink-0 size-3.5">
                <div className="absolute inset-0 rounded-full bg-[#97E519]" />
                <div className="absolute -inset-2 rounded-full bg-[#E1FFC7] opacity-40 animate-pulse" />
              </div>
              <span className="font-['Instrument_Sans',sans-serif] tracking-[1px] text-[#121212] text-[14px] md:text-[16px] whitespace-nowrap">
                Available for work
              </span>
            </div>
          </AnimatedSection>
          {/* 👆 Конец нового блока 👆 */}

          <AnimatedSection>
  <div className="flex flex-col gap-4 md:gap-7">
    <div className="flex items-center gap-4 md:gap-6">
      <div className="shrink-0">
        <img 
          src={ellipseImg} 
          alt="Decorative ellipse" 
          className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-contain" 
        />
      </div>
      <p className="font-['Instrument_Sans',sans-serif] text-[#171717] text-[36px] md:text-[50px] lg:text-[60px] leading-[1.15] tracking-[-2px]">
        I'm Maria,
      </p>
    </div>
    <p className="font-['Instrument_Sans',sans-serif] text-[#AAAAAA] text-[36px] md:text-[50px] lg:text-[60px] leading-[1.15] tracking-[-2px]">
      a{" "}
      <span className="text-[#171717]">UI/UX Designer</span>{" "}
      working on{" "}
      <span className="text-[#171717]">web</span>{" "}
      and{" "}
      <span className="text-[#171717]">mobile products</span>.
    </p>
  </div>
</AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex gap-4 items-start">
              <div className="relative shrink-0 size-8 mt-1">
                <svg className="absolute block size-full" fill="none" viewBox="0 0 32 32">
                  <path d={svgPaths.p15906a00} fill="#F15DF4" />
                </svg>
              </div>
              <p className="font-['Instrument_Sans',sans-serif] text-[#535353] text-[16px] md:text-[18px] lg:text-[20px] leading-[28px] max-w-[750px]">
                I design intuitive user flows and craft clean interfaces for web and mobile products. I work with complex logic, create prototypes and design systems, define user journeys, and focus on improving usability.
              </p>
            </div>
          </AnimatedSection>

          {/* МОБИЛЬНЫЕ КНОПКИ */}
          <AnimatedSection delay={0.3}>
            <div className="mobile-only-buttons flex flex-col gap-5">
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={handleBookCall}
                  className="px-5 py-2.5 bg-[#121212] text-white font-['Instrument_Sans',sans-serif] text-[14px] md:text-[16px] rounded-lg hover:bg-[#1a1a1a] transition-all duration-200 min-w-[140px]"
                >
                  Request a Project
                </button>
                
                <button 
                  onClick={handleCopyEmail}
                  className="px-5 py-2.5 bg-transparent-[#121212] font-['Instrument_Sans',sans-serif] text-[14px] md:text-[16px] rounded-lg hover:bg-[#f5f5f5] transition-all duration-200 flex items-center gap-2 min-w-[160px]"
                >
                  {copied ? (
                    <>
                      <span>Copied!</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                        <path d="M3.33334 8.66667L6.66667 12L13.3333 4" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  ) : (
                    <>
                      <span>Send me an email</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                        <rect x="2.66667" y="4.66667" width="10.6667" height="9.33333" rx="1.33333" stroke="#121212" strokeWidth="1.33333"/>
                        <path d="M2.66667 6L8 9.33333L13.3333 6" stroke="#121212" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>
              </div>

              {/* ⚠️ УДАЛИЛА ОТСЮДА БЛОК СО СТАТУСОМ (чтобы не дублировался) */}

            </div>
          </AnimatedSection>

        </div>

        {/* ПРАВАЯ КОЛОНКА - КНОПКИ */}
        <div className="desktop-right-column w-[280px] shrink-0 ml-auto">
          <AnimatedSection delay={0.25}>
            <div className="desktop-only-buttons flex flex-col gap-16">
              <div className="flex gap-2.5 items-center">
                <div className="relative shrink-0 size-3.5">
                  <div className="absolute inset-0 rounded-full bg-[#97E519]" />
                  <div className="absolute -inset-2 rounded-full bg-[#E1FFC7] opacity-40 animate-pulse" />
                </div>
                <span className="font-['Instrument_Sans',sans-serif] tracking-[1px] text-[#121212] text-[16px] whitespace-nowrap">
                  Available for work
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={handleBookCall}
                  className="px-6 py-2.5 bg-[#121212] text-white font-['Instrument_Sans',sans-serif] text-[16px] rounded-lg hover:bg-[#1a1a1a] transition-all duration-200"
                >
                  Request a Project
                </button>
                
                <button 
                  onClick={handleCopyEmail}
                  className="px-6 py-2.5 bg-transparent text-[#121212] font-['Instrument_Sans',sans-serif] text-[16px] rounded-lg hover:bg-[#f5f5f5] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <span>Copied!</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                        <path d="M3.33334 8.66667L6.66667 12L13.3333 4" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  ) : (
                    <>
                      <span>Send me an email</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                        <rect x="2.66667" y="4.66667" width="10.6667" height="9.33333" rx="1.33333" stroke="#121212" strokeWidth="1.33333"/>
                        <path d="M2.66667 6L8 9.33333L13.3333 6" stroke="#121212" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
}