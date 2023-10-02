import Skill from "./Skill";

const Project = (props) => {

    const style = {
        // fontFamily: "Comic Neue",
        fontFamily: "Fira Mono",
        fontSize: "1em",
        color: "#ADAAB5"

    };

  return (
    <div className="project-holder">
      {/* Image div */}
      <div className="project-img-holder">
      <img className="project-img" src={props.project.imageURL}></img>
      {/* <h1>Lorem ipsum dolor sit amet consectetur.</h1> */}
      </div>
      {/* text div */}
      <div className="project-text-section">
        {/* <h1 style={style}>{props.project.title}</h1> */}
        <h1 className="careercard-heading-3">{props.project.title}</h1>
        <p>{props.project.description}</p>
        {props.project.tools.map((tool) => (
            <Skill key={tool} text={tool} />
          ))}
      </div>
    </div>
  );
};

export default Project;
