import { AnimatedSection } from "./AnimatedSection";

interface SectionImageProps {
  alt: string;
  aspectRatio: string;
  src?: string; // ← Обязательно добавь эту строку!
}

export function SectionImage({ alt, aspectRatio, src }: SectionImageProps) {
  return (
    <AnimatedSection className="w-full">
      <div className="bg-[#fafafa] w-full overflow-hidden py-10 md:py-16 flex items-center justify-center">
        <div className={`relative bg-[#1a1a1a] border border-[#eaeaea] rounded-2xl overflow-hidden w-[90%] max-w-[1194px]`}>
          <div className={`aspect-[${aspectRatio.replace('/', '_')}]`}>
            {src ? (
              <img 
                src={src} 
                alt={alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-[#2a2a2a]">
                <span className="text-[#666] text-[14px]">{alt}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}