import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { RESUME, RESUME_FILENAME } from "../data/site.js";

const ResumePreviewContext = createContext(null);

/* Wraps the whole app once. Any button below calls useResumePreview() to open
   this modal instead of linking straight to the PDF — downloading becomes a
   deliberate second step taken from inside the preview, not the first click. */
export function ResumePreviewProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openPreview = useCallback(() => setOpen(true), []);
  const closePreview = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && closePreview();
    document.addEventListener("keydown", onKey);
    // lock the page behind the modal without a layout shift from the scrollbar
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, closePreview]);

  return (
    <ResumePreviewContext.Provider value={openPreview}>
      {children}
      <div
        className={open ? "resume-modal open" : "resume-modal"}
        role="dialog"
        aria-modal="true"
        aria-label="Résumé preview"
        aria-hidden={!open}
      >
        <div className="resume-modal-backdrop" onClick={closePreview} />
        <div className="resume-modal-panel">
          <div className="resume-modal-head">
            <span>Résumé preview</span>
            <div className="resume-modal-actions">
              <a className="btn solid" href={RESUME} download={RESUME_FILENAME}>
                Download Resume
              </a>
              <button
                type="button"
                className="resume-modal-close"
                aria-label="Close preview"
                onClick={closePreview}
              >
                ×
              </button>
            </div>
          </div>
          {/* mounted only while open, so the PDF isn't fetched until it's asked for */}
          {open && (
            <iframe
              className="resume-modal-frame"
              src={RESUME}
              title="Rifat Jahan Mim's résumé"
            />
          )}
        </div>
      </div>
    </ResumePreviewContext.Provider>
  );
}

/* Returns a function that opens the résumé preview modal. */
export function useResumePreview() {
  const openPreview = useContext(ResumePreviewContext);
  if (!openPreview) {
    throw new Error("useResumePreview must be used within a ResumePreviewProvider");
  }
  return openPreview;
}
