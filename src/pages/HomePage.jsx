import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import FadeIn from "../components/ui/FadeIn";
import { STATS, FEATURES, MANAGEMENT } from "../data/constants";

const HERO_PHOTOS = [
  "/gallery/photo-64.jpg",
  "/gallery/photo-71.jpg",
  "/gallery/photo-65.jpg",
  "/gallery/photo-66.jpg",
  "/gallery/photo-69.jpg",
  "/gallery/photo-67.jpg",
  "/gallery/photo-70.jpeg",
  "/gallery/photo-68.jpeg",
];

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % HERO_PHOTOS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <style>{`
        .hero-content { padding: 140px 60px 80px; }
        .hero-title { font-size: clamp(44px, 5vw, 96px); }
        .hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }
        .scroll-indicator { display: flex; }
        @media (max-width: 768px) { .scroll-indicator { display: none !important; } }
        .stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 24px; max-width: 960px; margin: 0 auto; }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; max-width: 1200px; margin: 0 auto; }
        .features-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .mgmt-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 28px; max-width: 1100px; margin: 0 auto 50px; }
        .section-inner { max-width: 1200px; margin: 0 auto; }
        .hero-carousel-wrap { display: block; }
        @media (max-width: 900px) {
          .hero-content { padding: 130px 30px 60px !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .mgmt-grid { grid-template-columns: repeat(2,1fr) !important; }
          .hero-carousel-wrap { display: none !important; }
        }
        @media (max-width: 600px) {
          .hero-content { padding: 110px 20px 50px !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; gap: 16px !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .mgmt-grid { grid-template-columns: 1fr !important; }
          .hero-btns { flex-direction: column !important; }
          .hero-btns a { text-align: center !important; }
          .cta-box { padding: 50px 24px !important; }
          .cta-btns { flex-direction: column !important; align-items: center !important; }
        }
      `}</style>

      {/* HERO */}
      <section ref={heroRef} style={{ minHeight: "75vh", paddingTop: "80px", position: "relative", display: "flex", alignItems: "center", overflow: "hidden" }}>

        {/* Full-width Background Photo Carousel */}
        <div style={{ position: "absolute", top: "80px", left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={heroSlide}
              src={HERO_PHOTOS[heroSlide]}
              alt="School life"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", position: "absolute", inset: 0 }}
            />
          </AnimatePresence>
          {/* Dark overlay over entire image */}
          <div style={{ position: "absolute", inset: 0, background: "rgba(10,20,40,0.55)" }} />
        </div>

        {/* Left blur panel behind text */}
        <div style={{
          position: "absolute", left: 0, top: "80px", bottom: 0,
          width: "clamp(340px, 52%, 700px)",
          background: "rgba(15, 30, 60, 0.55)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          zIndex: 1,
          maskImage: "linear-gradient(to right, black 70%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 70%, transparent 100%)",
        }} />

        {/* Text Content */}
        <motion.div className="hero-content" style={{ opacity: heroOpacity, position: "relative", zIndex: 2, maxWidth: 600 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(200,151,58,0.18)", border: "1px solid rgba(200,151,58,0.35)", padding: "7px 18px", borderRadius: 100, marginBottom: 28 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#c8973a" }} />
            <span style={{ fontSize: 13, color: "#c8973a", letterSpacing: 2, fontWeight: 500 }}>CBSE AFFILIATED · FARIDABAD</span>
          </motion.div>

          <motion.h1 className="hero-title" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 1 }}
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "white", lineHeight: 1.1, marginBottom: 8 }}>
            Deeksha <em style={{ fontWeight: 400, fontStyle: "italic", color: "#c8973a" }}>Public School</em>
          </motion.h1>

          <motion.div initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.85 }}
            style={{ height: 1, width: 120, background: "linear-gradient(90deg, #c8973a, transparent)", marginBottom: 24 }} />

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}
            style={{ fontSize: "clamp(16px,2vw,20px)", color: "rgba(255,255,255,0.6)", fontFamily: "'Playfair Display', serif", fontStyle: "italic", marginBottom: 10 }}>Dedication Before Desire</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}
            style={{ fontSize: "clamp(17px,1.8vw,20px)", color: "rgba(255,255,255,0.5)", maxWidth: 480, lineHeight: 1.8, marginBottom: 44, fontWeight: 300 }}>
            Shaping future leaders through academic excellence, character development, and holistic education since 1999.
          </motion.p>

          <motion.div className="hero-btns" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.15 }}>
            <Link to="/enroll"><motion.span style={{ display: "inline-block", background: "linear-gradient(135deg, #c8973a, #e8b96a)", color: "white", padding: "15px 36px", borderRadius: 100, fontSize: 18, fontWeight: 500, textDecoration: "none", boxShadow: "0 8px 30px rgba(200,151,58,0.4)", cursor: "pointer" }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} as={motion.span}>Enroll Today →</motion.span></Link>
            <Link to="/about"><motion.span style={{ display: "inline-block", background: "rgba(255,255,255,0.08)", color: "white", padding: "15px 36px", borderRadius: 100, fontSize: 18, fontWeight: 400, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer" }} whileHover={{ background: "rgba(255,255,255,0.15)" }} whileTap={{ scale: 0.97 }}>Discover More</motion.span></Link>
          </motion.div>
        </motion.div>

        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
          className="scroll-indicator"
          style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", zIndex: 5, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", letterSpacing: 3 }}>SCROLL</span>
          <div style={{ width: 1, height: 28, background: "linear-gradient(to bottom, rgba(200,151,58,0.5), transparent)" }} />
        </motion.div>

      </section>

      {/* STATS */}
      {/* QUICK LINKS BAR */}
      <section style={{ background: "#f5f0e8", borderBottom: "1px solid #e8dfc8" }}>
        <style>{`
          .quick-links-grid { display: grid; grid-template-columns: repeat(5,1fr); max-width: 1200px; margin: 0 auto; }
          @media (max-width: 640px) { .quick-links-grid { grid-template-columns: repeat(3,1fr) !important; } }
          @media (max-width: 380px) { .quick-links-grid { grid-template-columns: repeat(2,1fr) !important; } }
          .quick-link-icon { width: 52px; height: 52px; border-radius: 50%; background: linear-gradient(135deg,#e8973a,#f0aa50); display:flex; align-items:center; justify-content:center; font-size:22px; box-shadow:0 4px 16px rgba(200,151,58,0.3); }
          @media (max-width: 640px) { .quick-link-icon { width: 44px; height: 44px; font-size: 18px; } }
        `}</style>
        <div className="quick-links-grid">
          {[
            { icon: "🏢", label: "INFRASTRUCTURE", to: "/infrastructure" },
            { icon: "🎨", label: "ACTIVITY", to: "/gallery" },
            { icon: "📰", label: "MEDIA COVERAGE", to: "/media-coverage" },
            { icon: "👨‍🏫", label: "STAFF DETAILS", to: "/staff-details" },
            { icon: "🎓", label: "ADMISSIONS", to: "/enroll" },
          ].map((item, i) => (
            <Link key={item.label} to={item.to} style={{ textDecoration: "none" }}>
              <motion.div whileHover={{ background: "#ede4d0" }} whileTap={{ scale: 0.97 }}
                style={{
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  padding: "20px 8px", gap: 10, cursor: "pointer", transition: "background 0.2s",
                  borderRight: i < 4 ? "1px solid #ddd5bb" : "none",
                }}>
                <div className="quick-link-icon">{item.icon}</div>
                <span style={{ fontSize: "clamp(9px,1.5vw,12px)", fontWeight: 700, color: "#1e3a5f", letterSpacing: 1, textAlign: "center", lineHeight: 1.3 }}>
                  {item.label}
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "linear-gradient(135deg, #1e3a5f, #2d5f8a)", padding: "50px 30px" }}>
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1}>
              <div style={{ textAlign: "center" }}>
                <motion.div initial={{ scale: 0.4, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, type: "spring", bounce: 0.4 }}
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,4.5vw,58px)", fontWeight: 700, color: "#c8973a", lineHeight: 1 }}>{s.value}</motion.div>
                <div style={{ fontSize: 17, color: "rgba(255,255,255,0.55)", letterSpacing: 2.5, marginTop: 8 }}>{s.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "100px 30px" }}>
        <div className="about-grid">
          <FadeIn direction="right">
            <div style={{ fontSize: 18, color: "#c8973a", letterSpacing: 3, marginBottom: 16 }}>WHO WE ARE</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,4.5vw,56px)", fontWeight: 700, lineHeight: 1.1, marginBottom: 24 }}>
              About <em style={{ color: "#c8973a" }}>Deeksha</em><br />Public School
            </h2>
            <div style={{ width: 60, height: 2, background: "linear-gradient(90deg, #c8973a, transparent)", marginBottom: 24 }} />
            <p style={{ fontSize: "clamp(17px,1.8vw,20px)", lineHeight: 1.85, color: "#4a3f35", marginBottom: 18, fontWeight: 300 }}>
              Established in <strong style={{ color: "#1a1612", fontWeight: 600 }}>1999</strong>, Deeksha Public School is one of the most prestigious schools in Faridabad. Started with 125 students, now grown to over <strong style={{ color: "#1a1612", fontWeight: 600 }}>1000 students and 50 teachers</strong>.
            </p>
            <p style={{ fontSize: "clamp(17px,1.8vw,20px)", lineHeight: 1.85, color: "#4a3f35", marginBottom: 36, fontWeight: 300 }}>
              CBSE affiliated since 2016, focused on academic excellence, intellectual growth, and all-round development.
            </p>
            <Link to="/about" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 17, color: "#c8973a", fontWeight: 500, textDecoration: "none" }}>
              Read More About Us <span>→</span>
            </Link>
          </FadeIn>

          <FadeIn direction="left">
            <div className="features-grid">
              {FEATURES.slice(0, 4).map((f, i) => (
                <motion.div key={f.title} whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}
                  style={{ background: i % 2 === 0 ? "#1e3a5f" : "white", padding: "24px 20px", borderRadius: 20, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                  <div style={{ fontSize: 24, marginBottom: 10 }}>{f.icon}</div>
                  <div style={{ fontSize: 18, fontFamily: "'Playfair Display', serif", fontWeight: 700, marginBottom: 6, color: i % 2 === 0 ? "white" : "#1a1612" }}>{f.title}</div>
                  <div style={{ fontSize: 19, lineHeight: 1.65, color: i % 2 === 0 ? "rgba(255,255,255,0.55)" : "#6b5e53", fontWeight: 300 }}>{f.desc}</div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MANAGEMENT */}
      <section style={{ background: "#1a1612", padding: "100px 30px" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 55 }}>
            <div style={{ fontSize: 18, color: "#c8973a", letterSpacing: 3, marginBottom: 14 }}>LEADERSHIP</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,4.5vw,56px)", fontWeight: 700, color: "white" }}>Our <em style={{ color: "#c8973a" }}>Management</em></h2>
          </div>
        </FadeIn>
        <div className="mgmt-grid">
          {MANAGEMENT.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.15}>
              <motion.div whileHover={{ y: -8 }}
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 24, padding: "32px 24px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
                <div style={{ width: 120, height: 120, borderRadius: "16px", overflow: "hidden", marginBottom: 18, boxShadow: `0 6px 20px ${p.color}44`, border: `3px solid ${p.color}`, flexShrink: 0 }}>
                  <img src={p.photo} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                </div>
                <div style={{ fontSize: 17, color: p.color, letterSpacing: 2.5, marginBottom: 4 }}>{p.role.toUpperCase()}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "white", marginBottom: 14 }}>{p.name}</div>
                <p style={{ fontSize: 19, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, fontWeight: 300 }}>"{p.fullMsg.slice(0, 130)}…"</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
        <FadeIn>
          <div style={{ textAlign: "center" }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} style={{ display: "inline-block" }}>
              <Link to="/management"
                style={{ display: "inline-block", border: "1px solid rgba(200,151,58,0.4)", color: "#c8973a", padding: "13px 36px", borderRadius: 100, fontSize: 17, fontWeight: 500, textDecoration: "none" }}>
                View Full Messages →
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 24px", background: "#f8f5f0" }}>
        <FadeIn>
          <motion.div className="cta-box"
            style={{ maxWidth: 920, margin: "0 auto", textAlign: "center", background: "linear-gradient(135deg, #1e3a5f 0%, #2d5f8a 100%)", borderRadius: 28, padding: "70px 50px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -60, right: -60, width: 260, height: 260, borderRadius: "50%", background: "rgba(200,151,58,0.1)" }} />
            <div style={{ fontSize: 18, color: "#c8973a", letterSpacing: 3, marginBottom: 16 }}>ADMISSIONS OPEN 2025-26</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,4.5vw,50px)", fontWeight: 700, color: "white", lineHeight: 1.15, marginBottom: 16 }}>
              Begin Your Child's<br /><em style={{ color: "#c8973a" }}>Journey of Excellence</em>
            </h2>
            <p style={{ fontSize: "clamp(17px,1.8vw,20px)", color: "rgba(255,255,255,0.55)", maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.8, fontWeight: 300 }}>
              Join the Deeksha family and give your child quality education, values, and a foundation for success.
            </p>
            <div className="cta-btns" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/enroll" style={{ textDecoration: "none" }}><motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                style={{ display: "inline-block", background: "linear-gradient(135deg, #c8973a, #e8b96a)", color: "white", padding: "15px 38px", borderRadius: 100, fontSize: 18, fontWeight: 500, boxShadow: "0 8px 30px rgba(200,151,58,0.4)", cursor: "pointer" }}>Apply Now →</motion.span></Link>
              <Link to="/contact" style={{ textDecoration: "none" }}><motion.span whileHover={{ background: "rgba(255,255,255,0.15)" }} whileTap={{ scale: 0.97 }}
                style={{ display: "inline-block", background: "rgba(255,255,255,0.08)", color: "white", padding: "15px 38px", borderRadius: 100, fontSize: 18, fontWeight: 400, border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer" }}>Contact Us</motion.span></Link>
            </div>
          </motion.div>
        </FadeIn>
      </section>

      {/* MAP */}
      <section style={{ background: "#1e3a5f", padding: "70px 24px" }}>
        <FadeIn>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 36 }}>
              <div style={{ fontSize: 13, color: "#c8973a", letterSpacing: 3, marginBottom: 10 }}>FIND US</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px,4vw,42px)", fontWeight: 700, color: "white", margin: 0 }}>
                Our <em style={{ color: "#c8973a" }}>Location</em>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.55)", marginTop: 12, fontSize: 16 }}>Sector 91, Faridabad, Haryana</p>
            </div>
            <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.4)", border: "3px solid rgba(200,151,58,0.3)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.0511165688295!2d77.33428599999999!3d28.478007199999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7a0e9dda809%3A0x24bed4fe4cd0f345!2sDeeksha%20Public%20School!5e0!3m2!1sen!2sin!4v1773257789828!5m2!1sen!2sin"
                width="100%" height="450" style={{ border: 0, display: "block" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Deeksha Public School Location" />
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}