import { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "../components/ui/PageHero";
import FadeIn from "../components/ui/FadeIn";

const CONTACT_INFO = [
  { icon: "📍", label: "Address", value: "Deeksha Public School, Faridabad, Haryana, India" },
  { icon: "🌐", label: "Website", value: "www.deekshapublicschool.in" },
  { icon: "📚", label: "Board", value: "CBSE Affiliated (2016)" },
  { icon: "🏛️", label: "Society", value: "Deeksha Educational Society" },
  { icon: "⏰", label: "School Hours", value: "Mon – Sat: 8:00 AM – 2:30 PM" },
];

const FAQ = [
  { q: "How can I apply for admission?", a: "You can apply online through our Enroll Now page or visit the school office in person." },
  { q: "What board does the school follow?", a: "Deeksha Public School is affiliated with CBSE since 2016." },
  { q: "When are the results declared?", a: "Results are declared at the end of each term. Check the Student Corner section." },
  { q: "Does the school have transportation?", a: "Yes, school bus services cover major areas of Faridabad. Contact the office for routes." },
  { q: "How do I pay fees online?", a: "We have an Online Payment portal on our website — net banking, UPI, and cards accepted." },
];

export default function ContactPage() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setFormState({ name: "", email: "", phone: "", subject: "", message: "" });
    }
  };

  const inputStyle = {
    width: "100%", padding: "13px 16px",
    background: "#f8f5f0", border: "1.5px solid #e8ddd0",
    borderRadius: 12, fontSize: 17, outline: "none",
    color: "#1a1612", transition: "border-color 0.3s",
    fontFamily: "'DM Sans', sans-serif",
  };

  return (
    <div>
      <style>{`
        .contact-outer { display: grid; grid-template-columns: 1fr 1.4fr; gap: 55px; max-width: 1200px; margin: 0 auto; }
        .msg-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px; }
        @media (max-width: 900px) {
          .contact-outer { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 600px) {
          .msg-form-row { grid-template-columns: 1fr !important; gap: 10px !important; }
        }
      `}</style>

      <PageHero tag="REACH US" title="Contact" highlight="Us" subtitle="Have a question or want to visit? We'd love to hear from you." />

      <section style={{ padding: "clamp(50px,7vw,90px) clamp(20px,5vw,60px)", background: "#f8f5f0" }}>
        <div className="contact-outer">

          {/* LEFT — Info */}
          <FadeIn direction="right">
            <div style={{ fontSize: 18, color: "#c8973a", letterSpacing: 3, marginBottom: 14 }}>GET IN TOUCH</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px,3.5vw,44px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 22 }}>
              We're Here<br />to <em style={{ color: "#c8973a" }}>Help You</em>
            </h2>
            <div style={{ width: 55, height: 2, background: "linear-gradient(90deg, #c8973a, transparent)", marginBottom: 28 }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 36 }}>
              {CONTACT_INFO.map((item) => (
                <motion.div key={item.label} whileHover={{ x: 5 }} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, #1e3a5f, #2d5f8a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 10, color: "#6b5e53", letterSpacing: 2, marginBottom: 3 }}>{item.label.toUpperCase()}</div>
                    <div style={{ fontSize: 17, color: "#1a1612", fontWeight: 500 }}>{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div style={{ background: "linear-gradient(135deg, #1e3a5f, #2d5f8a)", borderRadius: 18, height: 170, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 10, overflow: "hidden", position: "relative" }}>
              <div style={{ fontSize: 30 }}>📍</div>
              <div style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", fontWeight: 300 }}>Faridabad, Haryana</div>
              <motion.a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }}
                style={{ fontSize: 18, color: "#c8973a", border: "1px solid rgba(200,151,58,0.4)", padding: "6px 16px", borderRadius: 100 }}>
                View on Maps →
              </motion.a>
            </div>
          </FadeIn>

          {/* RIGHT — Form */}
          <FadeIn direction="left">
            <div style={{ background: "white", borderRadius: 24, padding: "clamp(24px,4vw,44px)", boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(20px,2.5vw,26px)", fontWeight: 700, color: "#1a1612", marginBottom: 6 }}>Send a Message</h3>
              <p style={{ fontSize: 17, color: "#6b5e53", marginBottom: 26, fontWeight: 300 }}>Fill out the form and we'll get back to you shortly.</p>

              {submitted && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  style={{ background: "rgba(46,160,67,0.1)", border: "1px solid rgba(46,160,67,0.3)", color: "#1a6e2e", padding: "12px 16px", borderRadius: 10, marginBottom: 18, fontSize: 14 }}>
                  ✅ Message sent! We'll get back to you soon.
                </motion.div>
              )}

              {/* Row 1 — Name + Phone */}
              <div className="msg-form-row">
                <div>
                  <label style={{ fontSize: 17, color: "#6b5e53", letterSpacing: 1, display: "block", marginBottom: 6 }}>YOUR NAME</label>
                  <motion.input whileFocus={{ borderColor: "#c8973a" }} style={inputStyle}
                    type="text" placeholder="Full Name"
                    value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} />
                </div>
                <div>
                  <label style={{ fontSize: 17, color: "#6b5e53", letterSpacing: 1, display: "block", marginBottom: 6 }}>PHONE NUMBER</label>
                  <motion.input whileFocus={{ borderColor: "#c8973a" }} style={inputStyle}
                    type="tel" placeholder="+91 00000 00000"
                    value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} />
                </div>
              </div>

              {/* Row 2 — Email */}
              <div style={{ marginBottom: 14 }}>
                <label style={{ fontSize: 17, color: "#6b5e53", letterSpacing: 1, display: "block", marginBottom: 6 }}>EMAIL ADDRESS</label>
                <motion.input whileFocus={{ borderColor: "#c8973a" }} style={inputStyle}
                  type="email" placeholder="email@example.com"
                  value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} />
              </div>

              {/* Row 3 — Subject */}
              <div style={{ marginBottom: 14 }}>
                <label style={{ fontSize: 17, color: "#6b5e53", letterSpacing: 1, display: "block", marginBottom: 6 }}>SUBJECT</label>
                <motion.input whileFocus={{ borderColor: "#c8973a" }} style={inputStyle}
                  type="text" placeholder="What is this about?"
                  value={formState.subject} onChange={(e) => setFormState({ ...formState, subject: e.target.value })} />
              </div>

              {/* Row 4 — Message */}
              <div style={{ marginBottom: 22 }}>
                <label style={{ fontSize: 17, color: "#6b5e53", letterSpacing: 1, display: "block", marginBottom: 6 }}>YOUR MESSAGE</label>
                <motion.textarea whileFocus={{ borderColor: "#c8973a" }} style={{ ...inputStyle, resize: "vertical" }}
                  rows={5} placeholder="Write your message here..."
                  value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} />
              </div>

              <motion.button onClick={handleSubmit}
                whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(200,151,58,0.4)" }} whileTap={{ scale: 0.98 }}
                style={{ width: "100%", padding: "15px", background: "linear-gradient(135deg, #c8973a, #e8b96a)", border: "none", borderRadius: 12, color: "white", fontSize: 18, fontWeight: 500, cursor: "pointer", letterSpacing: 0.4 }}>
                Send Message →
              </motion.button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#1a1612", padding: "clamp(60px,8vw,90px) clamp(20px,5vw,60px)", position: "relative", overflow: "hidden" }}>

        {/* Watermark — giant FAQ covering full section */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          pointerEvents: "none", userSelect: "none", overflow: "hidden",
        }}>
          {/* Top-left FAQ */}
          <div style={{
            position: "absolute", top: "-8%", left: "-5%",
            fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
            fontSize: "clamp(160px, 32vw, 420px)",
            fontWeight: 700, fontStyle: "italic",
            lineHeight: 0.85, letterSpacing: -8,
            background: "linear-gradient(135deg, rgba(200,151,58,0.09) 0%, rgba(200,151,58,0.03) 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            whiteSpace: "nowrap",
          }}>FAQ</div>

          {/* Bottom-right FAQ — offset for full coverage */}
          <div style={{
            position: "absolute", bottom: "-8%", right: "-5%",
            fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
            fontSize: "clamp(160px, 32vw, 420px)",
            fontWeight: 700, fontStyle: "italic",
            lineHeight: 0.85, letterSpacing: -8,
            background: "linear-gradient(315deg, rgba(200,151,58,0.07) 0%, rgba(200,151,58,0.02) 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            whiteSpace: "nowrap",
          }}>FAQ</div>
        </div>

        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div style={{ fontSize: 18, color: "#c8973a", letterSpacing: 3, marginBottom: 14, fontFamily: "'Cormorant Garamond', serif" }}>FAQ</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif", fontSize: "clamp(28px,4.5vw,52px)", fontWeight: 700, color: "white" }}>
                Frequently Asked <em style={{ color: "#c8973a" }}>Questions</em>
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {FAQ.map((item, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, overflow: "hidden" }}>
                  <button onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                    style={{ width: "100%", padding: "18px 24px", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: "clamp(17px,1.8vw,20px)", fontWeight: 600, color: "white", textAlign: "left", fontFamily: "'Cormorant Garamond', 'DM Sans', sans-serif" }}>{item.q}</span>
                    <motion.span animate={{ rotate: openFAQ === i ? 45 : 0 }} style={{ fontSize: 26, color: "#c8973a", flexShrink: 0, lineHeight: 1 }}>+</motion.span>
                  </button>
                  <motion.div initial={false} animate={{ height: openFAQ === i ? "auto" : 0, opacity: openFAQ === i ? 1 : 0 }} style={{ overflow: "hidden" }}>
                    <p style={{ padding: "0 24px 22px", fontSize: 17, color: "rgba(255,255,255,0.5)", lineHeight: 1.85, fontWeight: 300 }}>{item.a}</p>
                  </motion.div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}