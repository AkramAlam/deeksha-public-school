import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/ui/PageHero";
import FadeIn from "../components/ui/FadeIn";

// ── A. General Information ──
const GENERAL_INFO = [
  { sr: 1,  label: "Name of the School",                value: "Deeksha Public School" },
  { sr: 2,  label: "Affiliation No.",                   value: "531291" },
  { sr: 3,  label: "School Code",                       value: "41269" },
  { sr: 4,  label: "Complete Address with Pin Code",    value: "Sector-91, Sehatpur, Faridabad, Haryana – 121013" },
  { sr: 5,  label: "Principal Name & Qualification",    value: "Mrs. Kavita — M.Com, B.Ed" },
  { sr: 6,  label: "School Email ID",                   value: "deekshapublicschool91@gmail.com" },
  { sr: 7,  label: "Contact Details",                   value: "8527850099, 8587043528" },
];

// ── B. Documents ──
const DOCUMENTS = [
  { name: "Affiliation Letter",                  link: "https://www.deekshapublicschool.in/wp-content/uploads/2023/09/Letter-_-SARAS-4.0-1.pdf" },
  { name: "Societies Certificate",               link: "https://www.deekshapublicschool.in/wp-content/uploads/2023/06/society.pdf" },
  { name: "NOC",                                 link: "https://www.deekshapublicschool.in/wp-content/uploads/2023/06/NOC-2.pdf" },
  { name: "Recognition Certificate",             link: "https://www.deekshapublicschool.in/wp-content/uploads/2025/06/Recognition-letter-2.pdf" },
  { name: "Building Safety Certificate",         link: "https://www.deekshapublicschool.in/wp-content/uploads/2025/06/Building-Safety-Certificate-1.pdf" },
  { name: "Fire Safety Certificate",             link: "https://www.deekshapublicschool.in/wp-content/uploads/2023/06/fire-noc.pdf" },
  { name: "DEO Certificate",                     link: "https://www.deekshapublicschool.in/wp-content/uploads/2023/06/SELF-DECLARATION.pdf" },
  { name: "Water, Health & Sanitation Certificate", link: "https://www.deekshapublicschool.in/wp-content/uploads/2025/06/Hygiene-Certificate.pdf" },
];

// ── C. Results & Academics ──
const ACADEMICS = [
  { name: "Fee Structure of the School",              link: "https://www.deekshapublicschool.in/wp-content/uploads/2025/04/FEE-STRUCTURE-2025-2026-scaled.jpg" },
  { name: "Annual Academic Calendar",                 link: "https://www.deekshapublicschool.in/wp-content/uploads/2025/06/Annual-academic-calender.pdf" },
  { name: "School Management Committee",              link: "https://www.deekshapublicschool.in/wp-content/uploads/2023/06/smc.pdf" },
  { name: "Parent Teacher Association",               link: "https://www.deekshapublicschool.in/wp-content/uploads/2023/06/PTA.pdf" },
  { name: "Last Three Year Board Exam Results",       link: "https://www.deekshapublicschool.in/wp-content/uploads/2025/06/board-last-three-year-result.pdf" },
  { name: "Transfer Certificate Sample",              link: "https://www.deekshapublicschool.in/wp-content/uploads/2023/05/T.C.pdf" },
  { name: "Self Affidavit of School",                 link: "https://www.deekshapublicschool.in/wp-content/uploads/2023/05/affidavit.pdf" },
  { name: "Annual Report",                            link: "https://www.deekshapublicschool.in/wp-content/uploads/2023/05/ANNUAL-REPORT1.pdf" },
  { name: "Self Declaration",                         link: "https://www.deekshapublicschool.in/wp-content/uploads/2023/05/Adobe-Scan-30-May-2023-3.pdf" },
];

// ── D. Staff ──
const STAFF_INFO = [
  { sr: 1,  label: "Principal",                  value: "Mrs. Kavita" },
  { sr: 2,  label: "Total No. of Teachers",      value: "38" },
  { sr: 3,  label: "PGT",                        value: "9" },
  { sr: 4,  label: "TGT",                        value: "13" },
  { sr: 5,  label: "PRT",                        value: "6" },
  { sr: 6,  label: "PTI",                        value: "1" },
  { sr: 7,  label: "Librarian",                  value: "1" },
  { sr: 8,  label: "NTT",                        value: "5" },
  { sr: 9,  label: "Teachers Section Ratio",     value: "1 : 1.5" },
  { sr: 10, label: "Special Educator",           value: "Chanda" },
  { sr: 11, label: "Counsellor & Wellness",      value: "Chanda" },
];

// ── E. Infrastructure ──
const INFRA_INFO = [
  { sr: 1, label: "Total Campus Area",            value: "Building: 1517 sq.m | Playground: 6577 sq.m" },
  { sr: 2, label: "No. & Size of Classrooms",     value: "24 Classrooms — 46.52 sq.m each" },
  { sr: 3, label: "No. & Size of Laboratories",   value: "5 Labs — 55.789 sq.m each" },
  { sr: 4, label: "No. & Size of Computer Labs",  value: "1 Lab — 55.789 sq.m" },
  { sr: 5, label: "No. & Size of Library",        value: "1 Library — 122.632 sq.m" },
  { sr: 6, label: "Internet Facility",            value: "Yes ✓" },
  { sr: 7, label: "No. of Girls Toilet",          value: "16" },
  { sr: 8, label: "No. of Boys Toilet",           value: "16" },
  { sr: 9, label: "YouTube Inspection Video",     value: "https://youtu.be/s0UxNMLf90Y", isLink: true },
];

