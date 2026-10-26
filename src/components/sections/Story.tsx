import Image from "next/image";
import { Parallax, Reveal, Strip, Words } from "@/components/Reveal";
import { site, story } from "@/lib/site";

/** Who they are. Later, not earlier. */
export default function Story() {
  return (
    <section id="story" className="bg-ink-2 py-24 lg:py-32">
      <div className="u-wrap grid gap-14 lg:grid-cols-[1fr_0.82fr] lg:items-start lg:gap-20">
        <div>
          <Reveal as="p" mode="fade" className="u-label">
            The cafe
          </Reveal>
          <Words
            text="A matcha bar first"
            as="h2"
            className="u-display text-chalk mt-5 text-[2.6rem] sm:text-6xl lg:text-7xl"
            delay={60}
          />
          <Strip delay={320} className="mt-9 max-w-sm" />

          <div className="mt-10 max-w-xl space-y-6">
            {story.map((p, i) => (
              <Reveal
                key={p.slice(0, 24)}
                as="p"
                mode="rise"
                delay={120 + i * 90}
                className="text-chalk/75 leading-relaxed"
              >
                {p}
              </Reveal>
            ))}
          </div>

          <Reveal mode="rise" delay={420} className="border-chalk/10 mt-12 flex gap-10 border-t pt-8">
            <div>
              <p className="u-display text-brass text-4xl">{site.rating.score}</p>
              <p className="u-label text-smoke mt-2">
                {site.rating.count} {site.rating.source} reviews
              </p>
            </div>
            <div>
              <p className="u-display text-brass text-4xl">5</p>
              <p className="u-label text-smoke mt-2">Food hygiene rating</p>
            </div>
          </Reveal>
        </div>

        <Reveal mode="tile" className="relative">
          <div className="bg-ink-3 relative aspect-[4/5] overflow-hidden">
            <Parallax speed={0.05} className="absolute inset-[-6%]">
              <div className="relative h-full w-full">
                <Image
                  src="/img/cup-label.jpg"
                  alt="An iced matcha in a Flavia cup on the brass trolley"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Parallax>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
