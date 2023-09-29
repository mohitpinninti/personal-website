

const Skill = (props) => {

  // props:
  //   text: the text that gets shown
  //   color: the color of the text --> (Currently unused)

  const mystyle = {
    // display: "inline-block",
    // backgroundColor: "#33355d",
    // color: "#ff7000",
    // padding: "6px 8px",
    // borderRadius: "10px",
    // fontSize: "0.9em",
    // margin: "10px",
    // fontFamily: "Fira Mono",
  };

  return <li style={mystyle} className="skill">{props.text}</li>
};

export default Skill;