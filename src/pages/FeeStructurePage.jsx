import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/ui/PageHero";
import FadeIn from "../components/ui/FadeIn";

// ─── ADD YOUR FEE STRUCTURE IMAGE PATH HERE ───
const FEE_IMAGE = "/fee-structure.jpg"; // ← image ko public/ folder mein daalo

export default function FeeStructurePage() {
  const [zoomed, setZoomed] = useState(false);

  return (
    <div>
      <PageHero
        tag="ACADEMIC SESSION 2025-2026"
        title="Fee"
        highlight="Structure"
        subtitle="Transparent and affordable fee structure for quality CBSE education at Deeksha Public School."
      />

      <section style={{ background: "#f8f5f0", padding: "70px 24px 90px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 3, color: "#c8973a", marginBottom: 12 }}>
                FEE STRUCTURE 2025–2026
              </div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(24px,3vw,36px)", fontWeight: 700, color: "#1e3a5f", marginBottom: 14 }}>
                Session-wise Fee Details
              </h2>
              <p style={{ fontSize: 16, color: "#6b5e53", maxWidth: 560, margin: "0 auto" }}>
                Click on the image to zoom in for a clearer view.
              </p>
            </div>
          </FadeIn>

          {/* Fee Image Card */}
          <FadeIn>
            <motion.div
              whileHover={{ boxShadow: "0 24px 60px rgba(0,0,0,0.14)" }}
              onClick={() => setZoomed(true)}
              style={{
                background: "white",
                borderRadius: 24,
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                cursor: "zoom-in",
                border: "2px solid #e8dfc8",
              }}
            >
              <div style={{ background: "linear-gradient(135deg, #1e3a5f, #2d5f8a)", padding: "16px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ color: "white", fontWeight: 600, fontSize: 15, letterSpacing: 1 }}>📋 FEE STRUCTURE 2025–2026</span>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>🔍 Click to zoom</span>
              </div>
              <img
                src={FEE_IMAGE}
                alt="Fee Structure 2025-2026"
                style={{ width: "100%", display: "block", objectFit: "contain" }}
              />
            </motion.div>
          </FadeIn>

          {/* Note */}
          <FadeIn>
            <div style={{ marginTop: 32, background: "white", borderRadius: 16, padding: "20px 28px", borderLeft: "4px solid #c8973a", boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}>
              <div style={{ fontWeight: 700, color: "#1e3a5f", marginBottom: 6, fontSize: 15 }}>📌 Note</div>
              <p style={{ fontSize: 15, color: "#6b5e53", lineHeight: 1.8, margin: 0 }}>
                For any fee-related queries, please contact the school office directly. Fee once paid is non-refundable.
                Kindly carry the fee receipt for future reference.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Zoom Lightbox */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setZoomed(false)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.93)", zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, cursor: "zoom-out" }}
          >
            <motion.img
              src={FEE_IMAGE}
              alt="Fee Structure Zoomed"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              style={{ maxWidth: "93vw", maxHeight: "90vh", borderRadius: 16, boxShadow: "0 20px 80px rgba(0,0,0,0.6)", objectFit: "contain" }}
              onClick={e => e.stopPropagation()}
            />
            <motion.button
              onClick={() => setZoomed(false)}
              whileHover={{ scale: 1.1 }}
              style={{ position: "absolute", top: 20, right: 20, background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.3)", color: "white", width: 46, height: 46, borderRadius: "50%", fontSize: 18, cursor: "pointer" }}
            >✕</motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}