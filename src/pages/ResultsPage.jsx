import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/ui/PageHero";
import FadeIn from "../components/ui/FadeIn";

const RESULTS = [
  {
    year: "2024-25",
    highlight: true,
    class10: {
      result: "100%",
      toppers: [],
      photos: ["/results/photo-1.jpg",   // ← photo path
        "/results/photo-2.jpg",   // ← photo path
        "/results/photo-3.jpg",   // ← photo path], // Add photo paths like "/results/result-2025-x-1.jpg"
        ]
    },
    class12: {
      result: "100%",
      toppers: [],
      photos: ["/results/photo-4.jpg",   // ← photo path
        "/results/photo-5.jpg",   // ← photo path
        "/results/photo-6.jpg",   // ← photo path], // Add photo paths like "/results/result-2025-x-1.jpg"
        ],
    },
    message: "Proud moment for the management, teachers and parents of Deeksha Public School as our shining stars have shown such a great result (100%) in their 10th and 12th Board examinations 2024-25! Heartiest Congratulations to the toppers and all the students for keeping their best foot ahead. All the best for your next journey in real life!",
  },
  {
    year: "2021-22",
    highlight: false,
    class10: {
      result: "100%",
      toppers: [],
      photos: [],
    },
    class12: {
      result: "100%",
      toppers: [],
      photos: [],
    },
    message: "Proud moment for the management, teachers and parents of Deeksha Public School as our shining stars have shown such a great result (100%) in their 10th and 12th Board examinations 2021-22! Heartiest Congratulations to the toppers and all the students for keeping their best foot ahead. All the best for your next journey in real life!",
  },
];

const ACHIEVEMENTS = [
  { icon: "🏆", value: "100%", label: "Pass Result", sub: "Consecutive Years" },
  { icon: "⭐", value: "50+", label: "Merit Students", sub: "Every Year" },
  { icon: "📚", value: "CBSE", label: "Board Affiliated", sub: "Since 2016" },
  { icon: "🎓", value: "1000+", label: "Students", sub: "Currently Enrolled" },
];

