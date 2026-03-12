import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../data/constants";

export default function Footer() {
  return (
    <footer style={{ background: "#0f0d0b", padding: "80px 40px 32px", overflowX: "hidden" }}>
      <style>{`
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; max-width: 1300px; margin: 0 auto 56px; }
        .footer-bottom { max-width: 1300px; margin: 0 auto; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 26px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
        .footer-contact-item { display: flex; gap: 12px; align-items: flex-start; margin-bottom: 14px; overflow: hidden; }
        .footer-contact-text { font-size: 15px; color: rgba(255,255,255,0.45); word-break: break-word; overflow-wrap: break-word; min-width: 0; line-height: 1.5; }
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; } }
        @media (max-width: 520px) { .footer-grid { grid-template-columns: 1fr; gap: 28px; } .footer-bottom { flex-direction: column; align-items: flex-start; } }
      `}</style>

      <div className="footer-grid">
        {/* Brand */}
        <div>
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20, textDecoration: "none" }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", flexShrink: 0, background: "linear-gradient(135deg, #c8973a, #e8b96a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 700, color: "white" }}>D</div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700, color: "white", fontFamily: "'Playfair Display', serif", letterSpacing: 1.5 }}>DEEKSHA</div>
              <div style={{ fontSize: 11, color: "#c8973a", letterSpacing: 3 }}>PUBLIC SCHOOL</div>
            </div>
          </Link>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", lineHeight: 1.85, fontWeight: 300, maxWidth: 280 }}>
            Shaping future leaders through academic excellence and values since 1999.
          </p>
          <div style={{ marginTop: 20, fontStyle: "italic", color: "#c8973a", fontFamily: "'Playfair Display', serif", fontSize: 16 }}>
            "Dedication Before Desire"
          </div>
        </div>

        {/* Navigation */}
        <div>
          <div style={{ fontSize: 13, color: "#c8973a", letterSpacing: 2.5, marginBottom: 20, fontWeight: 500 }}>NAVIGATION</div>
          {NAV_LINKS.map((link) => (
            <Link key={link.label} to={link.href} style={{ textDecoration: "none" }}>
              <motion.div whileHover={{ x: 4, color: "#c8973a" }}
                style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", marginBottom: 13, transition: "color 0.2s" }}>
                {link.label}
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Information */}
        <div>
          <div style={{ fontSize: 13, color: "#c8973a", letterSpacing: 2.5, marginBottom: 20, fontWeight: 500 }}>INFORMATION</div>
          {[
            { label: "Staff Details", to: "/staff-details" },
            { label: "Infrastructure", to: "/infrastructure" },
            { label: "Fee Structure", to: "/fee-structure" },
            { label: "Mandatory Disclosure", to: "/mandatory-disclosure" },
            { label: "Media Coverage", to: "/media-coverage" },
            { label: "Admissions", to: "/enroll" },
          ].map((item) => (
            <Link key={item.label} to={item.to} style={{ textDecoration: "none" }}>
              <motion.div whileHover={{ x: 4, color: "#c8973a" }}
                style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", marginBottom: 13, transition: "color 0.2s", cursor: "pointer" }}>
                {item.label}
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontSize: 13, color: "#c8973a", letterSpacing: 2.5, marginBottom: 20, fontWeight: 500 }}>CONTACT</div>
          {[
            { icon: "📍", text: "Faridabad, Haryana" },
            { icon: "🌐", text: "deekshapublicschool.in" },
            { icon: "📚", text: "CBSE Affiliated" },
            { icon: "🏛️", text: "Est. 1999" },
          ].map((item) => (
            <div key={item.text} className="footer-contact-item">
              <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
              <span className="footer-contact-text">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span style={{ fontSize: 14, color: "rgba(255,255,255,0.3)" }}>© 2026 Deeksha Public School. All rights reserved.</span>
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", letterSpacing: 0.5 }}>
          Designed & Developed by{" "}
          <a href="mailto:akramalam7544@gmail.com"
            style={{ color: "#c8973a", textDecoration: "underline", textUnderlineOffset: 3, letterSpacing: 0.5, fontWeight: 600, cursor: "pointer" }}>
            Akram Alam
          </a>
        </span>
      </div>
    </footer>
  );
}