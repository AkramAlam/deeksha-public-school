import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/ui/PageHero";
import FadeIn from "../components/ui/FadeIn";

const STEPS = ["Personal", "Academic", "Parent", "Review"];
const CLASSES = ["Nursery","LKG","UKG","Class I","Class II","Class III","Class IV","Class V","Class VI","Class VII","Class VIII","Class IX","Class X","Class XI","Class XII"];
const PROCESS = [
  { step: "01", title: "Fill Form", desc: "Complete the online admission form with all required details." },
  { step: "02", title: "Documents", desc: "Submit birth certificate, previous marksheets and photos." },
  { step: "03", title: "Assessment", desc: "Aptitude assessment for Classes III and above." },
  { step: "04", title: "Confirm", desc: "Receive confirmation and complete fee payment." },
];

export default function EnrollPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    studentName:"", dob:"", gender:"", applyingFor:"",
    previousSchool:"", previousClass:"", percentage:"",
    parentName:"", relation:"", phone:"", email:"", address:"",
  });
  const [submitted, setSubmitted] = useState(false);
  const update = (k, v) => setFormData((p) => ({ ...p, [k]: v }));

  const inp = {
    width: "100%",
    padding: "12px 14px",
    background: "#f8f5f0",
    border: "1.5px solid #e8ddd0",
    borderRadius: 10,
    fontSize: 17,
    outline: "none",
    color: "#1a1612",
    transition: "border-color 0.3s",
    fontFamily: "'DM Sans', sans-serif",
    boxSizing: "border-box",
  };

  const Label = ({ children }) => (
    <label style={{ fontSize: 17, color: "#6b5e53", letterSpacing: 1, display: "block", marginBottom: 6, fontWeight: 500 }}>
      {children}
    </label>
  );

  if (submitted) return (
    <div>
      <PageHero tag="ADMISSIONS" title="Enroll" highlight="Now" subtitle="" />
      <section style={{ padding: "100px 24px", background: "#f8f5f0", minHeight: "50vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <FadeIn>
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}
              style={{ fontSize: 80, marginBottom: 24 }}>🎉</motion.div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px,4vw,36px)", fontWeight: 700, color: "#1a1612", marginBottom: 14 }}>
              Application <em style={{ color: "#c8973a" }}>Submitted!</em>
            </h2>
            <p style={{ fontSize: 19, color: "#4a3f35", lineHeight: 1.8, fontWeight: 300, marginBottom: 32 }}>
              Thank you! We'll contact you within 2–3 working days.
            </p>
            <motion.button onClick={() => { setSubmitted(false); setCurrentStep(0); }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              style={{ background: "linear-gradient(135deg, #c8973a, #e8b96a)", color: "white", border: "none", padding: "14px 36px", borderRadius: 100, fontSize: 18, fontWeight: 500, cursor: "pointer" }}>
              Apply Again
            </motion.button>
          </div>
        </FadeIn>
      </section>
    </div>
  );

  return (
    <div>
      <style>{`
        .process-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; max-width: 1100px; margin: 0 auto; }
        .step-bar { display: flex; background: white; border-radius: 14px; box-shadow: 0 4px 20px rgba(0,0,0,0.07); overflow: hidden; margin-bottom: 32px; }
        .step-bar-item { flex: 1; padding: 13px 6px; text-align: center; font-size: clamp(10px,1.3vw,13px); font-weight: 500; transition: all 0.3s; white-space: nowrap; border-right: 1px solid #e8ddd0; cursor: default; }
        .step-bar-item:last-child { border-right: none; }

        /* ── Full Name full width ── */
        .field-full { width: 100%; margin-bottom: 14px; }

        /* ── Two-column row — ALWAYS side by side ── */
        .field-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 14px;
        }

        /* Only go single-col on very small phones (< 360) */
        @media (max-width: 360px) {
          .field-row-2 { grid-template-columns: 1fr !important; }
        }

        .review-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 16px; }
        @media (max-width: 480px) { .review-grid { grid-template-columns: 1fr !important; } }

        @media (max-width: 900px) { 
          .process-grid { grid-template-columns: repeat(2,1fr) !important; }
          .process-connector { display: none !important; }
        }
        @media (max-width: 420px) { .process-grid { grid-template-columns: 1fr 1fr !important; gap: 12px !important; } }
      `}</style>

      <PageHero tag="ADMISSIONS 2025-26" title="Enroll" highlight="Now"
        subtitle="Join the Deeksha family. Fill out the application and take the first step towards excellence." />

      {/* PROCESS STEPS */}
      <section style={{ background: "#1e3a5f", padding: "clamp(44px,6vw,60px) clamp(20px,5vw,60px)" }}>
        <div className="process-grid">
          {PROCESS.map((p, i) => (
            <div key={p.step} style={{ textAlign: "center", position: "relative" }}>
              {i < 3 && <div className="process-connector" style={{ position: "absolute", top: 20, left: "55%", right: "-45%", height: 1, background: "rgba(200,151,58,0.3)", zIndex: 0 }} />}
              <div style={{ width: 42, height: 42, borderRadius: "50%", background: "linear-gradient(135deg, #c8973a, #e8b96a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, fontWeight: 700, color: "white", margin: "0 auto 10px", position: "relative", zIndex: 1, boxShadow: "0 6px 20px rgba(200,151,58,0.4)" }}>{p.step}</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(13px,1.5vw,16px)", fontWeight: 700, color: "white", marginBottom: 5 }}>{p.title}</div>
              <p style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, fontWeight: 300 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section style={{ padding: "clamp(50px,7vw,80px) clamp(20px,5vw,60px)", background: "#f8f5f0" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <FadeIn>
            <div className="step-bar">
              {STEPS.map((step, i) => (
                <div key={step} className="step-bar-item"
                  onClick={() => i < currentStep && setCurrentStep(i)}
                  style={{
                    background: i === currentStep ? "linear-gradient(135deg, #1e3a5f, #2d5f8a)" : i < currentStep ? "rgba(200,151,58,0.12)" : "transparent",
                    color: i === currentStep ? "white" : i < currentStep ? "#c8973a" : "#6b5e53",
                    cursor: i < currentStep ? "pointer" : "default",
                  }}>
                  {i < currentStep ? "✓ " : `${i + 1}. `}{step}
                </div>
              ))}
            </div>
          </FadeIn>

          <AnimatePresence mode="wait">
            <motion.div key={currentStep} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
              <div style={{ background: "white", borderRadius: 22, padding: "clamp(24px,4vw,40px)", boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>

                {/* ── STEP 1 ── */}
                {currentStep === 0 && (
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(18px,2.5vw,22px)", fontWeight: 700, marginBottom: 4, color: "#1a1612" }}>Student Information</h3>
                    <p style={{ fontSize: 19, color: "#6b5e53", marginBottom: 24, fontWeight: 300 }}>Basic details about the student applying for admission.</p>

                    {/* Full Name — full width */}
                    <div className="field-full">
                      <Label>FULL NAME *</Label>
                      <motion.input whileFocus={{ borderColor: "#c8973a" }} style={inp}
                        type="text" placeholder="Student's Full Name"
                        value={formData.studentName} onChange={(e) => update("studentName", e.target.value)} />
                    </div>

                    {/* DOB + Gender — always side by side */}
                    <div className="field-row-2">
                      <div>
                        <Label>DATE OF BIRTH *</Label>
                        <motion.input whileFocus={{ borderColor: "#c8973a" }} style={inp}
                          type="date" value={formData.dob} onChange={(e) => update("dob", e.target.value)} />
                      </div>
                      <div>
                        <Label>GENDER *</Label>
                        <motion.select whileFocus={{ borderColor: "#c8973a" }} style={inp}
                          value={formData.gender} onChange={(e) => update("gender", e.target.value)}>
                          <option value="">Select Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </motion.select>
                      </div>
                    </div>

                    {/* Applying For — full width */}
                    <div className="field-full" style={{ marginBottom: 0 }}>
                      <Label>APPLYING FOR CLASS *</Label>
                      <motion.select whileFocus={{ borderColor: "#c8973a" }} style={inp}
                        value={formData.applyingFor} onChange={(e) => update("applyingFor", e.target.value)}>
                        <option value="">Select Class</option>
                        {CLASSES.map((c) => <option key={c}>{c}</option>)}
                      </motion.select>
                    </div>
                  </div>
                )}

                {/* ── STEP 2 ── */}
                {currentStep === 1 && (
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(18px,2.5vw,22px)", fontWeight: 700, marginBottom: 4, color: "#1a1612" }}>Academic Details</h3>
                    <p style={{ fontSize: 19, color: "#6b5e53", marginBottom: 24, fontWeight: 300 }}>Previous school and academic background.</p>

                    <div className="field-full">
                      <Label>PREVIOUS SCHOOL NAME</Label>
                      <motion.input whileFocus={{ borderColor: "#c8973a" }} style={inp}
                        placeholder="Name of Previous School"
                        value={formData.previousSchool} onChange={(e) => update("previousSchool", e.target.value)} />
                    </div>

                    <div className="field-row-2">
                      <div>
                        <Label>LAST CLASS PASSED</Label>
                        <motion.select whileFocus={{ borderColor: "#c8973a" }} style={inp}
                          value={formData.previousClass} onChange={(e) => update("previousClass", e.target.value)}>
                          <option value="">Select Class</option>
                          {CLASSES.map((c) => <option key={c}>{c}</option>)}
                        </motion.select>
                      </div>
                      <div>
                        <Label>PERCENTAGE / GRADE</Label>
                        <motion.input whileFocus={{ borderColor: "#c8973a" }} style={inp}
                          placeholder="e.g. 85% or A+"
                          value={formData.percentage} onChange={(e) => update("percentage", e.target.value)} />
                      </div>
                    </div>
                  </div>
                )}

                {/* ── STEP 3 ── */}
                {currentStep === 2 && (
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(18px,2.5vw,22px)", fontWeight: 700, marginBottom: 4, color: "#1a1612" }}>Parent / Guardian Info</h3>
                    <p style={{ fontSize: 19, color: "#6b5e53", marginBottom: 24, fontWeight: 300 }}>Details of the parent or guardian responsible.</p>

                    <div className="field-row-2">
                      <div>
                        <Label>PARENT / GUARDIAN NAME *</Label>
                        <motion.input whileFocus={{ borderColor: "#c8973a" }} style={inp}
                          placeholder="Full Name"
                          value={formData.parentName} onChange={(e) => update("parentName", e.target.value)} />
                      </div>
                      <div>
                        <Label>RELATION</Label>
                        <motion.select whileFocus={{ borderColor: "#c8973a" }} style={inp}
                          value={formData.relation} onChange={(e) => update("relation", e.target.value)}>
                          <option value="">Select</option>
                          <option>Father</option>
                          <option>Mother</option>
                          <option>Guardian</option>
                        </motion.select>
                      </div>
                    </div>

                    <div className="field-row-2">
                      <div>
                        <Label>PHONE NUMBER *</Label>
                        <motion.input whileFocus={{ borderColor: "#c8973a" }} style={inp}
                          type="tel" placeholder="+91 00000 00000"
                          value={formData.phone} onChange={(e) => update("phone", e.target.value)} />
                      </div>
                      <div>
                        <Label>EMAIL ADDRESS</Label>
                        <motion.input whileFocus={{ borderColor: "#c8973a" }} style={inp}
                          type="email" placeholder="email@example.com"
                          value={formData.email} onChange={(e) => update("email", e.target.value)} />
                      </div>
                    </div>

                    <div className="field-full" style={{ marginBottom: 0 }}>
                      <Label>HOME ADDRESS</Label>
                      <motion.textarea whileFocus={{ borderColor: "#c8973a" }} style={{ ...inp, resize: "vertical" }}
                        rows={3} placeholder="Full residential address"
                        value={formData.address} onChange={(e) => update("address", e.target.value)} />
                    </div>
                  </div>
                )}

                {/* ── STEP 4: Review ── */}
                {currentStep === 3 && (
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(18px,2.5vw,22px)", fontWeight: 700, marginBottom: 4, color: "#1a1612" }}>Review Application</h3>
                    <p style={{ fontSize: 19, color: "#6b5e53", marginBottom: 24, fontWeight: 300 }}>Please review before final submission.</p>

                    {[
                      { section: "Student Information", fields: [{label:"Name",value:formData.studentName},{label:"Date of Birth",value:formData.dob},{label:"Gender",value:formData.gender},{label:"Applying For",value:formData.applyingFor}] },
                      { section: "Academic Details", fields: [{label:"Previous School",value:formData.previousSchool||"N/A"},{label:"Last Class",value:formData.previousClass||"N/A"},{label:"Percentage",value:formData.percentage||"N/A"}] },
                      { section: "Parent Information", fields: [{label:"Name",value:formData.parentName},{label:"Relation",value:formData.relation},{label:"Phone",value:formData.phone},{label:"Email",value:formData.email||"N/A"}] },
                    ].map((s) => (
                      <div key={s.section} style={{ marginBottom: 16, background: "#f8f5f0", borderRadius: 12, padding: "16px 18px" }}>
                        <div style={{ fontSize: 17, color: "#c8973a", letterSpacing: 2, marginBottom: 12 }}>{s.section.toUpperCase()}</div>
                        <div className="review-grid">
                          {s.fields.map((f) => (
                            <div key={f.label}>
                              <div style={{ fontSize: 17, color: "#6b5e53", marginBottom: 2 }}>{f.label}</div>
                              <div style={{ fontSize: 17, color: "#1a1612", fontWeight: 500 }}>{f.value || "—"}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Navigation Buttons */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 28, paddingTop: 20, borderTop: "1px solid #f0ebe4" }}>
                  {currentStep > 0 ? (
                    <motion.button onClick={() => setCurrentStep((s) => s - 1)} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                      style={{ background: "#f8f5f0", border: "1.5px solid #e8ddd0", color: "#1a1612", padding: "11px 24px", borderRadius: 100, fontSize: 17, fontWeight: 500, cursor: "pointer" }}>
                      ← Back
                    </motion.button>
                  ) : <div />}
                  <motion.button
                    onClick={currentStep < 3 ? () => setCurrentStep((s) => s + 1) : () => setSubmitted(true)}
                    whileHover={{ scale: 1.03, boxShadow: "0 8px 25px rgba(200,151,58,0.4)" }} whileTap={{ scale: 0.97 }}
                    style={{ background: "linear-gradient(135deg, #c8973a, #e8b96a)", color: "white", border: "none", padding: "11px 28px", borderRadius: 100, fontSize: 17, fontWeight: 500, cursor: "pointer", boxShadow: "0 4px 15px rgba(200,151,58,0.3)" }}>
                    {currentStep < 3 ? "Continue →" : "Submit Application 🎉"}
                  </motion.button>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}