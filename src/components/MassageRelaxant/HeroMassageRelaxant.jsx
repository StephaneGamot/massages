import Image from "next/image";
import Link from "next/link";
import HeroImage from "./../../../public/Images/massage/massage-femme-souriante.webp";

export default function HeroMassageRelaxant() {
  return (
    <section className="relative h-[80vh] overflow-hidden bg-gray-50">
      {/* ✅ Image de fond */}
      <div className="absolute inset-0 z-0 ">
        <Image
          src={HeroImage}
          alt="Moment de détente lors d’un massage relaxant"
          fill
          placeholder="blur"
          className="object-cover object-center"
          loading="lazy"
        />
        {/* ✅ Optionnel : dégradé doux pour la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent"></div>
      </div>

      {/* ✅ Contenu par-dessus l’image */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-gray-900">
            Laissez le stress s’évanouir… avec un massage relaxant
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            Là où le calme rencontre la bienveillance. Offrez à votre corps ce
            qu’il mérite : de la douceur, de l’attention et un profond
            lâcher-prise.
          </p>
          <p className="mt-6 text-lg text-gray-700">
            Chaque massage est une rencontre entre vos besoins et vos envies.
          </p>

          <div className="mt-8">
            <Link
              href="#reservation"
              className="inline-block rounded-md bg-[#556B2F] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#6f8e42] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#556B2F]"
            >
              Réserver ce soin &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
