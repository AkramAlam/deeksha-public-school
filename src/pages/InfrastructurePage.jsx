import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/ui/PageHero";
import FadeIn from "../components/ui/FadeIn";

const FACILITIES = [
  {
    title: "Chemistry Lab",
    icon: "⚗️",
    img: "/gallery/photo-65.jpg",
    desc: "Our fully equipped Chemistry Laboratory provides students with hands-on experience in chemical experiments. The lab is stocked with modern apparatus, safety equipment, and chemicals required for CBSE curriculum practical work.",
    features: ["45 student capacity", "Modern apparatus", "Safety equipment", "CBSE compliant"],
  },
  {
    title: "Physics Lab",
    icon: "🔭",
    img: "/gallery/photo-66.jpg",
    desc: "The Physics Laboratory is designed to make learning engaging through practical experiments. Students explore concepts of mechanics, optics, electricity, and magnetism with precision instruments.",
    features: ["Advanced instruments", "Optics & mechanics", "Electricity experiments", "Research grade equipment"],
  },
  {
    title: "Computer Lab",
    icon: "💻",
    img: "/gallery/photo-70.jpeg",
    desc: "A state-of-the-art Computer Laboratory equipped with modern computers and high-speed internet. Students learn programming, digital literacy, and computer applications in a fully networked environment.",
    features: ["45 computers", "High-speed internet", "Modern software", "Networked environment"],
  },
  {
    title: "Library",
    icon: "📚",
    img: "/gallery/photo-71.jpg",
    desc: "Our spacious Library houses thousands of books covering academics, literature, science, and general knowledge. A quiet reading environment encourages students to develop a love for reading and self-study.",
    features: ["5000+ books", "Reading area", "Reference section", "Periodicals & journals"],
  },
  {
    title: "Maths Room",
    icon: "📐",
    img: "/gallery/photo-64.jpg",
    desc: "The dedicated Mathematics Room features interactive learning tools, models, and puzzles that make abstract mathematical concepts tangible and easy to understand for students of all levels.",
    features: ["Math models", "Interactive tools", "Activity-based learning", "Smart board"],
  },
  {
    title: "Biology Lab",
    icon: "🔬",
    img: "/gallery/photo-69.jpg",
    desc: "The Biology Laboratory is equipped with microscopes, specimens, and dissection tools. Students gain practical knowledge of living organisms, cell biology, and plant & animal systems.",
    features: ["Microscopes", "Specimens & charts", "Dissection tools", "Botanical models"],
  },
  {
    title: "Composite Science Lab",
    icon: "🧪",
    img: "/gallery/photo-67.jpg",
    desc: "The Composite Science Lab serves junior classes with combined science experiments. It bridges the gap between theory and practical knowledge across Physics, Chemistry, and Biology.",
    features: ["Multi-subject lab", "Junior classes", "Practical experiments", "Safe environment"],
  },
  {
    title: "Playground",
    icon: "⚽",
    img: "/gallery/photo-68.jpeg",
    desc: "A sprawling playground with green grass, football goals, swings, and open space encourages physical fitness and team sports. Students enjoy their break time and physical education classes here.",
    features: ["Football ground", "Swing area", "Open play space", "Physical education"],
  },
  {
    title: "Transport Facility",
    icon: "🚌",
    img: null,
    color: "#1e3a5f",
    desc: "The school provides safe and reliable transport facility covering major routes across Faridabad. All vehicles are GPS-enabled and driven by trained, verified drivers ensuring student safety.",
    features: ["GPS-enabled buses", "Multiple routes", "Trained drivers", "Safe & reliable"],
  },
];

