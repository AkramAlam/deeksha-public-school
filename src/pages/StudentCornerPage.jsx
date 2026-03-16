import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/ui/PageHero";
import FadeIn from "../components/ui/FadeIn";

const RESULTS = [
  { class: "Class X",   year: "2023-24", passRate: "98%", distinction: "24 Students", topScore: "98.4%" },
  { class: "Class XII", year: "2023-24", passRate: "96%", distinction: "18 Students", topScore: "97.2%" },
  { class: "Class X",   year: "2022-23", passRate: "97%", distinction: "21 Students", topScore: "97.8%" },
  { class: "Class XII", year: "2022-23", passRate: "95%", distinction: "15 Students", topScore: "96.6%" },
];

const HOMEWORK = [
  { class: "Class I-II",    subject: "English & Math",  due: "June 15, 2025", desc: "Creative writing, number worksheets and drawing activities." },
  { class: "Class III-V",   subject: "All Subjects",    due: "June 15, 2025", desc: "Project work on Nature, Math problems and Hindi essays." },
  { class: "Class VI-VIII", subject: "Science & SST",   due: "June 20, 2025", desc: "Science model, map work and chapter summaries." },
  { class: "Class IX-X",    subject: "All Subjects",    due: "June 20, 2025", desc: "Previous year question practice and concept revision." },
  { class: "Class XI-XII",  subject: "Core Subjects",   due: "June 22, 2025", desc: "Board exam preparation, sample papers and practical records." },
];

const DOWNLOADS = [
  { title:"Fee Structure 2025-26",  type:"IMAGE", icon:"💰", viewRoute:"/fee-structure", downloadLink:"/fee-structure.jpg", available:true  },
  { title:"Online Payment",         type:"BANK",  icon:"🏦", viewRoute:null,             downloadLink:null,                 available:true, isPayment:true },
  { title:"Admission Form",         type:"PDF",   icon:"📋", viewRoute:null,             downloadLink:null,                 available:false },
  { title:"Mandatory Disclosure",   type:"PDF",   icon:"📜", viewRoute:null,             downloadLink:null,                 available:false },
  { title:"Uniform Guidelines",     type:"PDF",   icon:"👕", viewRoute:null,             downloadLink:null,                 available:false },
  { title:"Syllabus 2025-26",       type:"PDF",   icon:"📚", viewRoute:null,             downloadLink:null,                 available:false },
];

const TABS = ["Results", "Holiday's Homework", "School Calendar", "Downloads"];

