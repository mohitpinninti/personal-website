const HomeIntroCard = () => {
  return (
    <>
      <div className="introcard">
        <p className="introcard-text">Hello, my name is</p>
        {/* <span>Mohit Pinninti</span> */}
        <div className="name">
          <p>Mohit</p>
          <p>Pinninti</p>
        </div>

        <p className="introcard-text introcard-spaced">I'm a...</p>
        <ul>
          <li>Software Engineer Intern @ Qualcomm</li>
          <li>Computer Engineering Student @ Georgia Tech</li>
          <li>Research Assistant @ Contextual Computing Group</li>
        </ul>
      </div>
      {/* <div>
        Insert 3d model stuff here maybe???
    </div> */}
    </>
  );
};

export default HomeIntroCard;