// ── Book List ──
const BOOKS = [
  { sr: 1,  class: "Nursery", link: "https://www.deekshapublicschool.in/wp-content/uploads/2023/05/NURSERY.pdf" },
  { sr: 2,  class: "L.K.G",  link: "https://www.deekshapublicschool.in/wp-content/uploads/2023/05/L.K.G.pdf" },
  { sr: 3,  class: "U.K.G",  link: "https://www.deekshapublicschool.in/wp-content/uploads/2023/05/U.K.G.pdf" },
  { sr: 4,  class: "1st",    link: "https://www.deekshapublicschool.in/wp-content/uploads/2023/05/I.pdf" },
  { sr: 5,  class: "2nd",    link: "https://www.deekshapublicschool.in/wp-content/uploads/2023/05/II.pdf" },
  { sr: 6,  class: "3rd",    link: "https://www.deekshapublicschool.in/wp-content/uploads/2023/05/III.pdf" },
  { sr: 7,  class: "4th",    link: "https://www.deekshapublicschool.in/wp-content/uploads/2023/05/IV.pdf" },
  { sr: 8,  class: "5th",    link: "https://www.deekshapublicschool.in/wp-content/uploads/2023/05/v.pdf" },
  { sr: 9,  class: "6th",    link: "https://www.deekshapublicschool.in/wp-content/uploads/2023/05/vi.pdf" },
  { sr: 10, class: "7th",    link: "https://www.deekshapublicschool.in/wp-content/uploads/2023/05/vii.pdf" },
  { sr: 11, class: "8th",    link: "https://www.deekshapublicschool.in/wp-content/uploads/2023/05/viii.pdf" },
  { sr: 12, class: "9th",    link: "https://www.deekshapublicschool.in/wp-content/uploads/2023/05/IX.pdf" },
  { sr: 13, class: "10th",   link: "https://www.deekshapublicschool.in/wp-content/uploads/2023/05/X.pdf" },
  { sr: 14, class: "11th",   link: null },
  { sr: 15, class: "12th",   link: null },
];

const SECTIONS = [
  { id: "general",   label: "A. General Information",  icon: "🏫" },
  { id: "documents", label: "B. Documents",             icon: "📄" },
  { id: "academics", label: "C. Results & Academics",   icon: "🎓" },
  { id: "staff",     label: "D. Staff (Teaching)",      icon: "👨‍🏫" },
  { id: "infra",     label: "E. Infrastructure",        icon: "🏢" },
  { id: "books",     label: "Book List",                icon: "📚" },
];

function SectionHeading({ icon, title }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
      <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg,#1e3a5f,#2d5f8a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
        {icon}
      </div>
      <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(20px,2.5vw,26px)", fontWeight: 700, color: "#1e3a5f" }}>
        {title}
      </h2>
      <div style={{ flex: 1, height: 2, background: "linear-gradient(90deg,#c8973a33,transparent)" }} />
    </div>
  );
}

