import svgPaths from "../../imports/svg-7wmd1n95bc";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-[#dadada]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-[160px] py-4 md:py-6.5 flex items-center justify-between">
          
          {/* ЛОГОТИП */}
          <div className="flex gap-2.5 items-center">
            <span className="font-['Instrument_Sans',sans-serif] font-bold text-[#3d3d3d] text-[16px] leading-[28px] whitespace-nowrap">
              Masha Dawidenko
            </span>
          </div>

          {/* ДЕСКТОП МЕНЮ — показываем только если isDesktop = true */}
          {isDesktop && (
            <div className="flex gap-6 md:gap-11 items-center">
              <a href="#" className="text-[#3d3d3d] text-[16px] underline decoration-solid  font-['Instrument_Sans',sans-serif]">
                Linkedin
              </a>
              <a href="#" className="text-[#3d3d3d] text-[16px] underline decoration-solid font-['Instrument_Sans',sans-serif]">
                Email
              </a>
              <button className="flex gap-2.5 items-center justify-center pl-6 md:pl-8 pr-4 md:pr-6 py-2.5 rounded-full border border-[#323232]/40">
                <span className="font-['Instrument_Sans',sans-serif] font-medium text-[#3d3d3d] text-[16px] leading-[28px]">CV</span>
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none">
                  <path d={svgPaths.p1b14380} fill="#3D3D3D" />
                </svg>
              </button>
            </div>
          )}

          {/* ГАМБУРГЕР — показываем только если isDesktop = false */}
          {!isDesktop && (
            <button 
              onClick={() => setMenuOpen(true)}
              className="flex items-center justify-center p-2"
              aria-label="Open menu"
            >
              <div className="flex flex-col gap-1.5">
                <span className="w-6 h-0.5 bg-[#3d3d3d] block" />
                <span className="w-6 h-0.5 bg-[#3d3d3d] block" />
                <span className="w-6 h-0.5 bg-[#3d3d3d] block" />
              </div>
            </button>
          )}

        </div>
      </header>

      {/* ПОЛНОЭКРАННОЕ МЕНЮ — только мобильный */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="absolute top-0 right-0 p-6">
            <button 
              onClick={() => setMenuOpen(false)}
              className="p-2 hover:bg-[#f5f5f5] rounded-full transition-colors"
            >
              <X size={24} className="text-[#3d3d3d]" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center h-full gap-8 pb-20">
            <a 
              href="#" 
              className="font-['Instrument_Sans',sans-serif] text-[#3d3d3d] text-[28px] font-medium underline decoration-2 underline-offset-4"
              onClick={() => setMenuOpen(false)}
            >
              Linkedin
            </a>
            <a 
              href="#" 
              className="font-['Instrument_Sans',sans-serif] text-[#3d3d3d] text-[28px] font-medium underline decoration-2 underline-offset-4"
              onClick={() => setMenuOpen(false)}
            >
              Email
            </a>
            <button 
              className="flex gap-2.5 items-center justify-center pl-8 pr-6 py-3 rounded-full border border-[#323232]/40 mt-4"
              onClick={() => setMenuOpen(false)}
            >
              <span className="font-['Instrument_Sans',sans-serif] font-medium text-[#3d3d3d] text-[18px] leading-[28px]">CV</span>
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none">
                <path d={svgPaths.p1b14380} fill="#3D3D3D" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}