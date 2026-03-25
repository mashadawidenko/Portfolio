import { Breadcrumbs } from "./Breadcrumbs";
import { HeaderSection } from "./HeaderSection";
import { HeroSection } from "./HeroSection";
import { ProjectDescription } from "./ProjectDescription";
import { DashboardImage } from "./DashboardImage";
import { ProblemsSection } from "./ProblemsSection";
import { UserPersonas } from "./UserPersonas";
import { KeyRequest } from "./KeyRequest";
import { UserContext } from "./UserContext";
import { VideoPlaceholder } from "./VideoPlaceholder";
import { RisksSection } from "./RisksSection";
import { UXHypothesis } from "./UXHypothesis";
import { AnimatedSection } from "./AnimatedSection";
import { SelectedFocus } from "./SelectedFocus";
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

        {/* Hero + Description */}
        <div className="flex flex-col gap-16 md:gap-24">
          <HeroSection />
          <ProjectDescription />
        </div>

        {/* Dashboard Screenshot */}
        <div className="mt-16 md:mt-20">
          <DashboardImage />
        </div>

        {/* Problems */}
        <div className="mt-16 md:mt-20">
          <ProblemsSection />
        </div>

        {/* User Personas + JTBD */}
        <div className="mt-16 md:mt-20">
          <UserPersonas />
        </div>

        {/* Key Request */}
        <div className="mt-6">
          <KeyRequest />
        </div>

        {/* User Context */}
        <div className="mt-16 md:mt-20">
          <UserContext />
        </div>

        {/* Video Section */}
        <div className="mt-16 md:mt-20">
          <VideoPlaceholder />
        </div>

        {/* Risks */}
        <div className="mt-16 md:mt-20">
          <RisksSection />
        </div>

        {/* UX Hypothesis */}
        <UXHypothesis />

        {/* Selected Focus */}
        <div className="mt-4 md:mt-6">
          <SelectedFocus />
        </div>

        {/* Three Screens */}
        <div className="mt-10 md:mt-12">
          <ScreenSections />
        </div>

        {/* Conclusion */}
        <div className="mt-16 md:mt-20">
          <Conclusion />
        </div>
      </div>
    </div>
  );
}
