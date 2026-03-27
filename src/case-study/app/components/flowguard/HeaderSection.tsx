import svgPaths from "../../../imports/svg-236tgfz0o3";

export function HeaderSection() {
  return (
    <header className="w-full border-b border-[#e8e8e8] lg:px-[160px]">
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-[160px] py-6 md:py-8 ">
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 shrink-0">
            <svg className="block w-full h-full" fill="none" viewBox="0 0 20 20">
              <path d={svgPaths.p3e673e00} fill="#BAE920" />
            </svg>
          </div>
          <span className="font-['Instrument_Sans',sans-serif] text-[15px] text-[#1a1a1a] whitespace-nowrap" style={{ fontWeight: 500 }}>
            Masha Dawindeko
          </span>
        </div>
        <div className="flex items-center gap-6 md:gap-14">
          <div className="hidden sm:flex items-center gap-6 md:gap-10">
            <a href="#" className="text-[#1a1a1a] text-[15px] font-['Instrument_Sans',sans-serif] underline underline-offset-2 decoration-[#ccc] hover:decoration-[#1a1a1a] transition-colors">
              Linkedin
            </a>
            <a href="#" className="text-[#1a1a1a] text-[15px] font-['Instrument_Sans',sans-serif] underline underline-offset-2 decoration-[#ccc] hover:decoration-[#1a1a1a] transition-colors">
              Email
            </a>
          </div>
          <div className="flex items-center gap-2.5 border border-[#1a1a1a]/20 rounded-full pl-6 md:pl-8 pr-5 md:pr-6 py-2.5 hover:border-[#1a1a1a]/40 transition-colors">
            <span className="font-['Instrument_Sans',sans-serif] text-[#1a1a1a] text-[15px]" style={{ fontWeight: 500 }}>
              CV
            </span>
            <div className="w-5 h-5 shrink-0">
              <svg className="block w-full h-full" fill="none" viewBox="0 0 18 16.5">
                <path d={svgPaths.p1b14380} fill="#1a1a1a" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
