

export default function BenefitsMassageRelaxant() {
  return (
    <section className="py-15 bg-white">
    <div className="mx-auto max-w-5xl px-6 text-center">
      <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-10">
        Pourquoi choisir un massage relaxant ?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          "Libération du stress",
          "Détente musculaire",
          "Reconnexion à soi",
          "Sommeil réparateur",
        ].map((benefit) => (
          <div
            key={benefit}
            className="rounded-xl bg-gray-50 p-6 shadow-sm hover:shadow-md transition"
          >
            <p className="text-lg text-gray-700">{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
