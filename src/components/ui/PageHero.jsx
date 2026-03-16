import { motion } from "framer-motion";

export default function PageHero({ tag, title, highlight, subtitle }) {
  return (
    <section style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #1a1612 100%)", padding: "clamp(120px,15vw,160px) clamp(0px,5vw,60px) clamp(60px,8vw,100px)", position: "relative", overflow: "hidden" }}>
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        style={{ position: "absolute", right: "-5%", top: "-10%", width: "min(500px,50vw)", height: "min(500px,50vw)", borderRadius: "50%", border: "1px solid rgba(200,151,58,0.1)" }} />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        style={{ position: "absolute", right: "5%", top: "-5%", width: "min(340px,35vw)", height: "min(340px,35vw)", borderRadius: "50%", border: "1px solid rgba(200,151,58,0.15)" }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 700 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,151,58,0.15)", border: "1px solid rgba(200,151,58,0.3)", padding: "6px 16px", borderRadius: 100, marginBottom: 24 }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#c8973a" }} />
          <span style={{ fontSize: 17, color: "#c8973a", letterSpacing: 2.5, fontWeight: 500 }}>{tag}</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.8 }}
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(34px, 6vw, 72px)", fontWeight: 700, color: "white", lineHeight: 1.05, marginBottom: 6 }}>
          {title}
        </motion.h1>
        {highlight && (
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.8 }}
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(34px, 6vw, 72px)", fontWeight: 400, fontStyle: "italic", color: "#c8973a", lineHeight: 1.05, marginBottom: 24 }}>
            {highlight}
          </motion.h1>
        )}
        <motion.div initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.7 }}
          style={{ height: 1, width: 90, background: "linear-gradient(90deg, #c8973a, transparent)", marginBottom: 20 }} />
        {subtitle && (
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }}
            style={{ fontSize: "clamp(14px,1.5vw,17px)", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, fontWeight: 300, maxWidth: 540 }}>
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}