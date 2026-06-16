"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLang } from "./LanguageProvider";

export default function Header() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#capabilities", label: t.nav.capabilities },
    { href: "#categories", label: t.nav.categories },
    { href: "#intelligence", label: t.nav.intelligence },
    { href: "#reach", label: t.nav.reach },
  ];

  return (
    <>
      <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
        <div className="container header__inner">
          <a href="#top" aria-label="XPICE">
            <motion.img
              key={scrolled ? "dark" : "light"}
              src={scrolled ? "/xpice.svg" : "/xpice-light.svg"}
              alt="XPICE"
              className="header__logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
          </a>

          <nav className="header__nav">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="header__link"
                style={{ color: scrolled ? "var(--navy)" : "var(--cream)" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="header__right">
            <div
              className="lang"
              style={{ borderColor: scrolled ? "var(--line-strong)" : "rgba(247,245,239,0.3)" }}
            >
              {(["en", "pt"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={lang === l ? "active" : ""}
                  style={{
                    color:
                      lang === l ? "var(--cream)" : scrolled ? "var(--navy)" : "rgba(247,245,239,0.7)",
                    background: lang === l ? "var(--navy)" : "transparent",
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <a
              href="#contact"
              className="btn btn--primary"
              style={{ padding: "10px 18px", fontSize: "0.86rem" }}
            >
              {t.nav.cta}
            </a>

            <button
              className="burger"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span style={{ background: scrolled || open ? "var(--navy)" : "var(--cream)" }} />
              <span style={{ background: scrolled || open ? "var(--navy)" : "var(--cream)" }} />
              <span style={{ background: scrolled || open ? "var(--navy)" : "var(--cream)" }} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {[...links, { href: "#contact", label: t.nav.contact }].map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
