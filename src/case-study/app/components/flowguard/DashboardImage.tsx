import { AnimatedSection } from "./AnimatedSection";
import imgDashboard from "../../../assets/7417d82587ad1fd729012665e9647068b6781e50.png";

function OrangeGlow({ className }: { className?: string }) {
  return (
    <div className={`absolute ${className}`}>
      <svg className="block w-full h-full" fill="none" viewBox="0 0 2112.6 2112.6">
        <g filter="url(#glow_filter)">
          <circle cx="1056.3" cy="1056.3" fill="#FF8228" fillOpacity="0.18" r="402.5" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2112.6" id="glow_filter" width="2112.6" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="blur" stdDeviation="326.9" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export function DashboardImage() {
  return (
    <AnimatedSection className="w-full">
      <div className="bg-[#fafafa] w-full overflow-hidden py-10 md:py-16 flex items-center justify-center">
        <div className="relative bg-[#1a1a1a] border border-[#eaeaea] rounded-2xl overflow-hidden w-[90%] max-w-[1194px] aspect-[1194/908]">
          <OrangeGlow className="w-[805px] h-[805px] -top-[319px] right-[-200px] opacity-70" />
          <OrangeGlow className="w-[1260px] h-[1260px] -top-[66px] -left-[487px] opacity-50" />
          <div className="absolute inset-[8%] rounded-[10px] overflow-hidden shadow-[0px_0px_14px_1px_rgba(0,0,0,0.02),0px_2px_24px_0px_rgba(0,0,0,0.04)]">
            <img
              src={imgDashboard}
              alt="Flowguard Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}