export default function StudentCornerPage() {
  const [activeTab, setActiveTab] = useState("Results");
  const [showPayment, setShowPayment] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <style>{`
        .tab-bar        { display:flex; gap:6px; margin-bottom:44px; background:white; padding:7px; border-radius:14px; box-shadow:0 4px 20px rgba(0,0,0,0.07); width:fit-content; flex-wrap:wrap; }
        .tab-btn        { padding:10px 20px; border-radius:10px; font-size:clamp(12px,1.3vw,13px); font-weight:500; cursor:pointer; border:none; transition:all 0.3s; white-space:nowrap; }
        .results-grid   { display:grid; grid-template-columns:repeat(2,1fr); gap:18px; }
        .dates-grid     { display:grid; grid-template-columns:repeat(2,1fr); gap:14px; }
        .downloads-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        @media (max-width:900px) {
          .dates-grid     { grid-template-columns:1fr !important; }
          .downloads-grid { grid-template-columns:repeat(2,1fr) !important; }
        }
        @media (max-width:600px) {
          .tab-bar      { width:100% !important; }
          .tab-btn      { flex:1; text-align:center; padding:10px 8px !important; }
          .results-grid { grid-template-columns:1fr !important; }
        }
        @media (max-width:400px) {
          .downloads-grid { grid-template-columns:1fr !important; }
        }
      `}</style>

      <PageHero
        tag="STUDENT CORNER"
        title="Resources"
        highlight="For Students"
        subtitle="Results, holiday homework, important dates and all resources — all in one place."
      />

      <section style={{ background:"#f8f5f0", padding:"clamp(40px,6vw,60px) clamp(20px,5vw,60px) clamp(60px,8vw,80px)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>

          {/* TABS */}
          <FadeIn>
            <div className="tab-bar">
              {TABS.map((tab) => (
                <button key={tab} className="tab-btn" onClick={() => setActiveTab(tab)}
                  style={{
                    background: activeTab === tab ? "linear-gradient(135deg,#1e3a5f,#2d5f8a)" : "transparent",
                    color:      activeTab === tab ? "white" : "#6b5e53",
                    boxShadow:  activeTab === tab ? "0 4px 15px rgba(30,58,95,0.3)" : "none",
                  }}>
                  {tab}
                </button>
              ))}
            </div>
          </FadeIn>

          <AnimatePresence mode="wait">

            {/* RESULTS */}
            {activeTab === "Results" && (
              <motion.div key="results" initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-20 }}>
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(22px,3vw,28px)", fontWeight:700, color:"#1a1612", marginBottom:24 }}>
                  Academic <em style={{ color:"#c8973a" }}>Results</em>
                </h3>
                <div className="results-grid">
                  {RESULTS.map((r, i) => (
                    <FadeIn key={`${r.class}-${r.year}`} delay={i * 0.08}>
                      <motion.div whileHover={{ y:-4, boxShadow:"0 20px 50px rgba(0,0,0,0.1)" }}
                        style={{ background:"white", borderRadius:18, padding:"clamp(20px,3vw,30px)", boxShadow:"0 4px 20px rgba(0,0,0,0.07)", borderTop:"3px solid #c8973a" }}>
                        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:20, flexWrap:"wrap", gap:8 }}>
                          <div>
                            <h4 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(18px,2vw,22px)", fontWeight:700, color:"#1a1612", marginBottom:3 }}>{r.class}</h4>
                            <div style={{ fontSize:13, color:"#6b5e53" }}>Session {r.year}</div>
                          </div>
                          <div style={{ background:"linear-gradient(135deg,#c8973a,#e8b96a)", color:"white", padding:"6px 14px", borderRadius:100, fontSize:13, fontWeight:600, whiteSpace:"nowrap" }}>
                            {r.passRate} Pass
                          </div>
                        </div>
                        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                          {[{ label:"Distinction", value:r.distinction },{ label:"Top Score", value:r.topScore }].map((stat) => (
                            <div key={stat.label} style={{ background:"#f8f5f0", padding:"12px 14px", borderRadius:10 }}>
                              <div style={{ fontSize:11, color:"#6b5e53", letterSpacing:1, marginBottom:4 }}>{stat.label}</div>
                              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(16px,2vw,20px)", fontWeight:700, color:"#1e3a5f" }}>{stat.value}</div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </FadeIn>
                  ))}
                </div>
                <FadeIn>
                  <div style={{ textAlign:"center", marginTop:36 }}>
                    <Link to="/results" style={{ textDecoration:"none" }}>
                      <motion.span whileHover={{ scale:1.05 }} whileTap={{ scale:0.97 }}
                        style={{ display:"inline-block", background:"linear-gradient(135deg,#1e3a5f,#2d5f8a)", color:"white", padding:"13px 36px", borderRadius:100, fontSize:16, fontWeight:500, cursor:"pointer", boxShadow:"0 6px 20px rgba(30,58,95,0.3)" }}>
                        View Detailed Results & Toppers →
                      </motion.span>
                    </Link>
                  </div>
                </FadeIn>
              </motion.div>
            )}

            {/* HOMEWORK */}
            {activeTab === "Holiday's Homework" && (
              <motion.div key="hw" initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-20 }}>
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(22px,3vw,28px)", fontWeight:700, color:"#1a1612", marginBottom:24 }}>
                  Holiday's <em style={{ color:"#c8973a" }}>Homework</em>
                </h3>
                <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                  {HOMEWORK.map((hw, i) => (
                    <FadeIn key={hw.class} delay={i * 0.07}>
                      <motion.div whileHover={{ x:5 }}
                        style={{ background:"white", borderRadius:14, padding:"clamp(16px,2.5vw,22px)", boxShadow:"0 4px 20px rgba(0,0,0,0.06)", display:"flex", gap:"clamp(12px,2vw,20px)", alignItems:"flex-start", borderLeft:"3px solid #c8973a", flexWrap:"wrap" }}>
                        <div style={{ flexShrink:0, background:"linear-gradient(135deg,#1e3a5f,#2d5f8a)", padding:"10px 16px", borderRadius:10 }}>
                          <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(13px,1.5vw,15px)", fontWeight:700, color:"white", whiteSpace:"nowrap" }}>{hw.class}</div>
                        </div>
                        <div style={{ flex:1, minWidth:180 }}>
                          <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6, flexWrap:"wrap", gap:6 }}>
                            <div style={{ fontSize:"clamp(13px,1.4vw,15px)", fontWeight:600, color:"#1a1612" }}>{hw.subject}</div>
                            <div style={{ fontSize:12, color:"#c8973a", background:"rgba(200,151,58,0.1)", padding:"3px 10px", borderRadius:100 }}>Due: {hw.due}</div>
                          </div>
                          <p style={{ fontSize:"clamp(12px,1.3vw,14px)", color:"#6b5e53", lineHeight:1.7, fontWeight:300 }}>{hw.desc}</p>
                        </div>
                      </motion.div>
                    </FadeIn>
                  ))}
                </div>
                <FadeIn>
                  <div style={{ textAlign:"center", marginTop:32 }}>
                    <Link to="/holiday-homework" style={{ textDecoration:"none" }}>
                      <motion.span whileHover={{ scale:1.05 }} whileTap={{ scale:0.97 }}
                        style={{ display:"inline-block", background:"linear-gradient(135deg,#1e3a5f,#2d5f8a)", color:"white", padding:"13px 36px", borderRadius:100, fontSize:16, fontWeight:500, cursor:"pointer", boxShadow:"0 6px 20px rgba(30,58,95,0.3)" }}>
                        View All Classes Homework →
                      </motion.span>
                    </Link>
                  </div>
                </FadeIn>
              </motion.div>
            )}
            {activeTab === "School Calendar" && (
              <motion.div key="calendar" initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-20 }}>
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(22px,3vw,28px)", fontWeight:700, color:"#1a1612", marginBottom:24 }}>
                  School <em style={{ color:"#c8973a" }}>Calendar 2025-26</em>
                </h3>
                <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                  {[
                    { month:"April 2025",     events:["School Reopens (1 Apr)", "New Session Begins"] },
                    { month:"May 2025",       events:["First Unit Test", "Summer Break Begins (last week)"] },
                    { month:"June 2025",      events:["Summer Vacation", "Holiday Homework Submission"] },
                    { month:"July 2025",      events:["School Reopens (1 Jul)", "PTM — First Term"] },
                    { month:"August 2025",    events:["Independence Day (15 Aug)", "Half Yearly Exam Prep"] },
                    { month:"September 2025", events:["Half Yearly Exams", "Second Unit Test"] },
                    { month:"October 2025",   events:["Annual Sports Day (12 Oct)", "Diwali Break (20–26 Oct)"] },
                    { month:"November 2025",  events:["Annual Day (30 Nov)", "PTM — Second Term"] },
                    { month:"December 2025",  events:["Christmas Break", "Pre-Board Exams Begin"] },
                    { month:"January 2026",   events:["Republic Day (26 Jan)", "Pre-Board Exams Continue"] },
                    { month:"February 2026",  events:["Final/Board Exams Begin (10 Feb)", "Practical Exams"] },
                    { month:"March 2026",     events:["Board Exams Continue", "Session Ends"] },
                  ].map((item, i) => (
                    <FadeIn key={item.month} delay={i * 0.04}>
                      <motion.div whileHover={{ x:4 }}
                        style={{ background:"white", borderRadius:14, padding:"16px 22px", boxShadow:"0 4px 16px rgba(0,0,0,0.06)", display:"flex", gap:16, alignItems:"center", flexWrap:"wrap" }}>
                        <div style={{ minWidth:130, background:"linear-gradient(135deg,#1e3a5f,#2d5f8a)", padding:"8px 16px", borderRadius:10, textAlign:"center", flexShrink:0 }}>
                          <div style={{ fontFamily:"'Playfair Display',serif", fontSize:14, fontWeight:700, color:"white" }}>{item.month}</div>
                        </div>
                        <div style={{ display:"flex", gap:10, flexWrap:"wrap", flex:1 }}>
                          {item.events.map((ev) => (
                            <span key={ev} style={{ fontSize:13, color:"#4a3f35", background:"#f8f5f0", padding:"5px 14px", borderRadius:100, border:"1px solid #e8dfc8" }}>
                              {ev}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </FadeIn>
                  ))}
                </div>
              </motion.div>
            )}

            {/* DOWNLOADS */}
            {activeTab === "Downloads" && (
              <motion.div key="dl" initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-20 }}>
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(22px,3vw,28px)", fontWeight:700, color:"#1a1612", marginBottom:24 }}>
                  <em style={{ color:"#c8973a" }}>Downloads</em> &amp; Documents
                </h3>
                <div className="downloads-grid">
                  {DOWNLOADS.map((d, i) => (
                    <FadeIn key={d.title} delay={i * 0.07}>
                      <motion.div whileHover={{ y:-6, boxShadow:"0 20px 50px rgba(0,0,0,0.1)" }}
                        style={{ background:"white", borderRadius:14, padding:"clamp(18px,2.5vw,26px)", boxShadow:"0 4px 16px rgba(0,0,0,0.06)", textAlign:"center" }}>

                        <div style={{ fontSize:"clamp(28px,3.5vw,36px)", marginBottom:12 }}>{d.icon}</div>
                        <div style={{ fontSize:"clamp(12px,1.3vw,14px)", fontWeight:600, color:"#1a1612", marginBottom:8 }}>{d.title}</div>
                        <div style={{ fontSize:11, color:"#c8973a", background:"rgba(200,151,58,0.1)", padding:"3px 12px", borderRadius:100, display:"inline-block", marginBottom:16 }}>
                          {d.type}
                        </div>

                        <div style={{ display:"flex", gap:8, justifyContent:"center", flexWrap:"wrap" }}>

                          {/* VIEW BUTTON — useNavigate se redirect */}
                          {d.available && d.isPayment ? (
                            <motion.button
                              whileHover={{ scale:1.05 }}
                              whileTap={{ scale:0.97 }}
                              onClick={() => setShowPayment(true)}
                              style={{ background:"linear-gradient(135deg,#c8973a,#e8b96a)", color:"white", border:"none", padding:"7px 18px", borderRadius:100, fontSize:12, cursor:"pointer", fontWeight:600 }}>
                              👁 View
                            </motion.button>
                          ) : d.available && d.viewRoute ? (
                            <motion.button
                              whileHover={{ scale:1.05 }}
                              whileTap={{ scale:0.97 }}
                              onClick={() => navigate(d.viewRoute)}
                              style={{ background:"linear-gradient(135deg,#c8973a,#e8b96a)", color:"white", border:"none", padding:"7px 18px", borderRadius:100, fontSize:12, cursor:"pointer", fontWeight:600 }}>
                              👁 View
                            </motion.button>
                          ) : (
                            <button disabled
                              style={{ background:"#f0ebe3", color:"#bbb", border:"none", padding:"7px 18px", borderRadius:100, fontSize:12, cursor:"not-allowed", fontWeight:600 }}>
                              👁 View
                            </button>
                          )}

                          {/* DOWNLOAD BUTTON */}
                          {d.available && d.downloadLink ? (
                            <a href={d.downloadLink} download style={{ textDecoration:"none" }}>
                              <motion.button
                                whileHover={{ scale:1.05 }}
                                whileTap={{ scale:0.97 }}
                                style={{ background:"linear-gradient(135deg,#1e3a5f,#2d5f8a)", color:"white", border:"none", padding:"7px 18px", borderRadius:100, fontSize:12, cursor:"pointer", fontWeight:600 }}>
                                ↓ Download
                              </motion.button>
                            </a>
                          ) : (
                            <button disabled
                              style={{ background:"#f0ebe3", color:"#bbb", border:"none", padding:"7px 18px", borderRadius:100, fontSize:12, cursor:"not-allowed", fontWeight:600 }}>
                              ↓ Download
                            </button>
                          )}

                        </div>
                      </motion.div>
                    </FadeIn>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </section>

      {/* ONLINE PAYMENT MODAL */}
      <AnimatePresence>
        {showPayment && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            onClick={() => setShowPayment(false)}
            style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.75)", zIndex:200, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
            <motion.div initial={{ scale:0.88, opacity:0 }} animate={{ scale:1, opacity:1 }} exit={{ scale:0.88, opacity:0 }}
              onClick={e => e.stopPropagation()}
              style={{ background:"white", borderRadius:24, overflow:"hidden", maxWidth:460, width:"100%", boxShadow:"0 40px 100px rgba(0,0,0,0.4)" }}>

              {/* Header */}
              <div style={{ background:"linear-gradient(135deg,#1e3a5f,#2d5f8a)", padding:"24px 28px" }}>
                <div style={{ fontSize:13, color:"rgba(255,255,255,0.6)", letterSpacing:2, marginBottom:6 }}>DEEKSHA PUBLIC SCHOOL</div>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:22, fontWeight:700, color:"white" }}>🏦 Online Payment</div>
                <div style={{ fontSize:13, color:"rgba(255,255,255,0.6)", marginTop:4 }}>Bank Transfer Details</div>
              </div>

              {/* Bank Details */}
              <div style={{ padding:"28px" }}>
                {[
                  { label:"Bank Name",      value:"Canara Bank",      icon:"🏛" },
                  { label:"Account Number", value:"82302200088903",   icon:"🔢" },
                  { label:"IFSC Code",      value:"CNRB0018230",      icon:"📋" },
                  { label:"Mobile Number",  value:"8527850099",       icon:"📱" },
                ].map((item) => (
                  <div key={item.label} style={{ display:"flex", alignItems:"center", gap:16, padding:"14px 0", borderBottom:"1px solid #f0ebe3" }}>
                    <div style={{ width:42, height:42, borderRadius:12, background:"linear-gradient(135deg,#f8f5f0,#ede4d0)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 }}>
                      {item.icon}
                    </div>
                    <div style={{ flex:1 }}>
                      <div style={{ fontSize:11, color:"#999", letterSpacing:1, marginBottom:3 }}>{item.label}</div>
                      <div style={{ fontSize:16, fontWeight:700, color:"#1e3a5f", fontFamily:"'Playfair Display',serif" }}>{item.value}</div>
                    </div>
                    {/* Copy button */}
                    <motion.button whileHover={{ scale:1.1 }} whileTap={{ scale:0.95 }}
                      onClick={() => navigator.clipboard.writeText(item.value)}
                      style={{ background:"rgba(200,151,58,0.1)", border:"1px solid rgba(200,151,58,0.3)", color:"#c8973a", padding:"5px 12px", borderRadius:100, fontSize:11, cursor:"pointer", fontWeight:600 }}>
                      Copy
                    </motion.button>
                  </div>
                ))}

                <div style={{ marginTop:20, background:"#fff8ed", borderRadius:12, padding:"14px 16px", borderLeft:"3px solid #c8973a" }}>
                  <div style={{ fontSize:12, color:"#c8973a", fontWeight:700, marginBottom:4 }}>📌 NOTE</div>
                  <p style={{ fontSize:13, color:"#6b5e53", lineHeight:1.7, margin:0 }}>
                    Please share your payment screenshot on WhatsApp or at the school office for confirmation.
                  </p>
                </div>

                <motion.button whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }}
                  onClick={() => setShowPayment(false)}
                  style={{ width:"100%", marginTop:20, background:"linear-gradient(135deg,#1e3a5f,#2d5f8a)", color:"white", border:"none", padding:"12px", borderRadius:100, fontSize:15, cursor:"pointer", fontWeight:500 }}>
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}