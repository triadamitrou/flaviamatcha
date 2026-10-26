import { Reveal, Strip, Words } from "@/components/Reveal";
import { menu, menuNote } from "@/lib/site";

/**
 * Typeset as text, in their own groups, with their own prices. Two uneven
 * columns rather than a grid of equal cards, so the page keeps a rhythm.
 */
export default function Menu() {
  return (
    <section id="menu" className="py-24 lg:py-32">
      <div className="u-wrap">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal as="p" mode="fade" className="u-label">
              The menu
            </Reveal>
            <Words
              text="Seventeen ways to drink matcha"
              as="h2"
              className="u-display text-chalk mt-5 max-w-3xl text-[2.6rem] sm:text-6xl lg:text-7xl"
              delay={60}
            />
          </div>
          <Reveal mode="fade" delay={240} className="text-smoke max-w-xs text-sm leading-relaxed">
            {menuNote}
          </Reveal>
        </div>

        <Strip delay={360} className="mt-10" />

        <div className="mt-14 columns-1 gap-x-16 md:columns-2 xl:columns-3">
          {menu.map((group, i) => (
            <Reveal
              key={group.title}
              mode="rise"
              delay={(i % 3) * 70}
              className="mb-12 break-inside-avoid"
            >
              <h3 className="u-caps text-brass text-xs">{group.title}</h3>
              {group.note && <p className="text-smoke mt-2 text-sm">{group.note}</p>}
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-baseline gap-3">
                    <span className="text-chalk/90 text-[0.95rem]">
                      {item.name}
                      {item.note && (
                        <span className="text-smoke block text-xs">{item.note}</span>
                      )}
                    </span>
                    <span className="border-chalk/12 mx-1 min-w-3 flex-1 translate-y-[-0.2em] border-b border-dotted" />
                    {item.price && (
                      <span className="text-brass text-sm tabular-nums">{item.price}</span>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
