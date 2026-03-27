import { AnimatedSection } from "./AnimatedSection";

export function VideoPlaceholder() {
  return (
    <AnimatedSection className="w-full">
      <div className="bg-[#fafafa] w-full overflow-hidden py-10 md:py-16 flex items-center justify-center">
        <div className="relative bg-[#1a1a1a] border border-[#eaeaea] rounded-2xl overflow-hidden w-[90%] max-w-[1192px] aspect-[1192/834]">
          
          {/* Orange gradient glows (оставляем как есть - это декор) */}
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

          {/* 🔽 ВИДЕО - вместо плейсхолдера */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source 
              src="https://www.dropbox.com/scl/fi/wvd0nuokr9x3ykl6svsw0/Comp-1_1.mp4?rlkey=h8y9ndgycxclac0rlg3et24ml&st=jo5ux3n0&dl=1" 
              type="video/mp4" 
            />
          </video>
          {/* 🔼 КОНЕЦ ВИДЕО */}

        </div>
      </div>
    </AnimatedSection>
  );
}