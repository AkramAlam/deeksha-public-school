import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/ui/PageHero";
import FadeIn from "../components/ui/FadeIn";

const NEWS = [
  {
    id: 1,
    img: "/gallery/photo-72.jpg",
    paper: "Punjab Kesari",
    date: "13 May 2023",
    edition: "Faridabad Kesari, Page No. 5",
    title: "दीक्षा पब्लिक स्कूल का परिणाम रहा शत प्रतिशत",
    titleEn: "Deeksha Public School achieves 100% Result",
    desc: "Class 12 CBSE results declared — Deeksha Public School campus filled with joy. All 22 students passed. Miss Deepanshi topped Commerce stream with 96% marks. Master Nishant secured second position with 89%. Five students scored above 80%.",
    tag: "Academic Excellence",
    color: "#c8973a",
  },
  {
    id: 2,
    img: "/gallery/photo-73.jpg",
    paper: "Pioneer",
    date: "1 December 2019",
    edition: "Haryana Edition, Faridabad, Page 3",
    title: "दीक्षा स्कूल में विज्ञान और कला कौशल प्रदर्शनी आयोजित",
    titleEn: "Science & Art Skills Exhibition Organised at Deeksha School",
    desc: "A Science and Art Skills Exhibition was organised at Deeksha Public School, Sector 91. Students presented excellent models on water conservation, environment protection, Chandrayaan-2, bio gas, and solar power systems under the guidance of teachers.",
    tag: "Science Exhibition",
    color: "#2d6a9f",
  },
  {
    id: 3,
    img: "/gallery/photo-74.jpg",
    paper: "Daily News",
    date: "2019",
    edition: "Faridabad Edition",
    title: "दीक्षा पब्लिक स्कूल का परिणाम रहा शानदार",
    titleEn: "Deeksha Public School achieves Brilliant Results",
    desc: "Deeksha Public School achieved 100% results in both Class 10th and 12th CBSE Board examinations, bringing great pride to the school. Pooja topped with 441/500 marks, Ankit Pandey secured second with 426/500, and Anand Jha third with 404/500.",
    tag: "Board Results",
    color: "#5a3d8a",
  },
  {
    id: 3,
    img: "/gallery/photo-74.jpg",
    paper: "Daily News",
    date: "2019",
    edition: "Faridabad Edition",
    title: "दीक्षा पब्लिक स्कूल का परिणाम रहा शानदार",
    titleEn: "Deeksha Public School achieves Brilliant Results",
    desc: "Deeksha Public School achieved 100% results in both Class 10th and 12th CBSE Board examinations, bringing great pride to the school. Pooja topped with 441/500 marks, Ankit Pandey secured second with 426/500, and Anand Jha third with 404/500.",
    tag: "Board Results",
    color: "#5a3d8a",
  },
  {
    id: 3,
    img: "/gallery/photo-74.jpg",
    paper: "Daily News",
    date: "2019",
    edition: "Faridabad Edition",
    title: "दीक्षा पब्लिक स्कूल का परिणाम रहा शानदार",
    titleEn: "Deeksha Public School achieves Brilliant Results",
    desc: "Deeksha Public School achieved 100% results in both Class 10th and 12th CBSE Board examinations, bringing great pride to the school. Pooja topped with 441/500 marks, Ankit Pandey secured second with 426/500, and Anand Jha third with 404/500.",
    tag: "Board Results",
    color: "#5a3d8a",
  },
  {
    id: 3,
    img: "/gallery/photo-74.jpg",
    paper: "Daily News",
    date: "2019",
    edition: "Faridabad Edition",
    title: "दीक्षा पब्लिक स्कूल का परिणाम रहा शानदार",
    titleEn: "Deeksha Public School achieves Brilliant Results",
    desc: "Deeksha Public School achieved 100% results in both Class 10th and 12th CBSE Board examinations, bringing great pride to the school. Pooja topped with 441/500 marks, Ankit Pandey secured second with 426/500, and Anand Jha third with 404/500.",
    tag: "Board Results",
    color: "#5a3d8a",
  },
  {
    id: 3,
    img: "/gallery/photo-74.jpg",
    paper: "Daily News",
    date: "2019",
    edition: "Faridabad Edition",
    title: "दीक्षा पब्लिक स्कूल का परिणाम रहा शानदार",
    titleEn: "Deeksha Public School achieves Brilliant Results",
    desc: "Deeksha Public School achieved 100% results in both Class 10th and 12th CBSE Board examinations, bringing great pride to the school. Pooja topped with 441/500 marks, Ankit Pandey secured second with 426/500, and Anand Jha third with 404/500.",
    tag: "Board Results",
    color: "#5a3d8a",
  },
  {
    id: 3,
    img: "/gallery/photo-74.jpg",
    paper: "Daily News",
    date: "2019",
    edition: "Faridabad Edition",
    title: "दीक्षा पब्लिक स्कूल का परिणाम रहा शानदार",
    titleEn: "Deeksha Public School achieves Brilliant Results",
    desc: "Deeksha Public School achieved 100% results in both Class 10th and 12th CBSE Board examinations, bringing great pride to the school. Pooja topped with 441/500 marks, Ankit Pandey secured second with 426/500, and Anand Jha third with 404/500.",
    tag: "Board Results",
    color: "#5a3d8a",
  },
  {
    id: 3,
    img: "/gallery/photo-74.jpg",
    paper: "Daily News",
    date: "2019",
    edition: "Faridabad Edition",
    title: "दीक्षा पब्लिक स्कूल का परिणाम रहा शानदार",
    titleEn: "Deeksha Public School achieves Brilliant Results",
    desc: "Deeksha Public School achieved 100% results in both Class 10th and 12th CBSE Board examinations, bringing great pride to the school. Pooja topped with 441/500 marks, Ankit Pandey secured second with 426/500, and Anand Jha third with 404/500.",
    tag: "Board Results",
    color: "#5a3d8a",
  },
  {
    id: 3,
    img: "/gallery/photo-74.jpg",
    paper: "Daily News",
    date: "2019",
    edition: "Faridabad Edition",
    title: "दीक्षा पब्लिक स्कूल का परिणाम रहा शानदार",
    titleEn: "Deeksha Public School achieves Brilliant Results",
    desc: "Deeksha Public School achieved 100% results in both Class 10th and 12th CBSE Board examinations, bringing great pride to the school. Pooja topped with 441/500 marks, Ankit Pandey secured second with 426/500, and Anand Jha third with 404/500.",
    tag: "Board Results",
    color: "#5a3d8a",
  },
  {
    id: 3,
    img: "/gallery/photo-74.jpg",
    paper: "Daily News",
    date: "2019",
    edition: "Faridabad Edition",
    title: "दीक्षा पब्लिक स्कूल का परिणाम रहा शानदार",
    titleEn: "Deeksha Public School achieves Brilliant Results",
    desc: "Deeksha Public School achieved 100% results in both Class 10th and 12th CBSE Board examinations, bringing great pride to the school. Pooja topped with 441/500 marks, Ankit Pandey secured second with 426/500, and Anand Jha third with 404/500.",
    tag: "Board Results",
    color: "#5a3d8a",
  },
  {
    id: 3,
    img: "/gallery/photo-74.jpg",
    paper: "Daily News",
    date: "2019",
    edition: "Faridabad Edition",
    title: "दीक्षा पब्लिक स्कूल का परिणाम रहा शानदार",
    titleEn: "Deeksha Public School achieves Brilliant Results",
    desc: "Deeksha Public School achieved 100% results in both Class 10th and 12th CBSE Board examinations, bringing great pride to the school. Pooja topped with 441/500 marks, Ankit Pandey secured second with 426/500, and Anand Jha third with 404/500.",
    tag: "Board Results",
    color: "#5a3d8a",
  },
  {
    id: 3,
    img: "/gallery/photo-74.jpg",
    paper: "Daily News",
    date: "2019",
    edition: "Faridabad Edition",
    title: "दीक्षा पब्लिक स्कूल का परिणाम रहा शानदार",
    titleEn: "Deeksha Public School achieves Brilliant Results",
    desc: "Deeksha Public School achieved 100% results in both Class 10th and 12th CBSE Board examinations, bringing great pride to the school. Pooja topped with 441/500 marks, Ankit Pandey secured second with 426/500, and Anand Jha third with 404/500.",
    tag: "Board Results",
    color: "#5a3d8a",
  },
  {
    id: 3,
    img: "/gallery/photo-74.jpg",
    paper: "Daily News",
    date: "2019",
    edition: "Faridabad Edition",
    title: "दीक्षा पब्लिक स्कूल का परिणाम रहा शानदार",
    titleEn: "Deeksha Public School achieves Brilliant Results",
    desc: "Deeksha Public School achieved 100% results in both Class 10th and 12th CBSE Board examinations, bringing great pride to the school. Pooja topped with 441/500 marks, Ankit Pandey secured second with 426/500, and Anand Jha third with 404/500.",
    tag: "Board Results",
    color: "#5a3d8a",
  },
  {
    id: 3,
    img: "/gallery/photo-74.jpg",
    paper: "Daily News",
    date: "2019",
    edition: "Faridabad Edition",
    title: "दीक्षा पब्लिक स्कूल का परिणाम रहा शानदार",
    titleEn: "Deeksha Public School achieves Brilliant Results",
    desc: "Deeksha Public School achieved 100% results in both Class 10th and 12th CBSE Board examinations, bringing great pride to the school. Pooja topped with 441/500 marks, Ankit Pandey secured second with 426/500, and Anand Jha third with 404/500.",
    tag: "Board Results",
    color: "#5a3d8a",
  },
  {
    id: 3,
    img: "/gallery/photo-74.jpg",
    paper: "Daily News",
    date: "2019",
    edition: "Faridabad Edition",
    title: "दीक्षा पब्लिक स्कूल का परिणाम रहा शानदार",
    titleEn: "Deeksha Public School achieves Brilliant Results",
    desc: "Deeksha Public School achieved 100% results in both Class 10th and 12th CBSE Board examinations, bringing great pride to the school. Pooja topped with 441/500 marks, Ankit Pandey secured second with 426/500, and Anand Jha third with 404/500.",
    tag: "Board Results",
    color: "#5a3d8a",
  },
  {
    id: 3,
    img: "/gallery/photo-74.jpg",
    paper: "Daily News",
    date: "2019",
    edition: "Faridabad Edition",
    title: "दीक्षा पब्लिक स्कूल का परिणाम रहा शानदार",
    titleEn: "Deeksha Public School achieves Brilliant Results",
    desc: "Deeksha Public School achieved 100% results in both Class 10th and 12th CBSE Board examinations, bringing great pride to the school. Pooja topped with 441/500 marks, Ankit Pandey secured second with 426/500, and Anand Jha third with 404/500.",
    tag: "Board Results",
    color: "#5a3d8a",
  },
  {
    id: 3,
    img: "/gallery/photo-74.jpg",
    paper: "Daily News",
    date: "2019",
    edition: "Faridabad Edition",
    title: "दीक्षा पब्लिक स्कूल का परिणाम रहा शानदार",
    titleEn: "Deeksha Public School achieves Brilliant Results",
    desc: "Deeksha Public School achieved 100% results in both Class 10th and 12th CBSE Board examinations, bringing great pride to the school. Pooja topped with 441/500 marks, Ankit Pandey secured second with 426/500, and Anand Jha third with 404/500.",
    tag: "Board Results",
    color: "#5a3d8a",
  },
];

