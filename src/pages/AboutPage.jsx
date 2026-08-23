import BioCard from "../components/BioCard";
import useFirestoreDocument from "../hooks/useFirestoreDocument";

const AboutPage = () => {
  const { data: about, loading, error } = useFirestoreDocument("content", "about");

  if (loading) {
    return <div className="aboutPage"><p>Loading...</p></div>;
  }

  if (error || !about) {
    console.error("[AboutPage] Failed to load about content:", error);
    return (
      <div className="aboutPage">
        <p>Error loading content. Check browser console for details.</p>
      </div>
    );
  }

  return (
    <div className="aboutPage">
      <h1>{about.heading}</h1>
      <hr />
      <BioCard intro={about.intro} sections={about.sections} />
    </div>
  );
};

export default AboutPage;
