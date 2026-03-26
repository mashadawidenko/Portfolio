import svgPaths from "../../imports/svg-7wmd1n95bc";
import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import ellipseImg from "../../assets/djj3840dkscmv9493kwwk.png";
import { X, Send, Check } from "lucide-react";


export function HeroSection() {
  const [showForm, setShowForm] = useState(false);
  const [copied, setCopied] = useState(false);
  
  
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  projectType: "",
  budget: "",
  message: "",
   });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBookCall = () => {
    setShowForm(true);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log("Form submitted:", formData);
  setIsSubmitted(true);
  setTimeout(() => {
    setShowForm(false);
    setIsSubmitted(false);
    setFormData({ name: "", email: "", projectType: "", budget: "", message: "" });
  }, 2000);
};

  const handleCopyEmail = () => {
    const email = "mariadaww@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pt-40 md:pt-44 pb-24 md:pb-40">
      
      <style>{`


        @keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin-slow {
  animation: spin-slow 25s linear infinite;
}

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
              <div className="relative shrink-0 size-8 mt-1 animate-spin-slow">
  <svg className="absolute block size-full" fill="none" viewBox="0 0 32 32">
    <path d={svgPaths.p15906a00} fill="#F15DF4" />
  </svg>
</div>
              <p className="font-['Instrument_Sans',sans-serif] text-[#535353] text-[16px] md:text-[20px] lg:!text-[20px] leading-[28px] max-w-[750px]">
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
        <div className="desktop-right-column md:pt-14 w-[280px] shrink-0 ml-auto">
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

      {/* 🔽 МОДАЛЬНОЕ ОКНО ФОРМЫ - вставь перед </section> 🔽 */}
{showForm && (
  <div 
    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    onClick={() => setShowForm(false)}
  >
    <div 
      className="bg-white rounded-2xl w-full max-w-[500px] p-6 md:p-8 relative"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Кнопка закрытия */}
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-4 right-4 p-2 hover:bg-[#f5f5f5] rounded-full transition-colors"
      >
        <X size={20} className="text-[#464646]" />
      </button>

      {/* Заголовок */}
      <h2 className="font-['Instrument_Sans',sans-serif] font-medium text-[#161616] text-[24px] md:text-[28px] leading-[32px] mb-2">
        Request a Project
      </h2>
      <p className="font-['Instrument_Sans',sans-serif] text-[#464646] text-[16px] leading-[24px] mb-6">
        Tell me about your idea — I'll get back to you within 24 hours.
      </p>

      {/* Форма или сообщение об успехе */}
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#97E519]/20 flex items-center justify-center">
            <Check size={24} className="text-[#97E519]" />
          </div>
          <p className="font-['Instrument_Sans',sans-serif] text-[#161616] text-[18px] font-medium">
            Thanks! I'll contact you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Имя */}
          <div>
            <label className="block font-['Instrument_Sans',sans-serif] text-[#464646] text-[14px] mb-1.5">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#dadada] rounded-lg font-['Instrument_Sans',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-black/20"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-['Instrument_Sans',sans-serif] text-[#464646] text-[14px] mb-1.5">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#dadada] rounded-lg font-['Instrument_Sans',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-black/20"
              placeholder="john@example.com"
            />
          </div>

          {/* Тип проекта */}
          <div>
            <label className="block font-['Instrument_Sans',sans-serif] text-[#464646] text-[14px] mb-1.5">
              Project Type
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#dadada] rounded-lg font-['Instrument_Sans',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-black/20 bg-white"
            >
              <option value="">Select...</option>
              <option value="mobile">Mobile App</option>
              <option value="web">Web Platform</option>
              <option value="branding">Branding</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Бюджет */}
          <div>
            <label className="block font-['Instrument_Sans',sans-serif] text-[#464646] text-[14px] mb-1.5">
              Budget Range
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#dadada] rounded-lg font-['Instrument_Sans',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-black/20 bg-white"
            >
              <option value="">Select...</option>
              <option value="under-5k">Under $5,000</option>
              <option value="5k-15k">$5,000 - $15,000</option>
              <option value="15k-50k">$15,000 - $50,000</option>
              <option value="50k-plus">$50,000+</option>
            </select>
          </div>

          {/* Сообщение */}
          <div>
            <label className="block font-['Instrument_Sans',sans-serif] text-[#464646] text-[14px] mb-1.5">
              Project Details
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-[#dadada] rounded-lg font-['Instrument_Sans',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-black/20 resize-none"
              placeholder="Tell me about your project goals, timeline, and any specific requirements..."
            />
          </div>

          {/* Кнопка отправки */}
          <button
            type="submit"
            className="mt-2 px-6 py-4 bg-[#121212] text-white font-['Instrument_Sans',sans-serif] font-medium text-[16px] rounded-lg hover:bg-[#1a1a1a] transition-colors flex items-center justify-center gap-2"
          >
            Send Request
            <Send size={18} />
          </button>
        </form>
      )}
    </div>
  </div>
)}
{/* 🔼 КОНЕЦ МОДАЛЬНОГО ОКНА 🔼 */}

    </section>
  );
}