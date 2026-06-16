"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Counter from "@/components/Counter";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { useLang } from "@/components/LanguageProvider";

const MARQUEE = [
  "Pepper",
  "Turmeric",
  "Paprika",
  "Cumin",
  "Cinnamon",
  "Oregano",
  "Sesame",
  "Coriander",
  "Ginger",
  "Cardamom",
  "Nutmeg",
  "Cloves",
];

const trendGlyph: Record<string, string> = { up: "▲", down: "▼", flat: "—" };

export default function Page() {
  const { t } = useLang();

  return (
    <main>
      <Header />
      <Hero />

      {/* STATS */}
      <section className="section--tight theme-cream">
        <div className="container" style={{ marginBottom: "clamp(28px,4vw,44px)" }}>
          <Reveal>
            <h2 className="h3 muted" style={{ maxWidth: "30ch" }}>
              {t.stats.title}
            </h2>
          </Reveal>
        </div>
        <Stagger className="stats">
          {t.stats.items.map((s) => (
            <StaggerItem key={s.label} className="stat">
              <div className="stat__value">
                <Counter value={s.value} />
              </div>
              <div className="stat__label">{s.label}</div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden>
        <div className="marquee__track">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span className="marquee__item" key={i}>
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="section theme-cream" id="about">
        <div className="container">
          <div className="about__grid">
            <div>
              <Reveal>
                <div className="tag head__tag">{t.about.tag}</div>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="h2" style={{ marginBottom: "clamp(24px,3vw,36px)" }}>
                  {t.about.title}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="about__body lede" style={{ color: "var(--ink-soft)" }}>
                  <p>{t.about.body_1}</p>
                  <p>{t.about.body_2}</p>
                </div>
              </Reveal>
            </div>

            <Stagger className="pillars">
              {t.about.pillars.map((p) => (
                <StaggerItem key={p.k} className="pillar">
                  <div className="pillar__k accent">{p.k}</div>
                  <div className="pillar__v">{p.v}</div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="section theme-warm" id="capabilities">
        <div className="container">
          <div className="head">
            <Reveal>
              <div className="tag head__tag">{t.capabilities.tag}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2">{t.capabilities.title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lede">{t.capabilities.lede}</p>
            </Reveal>
          </div>

          <Stagger className="caps">
            {t.capabilities.items.map((c) => (
              <StaggerItem key={c.n} className="cap">
                <div className="cap__n">{c.n}</div>
                <div className="cap__body">
                  <h3 className="cap__t">{c.t}</h3>
                  <p className="cap__d">{c.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section theme-cream" id="categories">
        <div className="container">
          <div className="head">
            <Reveal>
              <div className="tag head__tag">{t.categories.tag}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2">{t.categories.title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lede">{t.categories.lede}</p>
            </Reveal>
          </div>

          <Stagger className="cats">
            {t.categories.items.map((c, i) => (
              <StaggerItem key={c.t} className={`cat cat--${c.tone}`}>
                <span className="cat__bar" />
                <div className="cat__dot">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="cat__t">{c.t}</h3>
                  <p className="cat__d">{c.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* INTELLIGENCE */}
      <section className="section theme-navy" id="intelligence">
        <div className="container">
          <div className="intel__grid">
            <div>
              <Reveal>
                <div className="tag head__tag" style={{ color: "var(--saffron)" }}>
                  {t.intelligence.tag}
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="h2" style={{ marginBottom: "clamp(20px,2.4vw,28px)" }}>
                  {t.intelligence.title}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="lede" style={{ color: "rgba(247,245,239,0.74)" }}>
                  {t.intelligence.body}
                </p>
              </Reveal>

              <Stagger className="intel__points">
                {t.intelligence.points.map((p, i) => (
                  <StaggerItem key={i} className="intel__point">
                    <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                    <span>{p}</span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            <Reveal delay={0.15} y={36}>
              <div className="panel">
                <div className="panel__head">
                  <span>XPICE Desk · Index</span>
                  <span className="panel__live">
                    <span className="ld" /> Live
                  </span>
                </div>
                {t.intelligence.ticker.map((row) => (
                  <div className="row" key={row.name}>
                    <span className="row__name">{row.name}</span>
                    <span className="row__note">{row.note}</span>
                    <span className={`row__trend trend-${row.trend}`}>
                      {trendGlyph[row.trend]}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* REACH */}
      <section className="section theme-cream" id="reach">
        <div className="container">
          <div className="head" style={{ marginBottom: 0 }}>
            <Reveal>
              <div className="tag head__tag">{t.reach.tag}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2">{t.reach.title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lede">{t.reach.lede}</p>
            </Reveal>
          </div>

          <Stagger className="reach__grid">
            {t.reach.regions.map((r, i) => (
              <StaggerItem key={r.r} className="region">
                <div className="region__idx">{String(i + 1).padStart(2, "0")} / 0{t.reach.regions.length}</div>
                <div className="region__r">{r.r}</div>
                <div className="region__d">{r.d}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section theme-warm">
        <div className="container">
          <div className="head">
            <Reveal>
              <div className="tag head__tag">{t.process.tag}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2">{t.process.title}</h2>
            </Reveal>
          </div>
          <Stagger className="steps">
            {t.process.steps.map((s) => (
              <StaggerItem key={s.n} className="step">
                <div className="step__n">{s.n}</div>
                <h3 className="step__t">{s.t}</h3>
                <p className="step__d">{s.d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="section theme-cream">
        <div className="container">
          <div className="head" style={{ marginBottom: 0 }}>
            <Reveal>
              <div className="tag head__tag">{t.clients.tag}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2">{t.clients.title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lede">{t.clients.lede}</p>
            </Reveal>
          </div>
          <Stagger className="clients__tags">
            {t.clients.tags.map((c) => (
              <StaggerItem key={c}>
                <span className="chip">{c}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="section theme-navy cta" id="contact">
        <div className="cta__glow" aria-hidden />
        <div className="container cta__inner">
          <Reveal>
            <h2 className="display" style={{ fontSize: "clamp(2.2rem,5.4vw,4.4rem)" }}>
              {t.cta.title}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lede" style={{ color: "rgba(247,245,239,0.74)" }}>
              {t.cta.lede}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="cta__actions">
              <a href={`mailto:${t.cta.email}`} className="btn btn--primary">
                {t.cta.button}
                <span className="arrow">→</span>
              </a>
              <a href={`mailto:${t.cta.email}`} className="btn btn--ghost">
                {t.cta.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <div className="footer__brand">
              <img src="/xpice-light.svg" alt="XPICE" className="footer__logo" />
              <p className="footer__tag">{t.footer.tagline}</p>
              <div className="footer__rebrand">{t.footer.rebrand}</div>
            </div>
            <div className="footer__col">
              <h4>{t.footer.nav}</h4>
              <ul>
                <li><a href="#about">{t.nav.about}</a></li>
                <li><a href="#capabilities">{t.nav.capabilities}</a></li>
                <li><a href="#categories">{t.nav.categories}</a></li>
                <li><a href="#intelligence">{t.nav.intelligence}</a></li>
                <li><a href="#reach">{t.nav.reach}</a></li>
              </ul>
            </div>
            <div className="footer__col">
              <h4>{t.footer.contactTitle}</h4>
              <ul>
                <li><a href={`mailto:${t.cta.email}`}>{t.cta.email}</a></li>
                <li>+55 (11) 0000-0000</li>
                <li>São Paulo · Brazil</li>
                <li>Global Trade Desk</li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} XPICE. {t.footer.legal}</span>
            <span style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.14em" }}>
              MARKET INTELLIGENCE FOR INGREDIENTS
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
