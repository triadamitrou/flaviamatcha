import Wordmark from "@/components/Wordmark";
import { hours, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-chalk/10 border-t">
      <div className="u-wrap grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="text-chalk text-2xl">
          <Wordmark stacked withTagline className="items-start text-left" />
        </div>

        <div>
          <p className="u-label">Find us</p>
          <address className="text-smoke mt-4 text-sm leading-relaxed not-italic">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.city} {site.address.postcode}
          </address>
        </div>

        <div>
          <p className="u-label">Open</p>
          <dl className="text-smoke mt-4 space-y-1.5 text-sm">
            {hours.map((h) => (
              <div key={h.day} className="flex justify-between gap-6">
                <dt>{h.day.slice(0, 3)}</dt>
                <dd className="text-chalk/80 tabular-nums">
                  {h.open} - {h.close}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <p className="u-label">Follow</p>
          <ul className="mt-4 space-y-2 text-sm">
            {site.socials.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-smoke hover:text-brass transition-colors duration-500"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-smoke/60 mt-8 text-xs">{site.legalName}</p>
        </div>
      </div>
    </footer>
  );
}
