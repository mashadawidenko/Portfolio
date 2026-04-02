import { Breadcrumbs } from "./Breadcrumbs";
import { HeaderSection } from "./HeaderSection";
import { HeroSection } from "./HeroSection";
import { ProjectDescription } from "./ProjectDescription";
import { DashboardImage } from "./DashboardImage";
import { UserContext } from "./UserContext";
import { ProductGoal } from "./ProductGoal";
import { SectionImage } from "./SectionImage";
import { SelectedFocus } from "./SelectedFocus";
import { ProblemsSection } from "./ProblemsSection";
import { RisksSection } from "./RisksSection";
import { AnimatedSection } from "./AnimatedSection";
import { ScreenSections } from "./ScreenSections";
import { Conclusion } from "./Conclusion";

export function FlowguardCaseStudy() {
  return (
    <div className="bg-white min-h-screen w-full">
      <HeaderSection />

      <div className="w-full max-w-[1344px] mx-auto flex flex-col">
        {/* Breadcrumbs */}
        <AnimatedSection className="px-6 md:px-10 lg:px-[74px] pt-10 pb-8">
          <Breadcrumbs />
        </AnimatedSection>

        {/* Hero */}
        <HeroSection />


        {/* Hero Image */}
        <div className="mt-16 md:mt-20">
          <DashboardImage />
        </div>

        {/* Продукт */}
        <div className="mt-16 md:mt-20">
          <ProjectDescription />
        </div>

        {/* Section 1 Image */}
        <div className="mt-12 md:mt-16">
          <SectionImage alt="Section 1" aspectRatio="1192/700" />
        </div>

        {/* Моя роль */}
        <div className="mt-16 md:mt-20">
          <UserContext />
        </div>

        {/* Задача продукта */}
        <div className="mt-16 md:mt-20">
          <ProductGoal />
        </div>

        {/* Section 2 + 3 Images */}
        <div className="mt-12 md:mt-16 flex flex-col gap-4">
          <SectionImage alt="Section 2" aspectRatio="1192/700" />
          <SectionImage alt="Section 3" aspectRatio="1192/700" />
        </div>

        {/* Цель MVP */}
        <div className="mt-16 md:mt-20">
          <SelectedFocus />
        </div>

        {/* Что было «до» */}
        <div className="mt-16 md:mt-20">
          <ProblemsSection />
        </div>

        {/* UX-задачи */}
        <div className="mt-16 md:mt-20">
          <RisksSection />
        </div>

        {/* Section 4 Image */}
        <div className="mt-12 md:mt-16">
          <SectionImage alt="Section 4" aspectRatio="1192/700" />
        </div>

        {/* Этапы работы */}
        <div className="mt-16 md:mt-20">
          <ScreenSections />
        </div>

        {/* Вывод */}
        <div className="mt-16 md:mt-20">
          <Conclusion />
        </div>

        {/* Final Image */}
        <div className="mt-12 md:mt-16 mb-16 md:mb-24">
          <SectionImage alt="Final showcase" aspectRatio="1192/700" />
        </div>
      </div>
    </div>
  );
}
