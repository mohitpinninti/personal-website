import useFirestoreDocument from "../hooks/useFirestoreDocument";
import AvatarCanvas from "../pages/AvatarCanvas";

const HomeIntroCard = () => {
  const { data: intro, loading, error } = useFirestoreDocument("intro", "main");

  if (loading) {
    return (
      <div className="introcard">
        <p>Loading...</p>
      </div>
    );
  }

  if (error || !intro) {
    console.error("[HomeIntroCard] Failed to load intro data:", error);
    return (
      <div className="introcard">
        <p>Error loading intro. Check browser console for details.</p>
      </div>
    );
  }

  return (
    <>
      <div className="introcard">
        <div className="introcard-textholder">
          <p className="introcard-textholder-text">{intro.greeting}</p>
          <div className="name">
            <p>{intro.firstName}</p>
            <p>{intro.lastName}</p>
          </div>
          <p className="introcard-textholder-text introcard-textholder-spaced">
            {intro.tagline}
          </p>
          <ul>
            {intro.roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>

        <div className="introcard-avatarholder">
          <AvatarCanvas />
        </div>
      </div>
    </>
  );
};

export default HomeIntroCard;