export default function ResultsPage() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [activeYear, setActiveYear] = useState("2024-25");

  const activeResult = RESULTS.find(r => r.year === activeYear);

  return (
    <div>
      <style>{`
        .results-photos { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
        .achieve-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; max-width: 900px; margin: 0 auto 60px; }
        @media (max-width: 768px) { .results-photos { grid-template-columns: repeat(2,1fr) !important; } .achieve-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px) { .results-photos { grid-template-columns: 1fr !important; } }
      `}</style>

      <PageHero tag="ACADEMIC EXCELLENCE" title="Board Exam" highlight="Results"
        subtitle="Deeksha Public School proudly achieves 100% results in CBSE Class X & XII Board Examinations." />

      {/* Achievement Stats */}
      <section style={{ background: "linear-gradient(135deg, #1e3a5f, #2d5f8a)", padding: "60px 24px" }}>
        <div className="achieve-grid">
          {ACHIEVEMENTS.map((a, i) => (
            <FadeIn key={a.label} delay={i * 0.1}>
              <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
                style={{ textAlign: "center" }}>
                <div style={{ fontSize: 36, marginBottom: 8 }}>{a.icon}</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, color: "#c8973a" }}>{a.value}</div>
                <div style={{ fontSize: 14, color: "white", fontWeight: 600, letterSpacing: 1, marginTop: 4 }}>{a.label}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>{a.sub}</div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Year Tabs */}
      <section style={{ background: "#f8f5f0", padding: "60px 24px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Year selector */}
          <FadeIn>
            <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 50, flexWrap: "wrap" }}>
              {RESULTS.map(r => (
                <motion.button key={r.year} onClick={() => setActiveYear(r.year)}
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                  style={{
                    padding: "10px 28px", borderRadius: 100, fontSize: 15, fontWeight: 600, cursor: "pointer", border: "none",
                    background: activeYear === r.year ? "linear-gradient(135deg,#1e3a5f,#2d5f8a)" : "white",
                    color: activeYear === r.year ? "white" : "#6b5e53",
                    boxShadow: activeYear === r.year ? "0 4px 16px rgba(30,58,95,0.3)" : "0 2px 10px rgba(0,0,0,0.07)",
                  }}>
                  {r.year} {r.highlight && <span style={{ marginLeft: 6, fontSize: 12, background: "#c8973a", color: "white", padding: "2px 8px", borderRadius: 100 }}>Latest</span>}
                </motion.button>
              ))}
            </div>
          </FadeIn>

          <AnimatePresence mode="wait">
            <motion.div key={activeYear} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>

              {/* Congratulations message */}
              <FadeIn>
                <div style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2d5f8a 100%)", borderRadius: 24, padding: "40px 48px", marginBottom: 48, textAlign: "center", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: "rgba(200,151,58,0.1)" }} />
                  <div style={{ fontSize: 40, marginBottom: 16 }}>🎉</div>
                  <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 24, flexWrap: "wrap" }}>
                    <div style={{ background: "rgba(200,151,58,0.15)", border: "1px solid rgba(200,151,58,0.3)", padding: "10px 28px", borderRadius: 100 }}>
                      <span style={{ fontSize: 13, color: "#c8973a", letterSpacing: 2 }}>CLASS X · </span>
                      <span style={{ fontSize: 22, fontWeight: 700, color: "#c8973a", fontFamily: "'Playfair Display',serif" }}>{activeResult.class10.result}</span>
                    </div>
                    <div style={{ background: "rgba(200,151,58,0.15)", border: "1px solid rgba(200,151,58,0.3)", padding: "10px 28px", borderRadius: 100 }}>
                      <span style={{ fontSize: 13, color: "#c8973a", letterSpacing: 2 }}>CLASS XII · </span>
                      <span style={{ fontSize: 22, fontWeight: 700, color: "#c8973a", fontFamily: "'Playfair Display',serif" }}>{activeResult.class12.result}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: "clamp(15px,1.6vw,17px)", color: "rgba(255,255,255,0.75)", lineHeight: 1.85, maxWidth: 800, margin: "0 auto", fontWeight: 300 }}>
                    {activeResult.message}
                  </p>
                </div>
              </FadeIn>

              {/* Class X & XII sections */}
              {[
                { label: "CLASS X", data: activeResult.class10, color: "#1e3a5f" },
                { label: "CLASS XII", data: activeResult.class12, color: "#5a3d8a" },
              ].map(({ label, data, color }) => (
                <FadeIn key={label}>
                  <div style={{ marginBottom: 48 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                      <div style={{ height: 2, flex: 1, background: `linear-gradient(90deg, ${color}, transparent)` }} />
                      <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(22px,3vw,30px)", fontWeight: 700, color, whiteSpace: "nowrap" }}>
                        {label} — <em style={{ color: "#c8973a" }}>{data.result} Result</em>
                      </h2>
                      <div style={{ height: 2, flex: 1, background: `linear-gradient(270deg, ${color}, transparent)` }} />
                    </div>

                    {data.photos.length > 0 ? (
                      <div className="results-photos">
                        {data.photos.map((photo, pi) => (
                          <motion.div key={pi} whileHover={{ scale: 1.03 }} onClick={() => setSelectedImg(photo)}
                            style={{ borderRadius: 16, overflow: "hidden", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", aspectRatio: "3/4" }}>
                            <img src={photo} alt={`${label} Result ${activeYear}`}
                              style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      /* Placeholder when no photos */
                      <div style={{ background: "white", borderRadius: 20, padding: "50px 24px", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: `2px dashed ${color}33` }}>
                        <div style={{ fontSize: 56, marginBottom: 16 }}>📸</div>
                        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color, marginBottom: 8 }}>
                          {label} Results {activeYear}
                        </div>
                        <div style={{ fontSize: 15, color: "#999" }}>Result photos will be added soon.</div>
                        <div style={{ marginTop: 16, display: "inline-block", background: color, color: "white", padding: "8px 24px", borderRadius: 100, fontSize: 13, fontWeight: 600, letterSpacing: 1 }}>
                          {data.result} Pass Result 🎉
                        </div>
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}

            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
            <motion.img src={selectedImg} alt="Result" initial={{ scale: 0.85 }} animate={{ scale: 1 }} exit={{ scale: 0.85 }}
              style={{ maxWidth: "90vw", maxHeight: "88vh", borderRadius: 16, boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
              onClick={e => e.stopPropagation()} />
            <motion.button onClick={() => setSelectedImg(null)} whileHover={{ scale: 1.1 }}
              style={{ position: "absolute", top: 20, right: 20, background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.3)", color: "white", width: 44, height: 44, borderRadius: "50%", fontSize: 18, cursor: "pointer" }}>✕</motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}