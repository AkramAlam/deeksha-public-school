import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/ui/PageHero";
import FadeIn from "../components/ui/FadeIn";
import { GALLERY_ITEMS } from "../data/constants";

const CATEGORIES = ["All", "Activity", "Sport", "Krishna Janmashtami", "Independence Day", "Mother's Day", "Earth Day", "Baisakhi", "Holi Celebration", "Basant Panchami", "Republic Day", "Deepawali Celebration", "Ram Navami Celebration", "Annual Day"];
const COLORS = [
  ["#1e3a5f22", "#1e3a5f"],
  ["#5a3d8a22", "#5a3d8a"],
  ["#2d6a9f22", "#2d6a9f"],
  ["#c8973a22", "#c8973a"],
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [direction, setDirection] = useState(1);

  const filtered = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((g) => g.category === activeCategory);

  const selectedItem = selectedIndex !== null ? filtered[selectedIndex] : null;

  const openItem = (i) => { setDirection(1); setSelectedIndex(i); };
  const closeItem = () => setSelectedIndex(null);
  const goPrev = (e) => { e.stopPropagation(); setDirection(-1); setSelectedIndex((p) => (p - 1 + filtered.length) % filtered.length); };
  const goNext = (e) => { e.stopPropagation(); setDirection(1); setSelectedIndex((p) => (p + 1) % filtered.length); };

  return (
    <div>
      <style>{`
        .filter-bar { display: flex; justify-content: center; gap: 10px; margin-bottom: 44px; flex-wrap: wrap; }
        .gallery-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .gallery-card { border-radius: 16px; overflow: hidden; cursor: pointer; position: relative; aspect-ratio: 4/3; }
        @media (max-width: 900px) { .gallery-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 520px) { .gallery-grid { grid-template-columns: 1fr !important; } .filter-bar { gap: 8px; } }
      `}</style>

      <PageHero tag="MEMORIES" title="Our" highlight="Gallery"
        subtitle="Moments of learning, celebration and achievement captured through our lens." />

      <section style={{ padding: "clamp(50px,7vw,80px) clamp(20px,5vw,60px)", background: "#f8f5f0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Category Filter */}
          <FadeIn>
            <div className="filter-bar">
              {CATEGORIES.map((cat) => (
                <motion.button key={cat} onClick={() => setActiveCategory(cat)}
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                  style={{
                    padding: "10px 22px", borderRadius: 100, fontSize: 15, fontWeight: 500, cursor: "pointer", border: "none",
                    background: activeCategory === cat ? "linear-gradient(135deg, #1e3a5f, #2d5f8a)" : "white",
                    color: activeCategory === cat ? "white" : "#6b5e53",
                    boxShadow: activeCategory === cat ? "0 4px 15px rgba(30,58,95,0.3)" : "0 2px 10px rgba(0,0,0,0.07)",
                  }}>
                  {cat}
                </motion.button>
              ))}
            </div>
          </FadeIn>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div key={activeCategory} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="gallery-grid">
              {filtered.map((item, i) => {
                const accent = COLORS[item.id % COLORS.length][1];
                return (
                  <FadeIn key={item.id} delay={i * 0.06}>
                    <motion.div className="gallery-card" onClick={() => openItem(i)}
                      whileHover={{ scale: 1.03, boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
                      style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>

                      {item.video ? (
                        /* Video card */
                        <>
                          <video src={item.video} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} muted playsInline preload="metadata" />
                          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ width: 54, height: 54, borderRadius: "50%", background: "rgba(255,255,255,0.9)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
                              <span style={{ fontSize: 22, marginLeft: 4 }}>▶</span>
                            </div>
                          </div>
                          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.7))", padding: "30px 16px 14px" }}>
                            <div style={{ fontSize: 11, color: "#c8973a", letterSpacing: 2, marginBottom: 3 }}>{item.category.toUpperCase()}</div>
                            <div style={{ fontSize: 15, fontWeight: 600, color: "white" }}>{item.title}</div>
                          </div>
                        </>
                      ) : item.img ? (
                        /* Real photo */
                        <>
                          <img src={item.img} alt={item.title}
                            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.7))", padding: "30px 16px 14px" }}>
                            <div style={{ fontSize: 11, color: "#c8973a", letterSpacing: 2, marginBottom: 3 }}>{item.category.toUpperCase()}</div>
                            <div style={{ fontSize: 15, fontWeight: 600, color: "white" }}>{item.title}</div>
                          </div>
                        </>
                      ) : (
                        /* Emoji placeholder */
                        <div style={{ width: "100%", height: "100%", background: `linear-gradient(135deg, ${COLORS[item.id % COLORS.length][0]}, ${accent}22)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20 }}>
                          <div style={{ fontSize: "clamp(40px,6vw,70px)", opacity: 0.4, marginBottom: 12 }}>{item.emoji}</div>
                          <div style={{ fontSize: 10, color: accent, letterSpacing: 2, marginBottom: 4 }}>{item.category.toUpperCase()}</div>
                          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(15px,1.8vw,18px)", fontWeight: 700, textAlign: "center", color: "#1a1612" }}>{item.title}</div>
                        </div>
                      )}
                    </motion.div>
                  </FadeIn>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={closeItem}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>

            {/* Prev Button */}
            <motion.button onClick={goPrev} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
              style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", zIndex: 210, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "2px solid rgba(255,255,255,0.3)", color: "white", width: 52, height: 52, borderRadius: "50%", fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              ‹
            </motion.button>

            {/* Next Button */}
            <motion.button onClick={goNext} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
              style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", zIndex: 210, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "2px solid rgba(255,255,255,0.3)", color: "white", width: 52, height: 52, borderRadius: "50%", fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              ›
            </motion.button>

            {/* Close Button */}
            <motion.button onClick={closeItem} whileHover={{ scale: 1.1 }}
              style={{ position: "absolute", top: 16, right: 16, zIndex: 210, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "2px solid rgba(255,255,255,0.3)", color: "white", width: 44, height: 44, borderRadius: "50%", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              ✕
            </motion.button>

            {/* Counter */}
            <div style={{ position: "absolute", top: 20, left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,0.7)", fontSize: 14, letterSpacing: 1, zIndex: 210 }}>
              {selectedIndex + 1} / {filtered.length}
            </div>

            {/* Sliding Content */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div key={selectedIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -80 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
                onClick={(e) => e.stopPropagation()}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "85vw", maxHeight: "90vh" }}>

                {selectedItem.video ? (
                  <video src={selectedItem.video} controls autoPlay
                    style={{ maxWidth: "85vw", maxHeight: "75vh", borderRadius: 16, background: "#000" }}
                    controlsList="nodownload" />
                ) : selectedItem.img ? (
                  <img src={selectedItem.img} alt={selectedItem.title}
                    style={{ maxWidth: "85vw", maxHeight: "78vh", width: "auto", height: "auto", borderRadius: 16, boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }} />
                ) : (
                  <div style={{ width: 400, height: 300, borderRadius: 16, background: `linear-gradient(135deg, ${COLORS[selectedItem.id % COLORS.length][0]}, ${COLORS[selectedItem.id % COLORS.length][1]}44)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 80 }}>
                    {selectedItem.emoji}
                  </div>
                )}

                {/* Title below image */}
                <div style={{ marginTop: 16, textAlign: "center" }}>
                  <div style={{ fontSize: 11, color: "#c8973a", letterSpacing: 2.5, marginBottom: 4 }}>{selectedItem.category.toUpperCase()}</div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(15px,2vw,20px)", fontWeight: 600, color: "white" }}>{selectedItem.title}</div>
                </div>

              </motion.div>
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}