export default function MediaCoveragePage() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <style>{`
        .media-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 28px; max-width: 1200px; margin: 0 auto; }
        @media (max-width: 900px) { .media-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 520px) { .media-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      <PageHero tag="PRESS & MEDIA" title="Media" highlight="Coverage"
        subtitle="Recognitions, achievements and milestones of Deeksha Public School covered by leading newspapers." />

      {/* Intro */}
      <section style={{ background: "#f8f5f0", padding: "60px 24px 20px" }}>
        <FadeIn>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: "clamp(17px,1.8vw,20px)", color: "#4a3f35", lineHeight: 1.9, fontWeight: 300 }}>
              Deeksha Public School has been consistently recognized by leading newspapers for its <strong style={{ color: "#1e3a5f" }}>academic excellence, student achievements, and innovative activities</strong>. Here is a glimpse of our media presence.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* News Cards Grid */}
      <section style={{ background: "#f8f5f0", padding: "50px 24px 80px" }}>
        <div className="media-grid">
          {NEWS.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.1}>
              <motion.div onClick={() => setSelected(item)}
                whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(0,0,0,0.13)" }}
                style={{ background: "white", borderRadius: 20, overflow: "hidden", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>

                {/* Newspaper image */}
                <div style={{ height: 220, position: "relative", overflow: "hidden", background: "#f0ebe3" }}>
                  <img src={item.img} alt={item.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(transparent 55%, rgba(0,0,0,0.65))" }} />
                  {/* Tag */}
                  <div style={{ position: "absolute", top: 14, left: 14, background: item.color, color: "white", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 100, letterSpacing: 1 }}>
                    {item.tag}
                  </div>
                  {/* Paper name bottom */}
                  <div style={{ position: "absolute", bottom: 14, left: 16, right: 16 }}>
                    <div style={{ fontSize: 13, color: "#c8973a", fontWeight: 700, letterSpacing: 1 }}>{item.paper}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>{item.date}</div>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: "20px 22px" }}>
                  <div style={{ fontSize: 11, color: "#999", marginBottom: 8, letterSpacing: 0.5 }}>{item.edition}</div>
                  <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(15px,1.5vw,17px)", fontWeight: 700, color: "#1a1612", marginBottom: 6, lineHeight: 1.4 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "#6b5e53", fontStyle: "italic", marginBottom: 10 }}>{item.titleEn}</p>
                  <p style={{ fontSize: 14, color: "#6b5e53", lineHeight: 1.7, fontWeight: 300 }}>
                    {item.desc.slice(0, 110)}...
                  </p>
                  <div style={{ marginTop: 14, fontSize: 13, color: "#c8973a", fontWeight: 600 }}>Read More →</div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.9)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
            <motion.div initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.88, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{ background: "white", borderRadius: 24, overflow: "hidden", maxWidth: 780, width: "100%", boxShadow: "0 40px 100px rgba(0,0,0,0.5)", maxHeight: "92vh", overflowY: "auto" }}>

              {/* Full newspaper image */}
              <div style={{ background: "#f0ebe3", display: "flex", justifyContent: "center", alignItems: "center", padding: 20 }}>
                <img src={selected.img} alt={selected.title}
                  style={{ maxWidth: "100%", maxHeight: "55vh", width: "auto", height: "auto", borderRadius: 12, boxShadow: "0 8px 30px rgba(0,0,0,0.2)" }} />
              </div>

              <div style={{ padding: "28px 32px" }}>
                {/* Paper & date */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
                  <span style={{ background: selected.color, color: "white", fontSize: 12, fontWeight: 700, padding: "5px 14px", borderRadius: 100, letterSpacing: 1 }}>{selected.tag}</span>
                  <span style={{ fontSize: 14, color: "#c8973a", fontWeight: 700 }}>{selected.paper}</span>
                  <span style={{ fontSize: 13, color: "#999" }}>· {selected.date}</span>
                  <span style={{ fontSize: 12, color: "#bbb" }}>{selected.edition}</span>
                </div>

                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(20px,2.5vw,26px)", fontWeight: 700, color: "#1a1612", marginBottom: 6, lineHeight: 1.4 }}>
                  {selected.title}
                </h2>
                <p style={{ fontSize: 15, color: "#888", fontStyle: "italic", marginBottom: 18 }}>{selected.titleEn}</p>
                <p style={{ fontSize: 17, color: "#4a3f35", lineHeight: 1.9, fontWeight: 300, marginBottom: 24 }}>{selected.desc}</p>

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