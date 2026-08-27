import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useFirestoreDocument from "../hooks/useFirestoreDocument";

const CareerPage = () => {
  const { data: career, loading, error } = useFirestoreDocument("content", "career");
  const { hash } = useLocation();

  useEffect(() => {
    if (loading || !hash) {
      return;
    }
    const target = document.getElementById(hash.slice(1));
    target?.scrollIntoView({ behavior: "smooth" });
  }, [hash, loading]);

  if (loading) {
    return <div className="careerpage"><p>Loading...</p></div>;
  }

  if (error || !career) {
    console.error("[CareerPage] Failed to load career content:", error);
    return (
      <div className="careerpage">
        <p>Error loading content. Check browser console for details.</p>
      </div>
    );
  }

  return (
    <div className="careerpage">
      <h1 className="careerpage-heading-2">{career.heading}</h1>
      <hr />
      <section id="resume" className="resume-holder">
        <h2 className="careerpage-heading-3">{career.resumeHeading}</h2>
        <object
          className="resume"
          width="50%"
          height="100%"
          data={career.resumeFileUrl}
          type="application/pdf"
          aria-label={career.resumeLabel}
        />
      </section>
    </div>
  );
};

export default CareerPage;
