import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { gallery } from "@/lib/site";

/**
 * Their photographs, under the location. The first runs taller than the
 * other two so the wall is not three equal cards in a row.
 */
export default function Gallery() {
  return (
    <section className="pb-24 lg:pb-32">
      <div className="u-wrap grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal mode="tile" className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
          <div className="bg-ink-2 relative aspect-[4/3] overflow-hidden lg:aspect-[4/5]">
            <Image
              src={gallery[0].img}
              alt={gallery[0].alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal mode="tile" delay={110} className="lg:col-span-2">
          <div className="bg-ink-2 relative aspect-[4/3] overflow-hidden">
            <Image
              src={gallery[1].img}
              alt={gallery[1].alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal mode="tile" delay={210}>
          <div className="bg-ink-2 relative aspect-[4/3] overflow-hidden">
            <Image
              src={gallery[2].img}
              alt={gallery[2].alt}
              fill
              sizes="(max-width: 640px) 100vw, 25vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* No fourth photograph yet. The frame holds its place and says nothing. */}
        <Reveal mode="tile" delay={290}>
          <div className="u-slot aspect-[4/3]" />
        </Reveal>
      </div>
    </section>
  );
}
