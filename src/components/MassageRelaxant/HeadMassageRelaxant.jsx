import Head from "next/head";
import { MetadataMassageRelaxant } from "@/data/metadata/metadataMassageRelaxant";

export default function HeadMassageRelaxant() {
  return (
    <Head>
    <title>
      Massage relaxant à Halle (Bruxelles) - Détente & Bien-être
    </title>
    <meta
      name="description"
      content="Détendez votre corps et votre esprit grâce à un massage relaxant à Halle, près de Bruxelles. Une expérience douce, personnalisée, disponible en cabinet ou à domicile."
    />
    <meta
      property="og:title"
      content="Massage relaxant à Halle - La Voie du Bien-Être"
    />
    <link
      rel="canonical"
      href="https://lavoiedubienetre.be/massages/relaxant"
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(MetadataMassageRelaxant),
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Accueil",
              item: "https://lavoiedubienetre.be/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Massages",
              item: "https://lavoiedubienetre.be/massages",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Massage relaxant",
              item: "https://lavoiedubienetre.be/massages/relaxant",
            },
          ],
        }),
      }}
    />
  </Head>
  )
}
