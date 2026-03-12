import { motion } from "framer-motion";
import PageHero from "../components/ui/PageHero";
import FadeIn from "../components/ui/FadeIn";
import { MANAGEMENT } from "../data/constants";

const STAFF = [
  { dept: "Administration", count: "5+", desc: "Experienced staff managing school operations" },
  { dept: "Teaching Faculty", count: "50+", desc: "Qualified educators across all subjects" },
  { dept: "Support Staff", count: "20+", desc: "Maintenance, security and auxiliary personnel" },
  { dept: "Lab Assistants", count: "8+", desc: "Trained assistants for Science and Computer labs" },
];

export default function ManagementPage() {
  return (
    <div>
      <style>{`
        .mgmt-card { display: grid; grid-template-columns: 260px 1fr; border-radius: 24px; overflow: hidden; box-shadow: 0 8px 40px rgba(0,0,0,0.07); margin-bottom: 28px; background: white; }
        .mgmt-card-reverse { grid-template-columns: 1fr 260px; }
        .mgmt-card-reverse .mgmt-photo-panel { order: 2; }
        .mgmt-card-reverse .mgmt-msg-panel { order: 1; }
        .mgmt-card-inner { direction: ltr; }
        .staff-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 18px; max-width: 1100px; margin: 0 auto; }
        @media (max-width: 900px) {
          .mgmt-card { grid-template-columns: 1fr !important; direction: ltr !important; }
          .mgmt-card-reverse { grid-template-columns: 1fr !important; direction: ltr !important; }
          .staff-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 480px) {
          .staff-grid { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
        }
      `}</style>

      <PageHero tag="LEADERSHIP" title="Our" highlight="Management" subtitle="Meet the visionary leaders who guide Deeksha Public School with wisdom and dedication." />

      {/* MESSAGES */}
      <section style={{ padding: "clamp(60px,8vw,100px) clamp(20px,5vw,60px)", background: "#f8f5f0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <div style={{ fontSize: 18, color: "#c8973a", letterSpacing: 3, marginBottom: 14 }}>MESSAGES FROM</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px,4.5vw,52px)", fontWeight: 700 }}>Our <em style={{ color: "#c8973a" }}>Leadership</em></h2>
            </div>
          </FadeIn>

          {MANAGEMENT.map((person, i) => (
            <FadeIn key={person.name} delay={i * 0.1}>
              <motion.div whileHover={{ boxShadow: "0 24px 60px rgba(0,0,0,0.1)" }}
                className={`mgmt-card ${i % 2 !== 0 ? "mgmt-card-reverse" : ""}`}>
                {/* Avatar */}
                <div className="mgmt-card-inner mgmt-photo-panel" style={{
                  background: `linear-gradient(135deg, ${person.color}18, ${person.color}38)`,
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  padding: "clamp(30px,4vw,52px) clamp(20px,3vw,36px)",
                  borderRight: i % 2 === 0 ? `3px solid ${person.color}25` : "none",
                  borderLeft: i % 2 !== 0 ? `3px solid ${person.color}25` : "none",
                }}>
                  <motion.div whileHover={{ scale: 1.06 }}
                    style={{ width: 110, height: 110, borderRadius: "50%", overflow: "hidden", marginBottom: 18, boxShadow: `0 10px 30px ${person.color}55`, border: `3px solid ${person.color}`, flexShrink: 0 }}>
                    <img src={person.photo} alt={person.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                  </motion.div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(19px,2vw,22px)", fontWeight: 700, color: "#1a1612", textAlign: "center", marginBottom: 6 }}>{person.name}</div>
                  <div style={{ fontSize: 17, color: person.color, letterSpacing: 2.5, fontWeight: 500, textAlign: "center" }}>{person.role.toUpperCase()}</div>
                </div>

                {/* Message */}
                <div className="mgmt-card-inner mgmt-msg-panel" style={{ padding: "clamp(28px,4vw,52px) clamp(20px,4vw,48px)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }}>
                    <div style={{ fontSize: 36, color: person.color, fontFamily: "'Playfair Display', serif", lineHeight: 0.5, marginTop: -10, opacity: 0.7 }}>"</div>
                    <div style={{ fontSize: 17, color: "#6b5e53", letterSpacing: 2.5 }}>{person.role.toUpperCase()}'S MESSAGE</div>
                  </div>
                  <p style={{ fontSize: "clamp(17px,1.8vw,20px)", color: "#4a3f35", lineHeight: 1.95, fontWeight: 300, fontStyle: "italic", marginBottom: 24, fontFamily: "'Playfair Display', serif" }}>
                    {person.fullMsg}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 36, height: 2, background: `linear-gradient(90deg, ${person.color}, transparent)` }} />
                    <span style={{ fontSize: 19, color: "#6b5e53", fontWeight: 300 }}>{person.name}, {person.role}</span>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* STAFF OVERVIEW */}
      <section style={{ background: "#1a1612", padding: "clamp(60px,8vw,100px) clamp(20px,5vw,60px)" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <div style={{ fontSize: 18, color: "#c8973a", letterSpacing: 3, marginBottom: 14 }}>OUR TEAM</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px,4.5vw,52px)", fontWeight: 700, color: "white" }}>Staff <em style={{ color: "#c8973a" }}>Overview</em></h2>
          </div>
        </FadeIn>
        <div className="staff-grid">
          {STAFF.map((s, i) => (
            <FadeIn key={s.dept} delay={i * 0.1}>
              <motion.div whileHover={{ y: -6 }}
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 18, padding: "clamp(20px,3vw,30px)", textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,3.5vw,38px)", fontWeight: 700, color: "#c8973a", marginBottom: 8 }}>{s.count}</div>
                <div style={{ fontSize: "clamp(13px,1.3vw,14px)", fontWeight: 600, color: "white", marginBottom: 8 }}>{s.dept}</div>
                <p style={{ fontSize: 18, color: "rgba(255,255,255,0.4)", lineHeight: 1.65, fontWeight: 300 }}>{s.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* SOCIETY */}
      <section style={{ padding: "clamp(60px,8vw,100px) clamp(20px,5vw,60px)", background: "#f8f5f0" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <div style={{ fontSize: 18, color: "#c8973a", letterSpacing: 3, marginBottom: 14 }}>GOVERNANCE</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px,4.5vw,50px)", fontWeight: 700, marginBottom: 24 }}>
              Deeksha Educational <em style={{ color: "#c8973a" }}>Society</em>
            </h2>
            <div style={{ width: 55, height: 2, background: "linear-gradient(90deg, #c8973a, transparent)", margin: "0 auto 28px" }} />
            <p style={{ fontSize: "clamp(17px,1.8vw,20px)", color: "#4a3f35", lineHeight: 1.9, fontWeight: 300, marginBottom: 18 }}>
              Deeksha Public School is governed by Deeksha Educational Society — a body committed to advancing quality education in the region. The society provides strategic direction, ensures resource allocation, and upholds the highest standards.
            </p>
            <p style={{ fontSize: "clamp(17px,1.8vw,20px)", color: "#4a3f35", lineHeight: 1.9, fontWeight: 300 }}>
              Under the society's guidance, the school has grown from a small institution into one of Faridabad's most respected educational establishments.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}