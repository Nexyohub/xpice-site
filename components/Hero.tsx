"use client";

import { motion } from "motion/react";
import { useLang } from "./LanguageProvider";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const { t } = useLang();

  const lineVariants = {
    hidden: { y: "110%" },
    show: (i: number) => ({
      y: "0%",
      transition: { duration: 1, ease, delay: 0.25 + i * 0.12 },
    }),
  };

  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden>
        <div className="hero__grid-lines" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>

      <div className="container hero__inner">
        <motion.div
          className="eyebrow hero__eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
        >
          {t.hero.eyebrow}
        </motion.div>

        <h1 className="display hero__title">
          <span className="hero__line">
            <motion.span
              style={{ display: "block" }}
              custom={0}
              variants={lineVariants}
              initial="hidden"
              animate="show"
            >
              {t.hero.title_a}
            </motion.span>
          </span>
          <span className="hero__line">
            <motion.span
              style={{ display: "block" }}
              custom={1}
              variants={lineVariants}
              initial="hidden"
              animate="show"
            >
              <span className="serif accent">{t.hero.title_em}</span> {t.hero.title_b}
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="lede hero__lede"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.7 }}
        >
          {t.hero.lede}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.85 }}
        >
          <a href="#contact" className="btn btn--primary">
            {t.hero.primary}
            <span className="arrow">→</span>
          </a>
          <a href="#categories" className="btn btn--ghost">
            {t.hero.secondary}
          </a>
        </motion.div>

        <motion.div
          className="hero__meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <span className="scroll-dot" />
          {t.hero.scroll}
        </motion.div>
      </div>
    </section>
  );
}
