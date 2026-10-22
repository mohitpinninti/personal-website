import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import AboutBio from "../components/AboutBio";
import useFirestoreDocument from "../hooks/useFirestoreDocument";

const FULL_BIO_PARAM = "bio";
const FULL_BIO_VALUE = "full";

const AboutPage = () => {
  const { data: about, loading, error } = useFirestoreDocument("content", "about");
  const [searchParams, setSearchParams] = useSearchParams();

  const bioExpanded = searchParams.get(FULL_BIO_PARAM) === FULL_BIO_VALUE;

  // Only a link that arrives with ?bio=full scrolls to the bio; toggling it in place should not jump the page.
  const pendingBioScroll = useRef(bioExpanded);

  useEffect(() => {
    if (loading || !pendingBioScroll.current) {
      return;
    }
    pendingBioScroll.current = false;
    document.getElementById("bio")?.scrollIntoView({ behavior: "smooth" });
  }, [loading]);

  const toggleBio = () => {
    const next = new URLSearchParams(searchParams);
    if (bioExpanded) {
      next.delete(FULL_BIO_PARAM);
    } else {
      next.set(FULL_BIO_PARAM, FULL_BIO_VALUE);
    }
    setSearchParams(next, { replace: true });
  };

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
      {about.heading && <h1 className="aboutPage-heading">{about.heading}</h1>}

      {about.bio && <AboutBio bio={about.bio} expanded={bioExpanded} onToggle={toggleBio} />}
    </div>
  );
};

export default AboutPage;