import Skill from "./Skill";

const Project = (props) => {

  return (
    <div className="project-holder">
      <div className="project-img-holder">
        <img className="project-img" src={props.project.imageURL}></img>
      </div>
      <div className="project-text-section">
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
