import Image from "next/image";
import { neon } from "@/lib/site";

/**
 * The three signs on their wall, in their order and their colours, each
 * striking on with the stutter a real tube has. It belongs to this cafe
 * and nowhere else, which is the point.
 */
export default function Neon() {
  return (
    <section className="bg-ink-2 relative isolate overflow-hidden py-24 lg:py-36">
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-[42%] lg:block">
        <Image
          src="/img/neon-cup.jpg"
          alt=""
          fill
          sizes="42vw"
          className="object-cover opacity-45"
        />
        <div className="from-ink-2 absolute inset-0 bg-gradient-to-r via-transparent to-transparent" />
      </div>

      <div className="u-wrap">
        <p className="flex flex-col items-start gap-2 lg:gap-3">
          {neon.map((line, i) => (
            <span
              key={line.text}
              data-neon
              data-tone={line.tone}
              className="u-neon text-[13vw] leading-[1.06] sm:text-[9vw] lg:text-[6.4vw]"
              style={{ "--d": `${i * 260}ms` } as React.CSSProperties}
              suppressHydrationWarning
            >
              {line.text}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
