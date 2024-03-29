import AvatarCanvas from "../pages/AvatarCanvas";

const Testing = () => {

  return (
    <>
      <div className="testingcard">
        

        <div className="testingcard-textholder">
          <p className="testingcard-textholder-text">Hello, my name is</p>
          <div className="name">
            <p>Mohit</p>
            <p>Pinninti</p>
          </div>
          <p className="testingcard-textholder-text testingcard-textholder-spaced">
            I'm a...
          </p>
          <ul>
            <li>Software Engineer Intern @ Qualcomm</li>
            <li>Computer Engineering Student @ Georgia Tech</li>
            <li>Research Assistant @ Contextual Computing Group</li>
          </ul>
        </div>

        <div className="testingcard-avatarholder">
          <AvatarCanvas />
        </div>
      </div>

      {/* <div className="testingcard">
      <div className="testingcard-avatarholder">
      <AvatarCanvas />
      </div>

      </div> */}
      
    </>
  );
};

export default Testing;