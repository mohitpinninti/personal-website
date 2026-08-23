import useFirestoreDocument from "../hooks/useFirestoreDocument";

const ResumePage = () => {
  const { data: resume, loading, error } = useFirestoreDocument("content", "resume");

  if (loading) {
    return <section className="resume-holder"><p>Loading...</p></section>;
  }

  if (error || !resume) {
    console.error("[ResumePage] Failed to load resume content:", error);
    return (
      <section className="resume-holder">
        <p>Error loading resume. Check browser console for details.</p>
      </section>
    );
  }

  return (
    <section className="resume-holder">
      <object
        className="resume"
        width="50%"
        height="100%"
        data={resume.fileUrl}
        type="application/pdf"
        aria-label={resume.label}
      />
    </section>
  );
};

export default ResumePage;
