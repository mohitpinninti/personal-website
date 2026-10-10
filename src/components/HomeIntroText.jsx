import useFirestoreDocument from "../hooks/useFirestoreDocument";
import RichText from "./RichText";

const HomeIntroText = () => {
  const { data: home, loading, error } = useFirestoreDocument("content", "home");

  if (loading) {
    return null;
  }

  if (error || !home) {
    console.error("[HomeIntroText] Failed to load home content:", error);
    return (
      <div className="home-intro-text">
        <p>Error loading content. Check browser console for details.</p>
      </div>
    );
  }

  const paragraphs = home.introParagraphs ?? [];

  if (paragraphs.length === 0) {
    return null;
  }

  return (
    <div className="home-intro-text">
      {paragraphs.map((paragraph, index) => (
        <RichText key={index} as="p" text={paragraph} />
      ))}
    </div>
  );
};

export default HomeIntroText;
