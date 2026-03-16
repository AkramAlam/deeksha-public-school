import { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "../components/ui/PageHero";
import FadeIn from "../components/ui/FadeIn";

const HOMEWORK = [
  { sr: 1,  class: "Nursery", short: "NUR", link: "https://docs.google.com/document/d/1xss00qL-54nUwtyCtryQMahoHDEpEvupadm0N3gNa_w/edit?usp=drive_link", available: true  },
  { sr: 2,  class: "L.K.G",   short: "LKG", link: "https://docs.google.com/document/d/1q5VTd9gjHrIAXYNV94lJFiIlBrNkUqo689h7aiK_mj4/edit?usp=drive_link", available: true  },
  { sr: 3,  class: "U.K.G",   short: "UKG", link: "https://docs.google.com/document/d/1M2OzmR6nsoSmcjlJAE1hrrRGgZ068vvs-qlbKpW2Whc/edit?usp=sharing",    available: true  },
  { sr: 4,  class: "Class 1", short: "I",   link: "https://docs.google.com/document/d/19QEosvClN7Jccuj0r6HyDYmSGuQAqX05I0M6pIM5t8s/edit?usp=sharing",    available: true  },
  { sr: 5,  class: "Class 2", short: "II",  link: "https://docs.google.com/document/d/1QhCrTsVGkRACFEFwBYCXJGyqfW7huu-ncSvHvpm1biQ/edit?usp=drive_link", available: true  },
  { sr: 6,  class: "Class 3", short: "III", link: "https://docs.google.com/document/d/1XFlY48qDoHq6wPUHIL6ZRBrHk91Gd4Fo06bZC_LsnvM/edit?usp=drive_link", available: true  },
  { sr: 7,  class: "Class 4", short: "IV",  link: "https://docs.google.com/document/d/1tXk1kqkbiyluLBU86CViLeSVdEas4qcra6LgLmX-FDo/edit?usp=drive_link", available: true  },
  { sr: 8,  class: "Class 5", short: "V",   link: "https://docs.google.com/document/d/1Hwfk99KhGsDRI_hulbvS95zfIU5Mg4Pu8kBb8K5DgBo/edit?usp=drive_link", available: true  },
  { sr: 9,  class: "Class 6", short: "VI",  link: "https://docs.google.com/document/d/1D_fzCBdS5Dp3UVLJvz7NCYeLvJ-Ur6vXvJu4EcNex3E/edit?usp=drive_link", available: true  },
  { sr: 10, class: "Class 7", short: "VII", link: "https://docs.google.com/document/d/1WQCv6PE5oyERJVgMui9mxC3dYJM_ywmV94pviJZwaLo/edit?usp=drive_link", available: true  },
  { sr: 11, class: "Class 8", short: "VIII",link: "https://docs.google.com/document/d/1qZUL4HiKbZ30W5nBaAwjuUgKGqnCE2WuJZ5Rf8DnosA/edit?usp=drive_link", available: true  },
  { sr: 12, class: "Class 9", short: "IX",  link: "https://docs.google.com/document/d/1y0nM_efACYzpahPG8KO9eEYany_3clOj44wIq-F-dKs/edit?usp=drive_link", available: true  },
  { sr: 13, class: "Class 10",short: "X",   link: null, available: false },
  { sr: 14, class: "Class 11",short: "XI",  link: null, available: false },
  { sr: 15, class: "Class 12",short: "XII", link: null, available: false },
];

const GROUP_COLORS = [
  { label: "Pre-Primary", range: [1, 3],  color: "#e05a2b", light: "#fdf0eb" },
  { label: "Primary",     range: [4, 8],  color: "#2d8a6a", light: "#e8f8f2" },
  { label: "Middle",      range: [9, 11], color: "#2d6a9f", light: "#e8f2fb" },
  { label: "Secondary",   range: [12, 15],color: "#5a3d8a", light: "#f0ebf8" },
];

function getColor(sr) {
  if (sr >= 1 && sr <= 3) return GROUP_COLORS[0];  // Pre-Primary
  if (sr >= 4 && sr <= 8) return GROUP_COLORS[1];  // Primary
  if (sr >= 9 && sr <= 11) return GROUP_COLORS[2]; // Middle
  return GROUP_COLORS[3];                           // Secondary
}

export default function HolidayHomeworkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? HOMEWORK
    : HOMEWORK.filter(hw => {
        const grp = getColor(hw.sr);
        return grp.label === activeFilter;
      });

  return (
    <div>
      <PageHero
        tag="STUDENT CORNER"
        title="Holiday's"
        highlight="Homework"
        subtitle="Download holiday homework for your class. Click 'View' to open the document."
      />

      <section style={{ background: "#f8f5f0", padding: "60px 24px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Filter Buttons */}
          <FadeIn>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", marginBottom: 44 }}>
              {/* All button */}
              <motion.button key="All" onClick={() => setActiveFilter("All")}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 20px", borderRadius: 100, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 13,
                  background: activeFilter === "All" ? "linear-gradient(135deg,#1e3a5f,#2d5f8a)" : "white",
                  color: activeFilter === "All" ? "white" : "#4a3f35",
                  boxShadow: activeFilter === "All" ? "0 4px 16px rgba(30,58,95,0.3)" : "0 2px 10px rgba(0,0,0,0.06)",
                }}>
                All Classes
              </motion.button>

              {GROUP_COLORS.map((g) => (
                <motion.button key={g.label} onClick={() => setActiveFilter(g.label)}
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                  style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 20px", borderRadius: 100, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 13,
                    background: activeFilter === g.label ? g.color : "white",
                    color: activeFilter === g.label ? "white" : "#4a3f35",
                    boxShadow: activeFilter === g.label ? `0 4px 16px ${g.color}55` : "0 2px 10px rgba(0,0,0,0.06)",
                  }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: activeFilter === g.label ? "rgba(255,255,255,0.7)" : g.color }} />
                  {g.label}
                </motion.button>
              ))}
            </div>
          </FadeIn>

          {/* Cards Grid */}
          <motion.div layout style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 18 }}>
            {filtered.map((hw, i) => {
              const grp = getColor(hw.sr);
              return (
                <FadeIn key={hw.sr} delay={i * 0.04}>
                  <motion.div
                    whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(0,0,0,0.12)" }}
                    style={{
                      background: "white",
                      borderRadius: 18,
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
                      borderTop: `4px solid ${grp.color}`,
                      opacity: hw.available ? 1 : 0.6,
                    }}
                  >
                    {/* Top */}
                    <div style={{ padding: "22px 18px 16px", textAlign: "center" }}>
                      {/* Circle avatar */}
                      <div style={{
                        width: 64, height: 64, borderRadius: "50%",
                        background: `linear-gradient(135deg, ${grp.color}, ${grp.color}bb)`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        margin: "0 auto 14px",
                        boxShadow: `0 4px 16px ${grp.color}44`,
                      }}>
                        <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, color: "white" }}>
                          {hw.short}
                        </span>
                      </div>

                      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 700, color: "#1a1612", marginBottom: 6 }}>
                        {hw.class}
                      </div>

                      <div style={{ fontSize: 11, color: grp.color, background: grp.light, padding: "3px 12px", borderRadius: 100, display: "inline-block", fontWeight: 700, letterSpacing: 1, marginBottom: 16 }}>
                        {grp.label}
                      </div>

                      {/* View Button */}
                      {hw.available && hw.link ? (
                        <a href={hw.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                              width: "100%",
                              background: `linear-gradient(135deg, ${grp.color}, ${grp.color}cc)`,
                              color: "white", border: "none", padding: "10px 0",
                              borderRadius: 100, fontSize: 13, cursor: "pointer", fontWeight: 600,
                            }}>
                            📄 View Homework
                          </motion.button>
                        </a>
                      ) : (
                        <button disabled style={{
                          width: "100%",
                          background: "#f0ebe3", color: "#bbb", border: "none",
                          padding: "10px 0", borderRadius: 100, fontSize: 13,
                          cursor: "not-allowed", fontWeight: 600,
                        }}>
                          🕐 Coming Soon
                        </button>
                      )}
                    </div>

                    {/* Footer */}
                    <div style={{ background: "#faf8f5", padding: "8px 18px", textAlign: "center", borderTop: "1px solid #f0ebe3" }}>
                      <span style={{ fontSize: 11, color: "#999" }}>Sr. No. {hw.sr}</span>
                    </div>
                  </motion.div>
                </FadeIn>
              );
            })}
          </motion.div>

          {/* Note */}
          <FadeIn>
            <div style={{ marginTop: 44, background: "white", borderRadius: 16, padding: "20px 28px", borderLeft: "4px solid #c8973a", boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}>
              <div style={{ fontWeight: 700, color: "#c8973a", marginBottom: 6, fontSize: 14, letterSpacing: 1 }}>📌 NOTE</div>
              <p style={{ fontSize: 15, color: "#6b5e53", lineHeight: 1.8, margin: 0 }}>
                Holiday homework must be submitted on the first day after the vacation. For any queries, please contact your class teacher or the school office.
              </p>
            </div>
          </FadeIn>

        </div>
      </section>
    </div>
  );
}