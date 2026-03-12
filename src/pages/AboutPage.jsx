import { motion } from "framer-motion";
import PageHero from "../components/ui/PageHero";
import FadeIn from "../components/ui/FadeIn";
import { FEATURES } from "../data/constants";

const VALUES = [
  { icon: "🌟", title: "Excellence", desc: "We strive for the highest standards in academics, character, and personal growth." },
  { icon: "🤝", title: "Integrity", desc: "Honesty, transparency, and ethical behavior in everything we do." },
  { icon: "💡", title: "Innovation", desc: "Embracing modern teaching methods and technology for better outcomes." },
  { icon: "🌱", title: "Growth", desc: "Nurturing every child's unique potential to flourish and thrive." },
  { icon: "🌍", title: "Inclusivity", desc: "A welcoming environment where every student belongs and matters." },
  { icon: "🏆", title: "Achievement", desc: "Celebrating every milestone — academic, sports, arts, and beyond." },
];

const TIMELINE = [
  { year: "1999", event: "School founded by Deeksha Educational Society with 125 students and 8 teachers." },
  { year: "2005", event: "Expanded infrastructure — new classrooms and sports facilities added." },
  { year: "2010", event: "Crossed 500 students. Science and computer labs inaugurated." },
  { year: "2016", event: "Received CBSE affiliation — a landmark achievement." },
  { year: "2020", event: "Launched digital learning initiatives and online student portal." },
  { year: "2024", event: "Over 1000 students, 50 teachers and growing stronger every year." },
];

