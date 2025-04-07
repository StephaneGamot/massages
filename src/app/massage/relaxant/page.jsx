import HeadMassageRelaxant from "@/components/MassageRelaxant/HeadMassageRelaxant";
import HeroMassageRelaxant from "@/components/MassageRelaxant/HeroMassageRelaxant";
import CtaMassageRelaxant from "@/components/MassageRelaxant/CtaMassageRelaxant";
import TestimonialsMassageRelaxant from "@/components/MassageRelaxant/TestimonialsMassageRelaxant";
import BenefitsMassageRelaxant from "@/components/MassageRelaxant/BenefitsMassageRelaxant";
import WhyForMassageRelaxant from "@/components/MassageRelaxant/WhyForMassageRelaxant";
import TreatmentDescriptionMassageRelaxant from "@/components/MassageRelaxant/TreatmentDescriptionMassageRelaxant";
import GalleryMassageRelaxant from "@/components/MassageRelaxant/GalleryMassageRelaxant";

export default function MassageRelaxantPage() {
  return (
    <>
      <HeadMassageRelaxant />
      <main>
        <HeroMassageRelaxant />
        <BenefitsMassageRelaxant />
        <WhyForMassageRelaxant />
        <TreatmentDescriptionMassageRelaxant />
        <GalleryMassageRelaxant />
        <CtaMassageRelaxant />
        <TestimonialsMassageRelaxant />
      </main>
    </>
  );
}
