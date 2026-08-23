import { Link } from "react-router-dom";
import useFirestoreDocument from "../hooks/useFirestoreDocument";

const HomeActions = () => {
  const { data: home, loading, error } = useFirestoreDocument("content", "home");

  if (loading) {
    return <div className="home-actions"><p>Loading...</p></div>;
  }

  if (error || !home) {
    console.error("[HomeActions] Failed to load home content:", error);
    return (
      <div className="home-actions">
        <p>Error loading content. Check browser console for details.</p>
      </div>
    );
  }

  return (
    <div className="home-actions">
      {(home.actions ?? []).map((action) => (
        <Link key={action.path} to={action.path} className="home-actions-button">
          {action.label}
        </Link>
      ))}
    </div>
  );
};

export default HomeActions;
