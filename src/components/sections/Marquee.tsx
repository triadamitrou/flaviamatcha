/** One band of what they do, running edge to edge, in their brass. */
export default function Marquee({ words }: { words: string[] }) {
  const run = [...words, ...words];
  return (
    <section className="u-marquee bg-brass text-ink py-3" aria-hidden>
      <div className="u-marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0">
            {run.map((w, i) => (
              <span key={`${copy}-${i}`} className="flex items-center">
                <span className="u-label text-ink/85 px-7 whitespace-nowrap">{w}</span>
                <span className="bg-ink/35 h-1 w-1 rounded-full" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
