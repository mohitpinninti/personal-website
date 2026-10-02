import useFirestoreDocument from "../hooks/useFirestoreDocument";

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
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default HomeIntroText;
