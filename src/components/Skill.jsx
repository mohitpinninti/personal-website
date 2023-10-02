

const Skill = (props) => {

  // props:
  //   text: the text that gets shown
  //   color: the color of the text --> (Currently unused)

  return <li className="skill" key={props.text}>{props.text}</li>
};

export default Skill;