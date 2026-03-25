import { AnimatedSection } from "./AnimatedSection";
import { Play } from "lucide-react";

export function VideoPlaceholder() {
  return (
    <AnimatedSection className="w-full">
      <div className="bg-[#fafafa] w-full overflow-hidden py-10 md:py-16 flex items-center justify-center">
        <div className="relative bg-[#1a1a1a] border border-[#eaeaea] rounded-2xl overflow-hidden w-[90%] max-w-[1192px] aspect-[1192/834]">
          {/* Orange gradient glows */}
          <div className="absolute w-[805px] h-[805px] -top-[319px] right-[-200px]">
            <svg className="block w-full h-full" fill="none" viewBox="0 0 2112.6 2112.6">
              <g filter="url(#video_glow_1)">
                <circle cx="1056.3" cy="1056.3" fill="#FF8228" fillOpacity="0.18" r="402.5" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2112.6" id="video_glow_1" width="2112.6" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="blur" stdDeviation="326.9" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="absolute w-[1260px] h-[1260px] -top-[66px] -left-[487px]">
            <svg className="block w-full h-full" fill="none" viewBox="0 0 2567.6 2567.6">
              <g filter="url(#video_glow_2)">
                <circle cx="1283.8" cy="1283.8" fill="#FF8228" fillOpacity="0.18" r="630" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2567.6" id="video_glow_2" width="2567.6" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="blur" stdDeviation="326.9" />
                </filter>
              </defs>
            </svg>
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                <Play className="w-7 h-7 md:w-9 md:h-9 text-white ml-0.5" />
              </div>
              <p className="text-white/50 text-[13px] font-['Inter',sans-serif]">
                Video placeholder
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
