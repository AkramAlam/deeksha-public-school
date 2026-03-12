import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../../data/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-desktop { display: flex; gap: 40px; align-items: center; }
        .nav-hamburger { display: none; flex-direction: column; gap: 6px; background: none; border: none; cursor: pointer; padding: 8px; }
        @media (max-width: 1024px) { .nav-desktop { gap: 28px; } }
        @media (max-width: 900px) { .nav-desktop { display: none !important; } .nav-hamburger { display: flex !important; } }
        @media (max-width: 480px) { .nav-bar { padding: 14px 18px !important; } }
      `}</style>

      <motion.nav className="nav-bar"
        initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          padding: scrolled ? "18px 48px" : "26px 48px",
          background: scrolled ? "rgba(248,245,240,0.97)" : "rgba(30,58,95,0.5)",
          backdropFilter: "blur(20px)",
          boxShadow: scrolled ? "0 1px 40px rgba(0,0,0,0.08)" : "none",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          transition: "all 0.4s ease",
          borderBottom: scrolled ? "1px solid rgba(200,151,58,0.15)" : "none",
        }}>

        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}>
          <motion.div whileHover={{ scale: 1.02 }} style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img src="/logo.png" alt="Deeksha Public School Logo"
              style={{ width: 58, height: 58, objectFit: "contain", borderRadius: "50%", background: "white", padding: 3, boxShadow: "0 4px 15px rgba(200,151,58,0.35)", flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: 1.5, lineHeight: 1.2, fontFamily: "'Playfair Display', serif", color: scrolled ? "#1a1612" : "white", transition: "color 0.4s" }}>DEEKSHA</div>
              <div style={{ fontSize: 11, color: "#c8973a", letterSpacing: 3.5, fontWeight: 500 }}>PUBLIC SCHOOL</div>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="nav-desktop">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} to={link.href} style={{ textDecoration: "none" }}>
              <motion.span
                style={{
                  fontSize: 17, fontWeight: 500,
                  color: pathname === link.href ? "#c8973a" : scrolled ? "#1a1612" : "rgba(255,255,255,0.9)",
                  letterSpacing: 0.3, position: "relative", paddingBottom: 3,
                  transition: "color 0.3s", display: "block",
                }}
                whileHover={{ color: "#c8973a" }}>
                {link.label}
                {pathname === link.href && (
                  <motion.div layoutId="activeNav" style={{ position: "absolute", bottom: -2, left: 0, right: 0, height: 2, background: "#c8973a", borderRadius: 1 }} />
                )}
              </motion.span>
            </Link>
          ))}
          <Link to="/enroll" style={{ textDecoration: "none" }}>
            <motion.span
              style={{ background: "linear-gradient(135deg, #c8973a, #e8b96a)", color: "white", padding: "13px 28px", borderRadius: 100, fontSize: 17, fontWeight: 500, display: "block", boxShadow: "0 4px 15px rgba(200,151,58,0.3)", whiteSpace: "nowrap" }}
              whileHover={{ scale: 1.05, boxShadow: "0 6px 25px rgba(200,151,58,0.5)" }} whileTap={{ scale: 0.97 }}>
              Enroll Now
            </motion.span>
          </Link>
        </div>

        {/* Hamburger */}
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <motion.div animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} style={{ width: 28, height: 2.5, background: scrolled ? "#1a1612" : "white", borderRadius: 2 }} />
          <motion.div animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} style={{ width: 20, height: 2.5, background: "#c8973a", borderRadius: 2 }} />
          <motion.div animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} style={{ width: 28, height: 2.5, background: scrolled ? "#1a1612" : "white", borderRadius: 2 }} />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            style={{ position: "fixed", top: 80, left: 0, right: 0, zIndex: 99, background: "rgba(248,245,240,0.99)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(200,151,58,0.2)", overflow: "hidden" }}>
            {NAV_LINKS.map((link, i) => (
              <Link key={link.label} to={link.href} onClick={() => setMenuOpen(false)} style={{ textDecoration: "none" }}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                  style={{ display: "block", padding: "18px 28px", fontSize: 18, borderBottom: "1px solid rgba(200,151,58,0.08)", fontWeight: pathname === link.href ? 600 : 400, color: pathname === link.href ? "#c8973a" : "#1a1612" }}>
                  {link.label}
                </motion.div>
              </Link>
            ))}
            <div style={{ padding: "18px 28px 28px" }}>
              <Link to="/enroll" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none" }}>
                <div style={{ textAlign: "center", background: "linear-gradient(135deg, #c8973a, #e8b96a)", color: "white", padding: "16px", borderRadius: 12, fontSize: 18, fontWeight: 500 }}>
                  Enroll Now →
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}