export default function AboutPage() {
  return (
    <div>
      <style>{`
        .about-intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; max-width: 1200px; margin: 0 auto; }
        .values-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; }
        .features-grid-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; }
        .vision-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; max-width: 1100px; margin: 0 auto; }
        .timeline-line { position: absolute; left: 50%; top: 0; bottom: 0; width: 1px; background: rgba(200,151,58,0.3); transform: translateX(-50%); }
        .timeline-item { display: flex; margin-bottom: 40px; position: relative; }
        .timeline-item-left { justify-content: flex-start; }
        .timeline-item-right { justify-content: flex-end; }
        .timeline-card { width: 44%; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 20px 22px; }
        .timeline-dot { position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); width: 12px; height: 12px; border-radius: 50%; background: #c8973a; border: 3px solid #1e3a5f; z-index: 1; }
        @media (max-width: 900px) {
          .about-intro-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .values-grid { grid-template-columns: repeat(2,1fr) !important; }
          .features-grid-3 { grid-template-columns: repeat(2,1fr) !important; }
          .vision-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .values-grid { grid-template-columns: 1fr !important; }
          .features-grid-3 { grid-template-columns: 1fr !important; }
          .timeline-line { left: 16px !important; }
          .timeline-dot { left: 16px !important; }
          .timeline-item { justify-content: flex-start !important; padding-left: 44px; }
          .timeline-card { width: 100% !important; }
        }
      `}</style>

      <PageHero tag="OUR STORY" title="About" highlight="Deeksha Public School" subtitle="A legacy of excellence, values, and dedication to shaping young minds since 1999." />

      {/* INTRO */}
      <section style={{ padding: "clamp(60px,8vw,110px) clamp(20px,5vw,60px)" }}>
        <div className="about-intro-grid">
          <FadeIn direction="right">
            <div style={{ fontSize: 18, color: "#c8973a", letterSpacing: 3, marginBottom: 16 }}>SINCE 1999</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 22 }}>
              A Prestigious Institution<br />in <em style={{ color: "#c8973a" }}>Faridabad</em>
            </h2>
            <div style={{ width: 55, height: 2, background: "linear-gradient(90deg, #c8973a, transparent)", marginBottom: 24 }} />
            <p style={{ fontSize: "clamp(17px,1.8vw,20px)", lineHeight: 1.9, color: "#4a3f35", marginBottom: 18, fontWeight: 300 }}>
              Deeksha Public School is run by Deeksha Educational Society. One of the most prestigious schools in Faridabad — started with 125 students and grown to over <strong style={{ color: "#1a1612", fontWeight: 600 }}>1000 students and 50 teachers</strong>.
            </p>
            <p style={{ fontSize: "clamp(17px,1.8vw,20px)", lineHeight: 1.9, color: "#4a3f35", fontWeight: 300 }}>
              Affiliated with <strong style={{ color: "#1a1612", fontWeight: 600 }}>CBSE since 2016</strong>, marking a significant milestone in our journey of excellence.
            </p>
          </FadeIn>

          <FadeIn direction="left">
            <div style={{ background: "linear-gradient(135deg, #1e3a5f, #2d5f8a)", borderRadius: 24, padding: "clamp(28px,4vw,48px)", position: "relative", overflow: "hidden" }}>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{ position: "absolute", right: -40, top: -40, width: 200, height: 200, borderRadius: "50%", border: "1px solid rgba(200,151,58,0.15)" }} />
              <div style={{ fontSize: 18, color: "#c8973a", letterSpacing: 3, marginBottom: 28 }}>BY THE NUMBERS</div>
              {[{n:"1999",l:"Year Established"},{n:"1000+",l:"Students Enrolled"},{n:"50+",l:"Qualified Teachers"},{n:"CBSE",l:"Board Affiliation"},{n:"25+",l:"Years of Excellence"}].map((item, i) => (
                <motion.div key={item.l} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 0", borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(20px,2.5vw,24px)", fontWeight: 700, color: "#c8973a" }}>{item.n}</span>
                  <span style={{ fontSize: 17, color: "rgba(255,255,255,0.55)" }}>{item.l}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section style={{ background: "#1a1612", padding: "clamp(60px,8vw,100px) clamp(20px,5vw,60px)" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <div style={{ fontSize: 18, color: "#c8973a", letterSpacing: 3, marginBottom: 14 }}>OUR PURPOSE</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px,4.5vw,52px)", fontWeight: 700, color: "white" }}>Vision &amp; <em style={{ color: "#c8973a" }}>Mission</em></h2>
          </div>
        </FadeIn>
        <div className="vision-grid">
          {[
            { icon:"👁️", title:"Our Vision", color:"#c8973a", text:"To be a beacon of excellence in education — nurturing well-rounded individuals who contribute positively to society. We envision a school where every child discovers their unique potential and grows into a responsible global citizen." },
            { icon:"🎯", title:"Our Mission", color:"#2d6a9f", text:"To provide a stimulating, inclusive, and innovative learning environment that fosters academic rigor, critical thinking, creativity, and character development. We empower students with skills and values for an ever-evolving world." },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.15}>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 22, padding: "clamp(28px,3vw,44px)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${item.color}, transparent)` }} />
                <div style={{ fontSize: 30, marginBottom: 18 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(20px,2.2vw,26px)", fontWeight: 700, color: "white", marginBottom: 16 }}>{item.title}</h3>
                <p style={{ fontSize: "clamp(16px,1.6vw,18px)", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, fontWeight: 300 }}>{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CORE VALUES */}
      <section style={{ padding: "clamp(60px,8vw,110px) clamp(20px,5vw,60px)", background: "#f8f5f0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <div style={{ fontSize: 18, color: "#c8973a", letterSpacing: 3, marginBottom: 14 }}>WHAT WE STAND FOR</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px,4.5vw,52px)", fontWeight: 700 }}>Our Core <em style={{ color: "#c8973a" }}>Values</em></h2>
            </div>
          </FadeIn>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <motion.div whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(0,0,0,0.08)" }}
                  style={{ background: "white", borderRadius: 18, padding: "clamp(22px,3vw,34px)", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
                  <div style={{ fontSize: 28, marginBottom: 14 }}>{v.icon}</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(19px,2vw,22px)", fontWeight: 700, marginBottom: 8 }}>{v.title}</h3>
                  <p style={{ fontSize: 19, color: "#6b5e53", lineHeight: 1.75, fontWeight: 300 }}>{v.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: "clamp(60px,8vw,110px) clamp(20px,5vw,60px)", background: "#1e3a5f" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 55 }}>
              <div style={{ fontSize: 18, color: "#c8973a", letterSpacing: 3, marginBottom: 14 }}>OUR JOURNEY</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px,4.5vw,52px)", fontWeight: 700, color: "white" }}>Milestones &amp; <em style={{ color: "#c8973a" }}>Achievements</em></h2>
            </div>
          </FadeIn>
          <div style={{ position: "relative" }}>
            <div className="timeline-line" />
            {TIMELINE.map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.1} direction={i % 2 === 0 ? "right" : "left"}>
                <div className={`timeline-item ${i % 2 === 0 ? "timeline-item-left" : "timeline-item-right"}`}>
                  <div className="timeline-card">
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(18px,2.5vw,22px)", fontWeight: 700, color: "#c8973a", marginBottom: 8 }}>{item.year}</div>
                    <p style={{ fontSize: "clamp(15px,1.5vw,17px)", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, fontWeight: 300 }}>{item.event}</p>
                  </div>
                  <div className="timeline-dot" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "clamp(60px,8vw,110px) clamp(20px,5vw,60px)", background: "#f8f5f0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <div style={{ fontSize: 18, color: "#c8973a", letterSpacing: 3, marginBottom: 14 }}>WHAT WE OFFER</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px,4.5vw,52px)", fontWeight: 700 }}>School <em style={{ color: "#c8973a" }}>Features</em></h2>
            </div>
          </FadeIn>
          <div className="features-grid-3">
            {FEATURES.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.08}>
                <motion.div whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(0,0,0,0.08)" }}
                  style={{ background: "white", borderRadius: 18, padding: "clamp(22px,3vw,34px)", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", borderLeft: "3px solid #c8973a" }}>
                  <div style={{ fontSize: 28, marginBottom: 14 }}>{f.icon}</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(19px,2vw,22px)", fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ fontSize: 19, color: "#6b5e53", lineHeight: 1.75, fontWeight: 300 }}>{f.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}