export default function InfrastructurePage() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <style>{`
        .infra-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; max-width: 1200px; margin: 0 auto; }
        @media (max-width: 900px) { .infra-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 520px) { .infra-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      <PageHero tag="FACILITIES" title="Our" highlight="Infrastructure"
        subtitle="World-class facilities to support holistic learning and development of every student." />

      {/* Intro */}
      <section style={{ background: "#f8f5f0", padding: "60px 24px 20px" }}>
        <FadeIn>
          <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: "clamp(17px,1.8vw,20px)", color: "#4a3f35", lineHeight: 1.9, fontWeight: 300 }}>
              The school is spread over a <strong style={{ color: "#1e3a5f" }}>four-storied massive building</strong> with surroundings that house all facilities necessary for a modern and progressive school. The building is furnished with academic buildings, laboratories equipped with sophisticated equipment, computers, and a capacity of <strong style={{ color: "#1e3a5f" }}>45 students at a time</strong>.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Grid */}
      <section style={{ background: "#f8f5f0", padding: "50px 24px 80px" }}>
        <div className="infra-grid">
          {FACILITIES.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.07}>
              <motion.div onClick={() => setSelected(item)}
                whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(0,0,0,0.13)" }}
                style={{ background: "white", borderRadius: 20, overflow: "hidden", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>

                {/* Image / Color block */}
                <div style={{ height: 200, position: "relative", overflow: "hidden" }}>
                  {item.img ? (
                    <img src={item.img} alt={item.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  ) : (
                    <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #1e3a5f, #2d5f8a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64 }}>
                      {item.icon}
                    </div>
                  )}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(transparent 50%, rgba(0,0,0,0.6))" }} />
                  <div style={{ position: "absolute", bottom: 14, left: 16, right: 16, display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 22 }}>{item.icon}</span>
                    <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: "white" }}>{item.title}</span>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: "18px 20px" }}>
                  <p style={{ fontSize: 15, color: "#6b5e53", lineHeight: 1.7, marginBottom: 14, fontWeight: 300 }}>
                    {item.desc.slice(0, 100)}...
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {item.features.map((f) => (
                      <span key={f} style={{ fontSize: 11, background: "#f0ebe3", color: "#1e3a5f", padding: "4px 10px", borderRadius: 100, fontWeight: 500, letterSpacing: 0.5 }}>{f}</span>
                    ))}
                  </div>
                  <div style={{ marginTop: 14, fontSize: 13, color: "#c8973a", fontWeight: 600 }}>View Details →</div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
            <motion.div initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.88, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{ background: "white", borderRadius: 24, overflow: "hidden", maxWidth: 700, width: "100%", boxShadow: "0 40px 100px rgba(0,0,0,0.5)", maxHeight: "90vh", overflowY: "auto" }}>

              {selected.img ? (
                <img src={selected.img} alt={selected.title}
                  style={{ width: "100%", maxHeight: 380, objectFit: "cover", display: "block" }} />
              ) : (
                <div style={{ height: 200, background: "linear-gradient(135deg, #1e3a5f, #2d5f8a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 80 }}>
                  {selected.icon}
                </div>
              )}

              <div style={{ padding: "28px 32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ fontSize: 28 }}>{selected.icon}</span>
                  <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(22px,3vw,30px)", fontWeight: 700, color: "#1a1612", margin: 0 }}>{selected.title}</h2>
                </div>
                <p style={{ fontSize: 17, color: "#4a3f35", lineHeight: 1.85, marginBottom: 24, fontWeight: 300 }}>{selected.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                  {selected.features.map((f) => (
                    <span key={f} style={{ fontSize: 13, background: "#f0ebe3", color: "#1e3a5f", padding: "6px 14px", borderRadius: 100, fontWeight: 600 }}>{f}</span>
                  ))}
                </div>
                <motion.button onClick={() => setSelected(null)} whileHover={{ scale: 1.05 }}
                  style={{ background: "linear-gradient(135deg,#1e3a5f,#2d5f8a)", color: "white", border: "none", padding: "10px 28px", borderRadius: 100, fontSize: 15, cursor: "pointer" }}>
                  Close ✕
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}