import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, DownloadSimple, ArrowUpRight } from "@phosphor-icons/react";
import { PROFILE } from "../lib/data";
import MagneticButton from "./MagneticButton";

const HERO_BG =
  "https://static.prod-images.emergentagent.com/jobs/c101daee-913d-4883-b900-f6b3b74d8124/images/8b73f882acf52415abf13d2d81e6e2c894b95c19dc3aca3ca7c67b09a5d5cb12.png";

const word = {
  hidden: { y: "110%", opacity: 0 },
  show: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, delay: 0.1 + i * 0.08, ease: [0.83, 0, 0.17, 1] },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen w-full overflow-hidden border-b border-white/10"
      data-testid="hero-section"
    >
      {/* Parallax background image */}
      <motion.div
        style={{ y, scale: 1.05 }}
        className="absolute inset-0 -z-10"
        aria-hidden
      >
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="noise-overlay" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative pt-28 sm:pt-36 pb-16">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
          {/* Top label row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-12 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-neutral-400"
            >
              <span className="w-1.5 h-1.5 bg-acid rounded-full" />
              <span>Portfolio · 2026</span>
              <span className="text-neutral-700">/</span>
              <span>{PROFILE.location}</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-neutral-400"
            >
              <span className="text-acid">●</span> Open to senior frontend roles
            </motion.div>
          </div>

          {/* Huge title */}
          <h1
            className="font-display font-black uppercase leading-[0.85] tracking-[-0.04em] text-[clamp(3rem,11vw,11rem)]"
            data-testid="hero-title"
          >
            <span className="block overflow-hidden">
              <motion.span variants={word} initial="hidden" animate="show" custom={0} className="block">
                {PROFILE.firstName}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                variants={word}
                initial="hidden"
                animate="show"
                custom={1}
                className="block text-stroke"
              >
                {PROFILE.lastName}
              </motion.span>
            </span>
          </h1>

          {/* Subtitle row */}
          <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-acid mb-3">
                ⟶ {PROFILE.title}
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-300 max-w-xl leading-relaxed">
                {PROFILE.shortBio}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:justify-end"
            >
              <MagneticButton
                as="a"
                href={PROFILE.cvUrl}
                download
                className="group inline-flex items-center justify-center gap-2 bg-acid text-black font-mono text-xs uppercase tracking-[0.2em] px-6 py-4 hover:bg-white transition-colors"
                data-testid="hero-download-cv"
              >
                <DownloadSimple size={16} weight="bold" />
                Download CV
              </MagneticButton>
              <MagneticButton
                as="a"
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 border border-white/30 text-white font-mono text-xs uppercase tracking-[0.2em] px-6 py-4 hover:border-acid hover:text-acid transition-colors"
                data-testid="hero-see-work"
              >
                See selected work
                <ArrowUpRight size={16} weight="bold" />
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        {/* Scroll prompt */}
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400 hover:text-acid"
          data-testid="scroll-prompt"
        >
          <span>Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} weight="bold" />
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
}
