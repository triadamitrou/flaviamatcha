import Image from "next/image";
import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import { Reveal, Strip } from "@/components/Reveal";
import { billing, site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[92svh] flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/img/room.jpg"
          alt="The dining room at Flavia, with fluted black walls and a lit ceiling"
          fill
          priority
          sizes="100vw"
          className="scale-[1.04] object-cover object-center"
        />
        <div className="bg-ink/62 absolute inset-0" />
        <div className="from-ink absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
      </div>

      <div className="u-wrap pb-14 lg:pb-20">
        <Reveal mode="fade" className="text-chalk text-[13vw] leading-none sm:text-[9vw] lg:text-[7.4vw]">
          <Wordmark stacked withTagline className="items-start text-left" />
        </Reveal>

        <Strip delay={420} className="mt-10 max-w-xl" />

        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal mode="rise" delay={520} className="max-w-md">
            <ul className="text-smoke flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {billing.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="bg-brass h-1 w-1 rounded-full" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="text-chalk/70 mt-5 text-base leading-relaxed">{site.blurb}</p>
          </Reveal>

          <Reveal mode="rise" delay={640} className="flex flex-wrap items-center gap-4">
            <Link href="/#menu" className="u-btn">
              See the menu
            </Link>
            <a
              href={site.directions}
              target="_blank"
              rel="noreferrer"
              className="u-label text-smoke hover:text-brass transition-colors duration-500"
            >
              Find us
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
