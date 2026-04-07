import useFirestoreCollection from "../hooks/useFirestoreCollection";
import Skill from "../components/Skill";
import Job from "../components/Job";
import Project from "../components/Project";

const CareerPage = () => {
  const { data: skills, loading: skillsLoading, error: skillsError } = useFirestoreCollection("skills", "order");
  const { data: jobs, loading: jobsLoading, error: jobsError } = useFirestoreCollection("jobs", "order");
  const { data: projects, loading: projectsLoading, error: projectsError } = useFirestoreCollection("projects", "order");

  const languages = skills.filter((s) => s.category === "languages");
  const toolsTech = skills.filter((s) => s.category === "tools");
  const interests = skills.filter((s) => s.category === "interests");

  const isLoading = skillsLoading || jobsLoading || projectsLoading;
  const error = skillsError || jobsError || projectsError;

  if (isLoading) {
    return <div className="careerpage"><p>Loading...</p></div>;
  }

  if (error) {
    return (
      <div className="careerpage">
        <p>Error loading data. Check browser console for details.</p>
      </div>
    );
  }

  return (
    <div className="careerpage">
      <div className="careerpage-section-spacing">
        <h1 className="careerpage-heading-2">Career Summary</h1>
        <hr />
        <p style={{lineHeight: "1.3em"}}>
          Let's get down to business! I'm a 4<sup>th</sup> year Computer
          Engineering student at Georgia Tech. On paper, my concentrations are
          Distributed Systems &amp; Software Design and Cybersecurity &#40;you
          have to compromise somehow right? &#128558;&#41; but my deepest
          interests lie at the intersection of Mixed Reality and Machine
          Learning. My goal is to create augmented reality glasses that can
          intelligently integrate information into our daily lives, without
          taking away focus from the physical world.
        </p>
        <br />
        <p style={{lineHeight: "1.3em"}}>
          Until then though, I plan to gain as much knowledge about ML and XR as
          possible. Most recently, I've worked at Qualcomm as a Software
          Engineer Intern in the Graphics Research department, specifically on
          the AR/VR Hardware Architecture team. Before that, I interned at ADM,
          creating ML models to classify crops given raw satellite data. I've
          also done research in head-worn displays at the Contextual Computing
          Group, studying the effect of physical specs such as transparency,
          weight, and size while building small-scale software applications for
          niche use cases.
        </p>
      </div>
      <div>{/* INSERT 3D GLASSES HERE */}</div>
      <div className="careerpage-section-spacing">
        <h1 className="careerpage-heading-2">Skills</h1>
        <hr />

        <ul>
          <h3 className="careerpage-heading-3">Languages</h3>
          {languages.map((skill) => (
            <Skill key={skill.id} text={skill.name} />
          ))}

          <h3 className="careerpage-heading-3">Tools and Technologies</h3>
          {toolsTech.map((skill) => (
            <Skill key={skill.id} text={skill.name} />
          ))}

          <h3 className="careerpage-heading-3">Interests</h3>
          {interests.map((skill) => (
            <Skill key={skill.id} text={skill.name} />
          ))}
        </ul>
      </div>

      <div className="careerpage-section-spacing">
        <h1 className="careerpage-heading-2">Experience</h1>
        <hr />
        {jobs.map((job) => (
            <Job key={job.id} job={job} />
        ))}
      </div>
      <div>
        <h1 className="careerpage-heading-2">Projects</h1>
        <hr />
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default CareerPage;