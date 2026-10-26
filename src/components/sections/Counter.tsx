import Image from "next/image";
import { Reveal, Strip, Words } from "@/components/Reveal";
import { counter, fromTheOwner } from "@/lib/site";

/**
 * What is on the counter, before anything about who they are. A visitor
 * arrived thirsty, not curious about the founding.
 *
 * The row runs off the right edge rather than wrapping into a grid, so the
 * section costs one screen instead of three.
 */
export default function Counter() {
  return (
    <section id="counter" className="py-24 lg:py-32">
      <div className="u-wrap">
        <Reveal as="p" mode="fade" className="u-label">
          On the counter
        </Reveal>
        <Words
          text="Whisked when you order it"
          as="h2"
          className="u-display text-chalk mt-5 max-w-4xl text-[2.6rem] sm:text-6xl lg:text-7xl"
          delay={60}
        />
        <Strip delay={320} className="mt-9" />
      </div>

      <div className="u-rail mt-12 pb-3 pl-[var(--gutter)]">
        {counter.map((c, i) => (
          <Reveal
            key={c.img}
            mode="tile"
            delay={i * 90}
            className="w-[68vw] shrink-0 sm:w-[38vw] lg:w-[25vw]"
          >
            <div className="bg-ink-2 relative aspect-[4/5] overflow-hidden">
              <Image
                src={c.img}
                alt={c.alt}
                fill
                sizes="(max-width: 640px) 68vw, (max-width: 1024px) 38vw, 25vw"
                className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
              />
            </div>
            <p className="u-label text-smoke mt-4">{c.label}</p>
          </Reveal>
        ))}
        <div className="w-[var(--gutter)] shrink-0" aria-hidden />
      </div>

      <div className="u-wrap mt-16 lg:mt-20">
        <Reveal mode="rise" className="ml-auto max-w-2xl lg:pr-[8%]">
          <blockquote className="text-chalk/85 text-xl leading-relaxed text-balance lg:text-2xl">
            &ldquo;{fromTheOwner}&rdquo;
          </blockquote>
          <p className="u-label text-brass mt-5">From the owner</p>
        </Reveal>
      </div>
    </section>
  );
}
