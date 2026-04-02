import { AnimatedSection } from "./AnimatedSection";

interface SectionImageProps {
  alt: string;
  aspectRatio?: string;
}

export function SectionImage({ alt, aspectRatio = "16/9" }: SectionImageProps) {
  return (
    <AnimatedSection className="w-full">
      <div className="bg-[#fafafa] w-full overflow-hidden py-10 md:py-16 flex items-center justify-center">
        <div
          className="relative bg-[#f0f0f0] border border-[#eaeaea] rounded-2xl overflow-hidden w-[90%] max-w-[1192px] flex items-center justify-center"
          style={{ aspectRatio }}
        >
          <span className="font-['Inter',sans-serif] text-[13px] text-[#bbb]">
            {alt}
          </span>
        </div>
      </div>
    </AnimatedSection>
  );
}
