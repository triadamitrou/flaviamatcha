import { Reveal, Strip, Words } from "@/components/Reveal";
import { hours, site } from "@/lib/site";

export default function Visit() {
  return (
    <section id="visit" className="py-24 lg:py-32">
      <div className="u-wrap">
        <Reveal as="p" mode="fade" className="u-label">
          Visit
        </Reveal>
        <Words
          text="Meadow Road, open late"
          as="h2"
          className="u-display text-chalk mt-5 max-w-3xl text-[2.6rem] sm:text-6xl lg:text-7xl"
          delay={60}
        />
        <Strip delay={320} className="mt-9" />

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1fr_0.8fr] lg:gap-16">
          <Reveal mode="rise">
            <p className="u-label">Address</p>
            <address className="text-chalk/85 mt-5 text-lg leading-relaxed not-italic">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.city} {site.address.postcode}
            </address>
            <a
              href={site.directions}
              target="_blank"
              rel="noreferrer"
              className="u-btn mt-8"
            >
              Directions
            </a>
          </Reveal>

          <Reveal mode="rise" delay={110}>
            <p className="u-label">Opening hours</p>
            <dl className="mt-5 max-w-sm">
              {hours.map((h) => (
                <div
                  key={h.day}
                  className="border-chalk/8 flex justify-between gap-6 border-b py-3 text-sm last:border-0"
                >
                  <dt className="text-smoke">{h.day}</dt>
                  <dd className="text-chalk/85 tabular-nums">
                    {h.open} - {h.close}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal mode="rise" delay={220}>
            <p className="u-label">Getting here</p>
            <p className="text-chalk/75 mt-5 text-sm leading-relaxed">
              Inside the Factory Food Court on Meadow Road, in Northcliffe
              House. The entrance is step free.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
