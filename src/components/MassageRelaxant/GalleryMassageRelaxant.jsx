import Image from "next/image"

import Ambiance1 from "./../../../public/Images/massage/massage-ambiance-cabinet-halle.webp";
import Ambiance2 from "./../../../public/Images/massage/massage-halle-lumiere-douce.webp";
import Ambiance3 from "./../../../public/Images/massage/massage-halle-musique-apaisante.webp";


export default function GalleryMassageRelaxant() {
  return (
      <section className="py-20 bg-white">
              <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[Ambiance1, Ambiance2, Ambiance3].map((img, index) => (
                  <div key={index} className="overflow-hidden rounded-2xl shadow">
                    <Image
                      src={img}
                      alt={`Ambiance massage ${index + 1}`}
                      className="w-full h-auto object-cover"
                      placeholder="blur"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </section>
  )
}
