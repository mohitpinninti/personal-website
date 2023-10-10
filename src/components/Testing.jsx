import AvatarCanvas from "../pages/AvatarCanvas";

const Testing = () => {
  // return (<AvatarCanvas />);

  const style = {
    width: "800px",
    height: "480px",
    display: "block",
    position: "absolute",
    top: "0px",
    // left: "400px",
    zIndex: "0",
  };

  return (
    <>
      <div className="testingcard">
        <div className="testingcard-textholder"> {/*this isn't being used yet */}
          <p className="testingcard-textholder-text">Hello, my name is</p>
          <div className="name">
            <p>Mohit</p>
            <p>Pinninti</p>
          </div>
          <p className="testingcard-textholder-text testingcard-textholder-spaced">I'm a...</p>
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

      {/* <div className="testingcard-container">
        <div className="testingcard-textholder">
        <p className="testingcard-text">Hello, my name is</p>
        <div className="name">
          <p>Mohit</p>
          <p>Pinninti</p>
        </div>

        <p className="testingcard-text testingcard-spaced">I'm a...</p>
        <ul>
          <li>Software Engineer Intern @ Qualcomm</li>
          <li>Computer Engineering Student @ Georgia Tech</li>
          <li>Research Assistant @ Contextual Computing Group</li>
        </ul>
        </div>
      </div> */}
      
    </>
  );
};

export default Testing;


{/* <div className="testingcard">
          <AvatarCanvas/>
      </div> */}


      {/* <div className="testingcard">
        <p className="testing-text">Hello, my name is</p>
        <div className="name">
          <p>Mohit</p>
          <p>Pinninti</p>
        </div>

        <p className="testing-text testing-spaced">I'm a...</p>
        <ul>
          <li>Software Engineer Intern @ Qualcomm</li>
          <li>Computer Engineering Student @ Georgia Tech</li>
          <li>Research Assistant @ Contextual Computing Group</li>
        </ul>
        <div style={style}>
          <AvatarCanvas />
        </div>
      </div> */}