import AvatarCanvas from "../pages/AvatarCanvas";

const HomeIntroCard = () => {
  return (
    <>
      <div className="introcard">
        <div className="introcard-textholder">
          <p className="introcard-textholder-text">Hello, my name is</p>
          <div className="name">
            <p>Mohit</p>
            <p>Pinninti</p>
          </div>
          <p className="introcard-textholder-text introcard-textholder-spaced">
            I'm a...
          </p>
          <ul>
            <li>Software Engineer Intern @ Qualcomm</li>
            <li>Computer Engineering Student @ Georgia Tech</li>
            <li>Research Assistant @ Contextual Computing Group</li>
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