function InfoTable({ rows }) {
  return (
    <div style={{ background: "white", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: 40 }}>
      {rows.map((row, i) => (
        <div key={row.sr} style={{ display: "flex", gap: 0, borderBottom: i < rows.length - 1 ? "1px solid #f0ebe3" : "none" }}>
          <div style={{ width: 52, background: i % 2 === 0 ? "#f8f5f0" : "white", display: "flex", alignItems: "center", justifyContent: "center", padding: "14px 0", flexShrink: 0, borderRight: "1px solid #f0ebe3" }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#c8973a" }}>{row.sr}</span>
          </div>
          <div style={{ flex: 1, padding: "14px 20px", background: i % 2 === 0 ? "#f8f5f0" : "white", borderRight: "1px solid #f0ebe3" }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: "#4a3f35", letterSpacing: 0.3 }}>{row.label}</span>
          </div>
          <div style={{ flex: 2, padding: "14px 20px", background: i % 2 === 0 ? "#f8f5f0" : "white" }}>
            {row.isLink ? (
              <a href={row.value} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: 14, color: "#2d6a9f", textDecoration: "underline", wordBreak: "break-all" }}>
                {row.value}
              </a>
            ) : (
              <span style={{ fontSize: 14, color: "#1a1612", fontWeight: 500 }}>{row.value}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function DocGrid({ docs }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: 14, marginBottom: 40 }}>
      {docs.map((doc, i) => (
        <FadeIn key={doc.name} delay={i * 0.04}>
          <motion.div whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.1)" }}
            style={{ background: "white", borderRadius: 14, padding: "18px 20px", boxShadow: "0 4px 16px rgba(0,0,0,0.06)", borderLeft: "3px solid #c8973a", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 22 }}>📋</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#1a1612", lineHeight: 1.4 }}>{doc.name}</span>
            </div>
            <a href={doc.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", flexShrink: 0 }}>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                style={{ background: "linear-gradient(135deg,#c8973a,#e8b96a)", color: "white", border: "none", padding: "6px 16px", borderRadius: 100, fontSize: 12, cursor: "pointer", fontWeight: 600 }}>
                View
              </motion.button>
            </a>
          </motion.div>
        </FadeIn>
      ))}
    </div>
  );
}

export default function MandatoryDisclosurePage() {
  const [activeSection, setActiveSection] = useState("general");

  return (
    <div>
      <style>{`
        .disc-tabs { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:40px; }
        @media (max-width:600px) { .disc-tabs { gap:6px; } }
      `}</style>

      <PageHero
        tag="CBSE COMPLIANCE"
        title="Mandatory Public"
        highlight="Disclosure"
        subtitle="All mandatory information as per CBSE SARAS 6.0 norms for Deeksha Public School, Faridabad."
      />

      <section style={{ background: "#f8f5f0", padding: "60px 24px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Section Tabs */}
          <FadeIn>
            <div className="disc-tabs">
              {SECTIONS.map((s) => (
                <motion.button key={s.id} onClick={() => setActiveSection(s.id)}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  style={{
                    padding: "9px 18px", borderRadius: 100, fontSize: 13, fontWeight: 600,
                    cursor: "pointer", border: "none", display: "flex", alignItems: "center", gap: 6,
                    background: activeSection === s.id ? "linear-gradient(135deg,#1e3a5f,#2d5f8a)" : "white",
                    color: activeSection === s.id ? "white" : "#6b5e53",
                    boxShadow: activeSection === s.id ? "0 4px 16px rgba(30,58,95,0.3)" : "0 2px 8px rgba(0,0,0,0.07)",
                  }}>
                  <span>{s.icon}</span> {s.label}
                </motion.button>
              ))}
            </div>
          </FadeIn>

          <AnimatePresence mode="wait">
            <motion.div key={activeSection} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}>

              {/* A. General Info */}
              {activeSection === "general" && (
                <div>
                  <SectionHeading icon="🏫" title="A. General Information" />
                  <InfoTable rows={GENERAL_INFO} />
                </div>
              )}

              {/* B. Documents */}
              {activeSection === "documents" && (
                <div>
                  <SectionHeading icon="📄" title="B. Documents & Information" />
                  <DocGrid docs={DOCUMENTS} />
                </div>
              )}

              {/* C. Academics */}
              {activeSection === "academics" && (
                <div>
                  <SectionHeading icon="🎓" title="C. Results & Academics" />
                  <DocGrid docs={ACADEMICS} />
                </div>
              )}

              {/* D. Staff */}
              {activeSection === "staff" && (
                <div>
                  <SectionHeading icon="👨‍🏫" title="D. Staff (Teaching)" />
                  <InfoTable rows={STAFF_INFO} />
                </div>
              )}

              {/* E. Infrastructure */}
              {activeSection === "infra" && (
                <div>
                  <SectionHeading icon="🏢" title="E. School Infrastructure" />
                  <InfoTable rows={INFRA_INFO} />
                </div>
              )}

              {/* Book List */}
              {activeSection === "books" && (
                <div>
                  <SectionHeading icon="📚" title="Book List — Class-wise" />
                  <div style={{ background: "white", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                    {/* Table Header */}
                    <div style={{ display: "grid", gridTemplateColumns: "60px 1fr 1fr", background: "linear-gradient(135deg,#1e3a5f,#2d5f8a)", padding: "14px 20px" }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: 1 }}>SR.</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: 1 }}>CLASS</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: 1 }}>DOWNLOAD</span>
                    </div>
                    {BOOKS.map((b, i) => (
                      <motion.div key={b.sr} whileHover={{ background: "#fdf6e8" }}
                        style={{ display: "grid", gridTemplateColumns: "60px 1fr 1fr", padding: "13px 20px", borderBottom: i < BOOKS.length - 1 ? "1px solid #f0ebe3" : "none", alignItems: "center", background: i % 2 === 0 ? "#faf8f5" : "white" }}>
                        <span style={{ fontSize: 13, color: "#c8973a", fontWeight: 700 }}>{b.sr}</span>
                        <span style={{ fontSize: 15, fontWeight: 600, color: "#1a1612", fontFamily: "'Playfair Display',serif" }}>{b.class}</span>
                        {b.link ? (
                          <a href={b.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                              style={{ background: "linear-gradient(135deg,#c8973a,#e8b96a)", color: "white", border: "none", padding: "6px 18px", borderRadius: 100, fontSize: 12, cursor: "pointer", fontWeight: 600 }}>
                              📥 Download
                            </motion.button>
                          </a>
                        ) : (
                          <button disabled style={{ background: "#f0ebe3", color: "#bbb", border: "none", padding: "6px 18px", borderRadius: 100, fontSize: 12, cursor: "not-allowed", fontWeight: 600 }}>
                            Coming Soon
                          </button>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}