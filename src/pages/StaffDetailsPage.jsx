import { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "../components/ui/PageHero";
import FadeIn from "../components/ui/FadeIn";

const STAFF = [
  { sr: 1,  name: "Mrs. Kavita",              designation: "Principal",        category: "Principal",  trained: true },
  { sr: 2,  name: "Mr. Manoj Kumar Pathak",   designation: "PGT",              category: "PGT",        trained: true },
  { sr: 3,  name: "Mr. Yatendra Kumar Giri",  designation: "PGT",              category: "PGT",        trained: true },
  { sr: 4,  name: "Mrs. Rakshita",            designation: "PGT",              category: "PGT",        trained: true },
  { sr: 5,  name: "Mrs. Pooja Rani",          designation: "PGT",              category: "PGT",        trained: true },
  { sr: 6,  name: "Mr. Lalit Singh",          designation: "PGT",              category: "PGT",        trained: true },
  { sr: 7,  name: "Mr. Sushil Singh",         designation: "PGT",              category: "PGT",        trained: true },
  { sr: 8,  name: "Mrs. Mickey",              designation: "PGT",              category: "PGT",        trained: true },
  { sr: 9,  name: "Mrs. Shradha",             designation: "PGT",              category: "PGT",        trained: true },
  { sr: 10, name: "Mrs. Pratima Thakur",      designation: "PGT",              category: "PGT",        trained: true },
  { sr: 11, name: "Mr. Vijay",                designation: "TGT",              category: "TGT",        trained: true },
  { sr: 12, name: "Ms. Ankita",               designation: "TGT",              category: "TGT",        trained: true },
  { sr: 13, name: "Ms. Samiksha Kalra",       designation: "TGT",              category: "TGT",        trained: true },
  { sr: 14, name: "Mrs. Deepti Pandey",       designation: "TGT",              category: "TGT",        trained: true },
  { sr: 15, name: "Ms. Kirti",                designation: "TGT",              category: "TGT",        trained: true },
  { sr: 16, name: "Ms. Sakshi Choubey",       designation: "TGT",              category: "TGT",        trained: true },
  { sr: 17, name: "Ms. Preeti",               designation: "TGT",              category: "TGT",        trained: true },
  { sr: 18, name: "Mrs. Swaroop Rani Pandey", designation: "TGT",              category: "TGT",        trained: true },
  { sr: 19, name: "Mr. Ankit Kumar",          designation: "TGT",              category: "TGT",        trained: true },
  { sr: 20, name: "Ms. Neha Kumari",          designation: "TGT",              category: "TGT",        trained: true },
  { sr: 21, name: "Ms. Phoolmala",            designation: "TGT",              category: "TGT",        trained: true },
  { sr: 22, name: "Ms. Rajnandini",           designation: "TGT",              category: "TGT",        trained: true },
  { sr: 23, name: "Ms. Himani",               designation: "TGT",              category: "TGT",        trained: true },
  { sr: 24, name: "Ms. Anu Talan",            designation: "PRT",              category: "PRT",        trained: true },
  { sr: 25, name: "Ms. Chanderkala",          designation: "PRT",              category: "PRT",        trained: true },
  { sr: 26, name: "Ms. Varsha",               designation: "PRT",              category: "PRT",        trained: true },
  { sr: 27, name: "Mrs. Lata",                designation: "PRT",              category: "PRT",        trained: true },
  { sr: 28, name: "Mrs. Renu",                designation: "PRT",              category: "PRT",        trained: true },
  { sr: 29, name: "Mrs. Mamta",               designation: "PRT",              category: "PRT",        trained: true },
  { sr: 30, name: "Ms. Pooja Kumari",         designation: "NTT",              category: "NTT",        trained: true },
  { sr: 31, name: "Mrs. Madhuri Jha",         designation: "NTT",              category: "NTT",        trained: true },
  { sr: 32, name: "Mrs. Geetanjali Gardner",  designation: "NTT",              category: "NTT",        trained: true },
  { sr: 33, name: "Mrs. Akanksha Pandey",     designation: "NTT",              category: "NTT",        trained: true },
  { sr: 34, name: "Ms. Pooja Yadav",          designation: "NTT",              category: "NTT",        trained: true },
  { sr: 35, name: "Mr. Vinod",                designation: "PTI",              category: "PTI",        trained: true },
  { sr: 36, name: "Mrs. Chanda",              designation: "Wellness Teacher", category: "Wellness",   trained: true },
  { sr: 37, name: "Ms. Renu Nagar",           designation: "Wellness Teacher", category: "Wellness",   trained: true },
  { sr: 38, name: "Mrs. Ratna Jha",           designation: "Librarian",        category: "Librarian",  trained: true },
];

const CATEGORY_COLORS = {
  Principal: { bg: "#c8973a", light: "#fdf6e8", text: "#7a5500" },
  PGT:       { bg: "#1e3a5f", light: "#e8eef5", text: "#1e3a5f" },
  TGT:       { bg: "#2d6a9f", light: "#e8f2fb", text: "#1a4f7a" },
  PRT:       { bg: "#5a3d8a", light: "#f0ebf8", text: "#3d2060" },
  NTT:       { bg: "#2d8a6a", light: "#e8f8f2", text: "#1a5c44" },
  PTI:       { bg: "#e05a2b", light: "#fdf0eb", text: "#9a3010" },
  Wellness:  { bg: "#d44f8a", light: "#faeef5", text: "#8a1f55" },
  Librarian: { bg: "#6b7c45", light: "#f0f4e8", text: "#3f4f1e" },
};

const CATEGORIES = ["All", "Principal", "PGT", "TGT", "PRT", "NTT", "PTI", "Wellness", "Librarian"];

const FULL_LABELS = {
  PGT: "Post Graduate Teacher",
  TGT: "Trained Graduate Teacher",
  PRT: "Primary Teacher",
  NTT: "Nursery Teacher Training",
  PTI: "Physical Training Instructor",
};

function getInitials(name) {
  return name.replace(/^(Mr\.|Mrs\.|Ms\.)\s+/i, "").split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
}

export default function StaffDetailsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = STAFF.filter(s => {
    const matchCat = activeCategory === "All" || s.category === activeCategory;
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.designation.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  // Stats
  const stats = CATEGORIES.slice(1).map(cat => ({ cat, count: STAFF.filter(s => s.category === cat).length })).filter(s => s.count > 0);

  return (
    <div>
      <style>{`
        .staff-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; max-width: 1200px; margin: 0 auto; }
        .filter-wrap { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; margin-bottom: 32px; }
        .stats-bar { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; max-width: 1000px; margin: 0 auto 50px; }
        @media (max-width: 1024px) { .staff-grid { grid-template-columns: repeat(3,1fr) !important; } .stats-bar { grid-template-columns: repeat(4,1fr) !important; } }
        @media (max-width: 768px)  { .staff-grid { grid-template-columns: repeat(2,1fr) !important; } .stats-bar { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px)  { .staff-grid { grid-template-columns: 1fr !important; } .stats-bar { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>

      <PageHero tag="OUR TEAM" title="Staff" highlight="Details"
        subtitle="Meet our dedicated team of trained educators committed to shaping young minds." />

      <section style={{ background: "#f8f5f0", padding: "60px 24px 80px" }}>

        {/* Stats bar */}
        {/* <FadeIn>
          <div className="stats-bar">
            {stats.map(({ cat, count }) => {
              const c = CATEGORY_COLORS[cat];
              return (
                <motion.div key={cat} whileHover={{ y: -4 }} onClick={() => setActiveCategory(cat)} style={{ background: "white", borderRadius: 16, padding: "18px 16px", textAlign: "center", cursor: "pointer", boxShadow: "0 4px 16px rgba(0,0,0,0.06)", borderTop: `4px solid ${c.bg}` }}>
                  <div style={{ fontSize: "clamp(24px,3vw,34px)", fontWeight: 700, color: c.bg, fontFamily: "'Playfair Display',serif" }}>{count}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#555", letterSpacing: 1.5, marginTop: 4 }}>{cat}</div>
                  {FULL_LABELS[cat] && <div style={{ fontSize: 10, color: "#999", marginTop: 2 }}>{FULL_LABELS[cat]}</div>}
                </motion.div>
              );
            })}
          </div>
        </FadeIn> */}

        {/* Search */}
        <FadeIn>
          <div style={{ maxWidth: 440, margin: "0 auto 28px" }}>
            <input value={search} onChange={e => setSearch(e.target.value)}
              placeholder="🔍  Search by name or designation..."
              style={{ width: "100%", padding: "12px 20px", borderRadius: 100, border: "2px solid #e8dfc8", fontSize: 15, outline: "none", background: "white", boxSizing: "border-box" }} />
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn>
          <div className="filter-wrap">
            {CATEGORIES.map(cat => (
              <motion.button key={cat} onClick={() => setActiveCategory(cat)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                style={{ padding: "8px 20px", borderRadius: 100, fontSize: 13, fontWeight: 600, cursor: "pointer", border: "none", letterSpacing: 0.5,
                  background: activeCategory === cat ? (CATEGORY_COLORS[cat]?.bg || "#1e3a5f") : "white",
                  color: activeCategory === cat ? "white" : "#6b5e53",
                  boxShadow: activeCategory === cat ? "0 4px 14px rgba(0,0,0,0.18)" : "0 2px 8px rgba(0,0,0,0.07)",
                }}>
                {cat} {cat !== "All" && `(${STAFF.filter(s => s.category === cat).length})`}
              </motion.button>
            ))}
          </div>
        </FadeIn>

        {/* Staff Cards */}
        <motion.div className="staff-grid" key={activeCategory + search} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          {filtered.map((s, i) => {
            const c = CATEGORY_COLORS[s.category];
            return (
              <FadeIn key={s.sr} delay={i * 0.04}>
                <motion.div whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(0,0,0,0.12)" }}
                  style={{ background: "white", borderRadius: 18, overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.07)", borderTop: `3px solid ${c.bg}` }}>
                  <div style={{ padding: "22px 18px 18px", textAlign: "center" }}>
                    {/* Avatar */}
                    <div style={{ width: 68, height: 68, borderRadius: "50%", background: `linear-gradient(135deg, ${c.bg}, ${c.bg}bb)`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", fontSize: 22, fontWeight: 700, color: "white", fontFamily: "'Playfair Display',serif", boxShadow: `0 4px 16px ${c.bg}44` }}>
                      {getInitials(s.name)}
                    </div>
                    {/* Sr no badge */}
                    <div style={{ position: "absolute" }} />
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(14px,1.5vw,16px)", fontWeight: 700, color: "#1a1612", marginBottom: 6, lineHeight: 1.3 }}>
                      {s.name}
                    </div>
                    <span style={{ display: "inline-block", background: c.light, color: c.text, fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 100, letterSpacing: 1, marginBottom: 8 }}>
                      {s.designation}
                    </span>
                    <div style={{ fontSize: 11, color: "#27ae60", fontWeight: 600, letterSpacing: 1 }}>
                      ✓ Trained
                    </div>
                  </div>
                  <div style={{ background: "#faf8f5", padding: "8px 18px", textAlign: "center", borderTop: "1px solid #f0ebe3" }}>
                    <span style={{ fontSize: 11, color: "#999" }}>Sr. No. {s.sr}</span>
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </motion.div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#999", fontSize: 18 }}>
            No staff found matching your search.
          </div>
        )}

        {/* Total count */}
        <FadeIn>
          <div style={{ textAlign: "center", marginTop: 40, fontSize: 15, color: "#999" }}>
            Showing <strong style={{ color: "#1e3a5f" }}>{filtered.length}</strong> of <strong style={{ color: "#1e3a5f" }}>{STAFF.length}</strong> staff members
          </div>
        </FadeIn>
      </section>
    </div>
  );
}