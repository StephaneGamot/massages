import Head from "next/head";
import HeroMassage from "@/components/Hero/HeroMassage";
import Testimonials from "@/components/Testimonials/Testimonials";
import Gallery from "@/components/Gallery/Gallery";
import Benefits from "@/components/Benefits/Benefits";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";

export default function MassageRelaxantPage() {
  return (
    <>
      <Head>
        <title>
          Massage relaxant à Halle (Bruxelles) - Détente & Bien-être
        </title>
        <meta
          name="description"
          content="Détendez votre corps et votre esprit grâce à un massage relaxant à Halle, près de Bruxelles. Une expérience douce, personnalisée, disponible en cabinet ou à domicile."
        />
        <link
          rel="canonical"
          href="https://lavoiedubienetre.be/massage/relaxant"
        />
      </Head>
      <main>
        <HeroMassage
          variant="massage"
          title="Laissez le stress s’évanouir… avec un massage relaxant"
          text1="Là où le calme rencontre la bienveillance. Offrez à votre corps ce qu’il mérite : de la douceur, de l’attention et un profond lâcher-prise."
          text2="Chaque massage est une rencontre entre vos besoins et vos envies."
        />

        <Benefits ids={[1, 6, 19, 4]} title="un massage relaxant" />
        <WhyThisCare
          ids={[2, 6, 13, 21, 31]}
          title="Est-ce que ce massage est pour moi ?"
        />
        <TreatmentDescription
          title="Un soin tout en douceur"
          hero="Par des gestes enveloppants et rythmés, ce massage permet de relâcher les tensions, d’apaiser le mental et de retrouver une sensation de bien-être profond. Il s’adapte à chaque personne, selon son énergie et ses besoins du moment."
          duration={
            <>
              entre <strong>90</strong> et <strong>120 minutes</strong>
            </>
          }
          text="Offrez-vous cette parenthèse de sérénité, à partir de"
          price="99€"
        />
        <Gallery ids={[1, 2, 3]} />
        <CtaSectionMassagePage
          title="Offrez à votre corps ce qu’il mérite"
          soin="votre massage relaxant"
        />
        <Testimonials ids={[1, 4, 11, 23, 35]} />
      </main>
    </>
  );
}
