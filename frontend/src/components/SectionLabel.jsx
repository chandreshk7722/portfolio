import { motion } from "framer-motion";

export default function SectionLabel({ id = "00", label = "", title, kicker, dataTestId }) {
  return (
    <div className="mb-12 sm:mb-20" data-testid={dataTestId}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6"
      >
        <span className="text-acid">{id}</span>
        <span className="w-12 h-px bg-neutral-700" />
        <span>{label}</span>
      </motion.div>
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
          className="font-display font-black uppercase tracking-tighter leading-[0.9] text-[clamp(2.5rem,7vw,6.5rem)]"
        >
          {title}
        </motion.h2>
      )}
      {kicker && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-2xl text-neutral-400 text-base sm:text-lg"
        >
          {kicker}
        </motion.p>
      )}
    </div>
  );
}
