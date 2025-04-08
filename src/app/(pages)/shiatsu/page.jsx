import Head from "next/head";
import HeroMassage from "@/components/Hero/HeroMassage";
import Testimonials from "@/components/Testimonials/Testimonials";
import Gallery from "@/components/Gallery/Gallery";
import Benefits from "@/components/Benefits/Benefits";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";

export default function Page() {
  return (
    <>
      <Head>
        <title>Massage Shiatsu à Halle (Bruxelles) - Équilibre & Énergie</title>
        <meta
          name="description"
          content="Découvrez le Shiatsu à Halle : un soin thérapeutique japonais qui rééquilibre l’énergie vitale, libère les tensions et soutient le corps dans son auto-guérison."
        />
        <meta property="og:title" content="Massage Shiatsu à Halle - La Voie du Bien-Être" />
        <link rel="canonical" href="https://lavoiedubienetre.be/massage/shiatsu" />
      </Head>

      <main>
        <HeroMassage
          variant="soin"
          title="Rééquilibrez votre énergie avec le Shiatsu"
          text1="Un soin japonais thérapeutique qui agit en profondeur sur les méridiens d’énergie."
          text2="Retrouvez harmonie, ancrage et vitalité à travers un toucher précis, rythmé et bienveillant."
        />

        <Benefits ids={[5, 7, 9, 11]} title="le massage Shiatsu" />

        <WhyThisCare
          ids={[3, 12, 18, 25]}
          title="À qui s’adresse le Shiatsu ?"
        />

        <TreatmentDescription
          title="Un soin énergétique profond"
          hero="Le Shiatsu est un art du toucher issu du Japon, qui utilise des pressions des doigts le long des méridiens pour relancer la circulation énergétique, détendre le système nerveux et soutenir l’auto-régulation du corps."
          duration={
            <>
              environ <strong>75</strong> à <strong>90 minutes</strong>
            </>
          }
          text="Prenez soin de votre équilibre intérieur, à partir de"
          price="90€"
        />

        <Gallery ids={[7, 8, 9]} />

        <CtaSectionMassagePage
          title="Offrez-vous un moment de recentrage"
          soin="votre soin Shiatsu"
        />

        <Testimonials ids={[12, 18, 27, 34, 42]} />
      </main>
    </>
  );
}
