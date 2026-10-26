"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Wordmark from "@/components/Wordmark";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ${
        solid ? "bg-ink/88 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="u-wrap flex h-20 items-center justify-between gap-6">
        <Link href="/" className="text-chalk text-sm">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-9 sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="u-label text-smoke hover:text-brass transition-colors duration-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={site.socials[0].href}
          target="_blank"
          rel="noreferrer"
          className="u-label text-brass hover:text-chalk transition-colors duration-500"
        >
          Instagram
        </a>
      </div>
    </header>
  );
}
