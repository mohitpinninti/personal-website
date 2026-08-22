import { Link } from "react-router-dom";

const HomeActions = () => {
  return (
    <div className="home-actions">
      <Link to={"/about"} className="home-actions-button">
        About Me
      </Link>
      <Link to={"/resume"} className="home-actions-button">
        View My Resume
      </Link>
    </div>
  );
};

export default HomeActions;
